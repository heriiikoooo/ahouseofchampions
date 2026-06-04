import React from "react";
import Button from "../../components/Button";
import Banner from "../Banner";
import logoUrl from "../../assets/images/water-baptism.jpg";
import caloocan from "../../assets/images/baptism-caloocan.jpg";
import calaca from "../../assets/images/baptism-calaca.jpg";
import taludtod from "../../assets/images/baptism-taludtod.jpg";
import nasugbu from "../../assets/images/baptism-nasugbu.jpg";
import tuy from "../../assets/images/baptism-tuy.jpg";
import sanNicolas from "../../assets/images/baptism-san-nicolas.jpg";

const WaterBaptism = () => {
  const baptismPictures = [
    {
      name: "Caloocan",
      url: caloocan,
    },
    {
      name: "Calaca",
      url: calaca,
    },
    {
      name: "Taludtod",
      url: taludtod,
    },
    {
      name: "Nasugbu",
      url: nasugbu,
    },
    {
      name: "Tuy",
      url: tuy,
    },
    {
      name: "San Nicolas",
      url: sanNicolas,
    },
  ];
  return (
    <>
      <Banner text="Water Baptism" logoUrl={logoUrl} position="70% 40%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-center font-medium text-xl">Get Baptized</p>
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            If you’ve made the decision to follow
            <span className="font-bold text-red-700 tracking-wide"> Jesus</span>
            , water baptism is your next step.
            <br />
          </p>

          <p className="text-xl font-light mt-10 text-justify tracking-wider leading-snug">
            Following the example of Jesus, we practice full immersion water
            baptism, which symbolizes His death and resurrection. Being baptized
            publicly identifies us with Jesus, signifying that we have died to
            our own way of living and have been raised to life in Him.
            <br />
            <br />
            If you are interested in learning more, select your campus below and
            a member of our team will reach out to you.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-30">
        {/* <div className="flex flex-col w-[350px] shadow-2xl">
          <div
            className="h-full w-full px-30"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${caloocan})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 10%",
              height: "300px",
            }}
          ></div>
          <div className="p-5 pb-10 flex flex-col">
            <div className="font-bold text-2xl">Caloocan</div>
            <div className="w-2/3 mt-4">
              <Button text="Learn More" color="bg-black" />
            </div>
          </div>
        </div> */}

        {baptismPictures.map((item, index) => (
          <div key={index} className="flex flex-col w-[350px] shadow-2xl">
            <div
              className="h-full w-full px-30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 10%",
                height: "300px",
              }}
            ></div>
            <div className="p-5 pb-10 flex flex-col">
              <div className="font-bold text-2xl">{item.name}</div>
              <div className="w-2/3 mt-4">
                <Button text="Learn More" color="bg-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WaterBaptism;
