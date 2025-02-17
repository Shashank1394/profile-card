import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardDisplay from "./CardDisplay";
import Header from "./Header";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <CardDisplay />
    <Footer />
  </StrictMode>,
);
