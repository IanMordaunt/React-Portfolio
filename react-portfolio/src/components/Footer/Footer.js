import React from "react";
import "../../App.css";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <ul className="footerInfo">
          <li className="github2"><a className="github2" href="https://github.com/IanMordaunt?tab=repositories" target="_blank"><DiGithubBadge /></a>
          </li>
          <li className="github3"><a className="github3" href="https://www.linkedin.com/in/ian-mordaunt/" target="_blank"><AiFillLinkedin/></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
