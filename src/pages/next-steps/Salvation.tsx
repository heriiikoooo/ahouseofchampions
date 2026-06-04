import React from "react";
import logoUrl from "../../assets/images/salvation.jpg";
import Banner from "../Banner";

const salvation = () => {
  return (
    <>
      <Banner
        text="Fully Alive in Christ"
        description="No matter your past, your questions, or where you find yourself today, God’s love is available to you right now."
        logoUrl={logoUrl}
        position="50% 10%"
      />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            A New Beginning With
            <span className="font-bold text-red-700 tracking-wide"> Jesus</span>
            <br />
          </p>
          <p className="text-xl font-light mt-10 text-justify tracking-wider leading-snug">
            The Bible tells us that sin separates us from God. Yet God loved us
            so much that He sent Jesus to restore what was broken. Jesus lived a
            perfect life, died on the cross for our sins, and rose again so we
            could experience forgiveness, freedom, and new life. Salvation is
            not about being perfect or having everything figured out. It is
            about trusting Jesus and choosing to follow Him..
          </p>
        </div>
      </div>
    </>
  );
};

export default salvation;
