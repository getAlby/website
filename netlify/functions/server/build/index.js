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

// route-module:/home/morris/Documents/Octan/project-alby/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-THZMFWFC.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-5HVOVQJU.css";

// route-module:/home/morris/Documents/Octan/project-alby/app/root.jsx
function links() {
  return [
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
function meta() {
  return { title: "Get Alby" };
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

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
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

// public/images/Twitter.svg
var Twitter_default = "/build/_assets/Twitter-ZJQWD2HR.svg";

// public/images/GitHub.svg
var GitHub_default = "/build/_assets/GitHub-F6ASPHY2.svg";

// app/components/Footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white z-10 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center hover:cursor-pointer mt-4 lg:mt-24 py-8 lg:py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[91.46%] lg:w-[85.76%] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "z-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative"
  }, "You don\u2019t have a Lightning Address yet?", /* @__PURE__ */ React.createElement("span", {
    className: "absolute top-1/2 md:top-[82%] right-0 lg:right-[27.5%] hidden lg:inline-block"
  }, " ", /* @__PURE__ */ React.createElement("img", {
    src: pointer_default
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-3 lg:py-4 px-4 lg:px-16 rounded-[1.875rem] mt-4"
  }, "Learn more"), /* @__PURE__ */ React.createElement("img", {
    src: right_bee_default,
    alt: "Right Bee",
    className: "w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%] hidden md:block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: left_bee_default,
    alt: "Left Bee",
    className: "w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[91%] hidden md:block"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end bg-albyYellow-300 py-14 lg:py-32 mt-4 lg:mt-32"
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
    src: Twitter_default,
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

// public/images/Logo.svg
var Logo_default = "/build/_assets/Logo-4A6ZFMFX.svg";

// public/images/header-illustration.svg
var header_illustration_default = "/build/_assets/header-illustration-6WXMSZQB.svg";

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
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: Logo_default,
    alt: "Logo",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-between relative"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-transparent text-albyWarmGray-800 border-2 border-solid border-albyWarmGray-800 font-primary  lg:inline-block text-sm md:text-lg lg:leading-[1.75rem] font-semibold py-2 lg:py-4 px-3 lg:px-6 rounded-[30px]"
  }, "Install Alby"), /* @__PURE__ */ React.createElement("img", {
    src: button_below_default,
    alt: "Below Button Illustration",
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
    className: "pt-10 lg:pt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    src: header_illustration_default,
    alt: "Header Illustration",
    className: "w-[42vw] mx-auto min-w-[19rem] h-auto z-10 relative"
  }), /* @__PURE__ */ React.createElement("img", {
    src: header_below_default,
    alt: "Below Header Illustration",
    className: "absolute w-auto hidden lg:inline-block left-[88%] top-[72%] z-0"
  })))), /* @__PURE__ */ React.createElement("img", {
    src: group_diamond_default,
    alt: "Group Diamond",
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
    className: "xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-41 xl:pb-38"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-10 xl:space-y-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: lines_default,
    alt: "lines"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Use existing ", /* @__PURE__ */ React.createElement("br", null), "platforms")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: wallet_default,
    alt: "wallet"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Receive payments", /* @__PURE__ */ React.createElement("br", null), " directly"))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: waves_default,
    alt: "waves"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Non-intrusive and", /* @__PURE__ */ React.createElement("br", null), " frictionless for your", /* @__PURE__ */ React.createElement("br", null), " audience")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 grid place-items-center mr-2.5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: puzzle_default,
    alt: "puzzle"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Simple integration;", /* @__PURE__ */ React.createElement("br", null), " no coding skills", /* @__PURE__ */ React.createElement("br", null), " needed")))));
}

// app/components/Payment.jsx
init_react();

// public/images/code.svg
var code_default = "/build/_assets/code-CIQ54P7C.svg";

// public/images/code-mobile.svg
var code_mobile_default = "/build/_assets/code-mobile-G3ORRXAY.svg";

// public/images/twitter-illustration.svg
var twitter_illustration_default = "/build/_assets/twitter-illustration-2J2CAHLE.svg";

// public/images/twitter-mobile.svg
var twitter_mobile_default = "/build/_assets/twitter-mobile-IOBK7EUZ.svg";

// public/images/youtube-illustration.svg
var youtube_illustration_default = "/build/_assets/youtube-illustration-CTG7AL37.svg";

// public/images/youtube-mobile.svg
var youtube_mobile_default = "/build/_assets/youtube-mobile-S5Y2AXIT.svg";

// public/images/bitcoin-illustration.svg
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-WLSP4IQ5.svg";

// public/images/bitcoin-mobile.svg
var bitcoin_mobile_default = "/build/_assets/bitcoin-mobile-MUFFTGCQ.svg";

// app/components/Payment.jsx
function Payment() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-40.5 pt-20 lg:w-[93.3%] w-[91.46%] mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-5xxl lg:text-center font-black lg:text-3xl text-2xl"
  }, "Receiving payments on", /* @__PURE__ */ React.createElement("br", null), "  existing platforms"), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "2xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Your own Website"), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-3xl font-bold text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, ' <meta name="lightning" content="you@lightning.address"/>')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag: ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, '<meta property="og:image" content="https://www.youre.blog/YOUR_IMAGE" />')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "3")), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: code_default,
    className: "hidden lg:inline-block",
    alt: "code"
  }), /* @__PURE__ */ React.createElement("img", {
    src: code_mobile_default,
    className: "block lg:hidden mt-4",
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "2xl:text-4xl xl:leading-10 font-black  lg:text-2xl text-xl"
  }, "Twitter"), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-3xl font-semibold lg:text-xl text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of your Twtter profile: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: twitter_mobile_default,
    alt: "code",
    className: "block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "2xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "YouTube"), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on YouTube"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your YouTube channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: youtube_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: youtube_mobile_default,
    alt: "code",
    className: "block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "2xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Bitcoin TV"), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on BitcoinTV"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your BitcoinTV channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "2xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_mobile_default,
    alt: "code",
    className: "block lg:hidden mt-4"
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
  }, "Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby\u2019s wallet and start transacting in Bitcoin with ease."), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 lg:py-4 px-4 lg:px-8 rounded-[1.875rem] mt-4"
  }, "Try it now")));
}
var Wallet_default = Wallet;

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Payment, null), /* @__PURE__ */ React.createElement(Wallet_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL21vcnJpcy9Eb2N1bWVudHMvT2N0YW4vcHJvamVjdC1hbGJ5L2FwcC9yb290LmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbW9ycmlzL0RvY3VtZW50cy9PY3Rhbi9wcm9qZWN0LWFsYnkvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9IZWFkZXIuanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9QYXltZW50LmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XYWxsZXQuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9tb3JyaXMvRG9jdW1lbnRzL09jdGFuL3Byb2plY3QtYWxieS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9tb3JyaXMvRG9jdW1lbnRzL09jdGFuL3Byb2plY3QtYWxieS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvbW9ycmlzL0RvY3VtZW50cy9PY3Rhbi9wcm9qZWN0LWFsYnkvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGUsXG5cdHJlc3BvbnNlSGVhZGVycyxcblx0cmVtaXhDb250ZXh0XG4pIHtcblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRyZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuXHR9KTtcbn1cbiIsICJpbXBvcnQge1xuXHRMaW5rcyxcblx0TGl2ZVJlbG9hZCxcblx0TWV0YSxcblx0T3V0bGV0LFxuXHRTY3JpcHRzLFxuXHRTY3JvbGxSZXN0b3JhdGlvblxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgZXh0ZW5kU3R5bGVzIGZyb20gXCIuL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuXHRyZXR1cm4gWyB7XG5cdFx0cmVsOiBcInByZWxvYWRcIixcblx0XHRocmVmOiBcIi9pbWFnZXMvZGlhbW9uZC13YWxsZXQtbGF5ZXIuc3ZnXCIsXG5cdFx0YXM6IFwiaW1hZ2VcIixcblx0XHR0eXBlOiBcImltYWdlL3N2Zyt4bWxcIlxuXHR9LFxuXHR7XG5cdFx0cmVsOiBcInByZWxvYWRcIixcblx0XHRocmVmOiBcIi9pbWFnZXMvZGlhbW9uZC1mb290ZXIuc3ZnXCIsXG5cdFx0YXM6IFwiaW1hZ2VcIixcblx0XHR0eXBlOiBcImltYWdlL3N2Zyt4bWxcIlxuXHR9LFxuXHR7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9LFxuXHR7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGV4dGVuZFN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG5cdHJldHVybiB7IHRpdGxlOiBcIkdldCBBbGJ5XCIgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHQ8Ym9keT5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpO1xufVxuIiwgImltcG9ydCBGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCJ+L2NvbXBvbmVudHMvU2VydmljZXNcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvUGF5bWVudFwiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwifi9jb21wb25lbnRzL1dhbGxldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PFNlcnZpY2UgLz5cblx0XHRcdDxQYXltZW50IC8+XG5cdFx0XHQ8V2FsbGV0IC8+XG5cdFx0XHQ8Rm9vdGVyIC8+XHRcblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJpbXBvcnQgUmlnaHRCZWUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvcmlnaHQtYmVlLnN2Z1wiO1xuaW1wb3J0IExlZnRCZWUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvbGVmdC1iZWUuc3ZnXCI7XG5pbXBvcnQgQXJyb3dJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3BvaW50ZXIuc3ZnXCI7XG5pbXBvcnQgVGVsZWdyYW1Mb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL1RlbGVncmFtLnN2Z1wiO1xuaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL1R3aXR0ZXIuc3ZnXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9HaXRIdWIuc3ZnXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHotMTAgXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGhvdmVyOmN1cnNvci1wb2ludGVyIG10LTQgbGc6bXQtMjQgcHktOCBsZzpweS1bOC43NXJlbV0gdGV4dC1jZW50ZXIgcm91bmRlZC1bMi43NXJlbV0gbWF4LWgtWzMxLjI1cmVtXSBtYXgtdy1bNzcuMTg3NXJlbV0gcmVsYXRpdmUgYmctYWxieVllbGxvdy01MCB3LVs5MS40NiVdIGxnOnctWzg1Ljc2JV0gbXgtYXV0b1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotMTBcIj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidy1bNzglXSBteC1hdXRvICBmb250LXByaW1hcnkgdGV4dC0zeGwgbWQ6dGV4dC02eGwgbWQ6bGVhZGluZy1bNC42ODc1cmVtXSBmb250LWJsYWNrIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICBZb3UgZG9uXHUyMDE5dCBoYXZlIGEgTGlnaHRuaW5nIEFkZHJlc3MgeWV0P1xuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBtZDp0b3AtWzgyJV0gcmlnaHQtMCBsZzpyaWdodC1bMjcuNSVdIGhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QXJyb3dJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1hbGJ5WWVsbG93LTMwMCByZWxhdGl2ZSB0ZXh0LWFsYnlDb2xkR3JheS04MDAgdGV4dC1sZyBmb250LW1lZGl1bSBweS0zIGxnOnB5LTQgcHgtNCBsZzpweC0xNiByb3VuZGVkLVsxLjg3NXJlbV0gbXQtNFwiPlxuICAgICAgICAgICAgTGVhcm4gbW9yZVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17UmlnaHRCZWV9XG5cdFx0XHRcdFx0XHRhbHQ9XCJSaWdodCBCZWVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1hdXRvIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLVs4JV0gbGVmdC1bNzAlXSBtZDpsZWZ0LVs4NSVdIGhpZGRlbiBtZDpibG9ja1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9e0xlZnRCZWV9XG5cdFx0XHRcdFx0XHRhbHQ9XCJMZWZ0IEJlZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0byBhYnNvbHV0ZSBib3R0b20tWzE0JV0gbGVmdC1bODIlXSBtZDpsZWZ0LVs5MSVdIGhpZGRlbiBtZDpibG9ja1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1lbmQgYmctYWxieVllbGxvdy0zMDAgcHktMTQgbGc6cHktMzIgbXQtNCBsZzptdC0zMlwiPlxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidy0xMS8xMiB0ZXh0LWNlbnRlciBtZDp3LWZ1bGwgZm9udC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgZmVlZGJhY2sgb3IgbmVlZCBoZWxwP1xuXHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1kOnctWzUyLjg0JV0gdy0xMS8xMiBteC1hdXRvIHB0LTggdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgZm9udC1wcmltYXJ5IGZvbnQtbm9ybWFsIHRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMi4yNXJlbV0gdGV4dC1hbGJ5Q29sZEdyYXktODAwXCI+XG4gICAgICAgICAgICBBbGJ5IGlzIG9wZW4tc291cmNlIGFuZCBjdXJyZW50bHkgaW4gYWxwaGEgc3RhZ2UuIE91ciBnb2FsIGlzIHRvXG4gICAgICAgICAgICBjcmVhdGUgdGhlIGJlc3Qgb25saW5lIGV4cGVyaWVuY2UgdG8gY29uc3VtZSBhbmQgcmV3YXJkIGNvbnRlbnQgYW5kXG4gICAgICAgICAgICBzZXJ2aWNlcyBvbmxpbmUuIFdlIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gRmlsZSBhe1wiIFwifVxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nZXRBbGJ5L2xpZ2h0bmluZy1icm93c2VyLWV4dGVuc2lvbi9pc3N1ZXNcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxuXHRcdFx0XHRcdFx0PlxuICAgICAgICAgICAgICBHaXRodWIgaXNzdWVcblx0XHRcdFx0XHRcdDwvYT57XCIgXCJ9XG4gICAgICAgICAgICBvciBqb2luIHRoZXtcIiBcIn1cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3QubWUvZ2V0QWxieVwiIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxuICAgICAgICAgICAgICBUZWxlZ3JhbSBjaGFubmVsXG5cdFx0XHRcdFx0XHQ8L2E+XG4gICAgICAgICAgICAuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1jZW50ZXIgcHQtMTBcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dldGFsYnlcIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e1R3aXR0ZXJMb2dvfSBhbHQ9XCJUd2l0dGVyIExvZ29cIiBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCIgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3QubWUvZ2V0QWxieVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e1RlbGVncmFtTG9nb30gYWx0PVwiVGVsZWdyYW0gTG9nb1wiIGNsYXNzTmFtZT1cIm1iLTQgdy1bMzlweF0gaC1bMzVweF0gbGc6dy1bNTIuNjdweF0gbGc6aC1bNDhweF1cIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nZXRBbGJ5XCJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtHaXRIdWJMb2dvfSBhbHQ9XCJHaXRIdWIgTG9nb1wiIGNsYXNzTmFtZT1cIm1iLTQgdy1bMzlweF0gaC1bMzVweF0gbGc6dy1bNTIuNjdweF0gbGc6aC1bNDhweF1cIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9nZXRhbGJ5LmNvbS9wcml2YWN5LXBvbGljeVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LTJ4bCB0ZXh0LWJhc2UgZm9udC1wcmltYXJ5IHVuZGVybGluZSBwdC01XCJcblx0XHRcdFx0XHQ+XG4gICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgImltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL0xvZ28uc3ZnXCI7XG5pbXBvcnQgSGVhZGVySWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgQmVsb3dCdXR0b25JbGx1c3RyYXRpb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYnV0dG9uLWJlbG93LnN2Z1wiO1xuaW1wb3J0IEJlbG93SGVhZGVySWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci1iZWxvdy5zdmdcIjtcbmltcG9ydCBHcm91cERpYW1vbmQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZ3JvdXAtZGlhbW9uZC5zdmdcIjtcblxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCIgYmctYWxieVllbGxvdy0zMDAgbGc6bWluLWgtc2NyZWVuIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctWzkzLjE5NCVdIHctWzkxLjQ2JV0gbXgtYXV0byBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHRvcC0wIHB0LTUgaXRlbXMtY2VudGVyIGFic29sdXRlIGxnOnctWzkzLjE5NCVdIHctWzkxLjQ2JV0ganVzdGlmeS1iZXR3ZWVuIG1heC1oLVs2LjI1cmVtXVwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17TG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctYXV0byBsZzpoLVszLjc1cmVtXSBoLVsyLjc1cmVtXVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtNSBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1hbGJ5V2FybUdyYXktODAwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWxieVdhcm1HcmF5LTgwMCBmb250LXByaW1hcnkgIGxnOmlubGluZS1ibG9jayB0ZXh0LXNtIG1kOnRleHQtbGcgbGc6bGVhZGluZy1bMS43NXJlbV0gZm9udC1zZW1pYm9sZCBweS0yIGxnOnB5LTQgcHgtMyBsZzpweC02IHJvdW5kZWQtWzMwcHhdXCI+XG5cdFx0XHRcdFx0XHRcdEluc3RhbGwgQWxieVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QmVsb3dCdXR0b25JbGx1c3RyYXRpb259IGFsdD1cIkJlbG93IEJ1dHRvbiBJbGx1c3RyYXRpb25cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWF1dG8gaGlkZGVuIGxnOmlubGluZS1ibG9jayBsZWZ0LVs4MCVdIHRvcC1bNjclXVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLVtpbmhlcml0XSBqdXN0aWZ5LWJldHdlZW4gZm9udC1wcmltYXJ5IHB0LVs2LjVyZW1dIGxnOnB0LTBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOm1heC13LVszOS43NXJlbV0gbGc6dy0xLzIgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInhsOnRleHQtNnhsIG1kOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgRGlyZWN0IGNvbnRyaWJ1dGlvbnMgZnJvbSB5b3VyIGF1ZGllbmNlXG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGc6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHB0LTlcIj5cbiAgICAgICAgICAgICAgVXNlIGEgTGlnaHRuaW5nIEFkZHJlc3MgdG8gcmVjZWl2ZSB2YWx1ZSBmb3IgdmFsdWUgcGF5bWVudHMgaW4gQml0Y29pbiBmcm9tIHlvdXIgYXVkaWVuY2UgXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0xMCBsZzpwdC00MFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0hlYWRlcklsbHVzdHJhdGlvbn0gYWx0PVwiSGVhZGVyIElsbHVzdHJhdGlvblwiIGNsYXNzTmFtZT1cInctWzQydnddIG14LWF1dG8gbWluLXctWzE5cmVtXSBoLWF1dG8gei0xMCByZWxhdGl2ZVwiIC8+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QmVsb3dIZWFkZXJJbGx1c3RyYXRpb259IGFsdD1cIkJlbG93IEhlYWRlciBJbGx1c3RyYXRpb25cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWF1dG8gaGlkZGVuIGxnOmlubGluZS1ibG9jayBsZWZ0LVs4OCVdIHRvcC1bNzIlXSB6LTBcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGltZyBzcmM9e0dyb3VwRGlhbW9uZH0gYWx0PVwiR3JvdXAgRGlhbW9uZFwiIGNsYXNzTmFtZT1cImFic29sdXRlIHctYXV0byAgbGVmdC0wIGJvdHRvbS0wIHotMCBoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwgImltcG9ydCBMaW5lcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9saW5lcy5zdmdcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2FsbGV0LnN2Z1wiO1xuaW1wb3J0IFdhdmVzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhdmVzLnN2Z1wiO1xuaW1wb3J0IFB1enpsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wdXp6bGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICAgIFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp3LWZ1bGwgcHktMTIgYmctYWxieVllbGxvdy01MCB4bDpweC0zNyB4bDpwdC00MSB4bDpwYi0zOFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4IHhsOmp1c3RpZnktY2VudGVyIHhsOml0ZW1zLWNlbnRlciB4bDpzcGFjZS14LTIxIHNwYWNlLXktMTAgeGw6c3BhY2UteS0wIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4IHhsOnNwYWNlLXgtMjEgZ3JpZCBncmlkLWNvbHMtMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17TGluZXN9IGFsdD1cImxpbmVzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5Vc2UgZXhpc3RpbmcgPGJyLz5wbGF0Zm9ybXM8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICBcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e1dhbGxldH0gYWx0PVwid2FsbGV0XCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5SZWNlaXZlIHBheW1lbnRzPGJyLz4gZGlyZWN0bHk8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgeGw6bXQtOFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17V2F2ZXN9IGFsdD1cIndhdmVzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5Ob24taW50cnVzaXZlIGFuZDxici8+IGZyaWN0aW9ubGVzcyBmb3IgeW91cjxici8+IGF1ZGllbmNlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgbXItMi41XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDptdC04XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtQdXp6bGV9IGFsdD1cInB1enpsZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyXCI+U2ltcGxlIGludGVncmF0aW9uOzxici8+IG5vIGNvZGluZyBza2lsbHM8YnIvPiBuZWVkZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+ICAgIFxuXHQpO1xufSIsICJpbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jb2RlLnN2Z1wiO1xuaW1wb3J0IENvZGVNb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY29kZS1tb2JpbGUuc3ZnXCI7XG5pbXBvcnQgVHdpdHRlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3R3aXR0ZXItbW9iaWxlLnN2Z1wiO1xuaW1wb3J0IFlvdXR1YmUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMveW91dHViZS1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgWW91dHViZU1vYmlsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy95b3V0dWJlLW1vYmlsZS5zdmdcIjtcbmltcG9ydCBCaXRjb2luIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4taWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJpdGNvaW5Nb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYml0Y29pbi1tb2JpbGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnQoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpwdC00MC41IHB0LTIwIGxnOnctWzkzLjMlXSB3LVs5MS40NiVdIG14LWF1dG9cIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTV4eGwgbGc6dGV4dC1jZW50ZXIgZm9udC1ibGFjayBsZzp0ZXh0LTN4bCB0ZXh0LTJ4bFwiPlJlY2VpdmluZyBwYXltZW50cyBvbjxiciAvPiAgZXhpc3RpbmcgcGxhdGZvcm1zPC9oMT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtMTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6c3BhY2UteS02IHNwYWNlLXktNSB4bDptbC0xN1wiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCIyeGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5Zb3VyIG93biBXZWJzaXRlPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIHlvdXIgd2Vic2l0ZTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BZGQgdGhpcyBpbiB0aGUgSFRNTCBoZWFkZXIgc2VjdGlvbiBvZiB5b3VyIHdlYnNpdGU6XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiAmbHQ7bWV0YSBuYW1lPSZxdW90O2xpZ2h0bmluZyZxdW90OyBjb250ZW50PSZxdW90O3lvdUBsaWdodG5pbmcuYWRkcmVzcyZxdW90Oy8mZ3Q7PC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEwIGgtOCBwLTVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIC1tdC0zIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+TWFrZSBzdXJlIHRvIGhhdmUgYW4gb2c6aW1hZ2UgbWV0YSB0YWc6IDxici8+PGIgY2xhc3NOYW1lPVwiYnJlYWstYWxsXCI+Jmx0O21ldGEgcHJvcGVydHk9JnF1b3Q7b2c6aW1hZ2UmcXVvdDsgY29udGVudD0mcXVvdDtodHRwczovL3d3dy55b3VyZS5ibG9nL1lPVVJfSU1BR0UmcXVvdDsgLyZndDs8L2I+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjM8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIyeGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIHdlYnNpdGUgc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGltYWdlLXNoYWRvd1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtDb2RlfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgYWx0PVwiY29kZVwiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0NvZGVNb2JpbGV9IGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlbiBtdC00XCIgYWx0PVwiY29kZVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCIyeGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrICBsZzp0ZXh0LTJ4bCB0ZXh0LXhsXCI+VHdpdHRlcjwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbGc6dGV4dC14bCB0ZXh0LWxnXCI+SG93IHRvIHJlY2VpdmUgY29udHJpYnV0aW9ucyBvbiB5b3VyIHdlYnNpdGU8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIHlvdXIgVHd0dGVyIHByb2ZpbGU6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgVHdpdHRlciBwcm9maWxlIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBpbWFnZS1zaGFkb3dcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17VHdpdHRlcn0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTW9iaWxlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS01IHhsOm1sLTE3XCI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgbGc6dGV4dC0yeGwgdGV4dC14bFwiPllvdVR1YmU8L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCBmb250LWJvbGQgbGc6dGV4dC14bCB0ZXh0LWxnXCI+SG93IHRvIHJlY2VpdmUgY29udHJpYnV0aW9ucyBvbiBZb3VUdWJlPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpZGVvIGluIHlvdXIgWW91VHViZSBjaGFubmVsOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIyeGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIFlvdVR1YmUgdmlkZW8gc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGltYWdlLXNoYWRvd1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtZb3V0dWJlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9e1lvdXR1YmVNb2JpbGV9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gbXQtNFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwIHBiLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCIyeGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5CaXRjb2luIFRWPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgZm9udC1ib2xkIGxnOnRleHQteGwgdGV4dC1sZ1wiPkhvdyB0byByZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24gQml0Y29pblRWPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpZGVvIGluIHlvdXIgQml0Y29pblRWIGNoYW5uZWw6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgQml0Y29pblRWIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBpbWFnZS1zaGFkb3dcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17Qml0Y29pbn0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtCaXRjb2luTW9iaWxlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImZ1bmN0aW9uIFdhbGxldCgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiAgcHktWzhyZW1dIHJlbGF0aXZlIGJnLWRpYW1vbmRMYXllciBiZy1yZXBlYXQgYmctYWxieUNvbGRHcmF5LTgwMCBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgdy1bOTEuNDYlXSB0ZXh0LWNlbnRlciBtZDp3LVs1NS42MjUlXSBtYXgtdy1bNTAuMDYzcmVtXSBteC1hdXRvIGZvbnQtcHJpbWFyeVwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC01eGwgdGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LWFsYnlDb2xkR3JheS0yNVwiPlxuICAgICAgICAgIFRoaXMgbmV3IHdheSBvZiBtb25ldGl6YXRpb24gaXMgYnJvdWdodCB0byB5b3UgYnkgQWxieVxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LTJ4bCB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1hbGJ5Q29sZEdyYXktMjUgcHQtNFwiPlxuICAgICAgICAgIEFsYnkgaXMgYSBicm93c2VyIGV4dGVuc2lvbiBmb3IgdGhlIEJpdGNvaW4gTGlnaHRuaW5nIE5ldHdvcmsuIFlvdSBjYW4gY29ubmVjdCB5b3VyIG93biBMaWdodG5pbmcgd2FsbGV0IG9yIHVzZSBBbGJ5XHUyMDE5cyB3YWxsZXQgYW5kIHN0YXJ0IHRyYW5zYWN0aW5nIGluIEJpdGNvaW4gd2l0aCBlYXNlLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtYmFzZSBsZzp0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTMgbGc6cHktNCBweC00IGxnOnB4LTggcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICBUcnkgaXQgbm93XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7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
