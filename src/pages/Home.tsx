// src/pages/Home.tsx
import Chessboard from "../ui/Chessboard";

function Home() {

  return (
    <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between px-35 mt-20 m-auto ">

      <section className="text-black text-sm">
        This is a test to see how well you can remember
      </section>

      <div>
        <Chessboard lightSquare="white" darkSquare="red" />
      </div>

  
    </div>
  );
}

export default Home;
