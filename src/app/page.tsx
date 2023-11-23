"use client";
// Home.jsx
import React, { useState } from "react";
import SelectComponent from "../../components/SelectComponent";

export default function Home() {
  const [isDemoSelected, setIsDemoSelected] = useState(true);
  const [isReelSelected, setIsReelSelected] = useState(false);

  const handleToggle = (selected: "demo" | "reel") => {
    setIsDemoSelected(selected === "demo");
    setIsReelSelected(selected === "reel");
  };

  const prix = [
    "100 FCFA",
    "200 FCFA",
    "500 FCFA",
    "1000 FCFA",
    "2000 FCFA",
    "5000 FCFA",
    "10000 FCFA",
    "20000 FCFA",
  ];

  const nbrdechiffre = ["2 → Gains: Mise * 10%", "3 → Gains: Mise * 15%"];
  const vitessdesanneaux = [
    "1 chiffre/seconde → -98% * Gains",
    "2 chiffre/seconde → -85% * Gains",
  ];

  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#284167] w-[50%] rounded-full h-14 p-5 my-4">
          <button
            className={`w-1/2 flex justify-center items-center rounded-full text-sm text-white h-8 ${
              isDemoSelected ? "bg-white text-[#000000]" : ""
            }`}
            onClick={() => handleToggle("demo")}
          >
            Demo
          </button>
          <button
            className={`w-1/2 flex justify-center items-center rounded-full text-sm text-white h-8 ${
              isReelSelected ? "bg-white text-[#000000]" : ""
            }`}
            onClick={() => handleToggle("reel")}
          >
            Reel
          </button>
        </div>
      </div>
      <div>
        <span>Mise:</span>
        <SelectComponent options={prix} />
      </div>
      <div>
        <span>Nombre de chiffres:</span>
        <SelectComponent options={nbrdechiffre} />
      </div>
      <div>
        <span>Vitesse des anneaux:</span>
        <SelectComponent options={vitessdesanneaux} />
      </div>
    </div>
  );
}
