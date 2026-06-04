import React from "react";
import Button from "../../components/Button";
import logoUrl from "../../assets/images/main-bg.jpg";
import Banner from "../Banner";

const Mission = () => {
  return (
    <>
      <Banner text="Our Mission" logoUrl={logoUrl} position="100% 50%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <h2 className="text-[3rem] font-bold text-black text-center"></h2>
          <p className="text-xl mt-4 text-justify font-light tracking-wide leading-snug">
            To expand
            <span className="font-semibold text-red-600">
              {" "}
              God's kingdom{" "}
            </span>{" "}
            by catalyzing the multiplication of Chirst-centered churches that
            will transform thier communities to become good, holy and
            acceptable.
            <br />
            <br />
            <span>
              A Clear-cut mobilization and sending of scriptural trained
              disciples.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
