// src/pages/Home.tsx
import Chessboard from "../ui/Chessboard";
import SlideDisplay from "../ui/SlideDisplay";
import { Link } from "react-router-dom";
import Typing from "../ui/Typing";
import { motion } from "framer-motion";

function Home() {
  const greetings = [
    "Welcome back",
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
      className="max-w-7xl flex flex-col md:flex-row items-center justify-between px-35 mt-20 m-auto "
    >
      {/* left div */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-3 md:gap-6"
      >
        {/*///////// Welcome text */}
        <h1 className="text-5xl gap-2 font-bold flex items-center font-space-grotesk tracking-tighter">
          <SlideDisplay itemsArray={greetings} />
          <span className="text-[#1fa098]"> Tega!</span>
        </h1>

        <p className="text-stone-700 font-sans tracking-tight text-md mt-2 w-[70%] space-y-1">
          <Typing text="Master the skill that separates good players from great ones. Close your eyes, open your mind, and train your ability to see the entire board without looking..." />
        </p>

        <button className="rounded-md bg-linear-to-r shadow-2xl from-purple-600 to-pink-600 px-3 py-2.5 w-fit hover:shadow-xl hover:backdrop-blur-2xl transition-all duration-300">
          <Link to="/train" className="text-white font-semibold">
            Start Training
          </Link>
        </button>
      </motion.div>

      {/* right div */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="w-fit shadow-2xl shadow-black"
      >
        <Chessboard lightSquare="white" darkSquare="purple" />
      </motion.div>
    </motion.div>
  );
}

export default Home;
