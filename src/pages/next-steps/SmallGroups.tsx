import React from "react";
import Banner from "../Banner";
import logoUrl from "../../assets/images/small-groups.jpg";

const SmallGroups = () => {
  return (
    <>
      <Banner
        text="You were made <br /> for relationship."
        logoUrl={logoUrl}
        position="70% 45%"
      />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            Find
            <span className="font-bold text-red-700 tracking-wide">
              {" "}
              Freedom
            </span>
            <br />
            Through Community
            <br />
          </p>
          <p className="text-xl font-light mt-10 text-justify tracking-wider leading-snug">
            Small Groups are gatherings of people that meet weekly to support
            each other and grow through relationship.
            <br />
            <br />
            Small Groups exist to help you develop community built on meaningful
            connection, encouragement, and spiritual growth. No matter your age,
            stage of life, or where you are in your journey with God, we want
            you to find freedom and take next steps. Being supported by others
            makes all the difference.
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallGroups;
