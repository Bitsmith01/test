import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center p-5 h-screen">
      <span className="font-bold my-6">Historique</span>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-red-600 font-bold">Perdu</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-[#2c6bb0] font-bold">Gagné</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-[#2c6bb0] font-bold">Gagné</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-red-600 font-bold">Perdu</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-[#2c6bb0] font-bold">Gagné</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%] mb-5">
          <span className="text-red-600 font-bold">Perdu</span>
          <span>1500 FCFA</span>
        </div>
        <div className="flex justify-between w-[70%]">
          <span className="text-red-600 font-bold">Perdu</span>
          <span>1500 FCFA</span>
        </div>
      </div>
    </div>
  );
};

export default page;
