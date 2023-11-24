import Image from "next/image";
import React from "react";
import mtn from "../../../public/MTN_lance_le_premier_chatbot_pour_son_service_de_mobile_money-removebg-preview.png";
import flooz from "../../../public/Sans_titre-removebg-preview.png";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center mx-24 my-10 h-screen">
      <span className="text-center font-bold ">
        Selectionner une methode de paiement
      </span>
      <div className="mt-6 w-full flex flex-col justify-center items-center">
        <span>Methodes disponibles</span>
        <div className="flex space-x-6 my-5">
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#ffca00] w-[60px] h-[60px] flex justify-center items-center rounded-md">
              {" "}
              <Image src={mtn} alt="mtn momo logo" width={70} height={70} />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#ccd509] w-[60px] h-[60px] flex justify-center items-center rounded-md">
              {" "}
              <Image src={flooz} alt="flooz logo" width={70} height={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
