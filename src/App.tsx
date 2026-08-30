import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Kniting from "./pages/Kniting";
import LandingPage from "./pages/LandingPage";
import PhotoAlbum from "./pages/PhotoAlbum";
import Cv from "./pages/Cv";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/kniting" element={<Kniting />} />
          <Route path="/photoAlbum" element={<PhotoAlbum />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
