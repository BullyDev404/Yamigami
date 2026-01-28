import Chessboard from "../ui/Chessboard";
function Progress() {
  return (
    <div className="flex items-center justify-center mt-20 gap-16 ">
      <div>
        <h1 className="text-2xl font-bold mb-4">Progress Page</h1>
        <p className="text-gray-600">Track your chess improvement here!</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          <span className="text-white">Load Progress Data</span>
        </button>
      </div>
      <Chessboard
        size={400}
        darkSquare="#2d0052"
        lightSquare="#d3cbde"
        highlightSquares={{ d5: { backgroundColor: "green", opacity: 0.7 } }}
      />
    </div>
  );
}

export default Progress;
