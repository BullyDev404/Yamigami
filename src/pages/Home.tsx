// src/pages/Home.tsx
import SlideDisplay from "../ui/SlideDisplay";
import { Link } from "react-router-dom";
import Typing from "../ui/Typing";
import { motion } from "framer-motion";
import ChessBoard from "../ui/Chessboard";

function Home() {
  const greetings = [
    "Welcome",
    "Bienvenue",
    "Káàbọ̀",
    "Bem-vindo",
    "Willkommen",
    "欢迎回来",
    "Benvenuto",
    "환영합니다",
    "Bienvenido",
    "स्वागत है",
    "Nnọọ",
    "Barka da zuwa",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-40 my-auto md:mt-19 mx-auto gap-8 md:gap-1 min-h-[80vh] md:min-h-0"
    >
      {/* left div */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-4 md:gap-6 w-full md:w-auto"
      >
        {/* Welcome text */}
        <h1 className="text-5xl sm:text-4xl md:text-5xl gap-5 md:gap-2 font-bold flex flex-wrap items-center justify-center md:justify-start font-space-grotesk tracking-tighter  mb-6">
          <SlideDisplay itemsArray={greetings} />
          <span className="text-[#1fa098]"> Tega!</span>
        </h1>

        {/* Chessboard - only visible on mobile, centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="md:hidden w-full max-w-100 sm:max-w-[320px] mx-auto my-4 shadow-xl shadow-black/50 rounded-xl"
        >
          <ChessBoard
            id="home-board-mobile"
            darkSquare="#782ead"
            lightSquare="white"
            size={400}
          />
        </motion.div>

        <p className="text-stone-700 font-sans tracking-tight text-sm sm:text-base md:text-md mt-2 w-full md:w-[85%] lg:w-[70%] text-center md:text-left">
          <Typing text="Master the skill that separates good players from great ones. Close your eyes, open your mind, and train your ability to see the entire board without looking..." />
        </p>

        <button className="rounded-md bg-cyan-700 shadow-lg md:shadow-2xl px-4 py-3 md:px-3 md:py-2.5 w-full sm:w-fit mx-auto md:mx-0 hover:bg-cyan-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
          <Link
            to="/train"
            className="text-white font-semibold text-sm md:text-base"
          >
            Start Training
          </Link>
        </button>
      </motion.div>

      {/* right div - hidden on mobile, visible on tablets and up */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="hidden md:block w-fit shadow-2xl shadow-black rounded-xl"
      >
        <ChessBoard
          id="home-board"
          darkSquare="#782ead"
          lightSquare="white"
          size={420}
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;
