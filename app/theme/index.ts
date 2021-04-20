import darkTheme from "./dark";
import defaultTheme from "./default";

const getTheme = () => {
  if (process.browser) {
    const isDarkTheme = localStorage.getItem("isDarkTheme") === "true";

    if (isDarkTheme) return darkTheme;

    return defaultTheme;
  }

  return defaultTheme;
};

export default getTheme();
