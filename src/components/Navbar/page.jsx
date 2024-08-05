"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image"; // Import the Image component

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
                legacyBehavior
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
          <Image src="/phn.svg" alt="Phone Icon" width={32} height={32} />{" "}
          {/* Use Image component */}
          <Link legacyBehavior href="/sign-in" passHref>
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
        className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col pl-6 space-y-28 p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex text-lg flex-col pr-8 space-y-6">
          <div className="flex justify-between">
            <div className="text-4xl font-bold text-customGreen1">Better</div>
            <button onClick={toggleMenu} className="self-end text-2xl">
              <AiOutlineClose />
            </button>
          </div>

          <a>Buy</a>

          <a>Refinance</a>

          <a>HELOC</a>

          <a>Rates</a>

          <a>Better+</a>

          <div className="px-8 text-center rounded-full py-1 bg-customGreen2">
            <p>Call Us any time at (415) 523-8837</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Link legacyBehavior href="/getstarted" passHref>
            <a className="flex flex-col gap-y-1 items-center justify-center px-8 py-2 rounded-full bg-customGreen1 text-white">
              <p>Get started</p>
              <p className="text-xs">3 min | no credit impact</p>
            </a>
          </Link>
          <Link legacyBehavior href="/sign-in" passHref>
            <a className="flex flex-col gap-y-1 items-center justify-center px-8 py-4 rounded-full bg-customGreen1 text-white">
              <p>Sign in</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
