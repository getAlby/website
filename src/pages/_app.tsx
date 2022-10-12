import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Mantine theme override here */
          colorScheme: "light",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          colors: {
            brand: [
              "#FEF5DE",
              "#FEE8B4",
              "#FDDD8D",
              "#FCD26A",
              "#FCC94A",
              "#FBC02D",
              "#FAB710",
              "#EBA904",
              "#D49804",
              "#BF8904",
            ],
          },
          primaryColor: "brand",
          primaryShade: 5,
          defaultRadius: 999, // 999px is a circle
          headings: {
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            sizes: {
              h1: { fontSize: "var(--h1)", fontWeight: 800, lineHeight: 1.1 },
              h2: { fontSize: "var(--h2)", fontWeight: 700, lineHeight: 1.1 },
              h3: { fontSize: "var(--h3)", fontWeight: 600, lineHeight: 1.1 },
              h4: { fontSize: "var(--h4)", fontWeight: 500, lineHeight: 1.1 },
              h5: { fontSize: "var(--h5)", fontWeight: 500, lineHeight: 1.1 },
              h6: { fontSize: "var(--h6)", fontWeight: 500, lineHeight: 1.1 },
            },
          },
          fontSizes: {
            xs: 10,
            sm: 14,
            md: 16,
            lg: 20,
            xl: 24,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
