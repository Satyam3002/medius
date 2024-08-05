// src/app/home/page.js
'use client'; // Ensure you use client-side rendering for hooks

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import Hero1 from "@/components/Hero1/page";
import Footer from "@/components/Footer/page";
import Navbar1 from "@/components/Navbar1/page";

export default function Home() {
  const [showStickyNavbar1, setShowStickyNavbar1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   
      setShowStickyNavbar1(window.scrollY > 500); 
    };

    window.addEventListener('scroll', handleScroll);

 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      
      <Navbar className={`fixed top-0 left-0 w-full bg-customGreen p-4 flex flex-row items-center justify-between px-20 ${showStickyNavbar1 ? 'hidden' : ''}`} />
      
     
      {showStickyNavbar1 && (
        <Navbar1 className="fixed top-0 left-0 w-full bg-white p-8 flex flex-row items-center justify-between px-20 shadow-lg z-50" />
      )}
      
      <Hero />
      <Hero1 />
      <Footer />
    </div>
  );
}
