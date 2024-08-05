"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for hamburger and close button

export default function Navbar1({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-customGreen p-4 flex flex-col  md:flex-row items-center justify-between px-20 ${className}`}>
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center justify-between gap-x-96  text-black">
        <div className='flex items-center font-bold justify-center space-x-16 flex-row'>
        
        <Link href="/" passHref>
          <div className="bg-white text-black px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200 cursor-pointer">
            <div className="text-3xl font-bold">Better</div>
          </div>
        </Link>
        <div>Buy</div>
        <div>Refinance</div>
        <div>HELOC</div>
        <div>Rates</div>
        <div>Better+</div>
        </div>
      <Link href="/getstarted">
      
        <div className=' lg:ml-28 px-4 py-2 rounded-2xl text-white bg-customGreen1'>
            <p className='text-xl font-semibold'>Get started</p>
        </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between w-full">
        <div className=" text-4xl text-customGreen1 font-bold">Better</div>
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col space-y-8 p-4 px-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col text-black  space-y-6 text-lg">
            <div className='flex justify-between'>
            <div className='text-4xl font-bold text-customGreen1'>Better</div>
            <button onClick={toggleMenu} className="self-end text-2xl">
          <AiOutlineClose />
        </button>
            </div>
          
          <div>Buy</div>
          <div>Refinance</div>
          <div>HELOC</div>
          <div>Rates</div>
          <div>Better+</div>
          <div className='px-8 text-center rounded-full py-1 bg-customGreen2'>
            <p>Call Us any time at (415) 523 8837</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-col gap-y-1 items-center justify-center px-8 rounded-full py-2 bg-customGreen1'>
            <Link href='/getstarted'>
           <p>Get started</p>
            </Link>
            <p className='text-xs'>3 min | no credit impact</p>
          </div>
          <div className='flex flex-col gap-y-1 items-center justify-center px-8 rounded-full py-4 bg-customGreen1'>
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
