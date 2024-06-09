import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook

const TempCode = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      handleAlert();
    }
  }, [inView]);
  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      This is Pet Listing.
      <div className="h-[300vh] bg-black"></div>
      <div ref={ref}>
        {showAlert && <div className="alert">This div is now visible!</div>}
        <div>This is the content of the div.</div>
      </div>
    </div>
  );
};

export default TempCode;
