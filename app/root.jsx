import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import AlbyHeadIcon from "../public/images/alby_icon_head_icon.png";
import OGImage from "../public/images/og_image.png";
import styles from "./tailwind.css";
import extendStyles from "./styles/tailwind.css";

export function links() {
  return [
    { rel: "icon", href: AlbyHeadIcon, type: "image/png" },
    { rel: "preload", href: "/fonts/Inter-roman.var.woff2", as: "font", type: "font/woff2", importance: "high", crossOrigin: "anonymous" },
    { rel: "preload", href: "/fonts/Inter-Bold.woff2", as: "font", type: "font/woff2", importance: "high", crossOrigin: "anonymous" },
    { rel: "preload", href: "/fonts/Inter-Regular.woff2", as: "font", type: "font/woff2", importance: "high", crossOrigin: "anonymous" },
    { rel: "preload", href: "/fonts/Catamaran-Black.woff2", as: "font", type: "font/woff2", importance: "high", crossOrigin: "anonymous" },
    { rel: "preload", href: "/fonts/Catamaran-Regular.woff2", as: "font", type: "font/woff2", importance: "high", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: extendStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="title" content="Alby — Lightning buzz for your Browser!"/>
        <meta name="description" content="Alby brings Bitcoin to the web with in-browser payments and identity."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://getalby.com/"/>
        <meta property="og:title" content="Alby — Lightning buzz for your Browser!"/>
        <meta property="og:description" content="Alby brings Bitcoin to the web with in-browser payments and identity."/>
        <meta property="og:image" content={`https://getalby.com${OGImage}`}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://getalby.com/"/>
        <meta property="twitter:title" content="Alby — Lightning buzz for your Browser!"/>
        <meta property="twitter:description" content="Alby brings Bitcoin to the web with in-browser payments and identity."/>
        <meta property="twitter:image" content={`https://getalby.com${OGImage}`}/>

        <script defer src="https://unpkg.com/@tryghost/portal@~2.2.0/umd/portal.min.js" data-ghost="https://blog.getalby.com/" data-key="607246d96432a05b400006a475" data-api="https://alby.ghost.io/ghost/api/content/" crossOrigin="anonymous"></script>
        <script defer data-domain="getalby.com" src="https://squirrel.getalby.com/js/plausible.js"></script>

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
