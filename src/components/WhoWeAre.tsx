import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-white flex items-center justify-center py-12 my-4">
        <div className="w-3/7">
          <h2 className="text-[3rem] font-bold text-black text-center">
            Who We Are
          </h2>
          <p className="text-xl mt-4 text-center font-light tracking-wide leading-snug">
            <span className="font-semibold">A House of Champions</span> exists
            to lead people far from God into a full life in Christ. We’re a
            community built on faith, passionate about seeing lives changed by
            Jesus. No matter your story,{" "}
            <span className="font-semibold">you belong here</span>. There’s a
            place for you to grow, find purpose, and take your next step in
            faith.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to={"/our-beliefs"}>
              <Button text="Our Beliefs" color="bg-black" />
            </Link>
            <Link to={"#"}>
              <Button text="Our Leadership" color="bg-black" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
