import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logements from "./pages/Logements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
