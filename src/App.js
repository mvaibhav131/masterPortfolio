import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import {
  materialDarkTheme,
  materialTealTheme,
  tealTheme,
  blueTheme,
  brownTheme,
  purpleTheme,
  greenTheme,
  redTheme,
  blackTheme,
  pinkTheme,
  violetTheme,
  orangeTheme,
  yellowTheme,
  materialLightTheme,
} from "./theme";
import { GlobalStyles } from "./global";
import useThemeStore from "./store/store";

function App() {
  const theme = useThemeStore((state) => state.theme);

  let selectedTheme;

  // Switch-case statement to select the theme
  switch (theme) {
    case "white":
      selectedTheme = materialTealTheme;
      break;
    case "blue":
      selectedTheme = blueTheme;
      break;
    case "gray":
      selectedTheme = materialDarkTheme;
      break;
    case "dark":
      selectedTheme = blackTheme;
      break;
    case "teal":
      selectedTheme = tealTheme;
      break;
    case "brown":
      selectedTheme = brownTheme;
      break;
    case "purple":
      selectedTheme = purpleTheme;
      break;
    case "green":
      selectedTheme = greenTheme;
      break;
    case "red":
      selectedTheme = redTheme;
      break;
    case "pink":
      selectedTheme = pinkTheme;
      break;
    case "violet":
      selectedTheme = violetTheme;
      break;
    case "orange":
      selectedTheme = orangeTheme;
      break;
    case "yellow":
      selectedTheme = yellowTheme;
      break;
    case "light":
      selectedTheme = materialLightTheme;
      break;
    default:
      selectedTheme = materialTealTheme;
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={selectedTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
