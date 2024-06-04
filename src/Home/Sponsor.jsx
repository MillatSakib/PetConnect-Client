import Marquee from "react-fast-marquee";
import sponsor1 from "/sponsors/Sponsor_1.png";
import sponsor2 from "/sponsors/Sponsor_2.png";
import sponsor3 from "/sponsors/Sponsor_3.png";
import sponsor4 from "/sponsors/Sponsor_4.png";
import sponsor5 from "/sponsors/Sponsor_5.png";
import sponsor6 from "/sponsors/Sponsor_6.png";
const Sponsor = () => {
  return (
    <div className="flex justify-center items-center mb-8 md:mb-10 lg:mb-12">
      <div className="px-4 text-xl font-bold min-w-[150px] md:min-w-[250px] text-orange-500 dark:text-orange-400">
        Our Generous Sponsors and Donors
      </div>
      <div>
        <Marquee className="flex gap-6">
          <div>
            <img src={sponsor1}></img>
          </div>
          <div>
            <img src={sponsor2}></img>
          </div>
          <div>
            <img src={sponsor3}></img>
          </div>
          <div>
            <img src={sponsor4}></img>
          </div>
          <div>
            <img src={sponsor5}></img>
          </div>
          <div>
            <img src={sponsor6}></img>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsor;
