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
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
