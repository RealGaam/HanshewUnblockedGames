"use client";
import React from "react";
import ColorSettings from "../../components/color-settings";
import NavigationBar from "../../components/navigation-bar";

function MainComponent() {
  const [fontSize, setFontSize] = useState("medium");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    if (typeof document !== "undefined") {
      document.documentElement.style.fontSize = {
        small: "14px",
        medium: "16px",
        large: "18px",
      }[size];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationBar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-inter text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Settings
        </h1>

        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="font-inter text-xl font-bold text-gray-900 dark:text-white mb-4">
              Display Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label className="font-inter text-gray-700 dark:text-gray-300 block mb-2">
                  Font Size
                </label>
                <div className="flex gap-4">
                  {["small", "medium", "large"].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleFontSizeChange(size)}
                      className={`px-4 py-2 rounded-md font-inter capitalize ${
                        fontSize === size
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter text-gray-700 dark:text-gray-300">
                    Dark Mode
                  </h3>
                  <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                    Switch between light and dark theme
                  </p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    darkMode ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transform transition-transform ${
                      darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter text-gray-700 dark:text-gray-300">
                    Notifications
                  </h3>
                  <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                    Receive updates and alerts
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    notifications ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transform transition-transform ${
                      notifications ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <ColorSettings />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;