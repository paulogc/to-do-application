// import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Navbar from "../src/ui/Navbar";
import theme from "../app/theme";

function MyApp({ Component, pageProps }) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
