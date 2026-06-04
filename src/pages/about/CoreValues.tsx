import React from "react";
import Banner from "../Banner";
import logoUrl from "../../assets/images/core-values.jpg";

const CoreValues = () => {
  return (
    <>
      <Banner text="Core Values" logoUrl={logoUrl} position="70% 20%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-xl mt-4 text-center font-light tracking-wider leading-snug">
            <span className="font-bold text-4xl text-red-700 tracking-widest">
              {" "}
              IMPACT{" "}
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-30">
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">I</span>ntegrity
          </div>
          <div className="leading-6 mt-8">
            Morally and biblically sounded in all practice and willing to be
            disciplined
          </div>
        </div>
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">M</span>odesty
          </div>
          <div className="leading-6 mt-8">
            Humble not arrogant express in spirit of submission to God and those
            who are in authiority over one soul and reflect in anomity.
          </div>
        </div>
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">P</span>rayer
          </div>
          <div className="leading-6 mt-8">
            A House of Prayer for the community that express total dependency to
            God Ministry of Prayer.
          </div>
        </div>
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">A</span>biding
          </div>
          <div className="leading-6 mt-8">
            Unworthly servants that commitment is firm and strong, and in faith
            offered sacrificial giving.
          </div>
        </div>
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">C</span>lever
          </div>
          <div className="leading-6 mt-8">
            Excellent of what is good and innocent of evil and it will manifest
            in complete and holistic ministry wise leaders and yet gentle and it
            will display through teachability.
          </div>
        </div>
        <div className="flex flex-col p-6 w-[260px] shadow-2xl rounded-lg">
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-red-700 text-3xl">T</span>raining
          </div>
          <div className="leading-6 mt-8">
            Utilize the word of God as the sole and ultimate tools for rebuke,
            correction, teaching and training in righteousness. Ministry of the
            word.
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center px-30 mb-30">
        <div className="grid grid-cols-5 justify-center gap-6">
          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>

          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>

          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>

          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>

          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>

          <div className="flex flex-col border p-6">
            <div className="text-2xl font-semibold tracking-wide">
              <span className="text-red-700 text-3xl">I</span>ntegrity
            </div>
            <div className="leading-6 mt-8">
              Morally and biblically sounded in all practice and willing to be
              disciplined
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CoreValues;
