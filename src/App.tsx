import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
// import Layout from "./components/layout/Layout";
// import Progress from "./pages/Progress"
import Settings from "./pages/Settings";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="progress" element={<Progress />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
