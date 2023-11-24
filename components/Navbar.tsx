"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from "react";
type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarVisibility((prevVisibility) => !prevVisibility);
  };

  const hideSidebar = () => {
    setSidebarVisibility(false);
  };

  const handleLinkClick = (path: string) => {
    hideSidebar();
    router.push(path);
  };

  return (
    <div>
      <div
        className={`h-full w-screen absolute z-30 bg-[#00000071] ${
          isSidebarVisible ? "" : "hidden"
        }`}
      >
        <div className="w-[70%] bg-white h-full p-5">
          <div className="flex justify-start items-center space-x-2">
            <div className="h-16 w-16 bg-[#2c6bb0] rounded-full"></div>
            <span>Leonce</span>
          </div>
          <div className="flex flex-col my-6 space-y-4">
            <div className="flex h-fit justify-between items-center">
              <div className="flex flex-col h-8 justify-between">
                <span className="text-[10px] text-[#2c6bb0]">Solde</span>
                <span className="text-sm">73.150 FCFA</span>
              </div>
              <button className="h-8 bg-[#2c6bb0] text-white rounded-md text-sm px-2">
                Recharger
              </button>
            </div>
            <div className="flex h-fit justify-between items-center">
              <div className="flex flex-col h-8">
                <span className="text-[10px] text-[#2c6bb0]">Gains</span>
                <span className="text-sm">73.150 FCFA</span>
              </div>
              <button className="h-8 bg-[#2c6bb0] text-white rounded-md text-sm px-2">
                Retirer
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <span
              className="text-sm text-[#2c6bb0] cursor-pointer"
              onClick={() => handleLinkClick("/")}
            >
              Jouer
            </span>
            <span
              className="text-sm text-[#2c6bb0] cursor-pointer"
              onClick={() => handleLinkClick("/Paiement")}
            >
              Paiement
            </span>
            <span
              className="text-sm text-[#2c6bb0] cursor-pointer"
              onClick={() => handleLinkClick("/Historique")}
            >
              Historique
            </span>
            <span className="text-sm text-[#2c6bb0]">Deconnexion</span>
          </div>
        </div>
      </div>
      <nav className="h-12 flex justify-between items-center p-2 bg-[#2c6bb0]">
        <button onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <span className="w-fit h-6 bg-white p-3 flex text-sm items-center rounded-md">
          73.150 FCFA
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
