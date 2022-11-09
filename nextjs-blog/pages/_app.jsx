import Head from "next/head";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import {DataProvider} from "../contexts/data";
import {useMemo} from "react";
import {breakpoints, componentsOverride, getDesignTokens, getTypography} from "../lib/theme";

export default function MyApp(props) {
  const { Component, pageProps } = props

  const theme = useMemo(() => {
    const initThemeWithBreakpoints = createTheme(
      breakpoints,
      getDesignTokens('light'),
      componentsOverride
    );

    return createTheme(
      initThemeWithBreakpoints,
      getTypography(initThemeWithBreakpoints)
    );
  }, []);

  return (
    <>
      <Head>
        <title>My app</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </ThemeProvider>
    </>
  )
}
