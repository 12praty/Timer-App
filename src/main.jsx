import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App.jsx";
import StateProvider from "./components/StateProvider.jsx";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    background-color:${(props) => props.theme.colors.bg};;
    color: white; /* Added text color for visibility */
    font-size: 62.5%;/*made 1 rem = 10 pixel*/
  }
  body{
    font-size: 1.6rem;
  }
`;

const theme = {
  colors: {
    primary: "#b85600",
    secondary: "#08002b",
    bg: "#150129",
  },
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </StrictMode>
);
