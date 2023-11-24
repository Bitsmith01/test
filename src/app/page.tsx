"use client";
import React, { useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import ToggleContainer from "../../components/ToggleContainer";

export default function Home() {
  const [isDemoSelected, setIsDemoSelected] = useState(true);
  const [isReelSelected, setIsReelSelected] = useState(false);
  const [selectedMise, setSelectedMise] = useState("100 FCFA");
  const [selectedChiffres, setSelectedChiffres] = useState(
    "2  → Gains: Mise * 10%"
  );
  const [selectedVitesse, setSelectedVitesse] = useState(
    "1 chiffre/seconde → - 98% * Gains"
  );
  const [Nombre, setNombre] = useState("NOMBRE");
  const [ringRotation, setRingRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const rotateRing = () => {
    setRingRotation((prevRotation) => prevRotation + 36);
    setIsAnimating(true);

    setIsCountdownActive(true);
    startCountdown();
  };

  const startCountdown = () => {
    setTimeout(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
  
      if (countdown === 1) {
        setIsCountdownActive(false);
        setIsButtonEnabled(true);
      } else {
        startCountdown();
      }
    }, 1000);
  };
  
  

  const handleToggle = (selected: "demo" | "reel") => {
    setIsDemoSelected(selected === "demo");
    setIsReelSelected(selected === "reel");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
    setIsButtonEnabled(false);
  };

  const calculateGain = () => {
    const mise = parseInt(selectedMise);
    let chiffres = parseInt(selectedChiffres.split(" ")[0]);
    let vitesses = parseInt(selectedVitesse.split(" ")[0]);

    switch (chiffres) {
      case 2:
        chiffres = 10 / 100;
        break;
      case 3:
        chiffres = 15 / 100;
        break;
      case 4:
        chiffres = 20 / 100;
        break;
      case 5:
        chiffres = 25 / 100;
        break;
      case 6:
        chiffres = 30 / 100;
        break;
      case 7:
        chiffres = 40 / 100;
        break;
      case 8:
        chiffres = 60 / 100;
        break;
      case 9:
        chiffres = 90 / 100;
        break;
      default:
        chiffres = 0;
    }
    switch (vitesses) {
      case 1:
        vitesses = -(98 / 100);
        break;
      case 2:
        vitesses = -(85 / 100);
        break;
      case 3:
        vitesses = -(60 / 100);
        break;
      case 4:
        vitesses = 1;
        break;
      case 5:
        vitesses = 30 / 100;
        break;
      case 6:
        vitesses = 90 / 100;
        break;
      case 7:
        vitesses = 200 / 100;
        break;
      case 8:
        vitesses = 300 / 100;
        break;
      default:
        vitesses = 0;
    }

    const gain = mise * chiffres;
    const total = gain + gain * vitesses;

    return total;
  };

  const generateNumber = () => {
    const nbredechhiffre = parseInt(selectedChiffres.split(" ")[0]);

    if (!isNaN(nbredechhiffre)) {
      let min = Math.pow(10, nbredechhiffre - 1);
      let max = Math.pow(10, nbredechhiffre) - 1;

      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomNumberString = randomNumber.toString();
      setNombre(randomNumberString);
      setIsButtonEnabled(false);
    } else {
      console.error("Invalid number of digits");
    }
  };

  const ringSection = Array.from(
    { length: parseInt(selectedChiffres.split(" ")[0]) },
    (_, sectionIndex) => (
      <div
        key={sectionIndex}
        className="flex flex-col h-28 overflow-hidden my-10"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`ring-digit text-2xl font-bold transform ${
              isAnimating ? "animate-scrollDigits" : ""
            }`}
          >
            {index}
          </div>
        ))}
      </div>
    )
  );

  const ringDigits = Array.from({ length: 10 }, (_, digit) => digit);

  const [countdown, setCountdown] = useState(3);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  return (
    <div className="p-2">
      <div className="flex justify-center items-center mb-6">
        <ToggleContainer
          isDemoSelected={isDemoSelected}
          isReelSelected={isReelSelected}
          handleToggle={handleToggle}
        />
      </div>
      <div className="flex flex-col space-y-5 my-5">
        <div className="flex flex-col space-y-2">
          <span className="text-sm">Mise:</span>
          <SelectComponent
            options={[
              "100 FCFA",
              "200 FCFA",
              "500 FCFA",
              "1000 FCFA",
              "2000 FCFA",
              "5000 FCFA",
              "10000 FCFA",
              "20000 FCFA",
            ]}
            onChange={(value) => {
              setSelectedMise(value);
              console.log("Selected Mise:", value);
            }}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-sm">Nombre de chiffres:</span>
          <SelectComponent
            options={[
              "2  → Gains: Mise * 10%",
              "3  → Gains: Mise * 15%",
              "4  → Gains: Mise * 20%",
              "5  → Gains: Mise * 25%",
              "6  → Gains: Mise * 30%",
              "7  → Gains: Mise * 40%",
              "8  → Gains: Mise * 60%",
              "9  → Gains: Mise * 90%",
            ]}
            onChange={(value) => {
              setSelectedChiffres(value);
              console.log("Selected Chiffres:", value);
            }}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-sm">Vitesse des anneaux:</span>
          <SelectComponent
            options={[
              "1 chiffre/seconde → - 98% * Gains",
              "2 chiffre/seconde → - 85% * Gains",
              "3 chiffre/seconde → - 60% * Gains",
              "4 chiffre/seconde → - +/- 0 * Gains",
              "5 chiffre/seconde → + 30% * Gains",
              "6 chiffre/seconde → + 90% * Gains",
              "7 chiffre/seconde → + 200% * Gains",
              "8 chiffre/seconde → + 300% * Gains",
            ]}
            onChange={(value) => {
              setSelectedVitesse(value);
              console.log("Selected Vitesse:", value);
            }}
          />
        </div>
      </div>
      <span className="">Gains: {calculateGain()}</span>
      <div className="mt-10 relative flex flex-col justify-center items-center">
        <input
          type="text"
          name=""
          id=""
          onChange={handleInputChange}
          className="w-full border-[2px] border-gray-200 rounded-md h-10 p-2"
        />
        <span className="text-sm absolute left-[17px] top-[-10px] bg-white px-2">
          Entrer un nombre
        </span>
        <span className="w-full flex items-center justify-center my-3">ou</span>
        <button
          onClick={generateNumber}
          className="bg-[#327fcc] w-[45%] h-10 text-white rounded-md"
        >
          Generer un nombre
        </button>
        <span className="text-4xl font-bold tracking-[5px] mt-8 mb-12">
          {Nombre}
        </span>
        <button
          onClick={rotateRing}
          disabled={isButtonEnabled}
          className={`${
            isButtonEnabled ? "bg-[#f09d9c]" : "bg-red-500"
          } w-[60%] h-10 text-white rounded-md`}
        >
          Faire tourner les anneaux
        </button>
        <div className="flex space-x-5 relative">
          {/* <span className="h-4 absolute border-2 w-[40px]"></span> */}
          {ringSection}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#f09d9c] w-[15%] h-10 text-white p-2 rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="w-6 h-6">{isCountdownActive ? countdown : 3}</span>
        </div>
      </div>
    </div>
  );
}
