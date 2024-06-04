import React from "react";
import image from "/Banner/calltoaction.jpg";
import { Parallax, Background } from "react-parallax";

const CallToAction = () => {
  return (
    <div className="h-[100vh]">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
        className="h-[100vh]"
      >
        <h2>Adopot A Pet</h2>
        <h3>Find a new furry Friend</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          facilis iure maxime! Praesentium quibusdam provident dolore facere, ex
          atque corrupti beatae labore deleniti distinctio, repudiandae maxime
          nihil amet itaque perferendis?
        </p>
        <div style={{ height: "200px" }} />
      </Parallax>
    </div>
  );
};

export default CallToAction;
