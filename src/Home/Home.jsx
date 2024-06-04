import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import PetsCategory from "./PetsCategory";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
