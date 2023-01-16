import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import AlbyHeadIcon from "../public/images/alby_icon_head_icon.png";
import CatamaranThin from "../public/fonts/Catamaran-Thin.woff2";
import CatamaranExtraLight from "../public/fonts/Catamaran-ExtraLight.woff2";
import CatamaranLight from "../public/fonts/Catamaran-Light.woff2";
import CatamaranRegular from "../public/fonts/Catamaran-Regular.woff2";
import CatamaranMedium from "../public/fonts/Catamaran-Medium.woff2";
import CatamaranSemiBold from "../public/fonts/Catamaran-SemiBold.woff2";
import CatamaranBold from "../public/fonts/Catamaran-Bold.woff2";
import CatamaranExtraBold from "../public/fonts/Catamaran-ExtraBold.woff2";
import CatamaranBlack from "../public/fonts/Catamaran-Black.woff2";
import InterThin from "../public/fonts/Inter-Thin.woff2";
import InterThinItalic from "../public/fonts/Inter-ThinItalic.woff2";
import InterExtraLight from "../public/fonts/Inter-ExtraLight.woff2";
import InterExtraLightItalic from "../public/fonts/Inter-ExtraLightItalic.woff2";
import InterLight from "../public/fonts/Inter-Light.woff2";
import InterLightItalic from "../public/fonts/Inter-LightItalic.woff2";
import InterRegular from "../public/fonts/Inter-Regular.woff2";
import InterItalic from "../public/fonts/Inter-Italic.woff2";
import InterMedium from "../public/fonts/Inter-Medium.woff2";
import InterMediumItalic from "../public/fonts/Inter-MediumItalic.woff2";
import InterSemiBold from "../public/fonts/Inter-SemiBold.woff2";
import InterSemiBoldItalic from "../public/fonts/Inter-SemiBoldItalic.woff2";
import InterBold from "../public/fonts/Inter-Bold.woff2";
import InterBoldItalic from "../public/fonts/Inter-BoldItalic.woff2";
import InterExtraBold from "../public/fonts/Inter-ExtraBold.woff2";
import InterExtraBoldItalic from "../public/fonts/Inter-ExtraBoldItalic.woff2";
import InterBlack from "../public/fonts/Inter-Black.woff2";
import InterBlackItalic from "../public/fonts/Inter-BlackItalic.woff2";
import InterRomanVar from "../public/fonts/Inter-roman.var.woff2";
import InterItalicVar from "../public/fonts/Inter-italic.var.woff2";
import InterVar from "../public/fonts/Inter.var.woff2";
import OGImage from "../public/images/og_image.png";
import styles from "./tailwind.css";
import extendStyles from "./styles/tailwind.css";

const fontfaces = `
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 100;
  src: url(${CatamaranThin}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 200;
  src: url(${CatamaranExtraLight}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 300;
  src: url(${CatamaranLight}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 400;
  src: url(${CatamaranRegular}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 500;
  src: url(${CatamaranMedium}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 600;
  src: url(${CatamaranSemiBold}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 700;
  src: url(${CatamaranBold}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 800;
  src: url(${CatamaranExtraBold}) format('woff2');
}
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 900;
  src: url(${CatamaranBlack}) format('woff2');
}


/* 2. Inter fonts

------------------------- static ------------------------- */

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 100;
  src: url(${InterThin}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 100;
  src: url(${InterThinItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 200;
  src: url(${InterExtraLight}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 200;
  src: url(${InterExtraLightItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300;
  src: url(${InterLight}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 300;
  src: url(${InterLightItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 400;
  src: url(${InterRegular}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 400;
  src: url(${InterItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  src: url(${InterMedium}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 500;
  src: url(${InterMediumItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 600;
  src: url(${InterSemiBold}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 600;
  src: url(${InterSemiBoldItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 700;
  src: url(${InterBold}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 700;
  src: url(${InterBoldItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 800;
  src: url(${InterExtraBold}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 800;
  src: url(${InterExtraBoldItalic}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 900;
  src: url(${InterBlack}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 900;
  src: url(${InterBlackItalic}) format('woff2');
}


/* ----------------------- variable ----------------------- */

@font-face {
  font-family: 'Inter var';
  font-style: normal;
  font-weight: 100 900;
  src: url(${InterRomanVar}) format('woff2');
  font-named-instance: 'Regular';
}

@font-face {
  font-family: 'Inter var';
  font-style: italic;
  font-weight: 100 900;
  src: url(${InterItalicVar}) format('woff2');
  font-named-instance: 'Italic';
}


/* ----------- experimental multi-axis variable ----------- */

@font-face {
  font-family: 'Inter var experimental';
  font-style: oblique 0deg 10deg;
  font-weight: 100 900;
  src: url(${InterVar}) format('woff2');
}

/* Legacy name (became legacy on Feb 2, 2019) */
@font-face {
  font-family: 'Inter var alt';
  font-weight: 100 900;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url(${InterRomanVar}) format('woff2');
}
@font-face {
  font-family: 'Inter var alt';
  font-weight: 100 900;
  font-style: italic;
  font-named-instance: 'Italic';
  src: url(${InterItalicVar}) format('woff2');
}`;

export function links() {
  return [
    { rel: "icon", href: AlbyHeadIcon, type: "image/png" },
    {
      rel: "preload",
      href: "/fonts/Interroman.var.woff2",
      as: "font",
      type: "font/woff2",
      importance: "high",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/InterBold.woff2",
      as: "font",
      type: "font/woff2",
      importance: "high",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/InterRegular.woff2",
      as: "font",
      type: "font/woff2",
      importance: "high",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/CatamaranBlack.woff2",
      as: "font",
      type: "font/woff2",
      importance: "high",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/CatamaranRegular.woff2",
      as: "font",
      type: "font/woff2",
      importance: "high",
      crossOrigin: "anonymous",
    },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: extendStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content="Alby — Lightning buzz for your Browser!" />
        <meta
          name="description"
          content="Alby brings Bitcoin to the web with in-browser payments and identity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getalby.com/" />
        <meta
          property="og:title"
          content="Alby — Lightning buzz for your Browser!"
        />
        <meta
          property="og:description"
          content="Alby brings Bitcoin to the web with in-browser payments and identity."
        />
        <meta property="og:image" content={`https://getalby.com${OGImage}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://getalby.com/" />
        <meta
          property="twitter:title"
          content="Alby — Lightning buzz for your Browser!"
        />
        <meta
          property="twitter:description"
          content="Alby brings Bitcoin to the web with in-browser payments and identity."
        />
        <meta
          property="twitter:image"
          content={`https://getalby.com${OGImage}`}
        />

        <script
          defer
          src="https://unpkg.com/@tryghost/portal@~2.2.0/umd/portal.min.js"
          data-ghost="https://blog.getalby.com/"
          data-key="607246d96432a05b400006a475"
          data-api="https://alby.ghost.io/ghost/api/content/"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          data-domain="getalby.com"
          src="https://plausible.io/js/script.js"
        ></script>
        <style dangerouslySetInnerHTML={{__html: fontfaces}} />

        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
