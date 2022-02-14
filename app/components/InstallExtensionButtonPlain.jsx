import { ClientOnly } from "remix-utils";
import UAParser from "ua-parser-js";

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

const DefaultLink = "https://github.com/getAlby/lightning-browser-extension";

function Install() {
  var parser = new UAParser();
  const browser = parser.getBrowser();

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
        className="border border-black rounded-full text-center py-2"
      >
        Available for Firefox, Chrome, Opera and others
      </a>
    );
  }
}

function InstallExtensionButtonPlain() {
  return (
    <ClientOnly>
      <Install />
    </ClientOnly>
  );
}

export default InstallExtensionButtonPlain;
