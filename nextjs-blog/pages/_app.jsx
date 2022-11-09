import Head from "next/head";
import {CssBaseline, ThemeProvider} from "@mui/material";

import {DataProvider} from "../contexts/data";
import {theme} from "../lib/theme";
import {store} from "../store";
import {Provider} from "react-redux";
import '../App.css'

export default function MyApp(props) {
  const { Component, pageProps } = props

  // Pour custom un peu plus le theme
  // const theme = useMemo(() => {
  //   const initThemeWithBreakpoints = createTheme(
  //     breakpoints,
  //     getDesignTokens('light'),
  //     componentsOverride
  //   );
  //
  //   return createTheme(
  //     initThemeWithBreakpoints,
  //     getTypography(initThemeWithBreakpoints)
  //   );
  // }, []);

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}
