"use client";
import React from "react";
import Link from "next/link";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full w-screen absolute z-30 bg-[#00000071]">
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
          <Link href="/">
            <span className="text-sm text-[#2c6bb0]">Jouer</span>
          </Link>
          <Link href="/Paiement">
          <span className="text-sm text-[#2c6bb0]">Paiement</span>
        </Link>
          <span className="text-sm text-[#2c6bb0]">Historique</span>
          <span className="text-sm text-[#2c6bb0]">Deconnexion</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
