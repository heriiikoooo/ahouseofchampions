import React from "react";
import logoUrl from "../../assets/images/outreach.jpg";
import Banner from "../Banner";

const Outreach = () => {
  return (
    <>
      <Banner text="Outreach & Missions" logoUrl={logoUrl} position="50% 70%" />

      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            Serve Locally.
            <span className="font-bold text-red-700 tracking-wide">
              {" "}
              Love Radically
            </span>
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Outreach;
