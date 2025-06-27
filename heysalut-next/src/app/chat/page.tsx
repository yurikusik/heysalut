"use client";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import { useState } from "react";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        {/* Mobile sidebar toggle */}
        <div className="sm:hidden flex items-center justify-between px-4 py-2 border-b border-[#f2f2f2] bg-white z-20">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#141414]"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle chat sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-[#141414] text-lg font-bold">Chats</span>
        </div>
        <div className="flex flex-1 flex-col sm:flex-row w-full h-full">
          {/* Sidebar: hidden on mobile unless toggled */}
          <ChatSidebar open={sidebarOpen || typeof window === 'undefined' ? undefined : undefined} />
          {/* Chat window: always visible, full width on mobile */}
          <ChatWindow />
        </div>
      </div>
    </div>
  );
} 