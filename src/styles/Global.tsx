import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },
    brand2: {
      color: "$brand2",
    },
    brand3: {
      color: "$brand3",
    },
    brand4: {
      color: "$brand4",
    },
    brand5: {
      color: "$brand5",
    },
    brand7: {
      color: "$brand7",
    },
    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
    backgroundColor: "#101112",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {

  const theme = createTheme({
    colors: {
      brand1: "#ff1a4c",
      brand2: "#ff1a4ceb",
      brand3: "linear-gradient(#ff1a4c 0%,#9e1331 100%)",
      brand4: "linear-gradient(90deg,#ff1a4c 0%,#c0183c 100%)",
      brand5: "#ff1a4ceb",

      grey0: "#101112",
      grey1: "#101112",
      grey2: "#a1a1a1",
      grey3: "#8a8a8a",
      grey4: "#F8F9FA",
      grey5: "#ffffff",
      grey6: "#00ff00",

      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

      whiteFixed: "#ffffff",
      mode: "#ffffff",
    },
    sizes: {
      container: "75rem",
      containerTablet: "40rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "3rem",
      5: "4rem",
      section: "10rem",
      sectionMobile: "4rem",
    },
    fonts: {
      titles: '"IBM Plex Sans", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};
