"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f2f2] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#141414]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
          </div>
          <Link href="/" className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">HeySalut</Link>
        </div>
        <div className="flex items-center gap-9">
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/">Home</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/vendors">Vendors</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/buyers">Buyers</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/deals">Deals</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/aboutus">About Us</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
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