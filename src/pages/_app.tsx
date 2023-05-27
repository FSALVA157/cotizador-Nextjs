// import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import darkTheme from "@/themes/dark-theme";
import lightTheme from "@/themes/light-theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
