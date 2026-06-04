import React from "react";
import logoUrl from "../../assets/images/our-belief.jpg";
import Banner from "../Banner";

const Belief = () => {
  return (
    <>
      <Banner text="Our Beliefs" logoUrl={logoUrl} position="70% 45%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            Our Statement of
            <span className="font-bold text-red-700 tracking-wide">
              {" "}
              Faith{" "}
            </span>
            <br />
          </p>
          <p className="text-xl font-light mt-10 text-justify tracking-wider leading-snug">
            Our beliefs are rooted in Scripture and describe how we view God,
            Jesus, humanity, the Bible, and God’s redemptive work in the world.
            <br /> <br />
            Whether you have a deep relationship with God or are curious, come
            experience a service and feel free to ask questions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Belief;
