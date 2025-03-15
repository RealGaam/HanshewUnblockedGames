"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-12">
          <h1 className="font-inter text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#a8b3cf] animate-title">
            Hanshew
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
              Unblocked
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <a
            href="/games"
            className="group flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <i className="fa-solid fa-gamepad text-white text-4xl mb-4"></i>
              <div className="font-inter font-bold text-white text-xl">
                Games
              </div>
            </div>
          </a>

          <a
            href="/settings"
            className="group flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <i className="fa-solid fa-gear text-white text-4xl mb-4"></i>
              <div className="font-inter font-bold text-white text-xl">
                Settings
              </div>
            </div>
          </a>

          <a
            href="/changelog"
            className="group flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <i className="fa-solid fa-clock-rotate-left text-white text-4xl mb-4"></i>
              <div className="font-inter font-bold text-white text-xl">
                Changelog
              </div>
            </div>
          </a>
        </div>
      </main>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes title {
          0% { transform: perspective(500px) translateZ(0px); opacity: 0; }
          100% { transform: perspective(500px) translateZ(50px); opacity: 1; }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .animate-title {
          animation: title 1s cubic-bezier(0.11, 0, 0.5, 0) forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;