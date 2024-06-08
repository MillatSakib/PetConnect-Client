import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase.config.js";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routeState, setRouteState] = useState("/");
  const [componentRender, setComponentRender] = useState(false);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, imgUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    })
      .then(() => {
        setUpdateProfileLoading(false);
        let temp = componentRender;
        setComponentRender(!temp);
        toast.success("User Profile updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUpdateProfileLoading(false);
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const credential = {
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
        };
        axios.post("https://petconnect-kappa.vercel.app/userSign", credential, {
          withCredentials: true,
        });
        const user = userCredential.user;
        // console.log(
        //   userCredential.user.email,
        //   userCredential.user.photoURL,
        //   userCredential.user.uid,
        //   userCredential.user.displayName
        // );
        let temp = componentRender;
        setComponentRender(!temp);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = {
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
          displayName: result.user.displayName,
        };
        axios.post("https://petconnect-kappa.vercel.app/userSign", credential, {
          withCredentials: true,
        });
        let temp = componentRender;
        setComponentRender(!temp);
        const loginUser = result.user;
        setUser(loginUser);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credentials = {
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
          displayName: result.user.displayName,
        };
        axios.post(
          "https://petconnect-kappa.vercel.app/userSign",
          credentials,
          {
            withCredentials: true,
          }
        );
        let temp = componentRender;
        setComponentRender(!temp);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const githubuser = result.user;
        setUser(githubuser);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const logOut = () => {
    setLoading(false);
    let temp = componentRender;
    setComponentRender(!temp);
    toast.success("Successfully logged out from this device!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
    });
    axios.post(
      "https://petconnect-kappa.vercel.app/userSign",
      {},
      {
        withCredentials: true,
      }
    );
    // document.cookie =
    //   "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    logInUser,
    loading,
    logOut,
    user,
    setUser,
    GoogleSignIn,
    githubSignIn,
    routeState,
    setRouteState,
    updateUserProfile,
    setComponentRender,
    componentRender,
    updateProfileLoading,
    setUpdateProfileLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [componentRender]);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
