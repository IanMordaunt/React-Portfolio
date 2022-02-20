import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="page-container">
        <div className="inside">
          <PortfolioContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
