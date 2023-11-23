import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="h-12 flex justify-between items-center p-2 bg-[#2c6bb0]">
      <button>
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
  );
};

export default Navbar;
