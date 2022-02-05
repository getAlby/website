import { ClientOnly } from "remix-utils";
import UAParser from "ua-parser-js";

import ChromeIcon from "../../public/images/chrome-icon.png";
import FirefoxIcon from "../../public/images/firefox-icon.png";

const InstallLinks = {
  "Firefox": "https://addons.mozilla.org/en-US/firefox/addon/alby/",
  "Chrome": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Chromium" : "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Vivaldi": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Brave": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Opera": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
};

const BrowserIcons = {
  "Firefox": FirefoxIcon,
  "Chrome": ChromeIcon,
  "Chromium": ChromeIcon
}
const DefaultLink = "https://github.com/getAlby/lightning-browser-extension";

function Install() {
  var parser = new UAParser();
  const browser = parser.getBrowser();
  function renderIcon() {
    if (Object.keys(BrowserIcons).includes(browser.name)) {
      return <img src={BrowserIcons[browser.name]} className="inline pr-3 max-h-8" />;
    }
  }
  if (Object.keys(InstallLinks).includes(browser.name)) {
    const link = InstallLinks[browser.name];

    return (
      <a href={link} className="bg-white text-black border-[3px] border-solid border-[#333333] font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full mt-6">
        {renderIcon()}
        Add To {browser.name}
      </a>
    );
  } else {
    return (
      <a href={DefaultLink} onClick={() => {alert(`We currently do not yet support ${browser.name}. But maybe you can install it from source.`)}} className="bg-white text-black border-[3px] border-solid border-[#333333] font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full mt-6">
        Available for Firefox, Chrome, Opera and others
      </a>
    );
  }

}

function InstallExtensionButton() {
  return (
    <ClientOnly>
      <Install />
    </ClientOnly>
  )
}

export default InstallExtensionButton;
