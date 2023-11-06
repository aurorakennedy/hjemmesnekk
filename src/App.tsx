import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home'
import About from './components/About';
import Kniting from './components/Kniting';
import Venner from './components/Venner';


function App() {
  return (
    <>
    <main className=" text-xl bg-repeat bg-lime-500 "  >
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/kniting" element={<Kniting />}/>
        <Route path="/venner" element={<Venner />}/>
        
      </Routes>
    </Router>

    </main>
    

    </>
  );  
}

export default App;
