import React from "react";
import "./AboutMe.css";
import ProfileImg from "./ProfileImg.jpeg";
import Corrugated from "./corrugated.jpg";

import { DiReact } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";

export default function AboutMe() {
  return (
    <div>
      <div className="aboutMeHead">
        <img src={ProfileImg} alt="profile picture" className="profileImg" />
        <img
          src={Corrugated}
          alt="corrugated metal background"
          className="metalBack"
        />
        {/* <h1 className="h11">Hi,</h1>
          <h1 className="h12">I'm Ian,</h1> */}
        <h1 className="h11">Full Stack - Web Developer</h1>
      </div>
      <div className="aboutmeDesc">
        <h1 className="h12">- About Me -</h1>
        <p>
          Full-Stack developer living in Santa Fe, NM. Coding is my passion.
          Developing applications using the MERN-stack that help bring ease 
          and efficiency is the
          focus. I have strong analytical skills for solving and finding
          solutions to complex problems. Learning something new is what I live
          for. Everyday is a new oppotunity to improve myself and grow in
          knowledge. Collaborating with others to achieve higher goals is where
          I feel at my best. Making progress and sharing progress with others 
          brings me satisfaction. Life long learning is my goal. Constantly gaining
          knowledge and putting that knowledge into practice is my life goal.
        </p>
      </div>
      <div>
        <h1 className="h12">- Skills -</h1>
        <div className="skills-list text-center">
          <ul className="skills">
            <li className="html">
              <DiHtml5 />
            </li>
            <li className="css">
              <DiCss3Full />
            </li>
            <li className="js">
              <DiJsBadge />
            </li>
            <li className="node">
              <DiNodejs />
            </li>
            <li className="npm">
              <DiNpm />
            </li>
            <li className="jquery">
              <DiJqueryLogo />
            </li>
            <li className="react">
              <DiReact />
            </li>
            <li className="handlebars">
              <SiHandlebarsdotjs />
            </li>
            <li className="mongodb">
              <DiMongodb />
            </li>
            <li className="mysql">
              <DiMysql />
            </li>
            <li className="git">
              <DiGit />
            </li>
            <li className="github">
              <DiGithubBadge />
            </li>
            <li className="heroku">
              <DiHeroku />
            </li>
            <li className="vscode">
              <DiVisualstudio />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
