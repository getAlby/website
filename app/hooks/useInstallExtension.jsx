import { useState, useEffect } from "react";
import UAParser from "ua-parser-js";

import ChromeIcon from "../../public/images/chrome-icon.png";
import FirefoxIcon from "../../public/images/firefox-icon.png";

const installLinks = {
  Firefox: "https://addons.mozilla.org/en-US/firefox/addon/alby/",
  Chrome:
    "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  Chromium:
    "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  Vivaldi:
    "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  Brave:
    "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  Opera:
    "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
};

const browserIcons = {
  Firefox: FirefoxIcon,
  Chrome: ChromeIcon,
  Chromium: ChromeIcon,
};
const defaultLink = "https://github.com/getAlby/lightning-browser-extension";

export default function useInstallExtension() {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    var parser = new UAParser();
    setBrowser(parser.getBrowser().name);
  }, []);

  return {
    browser,
    icon: browserIcons[browser],
    link: installLinks[browser],
    defaultLink,
    loading: browser === "",
  };
}
