import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "../components/Layout";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Layout>
                    <CssBaseline />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
