import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import { HomePage, PortfolioTemplate, ProblemsPage } from "./pages";
import SecurityCameraPage from "./pages/SecurityCameraPage";
import { CamerasPage } from "./problems/SecurityCameras";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/problems">Problems</NavLink>
        <NavLink to="/portfolio-template">Portfolio Template</NavLink>
        <NavLink to="/security-cameras">Security Cameras</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/portfolio-template" element={<PortfolioTemplate />} />
        <Route path="/security-cameras" element={<SecurityCameraPage />}>
          <Route path="/security-cameras/cameras" element={<CamerasPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
