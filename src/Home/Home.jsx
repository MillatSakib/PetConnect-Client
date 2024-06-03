import Banner from "./Banner";
import PetsCategory from "./PetsCategory";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Banner></Banner>
      <PetsCategory></PetsCategory>
    </div>
  );
};

export default Home;
