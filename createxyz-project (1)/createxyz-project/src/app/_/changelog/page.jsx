"use client";
import React from "react";
import NavigationBar from "../../components/navigation-bar";

function MainComponent() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const changelog = {
    2025: [
      {
        date: "March 15, 2025",
        title: "New Game Categories Added",
        description:
          "Added Adventure and Strategy game sections to improve game discovery.",
        type: "feature",
      },
      {
        date: "March 1, 2025",
        title: "Dark Mode Support",
        description:
          "Added system-wide dark mode support for better nighttime viewing.",
        type: "feature",
      },
      {
        date: "February 15, 2025",
        title: "Performance Improvements",
        description:
          "Optimized image loading and page transitions for faster navigation.",
        type: "improvement",
      },
    ],
    2024: [
      {
        date: "December 20, 2024",
        title: "Initial Release",
        description: "Launched the gaming platform with core features.",
        type: "release",
      },
    ],
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "feature":
        return "fa-solid fa-star";
      case "improvement":
        return "fa-solid fa-arrow-up";
      case "release":
        return "fa-solid fa-rocket";
      default:
        return "fa-solid fa-circle";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "feature":
        return "text-blue-500";
      case "improvement":
        return "text-green-500";
      case "release":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationBar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-inter text-3xl font-bold text-gray-900 dark:text-white">
            Changelog
          </h1>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="font-inter px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {Object.keys(changelog).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-8">
          {changelog[selectedYear].map((entry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`${getTypeColor(entry.type)} mt-1`}>
                  <i className={`${getTypeIcon(entry.type)} text-lg`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white">
                      {entry.title}
                    </h2>
                    <span className="font-inter text-sm text-gray-500 dark:text-gray-400">
                      {entry.date}
                    </span>
                  </div>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;