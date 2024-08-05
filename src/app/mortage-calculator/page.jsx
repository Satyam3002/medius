
'use client'; 
import { useState, useEffect } from 'react';
import Footer from "@/components/Footer/page";
import Navbar1 from "@/components/Navbar1/page";
import Help from '@/components/Help/page';
import Use from '@/components/use/page';
import Payments from '@/components/payments/page';
import Resources from '@/components/Resources/page';
import Mortgage from '@/components/Mortage/page';


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
      <Mortgage />
       <Help />
       <Use />
       <Payments />
       <Resources />
       <Footer />
       
    </div>
  );
}
