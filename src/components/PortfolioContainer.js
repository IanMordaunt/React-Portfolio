import React, { useState } from "react";
import NavTabs from "./NavBar/NavTabs";
import AboutMe from "./pages/AboutMe/AboutMe";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainPage">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
