import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Rohit Dorage</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on wordpress since last 3 years and delivered
          15+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/RohitD100"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="rohitdorage100@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917498995670"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rohitdorage/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/RohitDorage2"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1fEflhyfOs3yR0WSIJTYs8rY_zAIbH2kn/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
        <a href=" https://drive.google.com/uc?export=download&id=1fEflhyfOs3yR0WSIJTYs8rY_zAIbH2kn">
          <button
            className="btnResume"
          >
            Download Resume
          </button>
        </a>

      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};

/*
 https://drive.google.com/uc?export=download&id=1fEflhyfOs3yR0WSIJTYs8rY_zAIbH2kn 
 https://drive.google.com/uc?export=download&id=1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj


 https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=share_link
*/