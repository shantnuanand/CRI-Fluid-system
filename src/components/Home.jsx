import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="max-w-[1536px] overflow-hidden">
      <div className="bg-gradient-to-b from-white to-customColor px-1">
        <nav className="upper flex h-[22vh] justify-center max-sm:h-[15vh]">
          <img
            className="max-sm:h-[125px] max-sm:w-auto max-md:h-[125px]"
            src="./logo.png"
            alt="logo"
          />
        </nav>
        <div className="flex max-sm:flex-col-reverse">
            <div className="left max-sm:w-auto max-sm:h-auto">
              <img
                className="max-lg:h-[59vh] max-lg:w-[109vh] max-2xl:h-[100vh] max-2xl:w-[70vh] max-sm:h-[470px] max-sm:w-[390px]"
                src="./1.png"
                alt="award"
              />
            </div>
          <div className="right w-[140vh] max-sm:w-[100%] max-sm:p-2">
            <ul>
              <h2 className="font-bold">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h2>
              <li className="list-disc ml-8 mt-2 font-semibold">
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className="list-disc ml-8 font-semibold">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <div className="max-sm:py-4">
              <img className="" src="./2.png" alt="photo" />
            </div>
            <div>
              <h2 className="font-semibold">
                Government of India has awarded the "National Energy
                Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </h2>
            </div>
          </div>
        </div>
        <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:">
          <div className=" max-sm:h-auto max-sm:w-[390px] max-sm:text-center max-2xl:pt-8">
            <h1 className="font-semibold text-[15px] max-sm:text-sm">
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </h1>
          </div>
        </div>

        <div>
          <div className="px-[140px] max-sm:px-4 max-sm:w-auto max-sm:h-auto">
            <img
              className="max-sm:h-100% max-sm:w-100%"
              src="./3.png"
              alt="imgg"
            />
          </div>
          <div className="flex justify-center max-sm:p-5">
            <h1 className="font-semibold text-[15px] max-sm:text-center">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors{" "}
            </h1>
          </div>
        </div>
        <div className="p-2">
          <div className="border-[1px] border-red-700"></div>
          <div className="flex justify-center">
            <h2 className="pt-2 font-bold text-[15px] max-sm:text-center">
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h2>
          </div>
          <div className="p-3 text-center">
            <h2 className="pt-2 font-semibold text-[15px]">
              <span>CHEMICALS & PROCESS</span>
              <span className="text-red-500 mx-1">|</span>
              <span>POWER</span>
              <span className="text-red-500 mx-1">|</span>
              <span>WATER & WASTE WATER</span>
              <span className="text-red-500 mx-1">|</span>
              <span>OILS & GAS</span>
              <span className="text-red-500 mx-1">|</span>
              <span>PHARMA</span>
              <span className="text-red-500 mx-1">|</span>
              <span>SUGARS & DISTILLERIES</span>
              <span className="text-red-500 mx-1">|</span>
              <span>PAPER & PULP</span>
              <span className="text-red-500 mx-1">|</span>
              <span>MARINE & DEFENCE</span>
              <span className="text-red-500 mx-1">|</span>
              <span>METAL & MINING</span>
              <span className="text-red-500 mx-1">|</span>
              <span>FOOD & BEVERAGE</span>
              <span className="text-red-500 mx-1">|</span>
              <span>PETROCHEMICAL & REFINERIES</span>
              <span className="text-red-500 mx-1">|</span>
              <span>SOLAR</span>
              <span className="text-red-500 mx-1">|</span>
              <span>BUILDING</span>
              <span className="text-red-500 mx-1">|</span>
              <span>HVAC</span>
              <span className="text-red-500 mx-1">|</span>
              <span>FIRE FIGHTING</span>
              <span className="text-red-500 mx-1">|</span>
              <span>AGRICULTURE & RESIDENTIAL</span>
              <span className="text-red-500 mx-1">|</span>
            </h2>
          </div>
        </div>
      </div>
      <footer className="h-[15vh] w-auto bg-red-500 flex justify-evenly items-center max-sm:flex-col max-sm:py-4 max-sm:h-auto">
        <div className="flex justify-center items-center gap-2">
          <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
            <FaPhoneAlt className="text-red-500" />
          </div>
          <h1 className="text-white font-medium">Toll Free 1800 200 1234</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaFacebook className="text-white size-8" />
          <h1 className="text-white font-medium ">www.facebook.com/cripumps</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
            <IoGlobeOutline className="text-red-500 size-8" />
          </div>
          <h1 className="text-white font-medium">www.crigroups.com</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;
