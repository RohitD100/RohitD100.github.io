import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img style={{ width: '250px', height: '250px' }} src='https://avatars.githubusercontent.com/u/107460113?v=4' alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Rohit Dorage </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Ahmednagar, Maharashtra (India)
                </span>
                . I have completed my HSC
                from{" "}
                <span className="different">
                  Matoshri B.B. Science jounior college(MH)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller
              </h4>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
