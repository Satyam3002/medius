// src/app/about/page.js
'use client'; // Make sure to use client-side rendering for hooks

import { useState, useEffect } from 'react';
import Mission from "@/components/Mission/page";
import Footer from "@/components/Footer/page";
import Vishal from "@/components/Vishal/page";
import Greenbox from "@/components/Greenbox/page";
import Company from "@/components/company/page";
import Navbar1 from "@/components/Navbar1/page";
import Timeline from '@/components/Timeline/page';

export default function About() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar1 className={`fixed top-0 left-0 w-full bg-white p-8 flex flex-row items-center justify-between px-20 s z-50 ${isSticky ? 'sticky' : ''}`} />
      <Mission />
      <Vishal />
      <Greenbox />
      <Company />
      <Timeline />
      <Footer />
    </div>
  );
}
