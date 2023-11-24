// Sidebar.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type SidebarProps = {
  isVisible: boolean;
  onLinkClick: (path: string) => void;
  onHideSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onLinkClick, onHideSidebar }) => {
  const router = useRouter();

  return (
    <div className={`h-full w-screen absolute z-30 bg-[#00000071] ${isVisible ? "" : "hidden"}`}>
      <div className="w-[70%] bg-white h-full p-5">
        {/* Sidebar content */}
        {/* ... */}
        <div className="flex flex-col space-y-3">
          <span
            className="text-sm text-[#2c6bb0] cursor-pointer"
            onClick={() => onLinkClick("/")}
          >
            Jouer
          </span>
          <span
            className="text-sm text-[#2c6bb0] cursor-pointer"
            onClick={() => onLinkClick("/Paiement")}
          >
            Paiement
          </span>
          <span
            className="text-sm text-[#2c6bb0] cursor-pointer"
            onClick={() => onLinkClick("/Historique")}
          >
            Historique
          </span>
          <span className="text-sm text-[#2c6bb0]">Deconnexion</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
