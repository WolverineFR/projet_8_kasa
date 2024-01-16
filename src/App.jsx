import "./utils/style/app.scss";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
