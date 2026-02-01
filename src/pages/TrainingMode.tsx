import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import AutoplayBoard from "../components/training/AutoPlayBoard";
import {
  FaPalette,
  FaMapMarkerAlt,
  FaChessKnight,
  FaEye,
  FaBrain,
} from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";

type Difficulty = "easy" | "medium" | "hard" | "expert";

interface TrainingMode {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  difficulty: Difficulty;
  stars: number;
  bestFor: string;
}

const Training = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const trainingModes: TrainingMode[] = [
    {
      id: "square-name",
      icon: <PiTargetBold />,
      title: "Square Recognition",
      description: "Type the name of the highlighted square",
      difficulty: "easy",
      stars: 1,
      bestFor: "Learning notation",
    },
    {
      id: "square-color",
      icon: <FaPalette />,
      title: "Color Recognition",
      description: "Identify if the square is light or dark",
      difficulty: "easy",
      stars: 1,
      bestFor: "Pattern recognition",
    },
    {
      id: "coordinate-click",
      icon: <FaMapMarkerAlt />,
      title: "Coordinate Click",
      description: "Click the square when given coordinates",
      difficulty: "medium",
      stars: 2,
      bestFor: "Speed training",
    },
    {
      id: "knight-moves",
      icon: <FaChessKnight />,
      title: "Knight Movement",
      description: "Click all legal knight moves from position",
      difficulty: "medium",
      stars: 2,
      bestFor: "Piece visualization",
    },
    {
      id: "piece-vision",
      icon: <FaBrain />,
      title: "Piece Placement",
      description: "Memorize and recall piece positions",
      difficulty: "hard",
      stars: 3,
      bestFor: "Board memory",
    },
    {
      id: "blindfold-moves",
      icon: <FaEye />,
      title: "Blindfold Moves",
      description: "Calculate moves without seeing the board",
      difficulty: "hard",
      stars: 3,
      bestFor: "Advanced visualization",
    },
  ];

  const userStats: any = {
    "square-name": {
      bestScore: 9,
      totalQuestions: 10,
      timesPlayed: 5,
      avgTime: 23,
    },
    "square-color": {
      bestScore: 18,
      totalQuestions: 20,
      timesPlayed: 3,
      avgTime: 15,
    },
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy":
        return "border-cyan-400 text-cyan-400";
      case "medium":
        return "border-amber-500 text-amber-400";
      case "hard":
        return "border-purple-500 text-purple-400";
      case "expert":
        return "border-purple-500 text-purple-400";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  return (
    <div className="pt-10 sm:20 lg:pt-0 h-[calc(100vh-6rem)] flex flex-col overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="shrink-0 text-center pt-6 pb-4 px-4"
      >
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-1 tracking-tight">
          <span className="text-purple-500">Training</span>{" "}
          <span className="text-cyan-400">Arena</span>
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Select a training mode below to enhance your pattern recognition,
          coordinate memory, and tactical vision skills.
        </p>
      </motion.div>

      {/* Main Content - Fixed Height, No Page Scroll */}
      <div className="flex-1 flex flex-col lg:flex-row gap-5 px-4 md:px-8 pb-6 min-h-0 max-w-7xl mx-auto w-full">
        {/* LEFT: Chessboard */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex lg:w-1/2 items-center justify-center max-h-150"
        >
          <AutoplayBoard size={420} />
        </motion.div>

        {/* RIGHT: Scrollable List (Hidden Scrollbar) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 lg:w-1/2 overflow-y-auto hide-scrollbar max-h-full"
        >
          {/* ///////////////////////CONTAINER SCROLLER ////////////////*/}
          <div className="space-y-3 pr-4">
            {/*///////////////////////// MAPPING//////////////////////// */}
            {trainingModes.map((mode, index) => {
              const stats = userStats[mode.id];
              const isFav = favoriteIds.includes(mode.id);

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ x: 6, scale: 1.03 }}
                  key={mode.id}
                  className="group relative bg-gray-900 rounded-xl p-4 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500 hover:shadow-opacity-20 transition-all cursor-pointer backdrop-blur-sm overflow-x-auto"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg  bg-opacity-20 border border-white border-opacity-40 flex items-center justify-center text-white text-xl group-hover:bg-opacity-30 transition-all shrink-0">
                      {mode.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">

                      <div className="flex items-center gap-2 mb-1 ">
                        <h3 className="text-base font-semibold text-white truncate">
                          {mode.title}
                        </h3>
                        <span className="text-cyan-400 text-sm">
                          {"🗡️".repeat(mode.stars)}
                        </span>
                      </div>

                      <p className="text-xs text-gray-400 mb-2 truncate">
                        {mode.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[8px] uppercase font-bold px-2 py-0.5 rounded-full border ${getDifficultyColor(mode.difficulty)}`}
                        >
                          {mode.difficulty}
                        </span>
                        <span className="text-[10px] text-gray-500 italic truncate">
                          {mode.bestFor}
                        </span>
                      </div>
                    </div>

                    {/* Stats & Favorite */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right hidden sm:block">
                        {stats ? (
                          <div className="space-y-0.5">
                            <p className="text-cyan-400 font-bold text-sm">
                              {stats.bestScore}
                              <span className="text-gray-500 text-xs">
                                /{stats.totalQuestions}
                              </span>
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {stats.timesPlayed}x • {stats.avgTime}s
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-600 text-xs italic">
                            Not played
                          </p>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(mode.id, e)}
                        className={`text-xl transition-all ${isFav ? "text-amber-400 scale-110" : "text-gray-600 hover:text-gray-400"}`}
                      >
                        {isFav ? "★" : "☆"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default Training;
