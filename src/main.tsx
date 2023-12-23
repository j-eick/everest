import React from "react";
import ReactDOM from "react-dom/client";
import "../src/globalStyles/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Limbus from "./pages/Limbus.tsx";
import Nowhere from "./pages/Nowhere.tsx";
import Travel from "./pages/Travel.tsx";
import Contact from "./pages/Contact.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/limbus" element={<Limbus />} />
        <Route path="/*" element={<Nowhere />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
