// components/StickyLayout.js

import Navbar1 from "../Navbar1/page";

export default function StickyLayout({ children }) {
  return (
    <>
      <Navbar1 />
      <main className="pt-20"> {/* Adjust pt based on Navbar1 height */}
        {children}
      </main>
    </>
  );
}
