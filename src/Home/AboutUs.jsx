import image from "/services2.jpg";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-8 md:mb-10 lg:mb-14 font-bold text-center dark:text-orange-400 text-orange-500">
        About Us
      </h2>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-4 w-[95%] md:w-[80%] lg:w-[65%] mx-auto pb-6 md:pb-8 lg:pb-12">
        <div className="py-10 px-6 rounded-lg max-w-[95%] mx-auto ">
          <p className="text-lg md:text-xl mb-4">
            PetConnect is dedicated to creating a world where every pet has a
            loving home. Our mission is to connect pets in need with
            compassionate adopters through a seamless and joyful adoption
            experience. Join us in making a difference and giving every pet the
            chance to find their forever home.
          </p>
          <ul className="text-left list-disc list-inside mx-auto max-w-2xl">
            <li className="text-lg md:text-xl mb-2">
              <span className="font-semibold">Our Mission:</span> To facilitate
              pet adoption and create lasting bonds between pets and their new
              families.
            </li>
            <li className="text-lg md:text-xl mb-2">
              <span className="font-semibold">Our Vision:</span> A world where
              every pet has a loving and caring home.
            </li>
            <li className="text-lg md:text-xl mb-2">
              <span className="font-semibold">What We Do:</span> We provide
              resources, support, and a community for pet adopters and animal
              welfare advocates.
            </li>
            <li className="text-lg md:text-xl mb-2">
              <span className="font-semibold">Our Community:</span> Join a
              network of compassionate individuals dedicated to animal welfare.
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src={image}
            className="min-w-[400px] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg h-auto object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
