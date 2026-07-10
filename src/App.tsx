import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import { ProblemsPage } from "./pages";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/problems">Problems</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<ProblemsPage />} />
      </Routes>
    </>
  );
}

export default App;
