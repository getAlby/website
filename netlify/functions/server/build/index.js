var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/bumi/src/lightning/alby/website/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// public/images/alby_icon_head_icon.png
var alby_icon_head_icon_default = "/build/_assets/alby_icon_head_icon-ICVYH45J.png";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Y3WLJ5IG.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-3EVDSPAK.css";

// route-module:/Users/bumi/src/lightning/alby/website/app/root.jsx
function links() {
  return [
    {
      rel: "icon",
      href: alby_icon_head_icon_default,
      type: "image/png"
    },
    {
      rel: "preload",
      href: "/images/diamond-wallet-layer.svg",
      as: "image",
      type: "image/svg+xml"
    },
    {
      rel: "preload",
      href: "/images/diamond-footer.svg",
      as: "image",
      type: "image/svg+xml"
    },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: tailwind_default2 }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/Users/bumi/src/lightning/alby/website/app/routes/privacy-policy.jsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => privacyPolicy
});
init_react();

// app/components/Navigation.jsx
init_react();

// public/images/logo.svg
var logo_default = "/build/_assets/logo-WIC6GJUP.svg";

// public/images/banner-illustration.png
var banner_illustration_default = "/build/_assets/banner-illustration-6TEH4U4S.png";

// public/images/telegram.png
var telegram_default = "/build/_assets/telegram-R7XR6VN6.png";

// public/images/twitter.png
var twitter_default = "/build/_assets/twitter-XMKQ5RAT.png";

// public/images/github.png
var github_default = "/build/_assets/github-5FT2OTLC.png";

// public/images/do-it-hint.png
var do_it_hint_default = "/build/_assets/do-it-hint-GU2RTDC7.png";

// app/components/InstallExtensionButton.jsx
init_react();
var import_remix_utils = __toModule(require("remix-utils"));
var import_ua_parser_js = __toModule(require("ua-parser-js"));

// public/images/chrome-icon.png
var chrome_icon_default = "/build/_assets/chrome-icon-XLYL4YKL.png";

// public/images/firefox-icon.png
var firefox_icon_default = "/build/_assets/firefox-icon-GTJ3DFFB.png";

// app/components/InstallExtensionButton.jsx
var InstallLinks = {
  "Firefox": "https://addons.mozilla.org/en-US/firefox/addon/alby/",
  "Chrome": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Chromium": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Vivaldi": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Brave": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
  "Opera": "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe"
};
var BrowserIcons = {
  "Firefox": firefox_icon_default,
  "Chrome": chrome_icon_default,
  "Chromium": chrome_icon_default
};
var DefaultLink = "https://github.com/getAlby/lightning-browser-extension";
function Install() {
  var parser = new import_ua_parser_js.default();
  const browser = parser.getBrowser();
  function renderIcon() {
    if (Object.keys(BrowserIcons).includes(browser.name)) {
      return /* @__PURE__ */ React.createElement("img", {
        src: BrowserIcons[browser.name],
        className: "inline pr-3 max-h-8"
      });
    }
  }
  if (Object.keys(InstallLinks).includes(browser.name)) {
    const link = InstallLinks[browser.name];
    return /* @__PURE__ */ React.createElement("a", {
      href: link,
      className: "bg-white text-black border-[3px] border-solid border-[#333333] font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full mt-6"
    }, renderIcon(), "Add To ", browser.name);
  } else {
    return /* @__PURE__ */ React.createElement("a", {
      href: DefaultLink,
      onClick: () => {
        alert(`We currently do not yet support ${browser.name}. But maybe you can install it from source.`);
      },
      className: "bg-white text-black border-[3px] border-solid border-[#333333] font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full mt-6"
    }, "Available for Firefox, Chrome, Opera and others");
  }
}
function InstallExtensionButton() {
  return /* @__PURE__ */ React.createElement(import_remix_utils.ClientOnly, null, /* @__PURE__ */ React.createElement(Install, null));
}
var InstallExtensionButton_default = InstallExtensionButton;

// app/components/Navigation.jsx
function Navigation() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 pb-8 lg:pb-0 items-center absolute w-[93.194%] justify-center lg:justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_default,
    alt: "Alby",
    className: "w-[12.5rem] text-black lg:w-auto lg:h-[3.75rem] h-24"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:flex items-end gap-5 justify-between xl:pt-0 pt-3"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram",
    className: "w-[1.875rem] h-[1.875rem] mb-4"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/getalby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_default,
    alt: "Twitter",
    className: "w-[1.875rem] h-[1.875rem]  mb-4"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub",
    className: "w-[1.875rem] h-[1.875rem]  mb-4"
  })), /* @__PURE__ */ React.createElement(InstallExtensionButton_default, null)));
}
var Navigation_default = Navigation;

// route-module:/Users/bumi/src/lightning/alby/website/app/routes/privacy-policy.jsx
function privacyPolicy() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[93.194%] mx-auto "
  }, /* @__PURE__ */ React.createElement(Navigation_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-20 mt-22 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-secondary"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "doc",
    style: { width: "50%", margin: "0 auto" },
    className: "markdown-body container-fluid comment-inner comment-enabled",
    "data-hard-breaks": "true"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "lg:text-2xl text-xl font-normal",
    id: "Data-protection-notice",
    "data-id": "Data-protection-notice"
  }, /* @__PURE__ */ React.createElement("span", null, "Data protection notice")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "http://getalby.com",
    target: "_blank",
    rel: "noopener"
  }, /* @__PURE__ */ React.createElement("span", null, "getalby.com")), /* @__PURE__ */ React.createElement("span", null, " (hereinafter \u201CAlby\u201D or \u201CWe\u201D or \u201CUs\u201D) welcomes you to our internet page and browser extension (together also referred to as \u201COnline Offers\u201D). We thank you for your interest in our company and our products.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "1. Alby respects your privacy"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "The protection of your privacy throughout the course of processing personal data as well as the security of all business data are important concerns to us. We process personal data that was gathered during your visit of our Online Offers confidentially and only in accordance with statutory regulations."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Data protection and information security are included in our corporate policy.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "2. Controller")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Alby is the controller responsible for the processing of your data; exceptions are outlined in this data protection notice."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Our contact details are as follows: Moritz Kaminski, "), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:moritz@getalby.com",
    target: "_blank",
    rel: "noopener"
  }, /* @__PURE__ */ React.createElement("span", null, "moritz@getalby.com"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "3. Collection, processing and usage of personal data"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.1 Processed categories of data"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Communication data, transaction data, lightning node authentication data are processed")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.2 Principles"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Personal data consists of all information related to an identified or identifiable natural person, this includes, e.g. names, addresses, phone numbers, email addresses, contractual master data, contract accounting and payment data, which is an expression of a person\u2019s identity."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We collect, process and use personal data (including IP addresses) only when there is either a statutory legal basis to do so or if you have given your consent to the processing or use of personal data concerning this matter, e.g. by means of registration.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3. Processing purposes and legal basis"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We as well as the service providers commissioned by us; process your personal data for the following processing purposes:")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.1 Provision of these Online Offers"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Legitimate interest as long as this occurs in accordance with data protection and competition law.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.2 Resolving service disruptions as well as for security reasons."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Fulfillment of our legal obligations within the scope of data security and legitimate interest in resolving service disruptions as well as in the protection of our offers.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.3 Self-promotion and promotion by others as well as market research and reach analysis done within the scope statutorily permitted or based on consent."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Consent or legitimate interest on our part in direct marketing if in accordance with data protection and competition law.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.4 Product or customer surveys performed via email and/or telephone subject to your prior express consent."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Consent")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.5 Sending an email or SMS/MMS newsletter subject to the recipient\u2019s consent"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Consent.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.3.6 Safeguarding and defending our rights."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Legal basis: Legitimate interest on our part for safeguarding and defending our rights.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.4 Log files"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Each time you use the internet, your browser is transmitting certain information which we store in so-called log files."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We store log files to determine service disruptions and for security reasons (e.g., to investigate attack attempts) for a period of 60 days and delete them afterwards. Log files which need to be maintained for evidence purposes are excluded from deletion until the respective incident is resolved and may, on a case-by-case basis, be passed on to investigating authorities.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "Log files are also used for analysis purposes (without the IP address or without the complete IP address) see module \u201CAdvertisements and/or market research (including web analysis, no customer surveys)\u201D."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "In log files, the following information is saved:")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "IP address (internet protocol address) of the terminal device used to access the Online Offer;")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Internet address of the website from which the Online Offer is accessed (so-called URL of origin or referrer URL);")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Name of the service provider which was used to access the Online Offer;")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Name of the files or information accessed;")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Date and time as well as duration of recalling the data;")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Amount of data transferred;")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Operating system and information on the internet browser used, including add-ons installed (e.g., Flash Player);")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "http status code (e.g., \u201CRequest successful\u201D or \u201CFile requested not found\u201D)."))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.5 Children"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "This Online Offer is not meant for children under 16 years of age.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.6 Data transfer")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.6.1 Data transfer to other controllers"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Principally, your personal data is forwarded to other controllers only if required for the fulfillment of a contractual obligation, or if we ourselves, or a third party, have a legitimate interest in the data transfer, or if you have given your consent. Particulars on the legal basis and the recipients or categories of recipients can be found in the Section \u2013 Processing purposes and legal basis. Additionally, data may be transferred to other controllers when we are obliged to do so due to statutory regulations or enforceable administrative or judicial orders.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.6.2 Service providers (general)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We involve external service providers with tasks such as sales and marketing services, contract management, payment handling, programming, data hosting     . We have chosen those service providers carefully and monitor them on a regular basis, especially regarding their diligent handling of and protection of the data that they store. All service providers are obliged to maintain confidentiality and to comply with the statutory provisions.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.6.3 Transfer to recipients outside the EEA"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We might transfer personal data to recipients located outside the EEA into so-called third countries. In such cases, prior to the transfer we ensure that either the data recipient provides an appropriate level of data protection or that you have consented to the transfer. You are entitled to receive an overview of third country recipients and a copy of the specifically agreed-provisions securing an appropriate level of data protection. For this purpose, please use the statements made in the Contact section.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "3.7 Duration of storage, retention periods"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Principally, we store your data for as long as it is necessary to render our Online Offers and connected services or for as long as we have a legitimate interest in storing the data. In all other cases we delete your personal data with the exception of data we are obliged to store for the fulfillment of legal obligations (e.g. due to retention periods under the tax and commercial codes we are obliged to have documents such as contracts and invoices available for a certain period of time).")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "4. Usage of Cookies"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "In the context of our online service, cookies and tracking mechanisms may be used. Cookies are small text files that may be stored on your device when visiting our online service. Tracking is possible using different technologies. In particular, we process information using pixel technology and/or during log file analysis.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.1 Categories"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We distinguish between cookies that are mandatorily required for the technical functions of the online service and such cookies and tracking mechanisms that are not mandatorily required for the technical function of the online service."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "It is generally possible to use the online service without any cookies that serve non-technical purposes.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.1.1 Technically required cookies"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "By technically required cookies we mean cookies without those the technical provision of the online service cannot be ensured."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Such cookies will be deleted when you leave the website.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.1.2 Cookies and tracking mechanisms that are technically not required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We only use cookies and tracking mechanisms if you have given us your prior consent in each case. With the exception of the cookie that saves the current status of your privacy settings (selection cookie). This cookie is set based on legitimate interest."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We distinguish between two sub-categories with regard to these cookies and tracking mechanisms:")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.1.3 Comfort cookies"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "These cookies facilitate operation and thus allow you to browse our online service more comfortably; e.g. your language settings may be included in these cookies.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.2 Management of cookies and tracking mechanisms"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "You can manage your cookie and tracking mechanism settings in the browser"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Note: The settings you have made refer only to the browser used in each case.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "4.2.1 Deactivation of all cookies"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "If you wish to deactivate all cookies, please deactivate cookies in your browser settings. Please note that this may affect the functionality of the website.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "5. Data processing by App Store operators")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We do not collect data, and it is beyond our responsibility, when data, such as username, email address and individual device identifier are transferred to an app store (e.g., Google Web Store, Firefox Add-ons) when downloading the respective application. We are unable to influence this data collection and further processing by the App Store as controller.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "6. Communication tools on social media platforms")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We use on our social media platform (e.g. twitter) communication tools to process your messages sent via this social media platform and to offer you support."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "When sending a message via our social media platform the message is processed to handle your query (and if necessary additional data, which we receive from the social media provider in connection with this message as your name or files)."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "In addition we can analyze these data in an aggregated and anonymized form in order to better understand how our social media platform is used."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "The legal basis for the processing of your data is our legitimate interest (Art. 6 para. 1 s. 1 lit. f GDPR) or, if applicable, an existing contractual relationship (Art. 6 para. 1 s. 1 lit. b GDPR).")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "7. Newsletter with opt-in; Right of withdrawal")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Within the scope of our Online Offers you can sign up for newsletters. We provide the so-called double opt-in option which means that we will only send you a newsletter via email, mobile messenger (such as, e.g. WhatsApp), SMS or push notification after you have explicitly confirmed the activation of the newsletter service to us by clicking on the link in a notification. In case you wish to no longer receive newsletters, you can terminate the subscription at any time by withdrawing your consent. You can withdraw your consent to email newsletters by clicking on the link which is sent in the respective newsletter mail, or in the administrative settings of the online offer. Alternatively, please contact us via the contact details provided in the Contact section.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "8. External links")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Our Online Offers may contain links to internet pages of third parties, in particular providers who are not related to us. Upon clicking on the link, we have no influence on the collecting, processing and use of personal data possibly transmitted by clicking on the link to the third party (such as the IP address or the URL of the site on which the link is located) as the conduct of third parties is naturally beyond our control. We do not assume responsibility for the processing of personal data by third parties.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "9. Security")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Our employees and the companies providing services on our behalf, are obliged to confidentiality and to compliance with the applicable data protection laws."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We take all necessary technical and organizational measures to ensure an appropriate level of security and to protect your data that are administrated by us especially from the risks of unintended or unlawful destruction, manipulation, loss, change or unauthorized disclosure or unauthorized access. Our security measures are, pursuant to technological progress, constantly being improved.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "10. User rights")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "To enforce your rights, please use the details provided in the Contact section. In doing so, please ensure that an unambiguous identification of your person is possible.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.1 Right to information and access"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "You have the right to obtain confirmation from us about whether or not your personal data is being processed, and, if this is the case, access to your personal data.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.2 Right to correction and deletion"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "You have the right to obtain the rectification of inaccurate personal data.  As far as statutory requirements are fulfilled, you have the right to obtain the completion or deletion of your data."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "This does not apply to data which is necessary for billing or accounting purposes or which is subject to a statutory retention period. If access to such data is not required, however, its processing is restricted (see the following).")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.3 Restriction of processing"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "As far as statutory requirements are fulfilled you have the right to demand for restriction of the processing of your data.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.4 Data portability"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "As far as statutory requirements are fulfilled you may request to receive data that you have provided to us in a structured, commonly used and machine-readable format or \u2013 if technically feasible \u2013that we transfer those data to a third party.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.5 Right of objection"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "10.5.1 Objection to direct marketing"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Additionally, you may object to the processing of your personal data for direct marketing purposes at any time. Please take into account that due to organizational reasons, there might be an overlap between your objection and the usage of your data within the scope of a campaign which is already running.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.5.2 Objection to data processing based on the legal basis of \u201Clegitimate interest\u201D"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "In addition, you have the right to object to the processing of your personal data at any time, insofar as this is based on \u201Clegitimate interest\u201D. We will then terminate the processing of your data, unless we demonstrate compelling legitimate grounds according to legal requirements which override your rights.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.6 Withdrawal of consent"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "In case you consented to the processing of your data, you have the right to revoke this consent at any time with effect for the future. The lawfulness of data processing prior to your withdrawal remains unchanged.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "10.7 Right to lodge complaint with supervisory authority:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "You have the right to lodge a complaint with a supervisory authority. You can appeal to the supervisory authority which is responsible for your place of residence or your state of residency or to the supervisory authority responsible for us."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "This is:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Federal Commissioner for Data Protection and Information"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Feldeggweg 1"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "CH - 3003 Bern"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Schweiz"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Telefon: +41 (0)58 462 43 95"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Homepage: "), /* @__PURE__ */ React.createElement("a", {
    href: "http://www.edoeb.admin.ch",
    target: "_blank",
    rel: "noopener"
  }, /* @__PURE__ */ React.createElement("span", null, "http://www.edoeb.admin.ch"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "11. Changes to the Data Protection Notice")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "We reserve the right to change our security and data protection measures. In such cases, we will amend our data protection notice accordingly. Please, therefore, notice the current version of our data protection notice, as this is subject to changes.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("span", null, "12. Contact")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "If you wish to contact us, please find us at the address stated in the \u201CController\u201D section.")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "Effective date: 2021.11.03"))))));
}

// route-module:/Users/bumi/src/lightning/alby/website/app/routes/value4value.jsx
var value4value_exports = {};
__export(value4value_exports, {
  default: () => Index,
  meta: () => meta
});
init_react();

// app/components/Footer.jsx
init_react();

// public/images/right-bee.svg
var right_bee_default = "/build/_assets/right-bee-KYOFL22K.svg";

// public/images/left-bee.svg
var left_bee_default = "/build/_assets/left-bee-XBDAIRXK.svg";

// public/images/pointer.svg
var pointer_default = "/build/_assets/pointer-ELH565BS.svg";

// public/images/Telegram.svg
var Telegram_default = "/build/_assets/Telegram-TN7KZNK4.svg";

// public/images/twitter-logo.svg
var twitter_logo_default = "/build/_assets/twitter-logo-ZJQWD2HR.svg";

// public/images/GitHub.svg
var GitHub_default = "/build/_assets/GitHub-F6ASPHY2.svg";

// app/components/Footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white z-10 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center hover:cursor-pointer mt-16 lg:mt-24 py-8 lg:py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[91.46%] lg:w-[85.76%] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "z-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative"
  }, "You don\u2019t have a Lightning Address yet?", /* @__PURE__ */ React.createElement("span", {
    className: "absolute top-1/2 md:top-[82%] right-0 lg:right-[27.5%] hidden lg:inline-block"
  }, " ", /* @__PURE__ */ React.createElement("img", {
    src: pointer_default
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "/lightning-address"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-3 lg:py-4 px-4 lg:px-16 rounded-[1.875rem] mt-4"
  }, "Learn more")), /* @__PURE__ */ React.createElement("img", {
    src: right_bee_default,
    alt: "Right Bee",
    className: "w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%] hidden md:block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: left_bee_default,
    alt: "Left Bee",
    className: "w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[91%] hidden md:block"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end bg-albyYellow-300 py-14 lg:py-32 mt-16 lg:mt-32"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto"
  }, "Do you have feedback or need help?"), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-[52.84%] w-11/12 mx-auto pt-8 text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800"
  }, "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online. We love to hear from you. File a", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby/lightning-browser-extension/issues",
    className: "underline"
  }, "Github issue"), " ", "or join the", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    className: "underline"
  }, "Telegram channel"), "."), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-center pt-10"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/getalby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_logo_default,
    alt: "Twitter Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Telegram_default,
    alt: "Telegram Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: GitHub_default,
    alt: "GitHub Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://getalby.com/privacy-policy",
    className: "text-center lg:text-2xl text-base font-primary underline pt-5"
  }, "Privacy Policy"))));
}
var Footer_default = Footer;

// app/components/Header.jsx
init_react();

// public/images/header-illustration.svg
var header_illustration_default = "/build/_assets/header-illustration-5GG2CTWV.svg";

// public/images/button-below.svg
var button_below_default = "/build/_assets/button-below-Y2YUHB4G.svg";

// public/images/header-below.svg
var header_below_default = "/build/_assets/header-below-7GSV5UJ7.svg";

// public/images/group-diamond.svg
var group_diamond_default = "/build/_assets/group-diamond-VZXRWIZY.svg";

// app/components/Header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 lg:min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-[93.194%] w-[91.46%] mx-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 items-center absolute lg:w-[93.194%] w-[91.46%] justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_default,
    alt: "Alby",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-between relative"
  }, /* @__PURE__ */ React.createElement(InstallExtensionButton_default, null), /* @__PURE__ */ React.createElement("img", {
    src: button_below_default,
    alt: "",
    className: "absolute w-auto hidden lg:inline-block left-[80%] top-[67%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary pt-[6.5rem] lg:pt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-6xl md:text-4xl text-3xl font-black"
  }, "Direct contributions from your audience"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-2xl text-base font-normal pt-9"
  }, "Use a Lightning Address to receive value for value payments in Bitcoin from your audience")), /* @__PURE__ */ React.createElement("div", {
    className: "pt-10 lg:pt-24"
  }, /* @__PURE__ */ React.createElement("img", {
    src: header_illustration_default,
    alt: "Alby screenshot",
    className: "mx-auto min-w-[17rem] h-auto z-10 relative"
  }), /* @__PURE__ */ React.createElement("img", {
    src: header_below_default,
    alt: "",
    className: "absolute w-auto hidden lg:inline-block left-[88%] top-[74.5%] z-0"
  })))), /* @__PURE__ */ React.createElement("img", {
    src: group_diamond_default,
    alt: "",
    className: "absolute w-auto  left-0 bottom-0 z-0 hidden lg:inline-block"
  }));
}
var Header_default = Header;

// app/components/Services.jsx
init_react();

// public/images/lines.svg
var lines_default = "/build/_assets/lines-SIFGI3T2.svg";

// public/images/wallet.svg
var wallet_default = "/build/_assets/wallet-FGXPBRZS.svg";

// public/images/waves.svg
var waves_default = "/build/_assets/waves-H4FSRQOP.svg";

// public/images/puzzle.svg
var puzzle_default = "/build/_assets/puzzle-KAQ7FVXA.svg";

// app/components/Services.jsx
function Services() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-33 xl:pb-40"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-10 xl:space-y-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: lines_default,
    alt: "lines"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-6.5"
  }, "Use existing ", /* @__PURE__ */ React.createElement("br", null), "platforms")), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: wallet_default,
    alt: "wallet"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-6.5"
  }, "Receive payments", /* @__PURE__ */ React.createElement("br", null), " directly"))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: waves_default,
    alt: "waves"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-5"
  }, "Non-intrusive and", /* @__PURE__ */ React.createElement("br", null), " frictionless for your", /* @__PURE__ */ React.createElement("br", null), " audience")), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center mr-2.5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: puzzle_default,
    alt: "puzzle"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-5"
  }, "Simple integration;", /* @__PURE__ */ React.createElement("br", null), " no coding skills", /* @__PURE__ */ React.createElement("br", null), " needed")))));
}

// app/components/Payment.jsx
init_react();

// public/images/code.svg
var code_default = "/build/_assets/code-YNBT4BTR.svg";

// public/images/code-mobile.svg
var code_mobile_default = "/build/_assets/code-mobile-A25557KS.svg";

// public/images/twitter-illustration.svg
var twitter_illustration_default = "/build/_assets/twitter-illustration-UG66NKDG.svg";

// public/images/twitter-mobile.svg
var twitter_mobile_default = "/build/_assets/twitter-mobile-ZWJETH3E.svg";

// public/images/youtube-illustration.svg
var youtube_illustration_default = "/build/_assets/youtube-illustration-SJ6RG2KF.svg";

// public/images/youtube-mobile.svg
var youtube_mobile_default = "/build/_assets/youtube-mobile-QRFTXNDO.svg";

// public/images/bitcoin-illustration.svg
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-43A3ZEWA.svg";

// app/components/Payment.jsx
function Payment() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-40.5 pt-20 lg:w-[93.3%] w-[91.46%] mx-auto bg-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-5xxl lg:text-center font-black lg:text-3xl text-2xl"
  }, "Receiving payments on", /* @__PURE__ */ React.createElement("br", null), "  existing platforms"), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Your own Website"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, ' <meta name="lightning" content="you@lightning.address"/>')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag: ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, '<meta property="og:image" content="https://www.youre.blog/YOUR_IMAGE" />')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "3")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: code_default,
    className: "hidden lg:inline-block",
    alt: "code"
  }), /* @__PURE__ */ React.createElement("img", {
    src: code_mobile_default,
    className: "image-drop-shadow mx-auto block lg:hidden mt-4",
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black  lg:text-2xl text-xl"
  }, "Twitter"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold lg:text-xl text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of your Twtter profile: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: twitter_mobile_default,
    alt: "code",
    className: "image-drop-shadow mx-auto block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "YouTube"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on YouTube"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your YouTube channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: youtube_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: youtube_mobile_default,
    alt: "code",
    className: "image-drop-shadow mx-auto block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Bitcoin TV"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on BitcoinTV"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your BitcoinTV channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code",
    className: "image-drop-shadow mx-auto block lg:hidden mt-4"
  }))));
}

// app/components/Wallet.jsx
init_react();
function Wallet() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "  py-[8rem] relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-[91.46%] text-center md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "md:text-5xl text-3xl font-black text-albyColdGray-25"
  }, "This new way of monetization is brought to you by Alby"), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-2xl text-base font-normal text-albyColdGray-25 pt-4"
  }, "Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby\u2019s wallet and start transacting in Bitcoin with ease."), /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 lg:py-4 px-4 lg:px-8 rounded-[1.875rem] mt-4"
  }, "Try it now"))));
}
var Wallet_default = Wallet;

// route-module:/Users/bumi/src/lightning/alby/website/app/routes/value4value.jsx
var meta = () => {
  return {
    title: "Alby \u2014 Lightning buzz for your Browser!",
    description: "Alby brings Bitcoin to the web with in-browser payments and identity",
    "og:url": "https://getalby.com",
    "og:title": "Alby",
    "og:site_name": "Alby",
    "og:image": logo_default,
    "twitter:site": "@getalby",
    "twitter:creator": "@getalby"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Payment, null), /* @__PURE__ */ React.createElement(Wallet_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route-module:/Users/bumi/src/lightning/alby/website/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => index,
  meta: () => meta2
});
init_react();
var meta2 = () => {
  return {
    title: "Alby \u2014 Lightning buzz for your Browser!",
    description: "Alby brings Bitcoin to the web with in-browser payments and identity",
    "og:url": "https://getalby.com",
    "og:title": "Alby",
    "og:site_name": "Alby",
    "og:image": logo_default,
    "twitter:site": "@getalby",
    "twitter:creator": "@getalby"
  };
};
function index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[93.194%] mx-auto "
  }, /* @__PURE__ */ React.createElement(Navigation_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-20 mt-22 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-secondary"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:max-w-[39rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left lg:pt-40"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4 lg:mb-0 xl:text-[4rem] xl:leading-[110%] text-black md:text-4xl text-3xl font-black"
  }, "Lightning buzz for your Browser"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-2xl text-xl font-normal"
  }, "Alby brings Bitcoin to the web with in-browser payments and identity, no account required."), /* @__PURE__ */ React.createElement("ul", {
    className: "bullet-lists pt-4 text-xl text-left"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item pl-4"
  }, "Instant payments to your favourite publishers and service providers"), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item pl-4"
  }, "No need to remember a username or password for these websites"), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item pl-4"
  }, "Direct interactions between you and the receiver, no need to worry about third party trackers")), /* @__PURE__ */ React.createElement(InstallExtensionButton_default, null), /* @__PURE__ */ React.createElement("div", {
    className: " mt-6"
  }, /* @__PURE__ */ React.createElement("img", {
    src: do_it_hint_default,
    alt: "",
    className: "block relative mx-auto lg:mx-0 left-[17%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-10 lg:pt-0 basis-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: banner_illustration_default,
    alt: "Alby screenshot",
    className: "pt-0 lg:pt-[17%] aspect-[auto_710/760] mx-auto min-w-[19rem] max-w-full"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end bg-albyYellow-300 py-14 lg:py-32 font-secondary"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "w-11/12 text-center md:w-full font-bold text-2xl md:text-5xl mx-auto"
  }, "Do you have feedback or need help?"), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-[52.84%] w-11/12 mx-auto pt-8 text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800"
  }, "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online. We love to hear from you. File a", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby/lightning-browser-extension/issues",
    className: "underline"
  }, "Github issue"), " ", "or join the", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    className: "underline"
  }, "Telegram channel"), "."), /* @__PURE__ */ React.createElement("iframe", {
    src: "https://getalby.substack.com/embed",
    width: "100%",
    height: "320",
    className: "",
    frameBorder: "0",
    scrolling: "no"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-center pt-10"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/getalby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_default,
    alt: "Twitter",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "/privacy-policy",
    className: "text-center lg:text-2xl text-base underline pt-5"
  }, "Privacy Policy"))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/value4value": {
    id: "routes/value4value",
    parentId: "root",
    path: "value4value",
    index: void 0,
    caseSensitive: void 0,
    module: value4value_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9idW1pL3NyYy9saWdodG5pbmcvYWxieS93ZWJzaXRlL2FwcC9yb290LmpzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2J1bWkvc3JjL2xpZ2h0bmluZy9hbGJ5L3dlYnNpdGUvYXBwL3JvdXRlcy9wcml2YWN5LXBvbGljeS5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSW5zdGFsbEV4dGVuc2lvbkJ1dHRvbi5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9idW1pL3NyYy9saWdodG5pbmcvYWxieS93ZWJzaXRlL2FwcC9yb3V0ZXMvdmFsdWU0dmFsdWUuanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGF5bWVudC5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2FsbGV0LmpzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2J1bWkvc3JjL2xpZ2h0bmluZy9hbGJ5L3dlYnNpdGUvYXBwL3JvdXRlcy9pbmRleC5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9idW1pL3NyYy9saWdodG5pbmcvYWxieS93ZWJzaXRlL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9idW1pL3NyYy9saWdodG5pbmcvYWxieS93ZWJzaXRlL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYnVtaS9zcmMvbGlnaHRuaW5nL2FsYnkvd2Vic2l0ZS9hcHAvcm91dGVzL3ByaXZhY3ktcG9saWN5LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYnVtaS9zcmMvbGlnaHRuaW5nL2FsYnkvd2Vic2l0ZS9hcHAvcm91dGVzL3ZhbHVlNHZhbHVlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYnVtaS9zcmMvbGlnaHRuaW5nL2FsYnkvd2Vic2l0ZS9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcHJpdmFjeS1wb2xpY3lcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wcml2YWN5LXBvbGljeVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInByaXZhY3ktcG9saWN5XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvdmFsdWU0dmFsdWVcIjoge1xuICAgIGlkOiBcInJvdXRlcy92YWx1ZTR2YWx1ZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInZhbHVlNHZhbHVlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBBbGJ5SGVhZEljb24gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvYWxieV9pY29uX2hlYWRfaWNvbi5wbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgZXh0ZW5kU3R5bGVzIGZyb20gXCIuL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJpY29uXCIsXG4gICAgICBocmVmOiBBbGJ5SGVhZEljb24sXG4gICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgaHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtd2FsbGV0LWxheWVyLnN2Z1wiLFxuICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgIGhyZWY6IFwiL2ltYWdlcy9kaWFtb25kLWZvb3Rlci5zdmdcIixcbiAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICB0eXBlOiBcImltYWdlL3N2Zyt4bWxcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpdmFjeVBvbGljeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1hbGJ5WWVsbG93LTMwMCBtaW4taC1zY3JlZW4gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTMuMTk0JV0gbXgtYXV0byBcIj5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptdC0yMCBtdC0yMiBsZzptdC0wIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLVtpbmhlcml0XSBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZG9jXCIgc3R5bGU9e3t3aWR0aDogJzUwJScsIG1hcmdpbjogJzAgYXV0byd9fSBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5IGNvbnRhaW5lci1mbHVpZCBjb21tZW50LWlubmVyIGNvbW1lbnQtZW5hYmxlZFwiIGRhdGEtaGFyZC1icmVha3M9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC0yeGwgdGV4dC14bCBmb250LW5vcm1hbFwiIGlkPVwiRGF0YS1wcm90ZWN0aW9uLW5vdGljZVwiIGRhdGEtaWQ9XCJEYXRhLXByb3RlY3Rpb24tbm90aWNlXCI+PHNwYW4+RGF0YSBwcm90ZWN0aW9uIG5vdGljZTwvc3Bhbj48L2gxPjxwPjxhIGhyZWY9XCJodHRwOi8vZ2V0YWxieS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPjxzcGFuPmdldGFsYnkuY29tPC9zcGFuPjwvYT48c3Bhbj4gKGhlcmVpbmFmdGVyIFx1MjAxQ0FsYnlcdTIwMUQgb3IgXHUyMDFDV2VcdTIwMUQgb3IgXHUyMDFDVXNcdTIwMUQpIHdlbGNvbWVzIHlvdSB0byBvdXIgaW50ZXJuZXQgcGFnZSBhbmQgYnJvd3NlciBleHRlbnNpb24gKHRvZ2V0aGVyIGFsc28gcmVmZXJyZWQgdG8gYXMgXHUyMDFDT25saW5lIE9mZmVyc1x1MjAxRCkuIFdlIHRoYW5rIHlvdSBmb3IgeW91ciBpbnRlcmVzdCBpbiBvdXIgY29tcGFueSBhbmQgb3VyIHByb2R1Y3RzLjwvc3Bhbj48L3A+PHA+PHN0cm9uZz48c3Bhbj4xLiBBbGJ5IHJlc3BlY3RzIHlvdXIgcHJpdmFjeTwvc3Bhbj48L3N0cm9uZz48L3A+PHA+PHNwYW4+VGhlIHByb3RlY3Rpb24gb2YgeW91ciBwcml2YWN5IHRocm91Z2hvdXQgdGhlIGNvdXJzZSBvZiBwcm9jZXNzaW5nIHBlcnNvbmFsIGRhdGEgYXMgd2VsbCBhcyB0aGUgc2VjdXJpdHkgb2YgYWxsIGJ1c2luZXNzIGRhdGEgYXJlIGltcG9ydGFudCBjb25jZXJucyB0byB1cy4gV2UgcHJvY2VzcyBwZXJzb25hbCBkYXRhIHRoYXQgd2FzIGdhdGhlcmVkIGR1cmluZyB5b3VyIHZpc2l0IG9mIG91ciBPbmxpbmUgT2ZmZXJzIGNvbmZpZGVudGlhbGx5IGFuZCBvbmx5IGluIGFjY29yZGFuY2Ugd2l0aCBzdGF0dXRvcnkgcmVndWxhdGlvbnMuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkRhdGEgcHJvdGVjdGlvbiBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHkgYXJlIGluY2x1ZGVkIGluIG91ciBjb3Jwb3JhdGUgcG9saWN5Ljwvc3Bhbj48L3A+PHA+PHN0cm9uZz48c3Bhbj4yLiBDb250cm9sbGVyPC9zcGFuPjwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkFsYnkgaXMgdGhlIGNvbnRyb2xsZXIgcmVzcG9uc2libGUgZm9yIHRoZSBwcm9jZXNzaW5nIG9mIHlvdXIgZGF0YTsgZXhjZXB0aW9ucyBhcmUgb3V0bGluZWQgaW4gdGhpcyBkYXRhIHByb3RlY3Rpb24gbm90aWNlLjwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5PdXIgY29udGFjdCBkZXRhaWxzIGFyZSBhcyBmb2xsb3dzOiBNb3JpdHogS2FtaW5za2ksIDwvc3Bhbj48YSBocmVmPVwibWFpbHRvOm1vcml0ekBnZXRhbGJ5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+PHNwYW4+bW9yaXR6QGdldGFsYnkuY29tPC9zcGFuPjwvYT48L3A+PHA+PHN0cm9uZz48c3Bhbj4zLiBDb2xsZWN0aW9uLCBwcm9jZXNzaW5nIGFuZCB1c2FnZSBvZiBwZXJzb25hbCBkYXRhPC9zcGFuPjwvc3Ryb25nPjwvcD48cD48c3Bhbj4zLjEgUHJvY2Vzc2VkIGNhdGVnb3JpZXMgb2YgZGF0YTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5Db21tdW5pY2F0aW9uIGRhdGEsIHRyYW5zYWN0aW9uIGRhdGEsIGxpZ2h0bmluZyBub2RlIGF1dGhlbnRpY2F0aW9uIGRhdGEgYXJlIHByb2Nlc3NlZDwvc3Bhbj48L3A+PHA+PHNwYW4+My4yIFByaW5jaXBsZXM8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+UGVyc29uYWwgZGF0YSBjb25zaXN0cyBvZiBhbGwgaW5mb3JtYXRpb24gcmVsYXRlZCB0byBhbiBpZGVudGlmaWVkIG9yIGlkZW50aWZpYWJsZSBuYXR1cmFsIHBlcnNvbiwgdGhpcyBpbmNsdWRlcywgZS5nLiBuYW1lcywgYWRkcmVzc2VzLCBwaG9uZSBudW1iZXJzLCBlbWFpbCBhZGRyZXNzZXMsIGNvbnRyYWN0dWFsIG1hc3RlciBkYXRhLCBjb250cmFjdCBhY2NvdW50aW5nIGFuZCBwYXltZW50IGRhdGEsIHdoaWNoIGlzIGFuIGV4cHJlc3Npb24gb2YgYSBwZXJzb25cdTIwMTlzIGlkZW50aXR5Ljwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSBjb2xsZWN0LCBwcm9jZXNzIGFuZCB1c2UgcGVyc29uYWwgZGF0YSAoaW5jbHVkaW5nIElQIGFkZHJlc3Nlcykgb25seSB3aGVuIHRoZXJlIGlzIGVpdGhlciBhIHN0YXR1dG9yeSBsZWdhbCBiYXNpcyB0byBkbyBzbyBvciBpZiB5b3UgaGF2ZSBnaXZlbiB5b3VyIGNvbnNlbnQgdG8gdGhlIHByb2Nlc3Npbmcgb3IgdXNlIG9mIHBlcnNvbmFsIGRhdGEgY29uY2VybmluZyB0aGlzIG1hdHRlciwgZS5nLiBieSBtZWFucyBvZiByZWdpc3RyYXRpb24uPC9zcGFuPjwvcD48cD48c3Bhbj4zLjMuIFByb2Nlc3NpbmcgcHVycG9zZXMgYW5kIGxlZ2FsIGJhc2lzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIGFzIHdlbGwgYXMgdGhlIHNlcnZpY2UgcHJvdmlkZXJzIGNvbW1pc3Npb25lZCBieSB1czsgcHJvY2VzcyB5b3VyIHBlcnNvbmFsIGRhdGEgZm9yIHRoZSBmb2xsb3dpbmcgcHJvY2Vzc2luZyBwdXJwb3Nlczo8L3NwYW4+PC9wPjxwPjxzcGFuPjMuMy4xIFByb3Zpc2lvbiBvZiB0aGVzZSBPbmxpbmUgT2ZmZXJzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkxlZ2FsIGJhc2lzOiBMZWdpdGltYXRlIGludGVyZXN0IGFzIGxvbmcgYXMgdGhpcyBvY2N1cnMgaW4gYWNjb3JkYW5jZSB3aXRoIGRhdGEgcHJvdGVjdGlvbiBhbmQgY29tcGV0aXRpb24gbGF3Ljwvc3Bhbj48L3A+PHA+PHNwYW4+My4zLjIgUmVzb2x2aW5nIHNlcnZpY2UgZGlzcnVwdGlvbnMgYXMgd2VsbCBhcyBmb3Igc2VjdXJpdHkgcmVhc29ucy48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+TGVnYWwgYmFzaXM6IEZ1bGZpbGxtZW50IG9mIG91ciBsZWdhbCBvYmxpZ2F0aW9ucyB3aXRoaW4gdGhlIHNjb3BlIG9mIGRhdGEgc2VjdXJpdHkgYW5kIGxlZ2l0aW1hdGUgaW50ZXJlc3QgaW4gcmVzb2x2aW5nIHNlcnZpY2UgZGlzcnVwdGlvbnMgYXMgd2VsbCBhcyBpbiB0aGUgcHJvdGVjdGlvbiBvZiBvdXIgb2ZmZXJzLjwvc3Bhbj48L3A+PHA+PHNwYW4+My4zLjMgU2VsZi1wcm9tb3Rpb24gYW5kIHByb21vdGlvbiBieSBvdGhlcnMgYXMgd2VsbCBhcyBtYXJrZXQgcmVzZWFyY2ggYW5kIHJlYWNoIGFuYWx5c2lzIGRvbmUgd2l0aGluIHRoZSBzY29wZSBzdGF0dXRvcmlseSBwZXJtaXR0ZWQgb3IgYmFzZWQgb24gY29uc2VudC48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+TGVnYWwgYmFzaXM6IENvbnNlbnQgb3IgbGVnaXRpbWF0ZSBpbnRlcmVzdCBvbiBvdXIgcGFydCBpbiBkaXJlY3QgbWFya2V0aW5nIGlmIGluIGFjY29yZGFuY2Ugd2l0aCBkYXRhIHByb3RlY3Rpb24gYW5kIGNvbXBldGl0aW9uIGxhdy48L3NwYW4+PC9wPjxwPjxzcGFuPjMuMy40IFByb2R1Y3Qgb3IgY3VzdG9tZXIgc3VydmV5cyBwZXJmb3JtZWQgdmlhIGVtYWlsIGFuZC9vciB0ZWxlcGhvbmUgc3ViamVjdCB0byB5b3VyIHByaW9yIGV4cHJlc3MgY29uc2VudC48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+TGVnYWwgYmFzaXM6IENvbnNlbnQ8L3NwYW4+PC9wPjxwPjxzcGFuPjMuMy41IFNlbmRpbmcgYW4gZW1haWwgb3IgU01TL01NUyBuZXdzbGV0dGVyIHN1YmplY3QgdG8gdGhlIHJlY2lwaWVudFx1MjAxOXMgY29uc2VudDwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5MZWdhbCBiYXNpczogQ29uc2VudC48L3NwYW4+PC9wPjxwPjxzcGFuPjMuMy42IFNhZmVndWFyZGluZyBhbmQgZGVmZW5kaW5nIG91ciByaWdodHMuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkxlZ2FsIGJhc2lzOiBMZWdpdGltYXRlIGludGVyZXN0IG9uIG91ciBwYXJ0IGZvciBzYWZlZ3VhcmRpbmcgYW5kIGRlZmVuZGluZyBvdXIgcmlnaHRzLjwvc3Bhbj48L3A+PHA+PHNwYW4+My40IExvZyBmaWxlczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5FYWNoIHRpbWUgeW91IHVzZSB0aGUgaW50ZXJuZXQsIHlvdXIgYnJvd3NlciBpcyB0cmFuc21pdHRpbmcgY2VydGFpbiBpbmZvcm1hdGlvbiB3aGljaCB3ZSBzdG9yZSBpbiBzby1jYWxsZWQgbG9nIGZpbGVzLjwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSBzdG9yZSBsb2cgZmlsZXMgdG8gZGV0ZXJtaW5lIHNlcnZpY2UgZGlzcnVwdGlvbnMgYW5kIGZvciBzZWN1cml0eSByZWFzb25zIChlLmcuLCB0byBpbnZlc3RpZ2F0ZSBhdHRhY2sgYXR0ZW1wdHMpIGZvciBhIHBlcmlvZCBvZiA2MCBkYXlzIGFuZCBkZWxldGUgdGhlbSBhZnRlcndhcmRzLiBMb2cgZmlsZXMgd2hpY2ggbmVlZCB0byBiZSBtYWludGFpbmVkIGZvciBldmlkZW5jZSBwdXJwb3NlcyBhcmUgZXhjbHVkZWQgZnJvbSBkZWxldGlvbiB1bnRpbCB0aGUgcmVzcGVjdGl2ZSBpbmNpZGVudCBpcyByZXNvbHZlZCBhbmQgbWF5LCBvbiBhIGNhc2UtYnktY2FzZSBiYXNpcywgYmUgcGFzc2VkIG9uIHRvIGludmVzdGlnYXRpbmcgYXV0aG9yaXRpZXMuPC9zcGFuPjwvcD48cD48c3Bhbj5Mb2cgZmlsZXMgYXJlIGFsc28gdXNlZCBmb3IgYW5hbHlzaXMgcHVycG9zZXMgKHdpdGhvdXQgdGhlIElQIGFkZHJlc3Mgb3Igd2l0aG91dCB0aGUgY29tcGxldGUgSVAgYWRkcmVzcykgc2VlIG1vZHVsZSBcdTIwMUNBZHZlcnRpc2VtZW50cyBhbmQvb3IgbWFya2V0IHJlc2VhcmNoIChpbmNsdWRpbmcgd2ViIGFuYWx5c2lzLCBubyBjdXN0b21lciBzdXJ2ZXlzKVx1MjAxRC48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+SW4gbG9nIGZpbGVzLCB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGlzIHNhdmVkOjwvc3Bhbj48L3A+PHVsPlxuICAgICAgICAgICAgIDxsaT48c3Bhbj5JUCBhZGRyZXNzIChpbnRlcm5ldCBwcm90b2NvbCBhZGRyZXNzKSBvZiB0aGUgdGVybWluYWwgZGV2aWNlIHVzZWQgdG8gYWNjZXNzIHRoZSBPbmxpbmUgT2ZmZXI7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgPGxpPjxzcGFuPkludGVybmV0IGFkZHJlc3Mgb2YgdGhlIHdlYnNpdGUgZnJvbSB3aGljaCB0aGUgT25saW5lIE9mZmVyIGlzIGFjY2Vzc2VkIChzby1jYWxsZWQgVVJMIG9mIG9yaWdpbiBvciByZWZlcnJlciBVUkwpOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgIDxsaT48c3Bhbj5OYW1lIG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyIHdoaWNoIHdhcyB1c2VkIHRvIGFjY2VzcyB0aGUgT25saW5lIE9mZmVyOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgIDxsaT48c3Bhbj5OYW1lIG9mIHRoZSBmaWxlcyBvciBpbmZvcm1hdGlvbiBhY2Nlc3NlZDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICA8bGk+PHNwYW4+RGF0ZSBhbmQgdGltZSBhcyB3ZWxsIGFzIGR1cmF0aW9uIG9mIHJlY2FsbGluZyB0aGUgZGF0YTs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICA8bGk+PHNwYW4+QW1vdW50IG9mIGRhdGEgdHJhbnNmZXJyZWQ7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgPGxpPjxzcGFuPk9wZXJhdGluZyBzeXN0ZW0gYW5kIGluZm9ybWF0aW9uIG9uIHRoZSBpbnRlcm5ldCBicm93c2VyIHVzZWQsIGluY2x1ZGluZyBhZGQtb25zIGluc3RhbGxlZCAoZS5nLiwgRmxhc2ggUGxheWVyKTs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICA8bGk+PHNwYW4+aHR0cCBzdGF0dXMgY29kZSAoZS5nLiwgXHUyMDFDUmVxdWVzdCBzdWNjZXNzZnVsXHUyMDFEIG9yIFx1MjAxQ0ZpbGUgcmVxdWVzdGVkIG5vdCBmb3VuZFx1MjAxRCkuPC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgPC91bD48cD48c3Bhbj4zLjUgQ2hpbGRyZW48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+VGhpcyBPbmxpbmUgT2ZmZXIgaXMgbm90IG1lYW50IGZvciBjaGlsZHJlbiB1bmRlciAxNiB5ZWFycyBvZiBhZ2UuPC9zcGFuPjwvcD48cD48c3Bhbj4zLjYgRGF0YSB0cmFuc2Zlcjwvc3Bhbj48L3A+PHA+PHNwYW4+My42LjEgRGF0YSB0cmFuc2ZlciB0byBvdGhlciBjb250cm9sbGVyczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5QcmluY2lwYWxseSwgeW91ciBwZXJzb25hbCBkYXRhIGlzIGZvcndhcmRlZCB0byBvdGhlciBjb250cm9sbGVycyBvbmx5IGlmIHJlcXVpcmVkIGZvciB0aGUgZnVsZmlsbG1lbnQgb2YgYSBjb250cmFjdHVhbCBvYmxpZ2F0aW9uLCBvciBpZiB3ZSBvdXJzZWx2ZXMsIG9yIGEgdGhpcmQgcGFydHksIGhhdmUgYSBsZWdpdGltYXRlIGludGVyZXN0IGluIHRoZSBkYXRhIHRyYW5zZmVyLCBvciBpZiB5b3UgaGF2ZSBnaXZlbiB5b3VyIGNvbnNlbnQuIFBhcnRpY3VsYXJzIG9uIHRoZSBsZWdhbCBiYXNpcyBhbmQgdGhlIHJlY2lwaWVudHMgb3IgY2F0ZWdvcmllcyBvZiByZWNpcGllbnRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgU2VjdGlvbiBcdTIwMTMgUHJvY2Vzc2luZyBwdXJwb3NlcyBhbmQgbGVnYWwgYmFzaXMuIEFkZGl0aW9uYWxseSwgZGF0YSBtYXkgYmUgdHJhbnNmZXJyZWQgdG8gb3RoZXIgY29udHJvbGxlcnMgd2hlbiB3ZSBhcmUgb2JsaWdlZCB0byBkbyBzbyBkdWUgdG8gc3RhdHV0b3J5IHJlZ3VsYXRpb25zIG9yIGVuZm9yY2VhYmxlIGFkbWluaXN0cmF0aXZlIG9yIGp1ZGljaWFsIG9yZGVycy48L3NwYW4+PC9wPjxwPjxzcGFuPjMuNi4yIFNlcnZpY2UgcHJvdmlkZXJzIChnZW5lcmFsKTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSBpbnZvbHZlIGV4dGVybmFsIHNlcnZpY2UgcHJvdmlkZXJzIHdpdGggdGFza3Mgc3VjaCBhcyBzYWxlcyBhbmQgbWFya2V0aW5nIHNlcnZpY2VzLCBjb250cmFjdCBtYW5hZ2VtZW50LCBwYXltZW50IGhhbmRsaW5nLCBwcm9ncmFtbWluZywgZGF0YSBob3N0aW5nICAgICAuIFdlIGhhdmUgY2hvc2VuIHRob3NlIHNlcnZpY2UgcHJvdmlkZXJzIGNhcmVmdWxseSBhbmQgbW9uaXRvciB0aGVtIG9uIGEgcmVndWxhciBiYXNpcywgZXNwZWNpYWxseSByZWdhcmRpbmcgdGhlaXIgZGlsaWdlbnQgaGFuZGxpbmcgb2YgYW5kIHByb3RlY3Rpb24gb2YgdGhlIGRhdGEgdGhhdCB0aGV5IHN0b3JlLiBBbGwgc2VydmljZSBwcm92aWRlcnMgYXJlIG9ibGlnZWQgdG8gbWFpbnRhaW4gY29uZmlkZW50aWFsaXR5IGFuZCB0byBjb21wbHkgd2l0aCB0aGUgc3RhdHV0b3J5IHByb3Zpc2lvbnMuPC9zcGFuPjwvcD48cD48c3Bhbj4zLjYuMyBUcmFuc2ZlciB0byByZWNpcGllbnRzIG91dHNpZGUgdGhlIEVFQTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSBtaWdodCB0cmFuc2ZlciBwZXJzb25hbCBkYXRhIHRvIHJlY2lwaWVudHMgbG9jYXRlZCBvdXRzaWRlIHRoZSBFRUEgaW50byBzby1jYWxsZWQgdGhpcmQgY291bnRyaWVzLiBJbiBzdWNoIGNhc2VzLCBwcmlvciB0byB0aGUgdHJhbnNmZXIgd2UgZW5zdXJlIHRoYXQgZWl0aGVyIHRoZSBkYXRhIHJlY2lwaWVudCBwcm92aWRlcyBhbiBhcHByb3ByaWF0ZSBsZXZlbCBvZiBkYXRhIHByb3RlY3Rpb24gb3IgdGhhdCB5b3UgaGF2ZSBjb25zZW50ZWQgdG8gdGhlIHRyYW5zZmVyLiBZb3UgYXJlIGVudGl0bGVkIHRvIHJlY2VpdmUgYW4gb3ZlcnZpZXcgb2YgdGhpcmQgY291bnRyeSByZWNpcGllbnRzIGFuZCBhIGNvcHkgb2YgdGhlIHNwZWNpZmljYWxseSBhZ3JlZWQtcHJvdmlzaW9ucyBzZWN1cmluZyBhbiBhcHByb3ByaWF0ZSBsZXZlbCBvZiBkYXRhIHByb3RlY3Rpb24uIEZvciB0aGlzIHB1cnBvc2UsIHBsZWFzZSB1c2UgdGhlIHN0YXRlbWVudHMgbWFkZSBpbiB0aGUgQ29udGFjdCBzZWN0aW9uLjwvc3Bhbj48L3A+PHA+PHNwYW4+My43IER1cmF0aW9uIG9mIHN0b3JhZ2UsIHJldGVudGlvbiBwZXJpb2RzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPlByaW5jaXBhbGx5LCB3ZSBzdG9yZSB5b3VyIGRhdGEgZm9yIGFzIGxvbmcgYXMgaXQgaXMgbmVjZXNzYXJ5IHRvIHJlbmRlciBvdXIgT25saW5lIE9mZmVycyBhbmQgY29ubmVjdGVkIHNlcnZpY2VzIG9yIGZvciBhcyBsb25nIGFzIHdlIGhhdmUgYSBsZWdpdGltYXRlIGludGVyZXN0IGluIHN0b3JpbmcgdGhlIGRhdGEuIEluIGFsbCBvdGhlciBjYXNlcyB3ZSBkZWxldGUgeW91ciBwZXJzb25hbCBkYXRhIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBkYXRhIHdlIGFyZSBvYmxpZ2VkIHRvIHN0b3JlIGZvciB0aGUgZnVsZmlsbG1lbnQgb2YgbGVnYWwgb2JsaWdhdGlvbnMgKGUuZy4gZHVlIHRvIHJldGVudGlvbiBwZXJpb2RzIHVuZGVyIHRoZSB0YXggYW5kIGNvbW1lcmNpYWwgY29kZXMgd2UgYXJlIG9ibGlnZWQgdG8gaGF2ZSBkb2N1bWVudHMgc3VjaCBhcyBjb250cmFjdHMgYW5kIGludm9pY2VzIGF2YWlsYWJsZSBmb3IgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lKS48L3NwYW4+PC9wPjxwPjxzdHJvbmc+PHNwYW4+NC4gVXNhZ2Ugb2YgQ29va2llczwvc3Bhbj48L3N0cm9uZz48L3A+PHA+PHNwYW4+SW4gdGhlIGNvbnRleHQgb2Ygb3VyIG9ubGluZSBzZXJ2aWNlLCBjb29raWVzIGFuZCB0cmFja2luZyBtZWNoYW5pc21zIG1heSBiZSB1c2VkLiBDb29raWVzIGFyZSBzbWFsbCB0ZXh0IGZpbGVzIHRoYXQgbWF5IGJlIHN0b3JlZCBvbiB5b3VyIGRldmljZSB3aGVuIHZpc2l0aW5nIG91ciBvbmxpbmUgc2VydmljZS4gVHJhY2tpbmcgaXMgcG9zc2libGUgdXNpbmcgZGlmZmVyZW50IHRlY2hub2xvZ2llcy4gSW4gcGFydGljdWxhciwgd2UgcHJvY2VzcyBpbmZvcm1hdGlvbiB1c2luZyBwaXhlbCB0ZWNobm9sb2d5IGFuZC9vciBkdXJpbmcgbG9nIGZpbGUgYW5hbHlzaXMuPC9zcGFuPjwvcD48cD48c3Bhbj40LjEgQ2F0ZWdvcmllczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSBkaXN0aW5ndWlzaCBiZXR3ZWVuIGNvb2tpZXMgdGhhdCBhcmUgbWFuZGF0b3JpbHkgcmVxdWlyZWQgZm9yIHRoZSB0ZWNobmljYWwgZnVuY3Rpb25zIG9mIHRoZSBvbmxpbmUgc2VydmljZSBhbmQgc3VjaCBjb29raWVzIGFuZCB0cmFja2luZyBtZWNoYW5pc21zIHRoYXQgYXJlIG5vdCBtYW5kYXRvcmlseSByZXF1aXJlZCBmb3IgdGhlIHRlY2huaWNhbCBmdW5jdGlvbiBvZiB0aGUgb25saW5lIHNlcnZpY2UuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkl0IGlzIGdlbmVyYWxseSBwb3NzaWJsZSB0byB1c2UgdGhlIG9ubGluZSBzZXJ2aWNlIHdpdGhvdXQgYW55IGNvb2tpZXMgdGhhdCBzZXJ2ZSBub24tdGVjaG5pY2FsIHB1cnBvc2VzLjwvc3Bhbj48L3A+PHA+PHNwYW4+NC4xLjEgVGVjaG5pY2FsbHkgcmVxdWlyZWQgY29va2llczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5CeSB0ZWNobmljYWxseSByZXF1aXJlZCBjb29raWVzIHdlIG1lYW4gY29va2llcyB3aXRob3V0IHRob3NlIHRoZSB0ZWNobmljYWwgcHJvdmlzaW9uIG9mIHRoZSBvbmxpbmUgc2VydmljZSBjYW5ub3QgYmUgZW5zdXJlZC48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+U3VjaCBjb29raWVzIHdpbGwgYmUgZGVsZXRlZCB3aGVuIHlvdSBsZWF2ZSB0aGUgd2Vic2l0ZS48L3NwYW4+PC9wPjxwPjxzcGFuPjQuMS4yIENvb2tpZXMgYW5kIHRyYWNraW5nIG1lY2hhbmlzbXMgdGhhdCBhcmUgdGVjaG5pY2FsbHkgbm90IHJlcXVpcmVkPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIG9ubHkgdXNlIGNvb2tpZXMgYW5kIHRyYWNraW5nIG1lY2hhbmlzbXMgaWYgeW91IGhhdmUgZ2l2ZW4gdXMgeW91ciBwcmlvciBjb25zZW50IGluIGVhY2ggY2FzZS4gV2l0aCB0aGUgZXhjZXB0aW9uIG9mIHRoZSBjb29raWUgdGhhdCBzYXZlcyB0aGUgY3VycmVudCBzdGF0dXMgb2YgeW91ciBwcml2YWN5IHNldHRpbmdzIChzZWxlY3Rpb24gY29va2llKS4gVGhpcyBjb29raWUgaXMgc2V0IGJhc2VkIG9uIGxlZ2l0aW1hdGUgaW50ZXJlc3QuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIGRpc3Rpbmd1aXNoIGJldHdlZW4gdHdvIHN1Yi1jYXRlZ29yaWVzIHdpdGggcmVnYXJkIHRvIHRoZXNlIGNvb2tpZXMgYW5kIHRyYWNraW5nIG1lY2hhbmlzbXM6PC9zcGFuPjwvcD48cD48c3Bhbj40LjEuMyBDb21mb3J0IGNvb2tpZXM8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+VGhlc2UgY29va2llcyBmYWNpbGl0YXRlIG9wZXJhdGlvbiBhbmQgdGh1cyBhbGxvdyB5b3UgdG8gYnJvd3NlIG91ciBvbmxpbmUgc2VydmljZSBtb3JlIGNvbWZvcnRhYmx5OyBlLmcuIHlvdXIgbGFuZ3VhZ2Ugc2V0dGluZ3MgbWF5IGJlIGluY2x1ZGVkIGluIHRoZXNlIGNvb2tpZXMuPC9zcGFuPjwvcD48cD48c3Bhbj40LjIgTWFuYWdlbWVudCBvZiBjb29raWVzIGFuZCB0cmFja2luZyBtZWNoYW5pc21zPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPllvdSBjYW4gbWFuYWdlIHlvdXIgY29va2llIGFuZCB0cmFja2luZyBtZWNoYW5pc20gc2V0dGluZ3MgaW4gdGhlIGJyb3dzZXI8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+Tm90ZTogVGhlIHNldHRpbmdzIHlvdSBoYXZlIG1hZGUgcmVmZXIgb25seSB0byB0aGUgYnJvd3NlciB1c2VkIGluIGVhY2ggY2FzZS48L3NwYW4+PC9wPjxwPjxzcGFuPjQuMi4xIERlYWN0aXZhdGlvbiBvZiBhbGwgY29va2llczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5JZiB5b3Ugd2lzaCB0byBkZWFjdGl2YXRlIGFsbCBjb29raWVzLCBwbGVhc2UgZGVhY3RpdmF0ZSBjb29raWVzIGluIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIG1heSBhZmZlY3QgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdlYnNpdGUuPC9zcGFuPjwvcD48cD48c3Ryb25nPjxzcGFuPjUuIERhdGEgcHJvY2Vzc2luZyBieSBBcHAgU3RvcmUgb3BlcmF0b3JzPC9zcGFuPjwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIGRvIG5vdCBjb2xsZWN0IGRhdGEsIGFuZCBpdCBpcyBiZXlvbmQgb3VyIHJlc3BvbnNpYmlsaXR5LCB3aGVuIGRhdGEsIHN1Y2ggYXMgdXNlcm5hbWUsIGVtYWlsIGFkZHJlc3MgYW5kIGluZGl2aWR1YWwgZGV2aWNlIGlkZW50aWZpZXIgYXJlIHRyYW5zZmVycmVkIHRvIGFuIGFwcCBzdG9yZSAoZS5nLiwgR29vZ2xlIFdlYiBTdG9yZSwgRmlyZWZveCBBZGQtb25zKSB3aGVuIGRvd25sb2FkaW5nIHRoZSByZXNwZWN0aXZlIGFwcGxpY2F0aW9uLiBXZSBhcmUgdW5hYmxlIHRvIGluZmx1ZW5jZSB0aGlzIGRhdGEgY29sbGVjdGlvbiBhbmQgZnVydGhlciBwcm9jZXNzaW5nIGJ5IHRoZSBBcHAgU3RvcmUgYXMgY29udHJvbGxlci48L3NwYW4+PC9wPjxwPjxzdHJvbmc+PHNwYW4+Ni4gQ29tbXVuaWNhdGlvbiB0b29scyBvbiBzb2NpYWwgbWVkaWEgcGxhdGZvcm1zPC9zcGFuPjwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIHVzZSBvbiBvdXIgc29jaWFsIG1lZGlhIHBsYXRmb3JtIChlLmcuIHR3aXR0ZXIpIGNvbW11bmljYXRpb24gdG9vbHMgdG8gcHJvY2VzcyB5b3VyIG1lc3NhZ2VzIHNlbnQgdmlhIHRoaXMgc29jaWFsIG1lZGlhIHBsYXRmb3JtIGFuZCB0byBvZmZlciB5b3Ugc3VwcG9ydC48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+V2hlbiBzZW5kaW5nIGEgbWVzc2FnZSB2aWEgb3VyIHNvY2lhbCBtZWRpYSBwbGF0Zm9ybSB0aGUgbWVzc2FnZSBpcyBwcm9jZXNzZWQgdG8gaGFuZGxlIHlvdXIgcXVlcnkgKGFuZCBpZiBuZWNlc3NhcnkgYWRkaXRpb25hbCBkYXRhLCB3aGljaCB3ZSByZWNlaXZlIGZyb20gdGhlIHNvY2lhbCBtZWRpYSBwcm92aWRlciBpbiBjb25uZWN0aW9uIHdpdGggdGhpcyBtZXNzYWdlIGFzIHlvdXIgbmFtZSBvciBmaWxlcykuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkluIGFkZGl0aW9uIHdlIGNhbiBhbmFseXplIHRoZXNlIGRhdGEgaW4gYW4gYWdncmVnYXRlZCBhbmQgYW5vbnltaXplZCBmb3JtIGluIG9yZGVyIHRvIGJldHRlciB1bmRlcnN0YW5kIGhvdyBvdXIgc29jaWFsIG1lZGlhIHBsYXRmb3JtIGlzIHVzZWQuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPlRoZSBsZWdhbCBiYXNpcyBmb3IgdGhlIHByb2Nlc3Npbmcgb2YgeW91ciBkYXRhIGlzIG91ciBsZWdpdGltYXRlIGludGVyZXN0IChBcnQuIDYgcGFyYS4gMSBzLiAxIGxpdC4gZiBHRFBSKSBvciwgaWYgYXBwbGljYWJsZSwgYW4gZXhpc3RpbmcgY29udHJhY3R1YWwgcmVsYXRpb25zaGlwIChBcnQuIDYgcGFyYS4gMSBzLiAxIGxpdC4gYiBHRFBSKS48L3NwYW4+PC9wPjxwPjxzdHJvbmc+PHNwYW4+Ny4gTmV3c2xldHRlciB3aXRoIG9wdC1pbjsgUmlnaHQgb2Ygd2l0aGRyYXdhbDwvc3Bhbj48L3N0cm9uZz48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XaXRoaW4gdGhlIHNjb3BlIG9mIG91ciBPbmxpbmUgT2ZmZXJzIHlvdSBjYW4gc2lnbiB1cCBmb3IgbmV3c2xldHRlcnMuIFdlIHByb3ZpZGUgdGhlIHNvLWNhbGxlZCBkb3VibGUgb3B0LWluIG9wdGlvbiB3aGljaCBtZWFucyB0aGF0IHdlIHdpbGwgb25seSBzZW5kIHlvdSBhIG5ld3NsZXR0ZXIgdmlhIGVtYWlsLCBtb2JpbGUgbWVzc2VuZ2VyIChzdWNoIGFzLCBlLmcuIFdoYXRzQXBwKSwgU01TIG9yIHB1c2ggbm90aWZpY2F0aW9uIGFmdGVyIHlvdSBoYXZlIGV4cGxpY2l0bHkgY29uZmlybWVkIHRoZSBhY3RpdmF0aW9uIG9mIHRoZSBuZXdzbGV0dGVyIHNlcnZpY2UgdG8gdXMgYnkgY2xpY2tpbmcgb24gdGhlIGxpbmsgaW4gYSBub3RpZmljYXRpb24uIEluIGNhc2UgeW91IHdpc2ggdG8gbm8gbG9uZ2VyIHJlY2VpdmUgbmV3c2xldHRlcnMsIHlvdSBjYW4gdGVybWluYXRlIHRoZSBzdWJzY3JpcHRpb24gYXQgYW55IHRpbWUgYnkgd2l0aGRyYXdpbmcgeW91ciBjb25zZW50LiBZb3UgY2FuIHdpdGhkcmF3IHlvdXIgY29uc2VudCB0byBlbWFpbCBuZXdzbGV0dGVycyBieSBjbGlja2luZyBvbiB0aGUgbGluayB3aGljaCBpcyBzZW50IGluIHRoZSByZXNwZWN0aXZlIG5ld3NsZXR0ZXIgbWFpbCwgb3IgaW4gdGhlIGFkbWluaXN0cmF0aXZlIHNldHRpbmdzIG9mIHRoZSBvbmxpbmUgb2ZmZXIuIEFsdGVybmF0aXZlbHksIHBsZWFzZSBjb250YWN0IHVzIHZpYSB0aGUgY29udGFjdCBkZXRhaWxzIHByb3ZpZGVkIGluIHRoZSBDb250YWN0IHNlY3Rpb24uPC9zcGFuPjwvcD48cD48c3Ryb25nPjxzcGFuPjguIEV4dGVybmFsIGxpbmtzPC9zcGFuPjwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPk91ciBPbmxpbmUgT2ZmZXJzIG1heSBjb250YWluIGxpbmtzIHRvIGludGVybmV0IHBhZ2VzIG9mIHRoaXJkIHBhcnRpZXMsIGluIHBhcnRpY3VsYXIgcHJvdmlkZXJzIHdobyBhcmUgbm90IHJlbGF0ZWQgdG8gdXMuIFVwb24gY2xpY2tpbmcgb24gdGhlIGxpbmssIHdlIGhhdmUgbm8gaW5mbHVlbmNlIG9uIHRoZSBjb2xsZWN0aW5nLCBwcm9jZXNzaW5nIGFuZCB1c2Ugb2YgcGVyc29uYWwgZGF0YSBwb3NzaWJseSB0cmFuc21pdHRlZCBieSBjbGlja2luZyBvbiB0aGUgbGluayB0byB0aGUgdGhpcmQgcGFydHkgKHN1Y2ggYXMgdGhlIElQIGFkZHJlc3Mgb3IgdGhlIFVSTCBvZiB0aGUgc2l0ZSBvbiB3aGljaCB0aGUgbGluayBpcyBsb2NhdGVkKSBhcyB0aGUgY29uZHVjdCBvZiB0aGlyZCBwYXJ0aWVzIGlzIG5hdHVyYWxseSBiZXlvbmQgb3VyIGNvbnRyb2wuIFdlIGRvIG5vdCBhc3N1bWUgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwcm9jZXNzaW5nIG9mIHBlcnNvbmFsIGRhdGEgYnkgdGhpcmQgcGFydGllcy48L3NwYW4+PC9wPjxwPjxzdHJvbmc+PHNwYW4+OS4gU2VjdXJpdHk8L3NwYW4+PC9zdHJvbmc+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+T3VyIGVtcGxveWVlcyBhbmQgdGhlIGNvbXBhbmllcyBwcm92aWRpbmcgc2VydmljZXMgb24gb3VyIGJlaGFsZiwgYXJlIG9ibGlnZWQgdG8gY29uZmlkZW50aWFsaXR5IGFuZCB0byBjb21wbGlhbmNlIHdpdGggdGhlIGFwcGxpY2FibGUgZGF0YSBwcm90ZWN0aW9uIGxhd3MuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPldlIHRha2UgYWxsIG5lY2Vzc2FyeSB0ZWNobmljYWwgYW5kIG9yZ2FuaXphdGlvbmFsIG1lYXN1cmVzIHRvIGVuc3VyZSBhbiBhcHByb3ByaWF0ZSBsZXZlbCBvZiBzZWN1cml0eSBhbmQgdG8gcHJvdGVjdCB5b3VyIGRhdGEgdGhhdCBhcmUgYWRtaW5pc3RyYXRlZCBieSB1cyBlc3BlY2lhbGx5IGZyb20gdGhlIHJpc2tzIG9mIHVuaW50ZW5kZWQgb3IgdW5sYXdmdWwgZGVzdHJ1Y3Rpb24sIG1hbmlwdWxhdGlvbiwgbG9zcywgY2hhbmdlIG9yIHVuYXV0aG9yaXplZCBkaXNjbG9zdXJlIG9yIHVuYXV0aG9yaXplZCBhY2Nlc3MuIE91ciBzZWN1cml0eSBtZWFzdXJlcyBhcmUsIHB1cnN1YW50IHRvIHRlY2hub2xvZ2ljYWwgcHJvZ3Jlc3MsIGNvbnN0YW50bHkgYmVpbmcgaW1wcm92ZWQuPC9zcGFuPjwvcD48cD48c3Ryb25nPjxzcGFuPjEwLiBVc2VyIHJpZ2h0czwvc3Bhbj48L3N0cm9uZz48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5UbyBlbmZvcmNlIHlvdXIgcmlnaHRzLCBwbGVhc2UgdXNlIHRoZSBkZXRhaWxzIHByb3ZpZGVkIGluIHRoZSBDb250YWN0IHNlY3Rpb24uIEluIGRvaW5nIHNvLCBwbGVhc2UgZW5zdXJlIHRoYXQgYW4gdW5hbWJpZ3VvdXMgaWRlbnRpZmljYXRpb24gb2YgeW91ciBwZXJzb24gaXMgcG9zc2libGUuPC9zcGFuPjwvcD48cD48c3Bhbj4xMC4xIFJpZ2h0IHRvIGluZm9ybWF0aW9uIGFuZCBhY2Nlc3M8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+WW91IGhhdmUgdGhlIHJpZ2h0IHRvIG9idGFpbiBjb25maXJtYXRpb24gZnJvbSB1cyBhYm91dCB3aGV0aGVyIG9yIG5vdCB5b3VyIHBlcnNvbmFsIGRhdGEgaXMgYmVpbmcgcHJvY2Vzc2VkLCBhbmQsIGlmIHRoaXMgaXMgdGhlIGNhc2UsIGFjY2VzcyB0byB5b3VyIHBlcnNvbmFsIGRhdGEuPC9zcGFuPjwvcD48cD48c3Bhbj4xMC4yIFJpZ2h0IHRvIGNvcnJlY3Rpb24gYW5kIGRlbGV0aW9uPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPllvdSBoYXZlIHRoZSByaWdodCB0byBvYnRhaW4gdGhlIHJlY3RpZmljYXRpb24gb2YgaW5hY2N1cmF0ZSBwZXJzb25hbCBkYXRhLiAgQXMgZmFyIGFzIHN0YXR1dG9yeSByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGxlZCwgeW91IGhhdmUgdGhlIHJpZ2h0IHRvIG9idGFpbiB0aGUgY29tcGxldGlvbiBvciBkZWxldGlvbiBvZiB5b3VyIGRhdGEuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPlRoaXMgZG9lcyBub3QgYXBwbHkgdG8gZGF0YSB3aGljaCBpcyBuZWNlc3NhcnkgZm9yIGJpbGxpbmcgb3IgYWNjb3VudGluZyBwdXJwb3NlcyBvciB3aGljaCBpcyBzdWJqZWN0IHRvIGEgc3RhdHV0b3J5IHJldGVudGlvbiBwZXJpb2QuIElmIGFjY2VzcyB0byBzdWNoIGRhdGEgaXMgbm90IHJlcXVpcmVkLCBob3dldmVyLCBpdHMgcHJvY2Vzc2luZyBpcyByZXN0cmljdGVkIChzZWUgdGhlIGZvbGxvd2luZykuPC9zcGFuPjwvcD48cD48c3Bhbj4xMC4zIFJlc3RyaWN0aW9uIG9mIHByb2Nlc3Npbmc8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+QXMgZmFyIGFzIHN0YXR1dG9yeSByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGxlZCB5b3UgaGF2ZSB0aGUgcmlnaHQgdG8gZGVtYW5kIGZvciByZXN0cmljdGlvbiBvZiB0aGUgcHJvY2Vzc2luZyBvZiB5b3VyIGRhdGEuPC9zcGFuPjwvcD48cD48c3Bhbj4xMC40IERhdGEgcG9ydGFiaWxpdHk8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+QXMgZmFyIGFzIHN0YXR1dG9yeSByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGxlZCB5b3UgbWF5IHJlcXVlc3QgdG8gcmVjZWl2ZSBkYXRhIHRoYXQgeW91IGhhdmUgcHJvdmlkZWQgdG8gdXMgaW4gYSBzdHJ1Y3R1cmVkLCBjb21tb25seSB1c2VkIGFuZCBtYWNoaW5lLXJlYWRhYmxlIGZvcm1hdCBvciBcdTIwMTMgaWYgdGVjaG5pY2FsbHkgZmVhc2libGUgXHUyMDEzdGhhdCB3ZSB0cmFuc2ZlciB0aG9zZSBkYXRhIHRvIGEgdGhpcmQgcGFydHkuPC9zcGFuPjwvcD48cD48c3Bhbj4xMC41IFJpZ2h0IG9mIG9iamVjdGlvbjwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj4xMC41LjEgT2JqZWN0aW9uIHRvIGRpcmVjdCBtYXJrZXRpbmc8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+QWRkaXRpb25hbGx5LCB5b3UgbWF5IG9iamVjdCB0byB0aGUgcHJvY2Vzc2luZyBvZiB5b3VyIHBlcnNvbmFsIGRhdGEgZm9yIGRpcmVjdCBtYXJrZXRpbmcgcHVycG9zZXMgYXQgYW55IHRpbWUuIFBsZWFzZSB0YWtlIGludG8gYWNjb3VudCB0aGF0IGR1ZSB0byBvcmdhbml6YXRpb25hbCByZWFzb25zLCB0aGVyZSBtaWdodCBiZSBhbiBvdmVybGFwIGJldHdlZW4geW91ciBvYmplY3Rpb24gYW5kIHRoZSB1c2FnZSBvZiB5b3VyIGRhdGEgd2l0aGluIHRoZSBzY29wZSBvZiBhIGNhbXBhaWduIHdoaWNoIGlzIGFscmVhZHkgcnVubmluZy48L3NwYW4+PC9wPjxwPjxzcGFuPjEwLjUuMiBPYmplY3Rpb24gdG8gZGF0YSBwcm9jZXNzaW5nIGJhc2VkIG9uIHRoZSBsZWdhbCBiYXNpcyBvZiBcdTIwMUNsZWdpdGltYXRlIGludGVyZXN0XHUyMDFEPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkluIGFkZGl0aW9uLCB5b3UgaGF2ZSB0aGUgcmlnaHQgdG8gb2JqZWN0IHRvIHRoZSBwcm9jZXNzaW5nIG9mIHlvdXIgcGVyc29uYWwgZGF0YSBhdCBhbnkgdGltZSwgaW5zb2ZhciBhcyB0aGlzIGlzIGJhc2VkIG9uIFx1MjAxQ2xlZ2l0aW1hdGUgaW50ZXJlc3RcdTIwMUQuIFdlIHdpbGwgdGhlbiB0ZXJtaW5hdGUgdGhlIHByb2Nlc3Npbmcgb2YgeW91ciBkYXRhLCB1bmxlc3Mgd2UgZGVtb25zdHJhdGUgY29tcGVsbGluZyBsZWdpdGltYXRlIGdyb3VuZHMgYWNjb3JkaW5nIHRvIGxlZ2FsIHJlcXVpcmVtZW50cyB3aGljaCBvdmVycmlkZSB5b3VyIHJpZ2h0cy48L3NwYW4+PC9wPjxwPjxzcGFuPjEwLjYgV2l0aGRyYXdhbCBvZiBjb25zZW50PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkluIGNhc2UgeW91IGNvbnNlbnRlZCB0byB0aGUgcHJvY2Vzc2luZyBvZiB5b3VyIGRhdGEsIHlvdSBoYXZlIHRoZSByaWdodCB0byByZXZva2UgdGhpcyBjb25zZW50IGF0IGFueSB0aW1lIHdpdGggZWZmZWN0IGZvciB0aGUgZnV0dXJlLiBUaGUgbGF3ZnVsbmVzcyBvZiBkYXRhIHByb2Nlc3NpbmcgcHJpb3IgdG8geW91ciB3aXRoZHJhd2FsIHJlbWFpbnMgdW5jaGFuZ2VkLjwvc3Bhbj48L3A+PHA+PHNwYW4+MTAuNyBSaWdodCB0byBsb2RnZSBjb21wbGFpbnQgd2l0aCBzdXBlcnZpc29yeSBhdXRob3JpdHk6PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPllvdSBoYXZlIHRoZSByaWdodCB0byBsb2RnZSBhIGNvbXBsYWludCB3aXRoIGEgc3VwZXJ2aXNvcnkgYXV0aG9yaXR5LiBZb3UgY2FuIGFwcGVhbCB0byB0aGUgc3VwZXJ2aXNvcnkgYXV0aG9yaXR5IHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB5b3VyIHBsYWNlIG9mIHJlc2lkZW5jZSBvciB5b3VyIHN0YXRlIG9mIHJlc2lkZW5jeSBvciB0byB0aGUgc3VwZXJ2aXNvcnkgYXV0aG9yaXR5IHJlc3BvbnNpYmxlIGZvciB1cy48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+VGhpcyBpczo8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+RmVkZXJhbCBDb21taXNzaW9uZXIgZm9yIERhdGEgUHJvdGVjdGlvbiBhbmQgSW5mb3JtYXRpb248L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+RmVsZGVnZ3dlZyAxPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPkNIIC0gMzAwMyBCZXJuPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPlNjaHdlaXo8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgPHNwYW4+VGVsZWZvbjogKzQxICgwKTU4IDQ2MiA0MyA5NTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5Ib21lcGFnZTogPC9zcGFuPjxhIGhyZWY9XCJodHRwOi8vd3d3LmVkb2ViLmFkbWluLmNoXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj48c3Bhbj5odHRwOi8vd3d3LmVkb2ViLmFkbWluLmNoPC9zcGFuPjwvYT48L3A+PHA+PHN0cm9uZz48c3Bhbj4xMS4gQ2hhbmdlcyB0byB0aGUgRGF0YSBQcm90ZWN0aW9uIE5vdGljZTwvc3Bhbj48L3N0cm9uZz48YnIgLz5cbiAgICAgICAgICAgICA8c3Bhbj5XZSByZXNlcnZlIHRoZSByaWdodCB0byBjaGFuZ2Ugb3VyIHNlY3VyaXR5IGFuZCBkYXRhIHByb3RlY3Rpb24gbWVhc3VyZXMuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgYW1lbmQgb3VyIGRhdGEgcHJvdGVjdGlvbiBub3RpY2UgYWNjb3JkaW5nbHkuIFBsZWFzZSwgdGhlcmVmb3JlLCBub3RpY2UgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBvdXIgZGF0YSBwcm90ZWN0aW9uIG5vdGljZSwgYXMgdGhpcyBpcyBzdWJqZWN0IHRvIGNoYW5nZXMuPC9zcGFuPjwvcD48cD48c3Ryb25nPjxzcGFuPjEyLiBDb250YWN0PC9zcGFuPjwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgIDxzcGFuPklmIHlvdSB3aXNoIHRvIGNvbnRhY3QgdXMsIHBsZWFzZSBmaW5kIHVzIGF0IHRoZSBhZGRyZXNzIHN0YXRlZCBpbiB0aGUgXHUyMDFDQ29udHJvbGxlclx1MjAxRCBzZWN0aW9uLjwvc3Bhbj48L3A+PHA+PHNwYW4+RWZmZWN0aXZlIGRhdGU6IDIwMjEuMTEuMDM8L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgQmFubmVySWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2Jhbm5lci1pbGx1c3RyYXRpb24ucG5nXCI7XG5pbXBvcnQgVGVsZWdyYW1Mb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3RlbGVncmFtLnBuZ1wiO1xuaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3R3aXR0ZXIucG5nXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9naXRodWIucG5nXCI7XG5pbXBvcnQgRG9JdEhpbnQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZG8taXQtaGludC5wbmdcIjtcbmltcG9ydCBJbnN0YWxsRXh0ZW5zaW9uQnV0dG9uIGZyb20gXCIuL0luc3RhbGxFeHRlbnNpb25CdXR0b25cIjtcblxuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0b3AtMCBwdC01IHBiLTggbGc6cGItMCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdy1bOTMuMTk0JV0ganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIG1heC1oLVs2LjI1cmVtXVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgICBhbHQ9XCJBbGJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEyLjVyZW1dIHRleHQtYmxhY2sgbGc6dy1hdXRvIGxnOmgtWzMuNzVyZW1dIGgtMjRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1iZXR3ZWVuIHhsOnB0LTAgcHQtM1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtUZWxlZ3JhbUxvZ299XG4gICAgICAgICAgICBhbHQ9XCJUZWxlZ3JhbVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxLjg3NXJlbV0gaC1bMS44NzVyZW1dIG1iLTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRhbGJ5XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtUd2l0dGVyTG9nb31cbiAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMS44NzVyZW1dIGgtWzEuODc1cmVtXSAgbWItNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17R2l0SHViTG9nb31cbiAgICAgICAgICAgIGFsdD1cIkdpdEh1YlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxLjg3NXJlbV0gaC1bMS44NzVyZW1dICBtYi00XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxJbnN0YWxsRXh0ZW5zaW9uQnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsICJpbXBvcnQgeyBDbGllbnRPbmx5IH0gZnJvbSBcInJlbWl4LXV0aWxzXCI7XG5pbXBvcnQgVUFQYXJzZXIgZnJvbSBcInVhLXBhcnNlci1qc1wiO1xuXG5pbXBvcnQgQ2hyb21lSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jaHJvbWUtaWNvbi5wbmdcIjtcbmltcG9ydCBGaXJlZm94SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9maXJlZm94LWljb24ucG5nXCI7XG5cbmNvbnN0IEluc3RhbGxMaW5rcyA9IHtcbiAgXCJGaXJlZm94XCI6IFwiaHR0cHM6Ly9hZGRvbnMubW96aWxsYS5vcmcvZW4tVVMvZmlyZWZveC9hZGRvbi9hbGJ5L1wiLFxuICBcIkNocm9tZVwiOiBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FsYnktYml0Y29pbi1saWdodG5pbmctd2EvaW9rZWFoaGVoaW1qbmVrYWZmbGNpaGxqbGNqY2NkYmVcIixcbiAgXCJDaHJvbWl1bVwiIDogXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9hbGJ5LWJpdGNvaW4tbGlnaHRuaW5nLXdhL2lva2VhaGhlaGltam5la2FmZmxjaWhsamxjamNjZGJlXCIsXG4gIFwiVml2YWxkaVwiOiBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FsYnktYml0Y29pbi1saWdodG5pbmctd2EvaW9rZWFoaGVoaW1qbmVrYWZmbGNpaGxqbGNqY2NkYmVcIixcbiAgXCJCcmF2ZVwiOiBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FsYnktYml0Y29pbi1saWdodG5pbmctd2EvaW9rZWFoaGVoaW1qbmVrYWZmbGNpaGxqbGNqY2NkYmVcIixcbiAgXCJPcGVyYVwiOiBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FsYnktYml0Y29pbi1saWdodG5pbmctd2EvaW9rZWFoaGVoaW1qbmVrYWZmbGNpaGxqbGNqY2NkYmVcIixcbn07XG5cbmNvbnN0IEJyb3dzZXJJY29ucyA9IHtcbiAgXCJGaXJlZm94XCI6IEZpcmVmb3hJY29uLFxuICBcIkNocm9tZVwiOiBDaHJvbWVJY29uLFxuICBcIkNocm9taXVtXCI6IENocm9tZUljb25cbn1cbmNvbnN0IERlZmF1bHRMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieS9saWdodG5pbmctYnJvd3Nlci1leHRlbnNpb25cIjtcblxuZnVuY3Rpb24gSW5zdGFsbCgpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBVQVBhcnNlcigpO1xuICBjb25zdCBicm93c2VyID0gcGFyc2VyLmdldEJyb3dzZXIoKTtcbiAgZnVuY3Rpb24gcmVuZGVySWNvbigpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoQnJvd3Nlckljb25zKS5pbmNsdWRlcyhicm93c2VyLm5hbWUpKSB7XG4gICAgICByZXR1cm4gPGltZyBzcmM9e0Jyb3dzZXJJY29uc1ticm93c2VyLm5hbWVdfSBjbGFzc05hbWU9XCJpbmxpbmUgcHItMyBtYXgtaC04XCIgLz47XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3Qua2V5cyhJbnN0YWxsTGlua3MpLmluY2x1ZGVzKGJyb3dzZXIubmFtZSkpIHtcbiAgICBjb25zdCBsaW5rID0gSW5zdGFsbExpbmtzW2Jyb3dzZXIubmFtZV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17bGlua30gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibGFjayBib3JkZXItWzNweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bIzMzMzMzM10gZm9udC1zZWNvbmRhcnkgaW5saW5lLWJsb2NrIHRleHQtbGcgbGc6bGVhZGluZy1bMS44NzVyZW1dIGZvbnQtc2VtaWJvbGQgcHktMiBweC01IHJvdW5kZWQtZnVsbCBtdC02XCI+XG4gICAgICAgIHtyZW5kZXJJY29uKCl9XG4gICAgICAgIEFkZCBUbyB7YnJvd3Nlci5uYW1lfVxuICAgICAgPC9hPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e0RlZmF1bHRMaW5rfSBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoYFdlIGN1cnJlbnRseSBkbyBub3QgeWV0IHN1cHBvcnQgJHticm93c2VyLm5hbWV9LiBCdXQgbWF5YmUgeW91IGNhbiBpbnN0YWxsIGl0IGZyb20gc291cmNlLmApfX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibGFjayBib3JkZXItWzNweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bIzMzMzMzM10gZm9udC1zZWNvbmRhcnkgaW5saW5lLWJsb2NrIHRleHQtbGcgbGc6bGVhZGluZy1bMS44NzVyZW1dIGZvbnQtc2VtaWJvbGQgcHktMiBweC01IHJvdW5kZWQtZnVsbCBtdC02XCI+XG4gICAgICAgIEF2YWlsYWJsZSBmb3IgRmlyZWZveCwgQ2hyb21lLCBPcGVyYSBhbmQgb3RoZXJzXG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIEluc3RhbGxFeHRlbnNpb25CdXR0b24oKSB7XG4gIHJldHVybiAoXG4gICAgPENsaWVudE9ubHk+XG4gICAgICA8SW5zdGFsbCAvPlxuICAgIDwvQ2xpZW50T25seT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWxsRXh0ZW5zaW9uQnV0dG9uO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCJ+L2NvbXBvbmVudHMvU2VydmljZXNcIjtcclxuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9QYXltZW50XCI7XHJcbmltcG9ydCBXYWxsZXQgZnJvbSBcIn4vY29tcG9uZW50cy9XYWxsZXRcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiQWxieSBcdTIwMTQgTGlnaHRuaW5nIGJ1enogZm9yIHlvdXIgQnJvd3NlciFcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFsYnkgYnJpbmdzIEJpdGNvaW4gdG8gdGhlIHdlYiB3aXRoIGluLWJyb3dzZXIgcGF5bWVudHMgYW5kIGlkZW50aXR5XCIsXHJcbiAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vZ2V0YWxieS5jb21cIixcclxuICAgIFwib2c6dGl0bGVcIjogXCJBbGJ5XCIsXHJcbiAgICBcIm9nOnNpdGVfbmFtZVwiOiBcIkFsYnlcIixcclxuICAgIFwib2c6aW1hZ2VcIjogTG9nbyxcclxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQGdldGFsYnlcIixcclxuICAgIFwidHdpdHRlcjpjcmVhdG9yXCI6IFwiQGdldGFsYnlcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxTZXJ2aWNlIC8+XHJcbiAgICAgIDxQYXltZW50IC8+XHJcbiAgICAgIDxXYWxsZXQgLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJpZ2h0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWJlZS5zdmdcIjtcbmltcG9ydCBMZWZ0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xlZnQtYmVlLnN2Z1wiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wb2ludGVyLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9UZWxlZ3JhbS5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLWxvZ28uc3ZnXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9HaXRIdWIuc3ZnXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHotMTAgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGhvdmVyOmN1cnNvci1wb2ludGVyIG10LTE2IGxnOm10LTI0IHB5LTggbGc6cHktWzguNzVyZW1dIHRleHQtY2VudGVyIHJvdW5kZWQtWzIuNzVyZW1dIG1heC1oLVszMS4yNXJlbV0gbWF4LXctWzc3LjE4NzVyZW1dIHJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctNTAgdy1bOTEuNDYlXSBsZzp3LVs4NS43NiVdIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctWzc4JV0gbXgtYXV0byAgZm9udC1wcmltYXJ5IHRleHQtM3hsIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctWzQuNjg3NXJlbV0gZm9udC1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgWW91IGRvblx1MjAxOXQgaGF2ZSBhIExpZ2h0bmluZyBBZGRyZXNzIHlldD9cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbWQ6dG9wLVs4MiVdIHJpZ2h0LTAgbGc6cmlnaHQtWzI3LjUlXSBoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0Fycm93SWNvbn0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxhIGhyZWY9XCIvbGlnaHRuaW5nLWFkZHJlc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgcmVsYXRpdmUgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMyBsZzpweS00IHB4LTQgbGc6cHgtMTYgcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17UmlnaHRCZWV9XG4gICAgICAgICAgICBhbHQ9XCJSaWdodCBCZWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLVs4JV0gbGVmdC1bNzAlXSBtZDpsZWZ0LVs4NSVdIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e0xlZnRCZWV9XG4gICAgICAgICAgICBhbHQ9XCJMZWZ0IEJlZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0byBhYnNvbHV0ZSBib3R0b20tWzE0JV0gbGVmdC1bODIlXSBtZDpsZWZ0LVs5MSVdIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1lbmQgYmctYWxieVllbGxvdy0zMDAgcHktMTQgbGc6cHktMzIgbXQtMTYgbGc6bXQtMzJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctMTEvMTIgdGV4dC1jZW50ZXIgbWQ6dy1mdWxsIGZvbnQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC0yeGwgbWQ6dGV4dC01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIERvIHlvdSBoYXZlIGZlZWRiYWNrIG9yIG5lZWQgaGVscD9cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LVs1Mi44NCVdIHctMTEvMTIgbXgtYXV0byBwdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtcHJpbWFyeSBmb250LW5vcm1hbCB0ZXh0LWxnIG1kOnRleHQtMnhsIGxlYWRpbmctWzIuMjVyZW1dIHRleHQtYWxieUNvbGRHcmF5LTgwMFwiPlxuICAgICAgICAgICAgQWxieSBpcyBvcGVuLXNvdXJjZSBhbmQgY3VycmVudGx5IGluIGFscGhhIHN0YWdlLiBPdXIgZ29hbCBpcyB0b1xuICAgICAgICAgICAgY3JlYXRlIHRoZSBiZXN0IG9ubGluZSBleHBlcmllbmNlIHRvIGNvbnN1bWUgYW5kIHJld2FyZCBjb250ZW50IGFuZFxuICAgICAgICAgICAgc2VydmljZXMgb25saW5lLiBXZSBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuIEZpbGUgYXtcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieS9saWdodG5pbmctYnJvd3Nlci1leHRlbnNpb24vaXNzdWVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0aHViIGlzc3VlXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgb3Igam9pbiB0aGV7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgVGVsZWdyYW0gY2hhbm5lbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRhbGJ5XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXIgTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB3LVszOXB4XSBoLVszNXB4XSBsZzp3LVs1Mi42N3B4XSBsZzpoLVs0OHB4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1RlbGVncmFtTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJUZWxlZ3JhbSBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtHaXRIdWJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIkdpdEh1YiBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2V0YWxieS5jb20vcHJpdmFjeS1wb2xpY3lcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtcHJpbWFyeSB1bmRlcmxpbmUgcHQtNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IEhlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJlbG93QnV0dG9uSWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2J1dHRvbi1iZWxvdy5zdmdcIjtcbmltcG9ydCBCZWxvd0hlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItYmVsb3cuc3ZnXCI7XG5pbXBvcnQgR3JvdXBEaWFtb25kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2dyb3VwLWRpYW1vbmQuc3ZnXCI7XG5pbXBvcnQgSW5zdGFsbEV4dGVuc2lvbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnN0YWxsRXh0ZW5zaW9uQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1hbGJ5WWVsbG93LTMwMCBsZzptaW4taC1zY3JlZW4gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bOTMuMTk0JV0gdy1bOTEuNDYlXSBteC1hdXRvIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdG9wLTAgcHQtNSBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgbGc6dy1bOTMuMTk0JV0gdy1bOTEuNDYlXSBqdXN0aWZ5LWJldHdlZW4gbWF4LWgtWzYuMjVyZW1dXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiQWxieVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGxnOmgtWzMuNzVyZW1dIGgtWzIuNzVyZW1dXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEluc3RhbGxFeHRlbnNpb25CdXR0b24gLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtCZWxvd0J1dHRvbklsbHVzdHJhdGlvbn1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1hdXRvIGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgbGVmdC1bODAlXSB0b3AtWzY3JV1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtW2luaGVyaXRdIGp1c3RpZnktYmV0d2VlbiBmb250LXByaW1hcnkgcHQtWzYuNXJlbV0gbGc6cHQtMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6bWF4LXctWzM5Ljc1cmVtXSBsZzp3LTEvMiB0ZXh0LWFsYnlDb2xkR3JheS04MDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwieGw6dGV4dC02eGwgbWQ6dGV4dC00eGwgdGV4dC0zeGwgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICBEaXJlY3QgY29udHJpYnV0aW9ucyBmcm9tIHlvdXIgYXVkaWVuY2VcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZzp0ZXh0LTJ4bCB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgcHQtOVwiPlxuICAgICAgICAgICAgICBVc2UgYSBMaWdodG5pbmcgQWRkcmVzcyB0byByZWNlaXZlIHZhbHVlIGZvciB2YWx1ZSBwYXltZW50cyBpblxuICAgICAgICAgICAgICBCaXRjb2luIGZyb20geW91ciBhdWRpZW5jZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgbGc6cHQtMjRcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtIZWFkZXJJbGx1c3RyYXRpb259XG4gICAgICAgICAgICAgIGFsdD1cIkFsYnkgc2NyZWVuc2hvdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWluLXctWzE3cmVtXSBoLWF1dG8gei0xMCByZWxhdGl2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e0JlbG93SGVhZGVySWxsdXN0cmF0aW9ufVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWF1dG8gaGlkZGVuIGxnOmlubGluZS1ibG9jayBsZWZ0LVs4OCVdIHRvcC1bNzQuNSVdIHotMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e0dyb3VwRGlhbW9uZH1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1hdXRvICBsZWZ0LTAgYm90dG9tLTAgei0wIGhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwgImltcG9ydCBMaW5lcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9saW5lcy5zdmdcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2FsbGV0LnN2Z1wiO1xuaW1wb3J0IFdhdmVzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhdmVzLnN2Z1wiO1xuaW1wb3J0IFB1enpsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wdXp6bGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICAgIFxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp3LWZ1bGwgcHktMTIgYmctYWxieVllbGxvdy01MCB4bDpweC0zNyB4bDpwdC0zMyB4bDpwYi00MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4IHhsOmp1c3RpZnktY2VudGVyIHhsOml0ZW1zLWNlbnRlciB4bDpzcGFjZS14LTIxIHNwYWNlLXktMTAgeGw6c3BhY2UteS0wIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4IHhsOnNwYWNlLXgtMjEgZ3JpZCBncmlkLWNvbHMtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtMaW5lc30gYWx0PVwibGluZXNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwdC02LjVcIj5Vc2UgZXhpc3RpbmcgPGJyLz5wbGF0Zm9ybXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17V2FsbGV0fSBhbHQ9XCJ3YWxsZXRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwdC02LjVcIj5SZWNlaXZlIHBheW1lbnRzPGJyLz4gZGlyZWN0bHk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm10LThcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e1dhdmVzfSBhbHQ9XCJ3YXZlc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyIHB0LTVcIj5Ob24taW50cnVzaXZlIGFuZDxici8+IGZyaWN0aW9ubGVzcyBmb3IgeW91cjxici8+IGF1ZGllbmNlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBtci0yLjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6bXQtOFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17UHV6emxlfSBhbHQ9XCJwdXp6bGVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwdC01XCI+U2ltcGxlIGludGVncmF0aW9uOzxici8+IG5vIGNvZGluZyBza2lsbHM8YnIvPiBuZWVkZWQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+ICAgIFxuICApO1xufSIsICJpbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jb2RlLnN2Z1wiO1xuaW1wb3J0IENvZGVNb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY29kZS1tb2JpbGUuc3ZnXCI7XG5pbXBvcnQgVHdpdHRlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3R3aXR0ZXItbW9iaWxlLnN2Z1wiO1xuaW1wb3J0IFlvdXR1YmUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMveW91dHViZS1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgWW91dHViZU1vYmlsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy95b3V0dWJlLW1vYmlsZS5zdmdcIjtcbmltcG9ydCBCaXRjb2luIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4taWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJpdGNvaW5Nb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYml0Y29pbi1pbGx1c3RyYXRpb24uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpwdC00MC41IHB0LTIwIGxnOnctWzkzLjMlXSB3LVs5MS40NiVdIG14LWF1dG8gYmctd2hpdGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTV4eGwgbGc6dGV4dC1jZW50ZXIgZm9udC1ibGFjayBsZzp0ZXh0LTN4bCB0ZXh0LTJ4bFwiPlJlY2VpdmluZyBwYXltZW50cyBvbjxiciAvPiAgZXhpc3RpbmcgcGxhdGZvcm1zPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6c3BhY2UteS02IHNwYWNlLXktMiB4bDptbC0xN1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgbGc6dGV4dC0yeGwgdGV4dC14bFwiPllvdXIgb3duIFdlYnNpdGU8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1sZ1wiPkhvdyB0byByZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24geW91ciB3ZWJzaXRlPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5cbiAgICAgICAgICAgICAgICA8cD5BZGQgdGhpcyBpbiB0aGUgSFRNTCBoZWFkZXIgc2VjdGlvbiBvZiB5b3VyIHdlYnNpdGU6XG5cbiAgICAgICAgICAgICAgICAgIDxici8+PGIgY2xhc3NOYW1lPVwiYnJlYWstYWxsXCI+ICZsdDttZXRhIG5hbWU9JnF1b3Q7bGlnaHRuaW5nJnF1b3Q7IGNvbnRlbnQ9JnF1b3Q7eW91QGxpZ2h0bmluZy5hZGRyZXNzJnF1b3Q7LyZndDs8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPHA+TWFrZSBzdXJlIHRvIGhhdmUgYW4gb2c6aW1hZ2UgbWV0YSB0YWc6IDxici8+PGIgY2xhc3NOYW1lPVwiYnJlYWstYWxsXCI+Jmx0O21ldGEgcHJvcGVydHk9JnF1b3Q7b2c6aW1hZ2UmcXVvdDsgY29udGVudD0mcXVvdDtodHRwczovL3d3dy55b3VyZS5ibG9nL1lPVVJfSU1BR0UmcXVvdDsgLyZndDs8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciB3ZWJzaXRlIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtDb2RlfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgYWx0PVwiY29kZVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9e0NvZGVNb2JpbGV9IGNsYXNzTmFtZT1cImltYWdlLWRyb3Atc2hhZG93IG14LWF1dG8gYmxvY2sgbGc6aGlkZGVuIG10LTRcIiBhbHQ9XCJjb2RlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6c3BhY2UteS02IHNwYWNlLXktMiB4bDptbC0xNyBvcmRlci1sYXN0XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInhsOnRleHQtNHhsIHhsOmxlYWRpbmctMTAgZm9udC1ibGFjayAgbGc6dGV4dC0yeGwgdGV4dC14bFwiPlR3aXR0ZXI8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbGc6dGV4dC14bCB0ZXh0LWxnXCI+SG93IHRvIHJlY2VpdmUgY29udHJpYnV0aW9ucyBvbiB5b3VyIHdlYnNpdGU8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxwPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB5b3VyIFR3dHRlciBwcm9maWxlOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjI8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBUd2l0dGVyIHByb2ZpbGUgc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9e1R3aXR0ZXJ9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz17VHdpdHRlck1vYmlsZX0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImltYWdlLWRyb3Atc2hhZG93IG14LWF1dG8gYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS0yIHhsOm1sLTE3XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInhsOnRleHQtNHhsIHhsOmxlYWRpbmctMTAgZm9udC1ibGFjayBsZzp0ZXh0LTJ4bCB0ZXh0LXhsXCI+WW91VHViZTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1ib2xkIGxnOnRleHQteGwgdGV4dC1sZ1wiPkhvdyB0byByZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24gWW91VHViZTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG5cbiAgICAgICAgICAgICAgICA8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aWRlbyBpbiB5b3VyIFlvdVR1YmUgY2hhbm5lbDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgWW91VHViZSB2aWRlbyBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17WW91dHViZX0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtZb3V0dWJlTW9iaWxlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtZHJvcC1zaGFkb3cgbXgtYXV0byBibG9jayBsZzpoaWRkZW4gbXQtNFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwIHBiLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTIgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgbGc6dGV4dC0yeGwgdGV4dC14bFwiPkJpdGNvaW4gVFY8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIGZvbnQtYm9sZCBsZzp0ZXh0LXhsIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIEJpdGNvaW5UVjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG5cbiAgICAgICAgICAgICAgICA8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aWRlbyBpbiB5b3VyIEJpdGNvaW5UViBjaGFubmVsOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjI8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBCaXRjb2luVFYgdmlkZW8gc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9e0JpdGNvaW59IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz17Qml0Y29pbk1vYmlsZX0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImltYWdlLWRyb3Atc2hhZG93IG14LWF1dG8gYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImZ1bmN0aW9uIFdhbGxldCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgcHktWzhyZW1dIHJlbGF0aXZlIGJnLWRpYW1vbmRMYXllciBiZy1yZXBlYXQgYmctYWxieUNvbGRHcmF5LTgwMCBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1bOTEuNDYlXSB0ZXh0LWNlbnRlciBtZDp3LVs1NS42MjUlXSBtYXgtdy1bNTAuMDYzcmVtXSBteC1hdXRvIGZvbnQtcHJpbWFyeVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC01eGwgdGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LWFsYnlDb2xkR3JheS0yNVwiPlxuICAgICAgICAgIFRoaXMgbmV3IHdheSBvZiBtb25ldGl6YXRpb24gaXMgYnJvdWdodCB0byB5b3UgYnkgQWxieVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LTJ4bCB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1hbGJ5Q29sZEdyYXktMjUgcHQtNFwiPlxuICAgICAgICAgIEFsYnkgaXMgYSBicm93c2VyIGV4dGVuc2lvbiBmb3IgdGhlIEJpdGNvaW4gTGlnaHRuaW5nIE5ldHdvcmsuIFlvdSBjYW5cbiAgICAgICAgICBjb25uZWN0IHlvdXIgb3duIExpZ2h0bmluZyB3YWxsZXQgb3IgdXNlIEFsYnlcdTIwMTlzIHdhbGxldCBhbmQgc3RhcnRcbiAgICAgICAgICB0cmFuc2FjdGluZyBpbiBCaXRjb2luIHdpdGggZWFzZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtYmFzZSBsZzp0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTMgbGc6cHktNCBweC00IGxnOnB4LTggcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICAgIFRyeSBpdCBub3dcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcbiIsICJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IEJhbm5lcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9iYW5uZXItaWxsdXN0cmF0aW9uLnBuZ1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90ZWxlZ3JhbS5wbmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLnBuZ1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IERvSXRIaW50IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2RvLWl0LWhpbnQucG5nXCI7XG5pbXBvcnQgSW5zdGFsbEV4dGVuc2lvbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnN0YWxsRXh0ZW5zaW9uQnV0dG9uXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkFsYnkgXHUyMDE0IExpZ2h0bmluZyBidXp6IGZvciB5b3VyIEJyb3dzZXIhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxieSBicmluZ3MgQml0Y29pbiB0byB0aGUgd2ViIHdpdGggaW4tYnJvd3NlciBwYXltZW50cyBhbmQgaWRlbnRpdHlcIixcbiAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vZ2V0YWxieS5jb21cIixcbiAgICBcIm9nOnRpdGxlXCI6IFwiQWxieVwiLFxuICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiQWxieVwiLFxuICAgIFwib2c6aW1hZ2VcIjogTG9nbyxcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBnZXRhbGJ5XCIsXG4gICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJAZ2V0YWxieVwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWFsYnlZZWxsb3ctMzAwIG1pbi1oLXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzkzLjE5NCVdIG14LWF1dG8gXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm10LTIwIG10LTIyIGxnOm10LTAgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtW2luaGVyaXRdIGp1c3RpZnktYmV0d2VlbiBmb250LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptYXgtdy1bMzlyZW1dIGxnOnctMS8yIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6cHQtNDBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgbGc6bWItMCB4bDp0ZXh0LVs0cmVtXSB4bDpsZWFkaW5nLVsxMTAlXSB0ZXh0LWJsYWNrIG1kOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICBMaWdodG5pbmcgYnV6eiBmb3IgeW91ciBCcm93c2VyXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxnOnRleHQtMnhsIHRleHQteGwgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICBBbGJ5IGJyaW5ncyBCaXRjb2luIHRvIHRoZSB3ZWIgd2l0aCBpbi1icm93c2VyIHBheW1lbnRzIGFuZFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LCBubyBhY2NvdW50IHJlcXVpcmVkLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidWxsZXQtbGlzdHMgcHQtNCB0ZXh0LXhsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00XCI+XG4gICAgICAgICAgICAgICAgICBJbnN0YW50IHBheW1lbnRzIHRvIHlvdXIgZmF2b3VyaXRlIHB1Ymxpc2hlcnMgYW5kIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTRcIj5cbiAgICAgICAgICAgICAgICAgIE5vIG5lZWQgdG8gcmVtZW1iZXIgYSB1c2VybmFtZSBvciBwYXNzd29yZCBmb3IgdGhlc2Ugd2Vic2l0ZXNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00XCI+XG4gICAgICAgICAgICAgICAgICBEaXJlY3QgaW50ZXJhY3Rpb25zIGJldHdlZW4geW91IGFuZCB0aGUgcmVjZWl2ZXIsIG5vIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgIHdvcnJ5IGFib3V0IHRoaXJkIHBhcnR5IHRyYWNrZXJzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICA8SW5zdGFsbEV4dGVuc2lvbkJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e0RvSXRIaW50fVxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIG14LWF1dG8gbGc6bXgtMCBsZWZ0LVsxNyVdXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBsZzpwdC0wIGJhc2lzLTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtCYW5uZXJJbGx1c3RyYXRpb259XG4gICAgICAgICAgICAgICAgYWx0PVwiQWxieSBzY3JlZW5zaG90XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0wIGxnOnB0LVsxNyVdIGFzcGVjdC1bYXV0b183MTAvNzYwXSBteC1hdXRvIG1pbi13LVsxOXJlbV0gbWF4LXctZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1lbmQgYmctYWxieVllbGxvdy0zMDAgcHktMTQgbGc6cHktMzIgZm9udC1zZWNvbmRhcnlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctMTEvMTIgdGV4dC1jZW50ZXIgbWQ6dy1mdWxsIGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgZmVlZGJhY2sgb3IgbmVlZCBoZWxwP1xuICAgICAgICA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctWzUyLjg0JV0gdy0xMS8xMiBteC1hdXRvIHB0LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWwgdGV4dC1sZyBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsyLjI1cmVtXSB0ZXh0LWFsYnlDb2xkR3JheS04MDBcIj5cbiAgICAgICAgICAgIEFsYnkgaXMgb3Blbi1zb3VyY2UgYW5kIGN1cnJlbnRseSBpbiBhbHBoYSBzdGFnZS4gT3VyIGdvYWwgaXMgdG9cbiAgICAgICAgICAgIGNyZWF0ZSB0aGUgYmVzdCBvbmxpbmUgZXhwZXJpZW5jZSB0byBjb25zdW1lIGFuZCByZXdhcmQgY29udGVudCBhbmRcbiAgICAgICAgICAgIHNlcnZpY2VzIG9ubGluZS4gV2UgbG92ZSB0byBoZWFyIGZyb20geW91LiBGaWxlIGF7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dldEFsYnkvbGlnaHRuaW5nLWJyb3dzZXItZXh0ZW5zaW9uL2lzc3Vlc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdpdGh1YiBpc3N1ZVxuICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgIG9yIGpvaW4gdGhle1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdC5tZS9nZXRBbGJ5XCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgIFRlbGVncmFtIGNoYW5uZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL2dldGFsYnkuc3Vic3RhY2suY29tL2VtYmVkXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzIwXCIgY2xhc3NOYW1lPVwiXCIgZnJhbWVCb3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIj48L2lmcmFtZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRhbGJ5XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1bMzlweF0gaC1bMzVweF0gbGc6dy1bNTIuNjdweF0gbGc6aC1bNDhweF1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdC5tZS9nZXRBbGJ5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtUZWxlZ3JhbUxvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiVGVsZWdyYW1cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1bMzlweF0gaC1bMzVweF0gbGc6dy1bNTIuNjdweF0gbGc6aC1bNDhweF1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nZXRBbGJ5XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e0dpdEh1YkxvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiR2l0SHViXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtMnhsIHRleHQtYmFzZSB1bmRlcmxpbmUgcHQtNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7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
