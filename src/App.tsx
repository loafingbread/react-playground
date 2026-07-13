import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import { HomePage, PortfolioTemplate, ProblemsPage } from "./pages";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/problems">Problems</NavLink>
        <NavLink to="/portfolio-template">Portfolio Template</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/portfolio-template" element={<PortfolioTemplate />} />
      </Routes>
    </>
  );
}

export default App;
