"use client";
import React from "react";
import NavigationBar from "../../components/navigation-bar";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");
  const games = [
    {
      name: "1v1.lol",
      url: "https://skys.follobusiness.com/semag/1v1lol/index.html",
      category: "action",
      image:
        "https://img.utdstc.com/icon/983/22a/98322a3b2be892eed31589906ffd949b68bcccc9a21ba562987965b5ec6bc6de:200",
    },
    {
      name: "Amazing Rope Police",
      url: "https://skys.follobusiness.com/semag/amazing-rope-police/index.html",
      category: "puzzle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10dN4kjY-lCBWXN9X1FHTGaqJukp55Ic2rA&s",
    },
    {
      name: "Basketball Stars",
      url: "https://skys.follobusiness.com/semag/basketball-stars/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKMfiklMLmio5eJsDFtmN0QYrbSjEfp3EQg&s",
    },
    {
      name: "Bitlife",
      url: "https://skys.follobusiness.com/semag/bitlife/index.html",
      category: "puzzle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC8sppTxg1g9FQjgKe81b0ErTRqe1o8S8ONmXCWyaSaROJIeU_XL2omxPeRK-VQe0P-E&usqp=CAU",
    },
    {
      name: "Cookie Clicker",
      url: "https://skys.follobusiness.com/semag/cookieclicker/index.html",
      category: "puzzle",
      image:
        "https://play-lh.googleusercontent.com/Z1MOuuiD05ZN5LkVmMEvKF0mqAc-FknaQ2j8s4dZiO-LSPQX4EEA3RVJdlQEtxe96ok",
    },
    {
      name: "Drift Hunters",
      url: "https://skys.follobusiness.com/semag/drifthunters/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rbvae6BZ2dxgEP7LFuu8yHn_yViQk5dIqw&s",
    },
    {
      name: "Drive Mad",
      url: "https://skys.follobusiness.com/semag/drivemad/index.html",
      category: "action",
      image:
        "https://images.sftcdn.net/images/t_app-icon-m/p/324f21b7-bddf-42a2-846e-f40d1521980f/1576990609/drive-mad-logo",
    },
    {
      name: "StackTris",
      url: "https://artedu1808.github.io/g6/stacktris/",
      category: "puzzle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbX_bg4oxwVxrDtoO3TKvO751EwoNXfODhaw&s",
    },
    {
      name: "TABS",
      url: "https://skys.follobusiness.com/semag/tabs/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBDcgmPxH3ER70_wiRRLUaG_H-YqjMusdOQ&s",
    },
    {
      name: "Gladihoppers",
      url: "https://skys.follobusiness.com/semag/gladihoppers/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZEDsWmS2qXJAD806gandhucVQ1ZX_2exPQ&s",
    },
    {
      name: "Ocarina of Time",
      url: "https://skys.follobusiness.com/semag/ocarinaoftime/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOQgd8zgLY3lb7o2asgXoTosZJI0czWOCcQ&s",
    },
    {
      name: "Eaglercraft",
      url: "https://skys.follobusiness.com/semag/eaglercraft/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIRxDkgIg4KyeylGeXGWKnrSiSb0Jevonew&s",
    },
    {
      name: "OVO",
      url: "https://skys.follobusiness.com/semag/ovo/index.html",
      category: "puzzle",
      image:
        "https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg",
    },
    {
      name: "Poly Track",
      url: "https://skys.follobusiness.com/semag/polytrack/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_p_VpIc58Jo0Oi6hfv7Hc8Jl66nfkzBZAqg&s",
    },
    {
      name: "Monkey Mart",
      url: "https://skys.follobusiness.com/semag/monkeymart/index.html",
      category: "puzzle",
      image:
        "https://play-lh.googleusercontent.com/rWReIdyvDaYJPeOxn7hbC0b-96ixGpQKM_EndiQa3SUME8TtI_rNUcI4qsw5teK9mqk",
    },
    {
      name: "Paper.io",
      url: "https://skys.follobusiness.com/semag/paperio/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVWvKjEncCo4AJdcEDRT3Zmd45ocxJ478sA&s",
    },
    {
      name: "Snow Rider 3D",
      url: "https://skys.follobusiness.com/semag/snowrider3d/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7dK4-pB3Qu1NepZzKVPMyvED5LZcbOHiYg&s",
    },
    {
      name: "Windows 11",
      url: "https://skys.follobusiness.com/sppa/11/index.html",
      category: "puzzle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8hhdmR3JeUl7CtEsJLZGajrLsqn-VdaRmIlYKmBT2Q4SZ4MEDCsJ6qqiidgoKwLtf4s&usqp=CAU",
    },
    {
      name: "Stickman Climb",
      url: "https://skys.follobusiness.com/semag/stickmanclimb/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYOPQELLgA4B84ZOD8zJsQYmlM6iykihp9A&s",
    },
    {
      name: "Madalin Cars",
      url: "https://skys.follobusiness.com/semag/madalincars/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkhLK2mUqNFdSj6RIx5panoFOSa1pcOZ-hQ&s",
    },
    {
      name: "Drift Boss",
      url: "https://skys.follobusiness.com/semag/drift-boss/index.html",
      category: "sports",
      image: "https://m.media-amazon.com/images/I/71Rvyj1gI1L.png",
    },
    {
      name: "Age Of War",
      url: "https://skys.follobusiness.com/semag/ageofwar/index.html",
      category: "action",
      image:
        "https://play-lh.googleusercontent.com/cez7h97liCyy1oqCsBRy0tzIbdRXDFjGs6XuAyPCbl2PHglm_wl8KydulnJWjMlRgGPc",
    },
    {
      name: "Kick That Buddy",
      url: "https://skys.follobusiness.com/semag/kickthatbuddy/index.html",
      category: "action",
      image:
        "https://lh3.googleusercontent.com/H_Te1sCRc5fwgpKDvcI-crLI3GoT48zOc_iDN4H9wEsI5vLuzJN33BegsU9rJHbLVOM=s180",
    },
    {
      name: "MajorasMask",
      url: "https://skys.follobusiness.com/semag/majorasmask/index.html",
      category: "action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNGnnG9j5ftKngwCPUKS1ioFJS6cQVpzEKg&s",
    },
    {
      name: "Rooftop Snipers 2",
      url: "https://skys.follobusiness.com/semag/rooftopsnipers2/index.html",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKY2uliGeNKbqaj4zsKGgQih6z4WKF7mgkew&s",
    },
    {
      name: "Jetpack Joyride",
      url: "https://skys.follobusiness.com/semag/jetpackjoyride/index.html",
      category: "puzzle",
      image:
        "https://play-lh.googleusercontent.com/3e_iyy1dolGSHqKFmwsao8SiMmqOtCuwD4CyKToLHoK34cchcH5PlG2VhOoE2_j-7FMH",
    },
    {
      name: "Retro Bowl",
      url: "https://skys.follobusiness.com/semag/retrobowl/index.html",
      category: "sports",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/Retro_Bowl_cover.png",
    },
    {
      name: "Retro Bowl College",
      url: "https://skys.follobusiness.com/semag/retrobowlcollege/index.html",
      category: "sports",
      image:
        "https://play-lh.googleusercontent.com/-BT8C-1UPYWouyjVvWYgaar_-xV4IQvX4Bvib3koGEGiy6UsHlt0RgYpUrdTDfC2y0ct=w240-h480-rw",
    },
    {
      name: "Fancy Pants 2",
      url: "https://skys.follobusiness.com/semag/fancypantsadventures2/index.html",
      category: "sports",
      image:
        "https://play-lh.googleusercontent.com/uUknF-T1uzoMBLoR7CJo2R6GT_2RYs9qxXSvzCxsxZ-i7KD43k3RsdCyw7xXESIkOUg",
    },
    {
      name: "Just Fall.lol",
      url: "https://skys.follobusiness.com/semag/justfalllol/index.html",
      category: "sports",
      image:
        "https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg",
    },
    {
      name: "fnaf",
      url: "https://skys.follobusiness.com/semag/fnaf/index.html",
      category: "horror",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBD8hhK3t1Of7RjalJdvHwFBHgVaDQQSTGw&s",
    },
    {
      name: "fnaf 2",
      url: "https://skys.follobusiness.com/semag/fnaf2/index.html",
      category: "horror",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDtoidZbkDujUtlGoxp_P20iT-PQykJ-jYpNfItcIZMGmcxnf03t05PLxG8UMyGUcNe0&usqp=CAU",
    },
    {
      name: "fnaf 3",
      url: "https://skys.follobusiness.com/semag/fnaf3/index.html",
      category: "horror",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXpYZJ1QnUK0LiqIta3tWI6u-CF4lJ_O_3w&s",
    },
    {
      name: "fnaf 4",
      url: "https://skys.follobusiness.com/semag/fnaf4/index.html",
      category: "horror",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKA0wQi8NL5cTdqD7f2WA5r86Q4JYhnqhQQ&s",
    },
    {
      name: "FunnyShooter1",
      url: "https://skys.follobusiness.com/semag/funnyshooter/index.html",
      category: "shooting",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJ2LWGMUtzvCYWJddKS9aEWtBA9UXJBEunA&s",
    },
    {
      name: "FunnyShooter2",
      url: "https://skys.follobusiness.com/semag/funnyshooter2/index.html",
      category: "shooting",
      image:
        "https://images.sftcdn.net/images/t_app-icon-m/p/5c2d6858-0333-4049-a7b4-bf103c84af35/1608539346/funny-shooter-2-bjr-logo",
    },
    {
      name: "8-Ball-Pool",
      url: "https://artedu1808.github.io/g8/8-ball-pool/",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdG_N17tO9kGtCEnFR7KXki36DHW-yJMe4g&s",
    },
    {
      name: "Bullet Force",
      url: "https://artedu1808.github.io/g7/bullet-force/",
      category: "shooting",
      image:
        "https://play-lh.googleusercontent.com/TGutKZy5JkPsQzFhFoqLBQMrpKkpHNaLk_kosXUQ9S_PCNpE4BXRbVgZwDOR67KcnM9P",
    },
    {
      name: "Offroader-V5",
      url: "https://artedu1808.github.io/g5/offroader-v5/",
      category: "cars",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAToQk1ywQVdc-wwLqCWdi5_idfBx_g-BVg&s",
    },
    {
      name: "BowlingStars",
      url: "https://artedu1808.github.io/g2/bowling-stars/",
      category: "sports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXJDdmOQso8dtEbg0ePcVxPOn7OqcLiZG_A&s",
    },
    {
      name: "EggClicker",
      url: "https://vionicofficial2.github.io/EggClicker/",
      category: "puzzle",
      image:
        "https://images.vexels.com/media/users/3/199372/isolated/preview/1c4a614126e716a3c93fd5b9d9b0254b-fried-egg-illustration.png",
    },
  ];
  const categories = [
    "All",
    "action",
    "puzzle",
    "sports",
    "horror",
    "shooting",
    "cars",
  ];
  const filteredGames = games
    .filter(
      (game) =>
        (selectedCategory === "All" || game.category === selectedCategory) &&
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "popular":
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationBar variant="sticky" />

      <main className="container mx-auto px-4 py-8">
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
          />
          <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
        </div>
        <div className="overflow-x-auto -mx-4 px-4 mb-6">
          <div className="flex gap-3 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-inter text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <button
              key={letter}
              onClick={() => setSearchQuery(letter)}
              className={`w-8 h-8 rounded-md font-inter text-sm flex items-center justify-center transition-all duration-300 
                ${
                  searchQuery.toUpperCase() === letter
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <GameCard
                key={game.name}
                image={game.image}
                name={game.name}
                category={game.category}
                url={game.url}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="fa-solid fa-gamepad text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
            <p className="font-inter text-xl text-gray-500 dark:text-gray-400">
              No games found. Try a different search!
            </p>
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .grid > a {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;