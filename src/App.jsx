import "./app.scss";
// style scss
import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <p className="test">Kasa</p>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// VOIR POUR REGLER LE PROBLEME DU FOOTER QUI FAIT TOUT PLANTER
