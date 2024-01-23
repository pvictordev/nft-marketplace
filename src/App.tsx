import "./App.css";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
