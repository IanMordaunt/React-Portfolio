import React from "react";
import "../../App.css";
import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
  return (
    <div>
      <div className="footerContainer">
          <a className="github2" href="https://github.com/IanMordaunt?tab=repositories" target='_blank'>
            <DiGithubBadge /></a>
      </div>
    </div>
  );
}
