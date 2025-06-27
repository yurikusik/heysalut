"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f2f2] px-4 sm:px-6 md:px-10 py-3">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 md:gap-4 text-[#141414]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
          </div>
          <Link href="/" className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">HeySalut</Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#141414]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Main menu */}
        <nav className={`flex-col md:flex-row md:flex items-center gap-6 md:gap-9 absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent z-40 transition-all duration-200 ${open ? 'flex' : 'hidden md:flex'}`}>
          <Link className="text-[#141414] text-sm font-medium leading-normal px-4 py-2 md:p-0" href="/">Home</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal px-4 py-2 md:p-0" href="/vendors">Vendors</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal px-4 py-2 md:p-0" href="/buyers">Buyers</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal px-4 py-2 md:p-0" href="/deals">Deals</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal px-4 py-2 md:p-0" href="/aboutus">About Us</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <div className="flex gap-2">
          <Link href="/signup">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
          </Link>
          <Link href="/login">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f2f2f2] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Log In</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
} 