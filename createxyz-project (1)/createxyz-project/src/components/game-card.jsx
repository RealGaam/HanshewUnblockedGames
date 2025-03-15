"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ image, name, category, url }) {
  const getCategoryColor = (category) => {
    const colors = {
      Adventure: "bg-blue-500",
      Action: "bg-red-500",
      Strategy: "bg-purple-500",
      Racing: "bg-green-500",
      Puzzle: "bg-yellow-500",
      Sandbox: "bg-orange-500",
      Multiplayer: "bg-indigo-500",
      Sports: "bg-emerald-500",
      RPG: "bg-violet-500",
      Arcade: "bg-pink-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[300px] rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group overflow-hidden"
    >
      <div className="w-full aspect-[16/9] relative overflow-hidden">
        <img
          src={image}
          alt={`${name} game preview`}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-inter font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center gap-2">
            <i className="fa-solid fa-play"></i>
            Play Now
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-inter font-bold text-gray-900 dark:text-white text-lg">
            {name}
          </h3>
          <span
            className={`${getCategoryColor(category)} px-2 py-1 rounded-full text-xs font-inter font-medium text-white`}
          >
            {category}
          </span>
        </div>
      </div>
    </a>
  );
}

function StoryComponent() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <MainComponent
        image="/games/minecraft.jpg"
        name="Minecraft Classic"
        category="Sandbox"
        url="https://classic.minecraft.net"
      />
      <MainComponent
        image="/games/slope.jpg"
        name="Slope"
        category="Racing"
        url="https://slope-game.com"
      />
      <MainComponent
        image="/games/2048.jpg"
        name="2048"
        category="Puzzle"
        url="https://play2048.co"
      />
      <MainComponent
        image="/games/basketball-stars.jpg"
        name="Basketball Stars"
        category="Sports"
        url="https://basketball-stars.io"
      />
      <MainComponent
        image="/games/cookie-clicker.jpg"
        name="Cookie Clicker"
        category="Arcade"
        url="https://orteil.dashnet.org/cookieclicker"
      />
      <MainComponent
        image="/games/pokemon.jpg"
        name="Pokemon Showdown"
        category="RPG"
        url="https://play.pokemonshowdown.com"
      />
    </div>
  );
});
}