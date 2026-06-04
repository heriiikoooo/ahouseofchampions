import React from "react";
import Banner from "../Banner";
import logoUrl from "../../assets/images/mission.jpg";

const Vision = () => {
  return (
    <>
      <Banner text="Our Vision" logoUrl={logoUrl} />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-xl mt-4 text-justify font-light tracking-wider leading-snug">
            <span className="font-bold text-3xl text-red-700 tracking-widest">
              {" "}
              TO GO AND MAKE DISCIPLES TO ALL NATION{" "}
            </span>{" "}
            <br />
            <br />
            A champion-discipled Batangueño that will extend to neighboring
            provinces and soon across the land of The Philippines where Jesus
            Christ is recognized as Lord of all.
            <br />
            <br />
            <span>A maker of spirit-filled champion for Christ.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Vision;
