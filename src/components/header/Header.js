import React, { useEffect } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import useThemeStore from "../../store/store.js";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = ({ theme }) => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const themes = useThemeStore((state) => state.theme);

  let selectedTheme;

  // Switch-case statement to select the themes
  switch (themes) {
    case "white":
      selectedTheme = "white";
      break;
    case "blue":
      selectedTheme = "#EDF9FE";
      break;
    case "gray":
      selectedTheme = "gray";
      break;
    case "dark":
      selectedTheme = "black";
      break;
    case "teal":
      selectedTheme = "#E6FAF5";
      break;
    case "brown":
      selectedTheme = "#FFFEFD";
      break;
    case "purple":
      selectedTheme = "#F8EFF4";
      break;
    case "green":
      selectedTheme = "#FFFFEB";
      break;
    case "red":
      selectedTheme = "#FFF8E6";
      break;
    case "pink":
      selectedTheme = "#FEE9F2";
      break;
    case "violet":
      selectedTheme = "#F4EEFC";
      break;
    case "orange":
      selectedTheme = "#FFF0EA";
      break;
    case "yellow":
      selectedTheme = "#FFD95D";
      break;
    case "light":
      selectedTheme = "white";
      break;
    default:
      selectedTheme = "white";
  }

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };
  const link = settings.isSplash ? "/splash" : "home";

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <div>
            <select
              style={{
                background: selectedTheme,
                color: themes === "dark" ? "gray" : "black",
              }}
              name="theme"
              onChange={handleThemeChange}
              value={themes}
            >
              <option value="white">Light Theme</option>
              <option value="dark">Dark Theme</option>
              <option value="red">Red Theme</option>
              <option value="green">Green Theme</option>
              <option value="gray">Gray Theme</option>
              <option value="blue">Blue Theme</option>
              <option value="purple">Purple Theme</option>
              <option value="yellow">Yellow Theme</option>
              <option value="orange">Orange Theme</option>
              <option value="teal">Teal Theme</option>
              <option value="violet">Violet Theme</option>
              <option value="pink">Pink Theme</option>
              <option value="brown">Brown Theme</option>
            </select>
          </div>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opensource"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Open Source
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
