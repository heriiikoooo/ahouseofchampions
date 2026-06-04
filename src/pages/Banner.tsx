import React from "react";

type BannerProps = {
  text: string;
  description?: string;
  logoUrl: string;
  position?: string; // 👈 make optional
};

const Banner = ({ text, description = "", logoUrl, position }: BannerProps) => {
  return (
    <div
      className="h-full w-full px-30"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${logoUrl})`,
        backgroundSize: "cover",
        backgroundPosition: position || "70% 40%",
        height: "60vh",
      }}
    >
      <div className="flex flex-col items-center justify-end h-full w-full pb-20 text-white leading-none ">
        <h2
          className="font-bold tracking-normal"
          style={{ fontSize: "clamp(3.5rem,6.5vw,6.3rem)" }}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </h2>
        {description && (
          <p className="text-lg mt-6 text-center font-light tracking-wide">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
