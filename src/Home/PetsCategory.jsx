import image1 from "/Gellery/gallery2.jpg";
import image2 from "/Gellery/gallery5.jpg";
import image3 from "/Gellery/gallery6.jpg";
import image4 from "/Gellery/gallery8.jpg";
import image5 from "/Gellery/gallery9.jpg";
import image6 from "/Gellery/gallery12.jpg";

const PetsCategory = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="my-10 md:my-16 lg:my-20">
      {" "}
      <h2 className="text-center my-6 lg:my-10 text-2xl md:text-3xl lg:text-4xl font-bold">
        OUR PETS CATEGORY
      </h2>
      <p className="mb-10 px-8 md:mx-20 lg:mx-auto max-w-[1100px] text-center mx-auto">
        Discover a wide variety of lovable pets awaiting their forever homes.
        Our pet categories include dogs, cats, birds, and small animals, each
        with unique personalities and needs. Whether you are looking for a
        playful puppy, a cuddly kitten, or a chirpy bird, we have the perfect
        companion for you. Browse our categories and find your new best friend
        today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-16 lg:mx-32 gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsCategory;
