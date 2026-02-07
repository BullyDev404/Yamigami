import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import Layout from "./components/layout/Layout";
import TrainingMode from "./pages/TrainingMode";
import SquareRecognition from "./features/SquareRecognition";
import BlindfoldMoves from "./features/BlindfoldMoves";
import KnightMovement from "./features/KnightMovement";
import ColorRecognition from "./features/ColorRecognition";
import CoordinateClick from "./features/CoordinateClick";
import PiecePlacement from "./features/PiecePlacement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="train" element={<TrainingMode />} />

          {/* Routes inside train componenet */}
          <Route path ="train/blindfold-moves" element ={<BlindfoldMoves/>}/>
          <Route path ="train/knight-moves" element ={<KnightMovement/>}/>
          <Route path= "train/square-name" element ={<SquareRecognition/>}/>
          <Route path="train/square-color" element ={<ColorRecognition/>}/>
          <Route path= "train/coordinate-click" element={<CoordinateClick/>}/>
          <Route path="train/piece-vision" element={<PiecePlacement/>}/>

          {/* //////////////////////////////////////////////////////// */}
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
