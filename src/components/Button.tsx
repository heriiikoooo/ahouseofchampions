import React from "react";
import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  text: string;
  color?: string;
};

const Button = ({ text, color = "bg-white" }: ButtonProps) => {
  return (
    <button
      className={`${color === "bg-white" ? "bg-white text-black" : "bg-black text-white"} flex items-center px-6 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer`}
    >
      {text} <FaArrowRight className="ml-2" />
    </button>
  );
};

export default Button;
