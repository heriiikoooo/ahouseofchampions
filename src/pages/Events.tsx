import React from "react";
import logoUrl from "../assets/images/events.jpg";
import Banner from "./Banner";

import baptism from "../assets/images/baptism-san-nicolas.jpg";
import familyDay from "../assets/images/family-day.jpg";
import YouthCamp from "../assets/images/youth-camp.jpg";
import Button from "../components/Button";
import { FaCalendar } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      name: "Youth Camp",
      url: YouthCamp,
      date: "July 04, 2026",
    },
    {
      name: "Water Baptism",
      url: baptism,
      date: "May 01, 2027",
    },
    {
      name: "Family Day",
      url: familyDay,
      date: "May 01, 2027",
    },
  ];
  return (
    <>
      <Banner text="Events" logoUrl={logoUrl} position="50% 40%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            Upcoming Events
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-30">
        {events.map((item, index) => (
          <div key={index} className="flex flex-col w-[350px] shadow-2xl">
            <div
              className="h-full w-full px-30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 10%",
                height: "250px",
              }}
            ></div>
            <div className="p-5 pb-7 flex flex-col">
              <div className="font-semibold text-2xl tracking-wide">
                {item.name}
              </div>
              <div className="flex items-center mt-2 text-gray-400 tracking-wide">
                <FaCalendar className="mr-2 -mt-1 text-gray-400" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
