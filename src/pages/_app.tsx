// import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import { CarsContext } from "@/context/cars";
import darkTheme from "@/themes/dark-theme";
import lightTheme from "@/themes/light-theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { CarsProvider } from "../context/cars/CarsProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarsProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CarsProvider>
  );
}
