import Feedback from "@/Feedback/Feedback";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import ContactUs from "./ContactUs";
import PetsCategory from "./PetsCategory";
import Sponsor from "./Sponsor";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Welcome></Welcome>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
      <Feedback></Feedback>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
