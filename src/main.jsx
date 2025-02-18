import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
    <Footer />
  </StrictMode>,
);
