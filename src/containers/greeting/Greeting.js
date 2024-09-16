import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div
                className="portfolio-repo-btn-div"
                style={{ display: "flex" }}
              >
                <div style={{ marginRight: "10px" }}>
                  <Button
                    text="💼 Experience"
                    newTab={true}
                    href={"#experience"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
                <div>
                  <Button
                    text="📂 Projects"
                    newTab={true}
                    href="#projects"
                    theme={theme}
                    className="main-btn"
                  />
                </div>
              </div>

              {/* <div className="button-greeting-div"> */}
              {/* <Button text="Contact me" href="#contact" /> */}
              {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
              {/* </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../assests/images/home_animate.gif")}
            ></img>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
