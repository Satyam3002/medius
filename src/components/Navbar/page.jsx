"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-customGreen p-4 flex flex-col w-full md:flex-row items-center justify-between px-20 ${className}`}
    >
      <div className="hidden md:flex flex-row gap-x-96 justify-between text-white">
        <div className="flex items-center space-x-4">
          {["Better", "Buy", "Refinance", "HELOC", "Rates", "Better+"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Better" ? "/" : `/${item.toLowerCase()}`}
                passHref
              >
                <div
                  className={`text-white px-4 py-2 rounded-xl transition-transform transform hover:scale-105 ${
                    item === "Better"
                      ? "text-4xl font-bold"
                      : "hover:bg-white hover:text-black"
                  }`}
                >
                  {item}
                </div>
              </Link>
            )
          )}
        </div>

        <div className="flex items-center space-x-8">
          <img src="/phn.svg" alt="Phone Icon" className="w-8 h-8" />
          <Link href="/sign-in" passHref>
            <div className="text-white px-4 py-2 rounded-xl transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
              <p>Sign in</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex justify-between w-full">
        <div className="text-white text-2xl font-bold">Better</div>
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col  pl-6 space-y-28 p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex text-lg  flex-col pr-8 space-y-6">
          <div className="flex justify-between ">
            <div className="text-4xl font-bold text-customGreen1">Better</div>
            <button onClick={toggleMenu} className="self-end text-2xl">
              <AiOutlineClose />
            </button>
          </div>
          <div>Buy</div>
          <div>Refinance</div>
          <div>HELOC</div>
          <div>Rates</div>
          <div>Better+</div>
          <div className="px-8 text-center rounded-full py-1 bg-customGreen2">
            <p>Call Us any time at(415)523 88371</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1 items-center text-white justify-centerpx-8 rounded-full py-2 bg-customGreen1">
            <p>Get started</p>
            <p className="text text-xs">3 min | no credit impact</p>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-centerpx-8 rounded-full py-4 bg-customGreen1">
            <p> Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
