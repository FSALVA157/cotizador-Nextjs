// import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import darkTheme from "@/themes/dark-theme";
import lightTheme from "@/themes/light-theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { CarsProvider } from "../context/cars/CarsProvider";
import { useState } from "react";
import { Theme } from "@emotion/react";


export default function App({ Component, pageProps }: AppProps) {
const [activeTheme, setActiveTheme] = useState<Theme>(lightTheme)



// const toggleTheme = (newTheme: Theme) => {
//   setActiveTheme(newTheme)  
// }

  
  return (
    <CarsProvider>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} toggleTheme={setActiveTheme} selectedTheme={activeTheme}/>
        </Layout>
      </ThemeProvider>
    </CarsProvider>
  );
}
