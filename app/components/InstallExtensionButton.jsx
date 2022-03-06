import { ClientOnly } from "remix-utils";
import UAParser from "ua-parser-js";
import PropTypes from "prop-types";
import ChromeIcon from "../../public/images/chrome-icon.png";
import FirefoxIcon from "../../public/images/firefox-icon.png";

const InstallLinks = {
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

const BrowserIcons = {
  Firefox: FirefoxIcon,
  Chrome: ChromeIcon,
  Chromium: ChromeIcon,
};
const DefaultLink = "https://github.com/getAlby/lightning-browser-extension";

function Install({ style }) {
  var parser = new UAParser();
  const browser = parser.getBrowser();
  function renderIcon() {
    if (Object.keys(BrowserIcons).includes(browser.name)) {
      return (
        <img src={BrowserIcons[browser.name]} className="inline pr-3 max-h-8" />
      );
    }
  }
  if (style === "plain") {
    if (Object.keys(InstallLinks).includes(browser.name)) {
      const link = InstallLinks[browser.name];

      return (
        <a
          href={link}
          className="border border-black rounded-full w-32 text-center py-2"
        >
          Install Alby
        </a>
      );
    } else {
      return (
        <a
          href={DefaultLink}
          onClick={() => {
            alert(
              `We currently do not yet support ${browser.name}. But maybe you can install it from source.`
            );
          }}
          className="border border-black rounded-full text-center p-2"
        >
          Available for Firefox, Chrome, Opera and others
        </a>
      );
    }
  } else if (style === "mobile") {
    if (Object.keys(InstallLinks).includes(browser.name)) {
      const link = InstallLinks[browser.name];

      return (
        <a href={link} className="rounded-full w-32 text-center py-2">
          Install Alby
        </a>
      );
    } else {
      return (
        <a
          href={DefaultLink}
          onClick={() => {
            alert(
              `We currently do not yet support ${browser.name}. But maybe you can install it from source.`
            );
          }}
          className="rounded-full text-center p-2"
        >
          Available for Firefox, Chrome, Opera and others
        </a>
      );
    }
  } else if (style === "getstarted") {
    if (Object.keys(InstallLinks).includes(browser.name)) {
      const link = InstallLinks[browser.name];

      return (
        <a
          href={link}
          className="flex justify-center bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 px-8 rounded-full mt-4 w-48 mx-auto"
        >
          Get started
        </a>
      );
    } else {
      return (
        <a
          href={DefaultLink}
          onClick={() => {
            alert(
              `We currently do not yet support ${browser.name}. But maybe you can install it from source.`
            );
          }}
          className="flex justify-center bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 px-8 rounded-full mt-4"
        >
          Available for Firefox, Chrome, Opera and others
        </a>
      );
    }
  } else {
    if (Object.keys(InstallLinks).includes(browser.name)) {
      const link = InstallLinks[browser.name];

      return (
        <a
          href={link}
          className="mx-auto bg-[#272828] text-white font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-3 px-7 rounded-full mt-6"
        >
          {renderIcon()}
          Add To {browser.name}
        </a>
      );
    } else {
      return (
        <a
          href={DefaultLink}
          onClick={() => {
            alert(
              `We currently do not yet support ${browser.name}. But maybe you can install it from source.`
            );
          }}
          className="bg-[#272828] text-white font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-3 px-7 rounded-full mt-6"
        >
          Available for Firefox, Chrome, Opera and others
        </a>
      );
    }
  }
}

function InstallExtensionButton({ style }) {
  return (
    <ClientOnly>
      <Install style={style} />
    </ClientOnly>
  );
}

InstallExtensionButton.propTypes = {
  style: PropTypes.string,
};

Install.propTypes = {
  style: PropTypes.string,
};

export default InstallExtensionButton;
