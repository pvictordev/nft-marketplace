import "./App.css";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="app w-full flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
