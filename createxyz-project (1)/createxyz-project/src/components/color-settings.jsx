"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ onColorChange, currentColor = "#3B82F6" }) {
  const [color, setColor] = useState(currentColor);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState(null);

  const colorThemes = [
    {
      name: "Ocean Breeze",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2DD4BF 100%)",
      value: "#3B82F6",
    },
    {
      name: "Sunset Glow",
      gradient: "linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)",
      value: "#EF4444",
    },
    {
      name: "Forest Fresh",
      gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
      value: "#10B981",
    },
    {
      name: "Royal Purple",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)",
      value: "#8B5CF6",
    },
    {
      name: "Golden Hour",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
      value: "#F59E0B",
    },
  ];

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch("/api/get-theme-color", {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch theme color");
        }
        const data = await response.json();
        setColor(data.theme_color);
        if (onColorChange) {
          onColorChange(data.theme_color);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load theme color");
      }
    };
    fetchColor();
  }, [onColorChange]);

  const handleColorChange = async (newColor) => {
    try {
      const response = await fetch("/api/update-theme-color", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme_color: newColor }),
      });

      if (!response.ok) {
        throw new Error("Failed to update theme color");
      }

      setColor(newColor);
      if (onColorChange) {
        onColorChange(newColor);
      }
      document.documentElement.style.setProperty("--theme-color", newColor);
    } catch (err) {
      console.error(err);
      setError("Failed to update theme color");
    }
  };

  const resetToDefault = async () => {
    await handleColorChange("#3B82F6");
    setShowConfirmation(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-inter text-xl font-bold text-gray-900 dark:text-white">
          Color Theme
        </h2>
        <button
          onClick={() => setShowConfirmation(true)}
          className="px-4 py-2 text-sm font-inter text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <i className="fa-solid fa-rotate-left mr-2"></i>
          Reset
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {showConfirmation && (
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="font-inter text-sm text-gray-700 dark:text-gray-300 mb-3">
            Are you sure you want to reset to the default theme?
          </p>
          <div className="flex space-x-3">
            <button
              onClick={resetToDefault}
              className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-inter hover:bg-red-600 transition-colors"
            >
              Yes, reset
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm font-inter hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {colorThemes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleColorChange(theme.value)}
              className={`group relative h-20 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                color === theme.value
                  ? "ring-2 ring-gray-900 dark:ring-white scale-[1.02]"
                  : ""
              }`}
              style={{ background: theme.gradient }}
              aria-label={`Select ${theme.name} theme`}
            >
              <span className="absolute bottom-2 left-2 text-white text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {theme.name}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <label className="block font-inter text-sm text-gray-700 dark:text-gray-300">
            Custom Color
          </label>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="w-16 h-16 rounded-lg cursor-pointer"
                aria-label="Select custom color"
              />
              <div
                className="absolute inset-0 rounded-lg pointer-events-none transition-transform duration-300 hover:scale-105"
                style={{ background: color }}
              />
            </div>
            <div className="flex-1">
              <div
                className="h-16 rounded-lg transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, ${color}, ${color}88)`,
                }}
              />
            </div>
          </div>
          <div className="font-inter text-sm text-gray-600 dark:text-gray-400">
            Selected: {color.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryComponent() {
  const [selectedColor, setSelectedColor] = useState("#3B82F6");

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="font-inter text-sm text-gray-500 mb-2">
          Default Color Settings
        </h3>
        <MainComponent />
      </div>

      <div>
        <h3 className="font-inter text-sm text-gray-500 mb-2">
          Interactive Color Settings
        </h3>
        <MainComponent
          currentColor={selectedColor}
          onColorChange={setSelectedColor}
        />
        <div className="mt-6 space-y-3">
          <div
            className="h-20 rounded-lg transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${selectedColor} 0%, ${selectedColor}88 100%)`,
            }}
          />
          <p className="font-inter text-sm text-center text-gray-600 dark:text-gray-400">
            Preview of selected theme
          </p>
        </div>
      </div>
    </div>
  );
});
}