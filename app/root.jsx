import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import AlbyHeadIcon from "../public/images/alby_icon_head_icon.png";
import styles from "./tailwind.css";
import extendStyles from "./styles/tailwind.css";

export function links() {
  return [
    {
      rel: "icon",
      href: AlbyHeadIcon,
      type: "image/png"
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
