import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import PetsCategory from "./PetsCategory";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Welcome></Welcome>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
