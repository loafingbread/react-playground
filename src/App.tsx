import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import { Stopwatch } from "./problems/Stopwatch";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stopwatch">Stopwatch</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </>
  );
}

export default App;
