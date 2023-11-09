import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Kniting from "./pages/Kniting";
import Friends from "./pages/Friends";

function App() {
  return (
    <>
      <main className=" text-xl bg-repeat bg-lime-500 ">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kniting" element={<Kniting />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
