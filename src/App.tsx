import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "../src/pages/Home";
import About from "./pages/About";
import Kniting from "./pages/Kniting";
import Friends from "./pages/Friends";
import LandingPage from "./pages/LandingPage";
import PhotoAlbum from "./pages/PhotoAlbum";

//import VisuelFormidling from "./pages/VisuelFormidling";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/kniting" element={<Kniting />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/photoAlbum" element={<PhotoAlbum />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
