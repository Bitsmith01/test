"use client"
import React from "react";

type ToggleContainerProps = {
  isDemoSelected: boolean;
  isReelSelected: boolean;
  handleToggle: (selected: "demo" | "reel") => void;
};

const ToggleContainer: React.FC<ToggleContainerProps> = ({
  isDemoSelected,
  isReelSelected,
  handleToggle,
}) => {
  return (
    <div className="flex justify-center items-center bg-[#284167] w-[50%] rounded-full h-14 p-5 my-4">
      <button
        className={`w-1/2 flex justify-center items-center font-semibold rounded-full text-sm text-white h-8 ${
          isDemoSelected ? "bg-white text-[#24272b]" : ""
        }`}
        onClick={() => handleToggle("demo")}
      >
        Demo
      </button>
      <button
        className={`w-1/2 flex justify-center items-center font-semibold rounded-full text-sm text-white h-8 ${
          isReelSelected ? "bg-white text-[#24272b]" : ""
        }`}
        onClick={() => handleToggle("reel")}
      >
        Reel
      </button>
    </div>
  );
};

export default ToggleContainer;
