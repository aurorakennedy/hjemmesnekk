import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";
import LandingPage from "./pages/LandingPage";
import PhotoAlbum from "./pages/PhotoAlbum";
import Cv from "./pages/Cv";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photoAlbum" element={<PhotoAlbum />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
