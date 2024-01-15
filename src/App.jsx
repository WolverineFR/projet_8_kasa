import "./app.scss";
// style scss
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Home></Home>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// VOIR POUR REGLER LE PROBLEME DU FOOTER QUI FAIT TOUT PLANTER
