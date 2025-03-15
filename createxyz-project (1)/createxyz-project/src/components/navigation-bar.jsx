"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Changelog", path: "/changelog" },
    { name: "Settings", path: "/settings" },
  ];

  const baseClasses =
    "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-lg border-b border-white/20";

  return (
    <nav className={baseClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-gamepad text-white text-xl"></i>
              </div>
              <span className="font-inter font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                HanshewUnblocked
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium font-inter transition-all duration-300 
                    ${
                      activePath === link.path
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:-translate-y-0.5"
                    }`}
                >
                  {link.name}
                  {activePath === link.path && (
                    <span className="absolute inset-0 rounded-md bg-purple-500/10 dark:bg-purple-500/20 animate-pulse pointer-events-none"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none transform transition-transform duration-300 hover:scale-110"
            >
              <i
                className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium font-inter transition-all duration-300
                  ${
                    activePath === link.path
                      ? "text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/20"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(147, 51, 234, 0.1); }
          50% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.4), 0 0 15px rgba(147, 51, 234, 0.2); }
          100% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(147, 51, 234, 0.1); }
        }

        .animate-pulse {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}

function StoryComponent() {
  return (
    <div className="space-y-32 p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div>
        <p className="font-inter text-sm text-gray-500 mb-2">Navigation Bar</p>
        <div className="relative h-32 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
          <MainComponent />
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-inter text-sm text-gray-500">Scrolling Example</p>
        <div className="relative h-[500px] overflow-auto bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
          <MainComponent />
          <div className="pt-20 px-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
}