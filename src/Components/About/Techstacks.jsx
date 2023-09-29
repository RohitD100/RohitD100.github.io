import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiNetlify,
  SiChakraui,
  SiTypescript,
  SiTailwindcss,
  SiHeroku

} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>Wordpress</h5>
          </div>
          <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Telwind CSS</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            < DiVisualstudio />
            <h5>VS code</h5>
          </div>
          <div>
            < SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
        </div>
      </div>
      <br />
      <br />

    </>
  );
};
