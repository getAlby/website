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
var tailwind_default = "/build/_assets/tailwind-U4BJHHEY.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-3EVDSPAK.css";

// route-module:/home/morris/Documents/Octan/project-alby/app/root.jsx
function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
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
function meta() {
  return { title: "Alby - Bitcoin Lightning Wallet for your browser" };
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

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/value4value.jsx
var value4value_exports = {};
__export(value4value_exports, {
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

// public/images/logo.svg
var logo_default = "/build/_assets/logo-WIC6GJUP.svg";

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
    alt: "Logo",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  }))), /* @__PURE__ */ React.createElement("div", {
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
    className: "pt-10 lg:pt-24"
  }, /* @__PURE__ */ React.createElement("img", {
    src: header_illustration_default,
    alt: "Header Illustration",
    className: "mx-auto min-w-[17rem] h-auto z-10 relative"
  }), /* @__PURE__ */ React.createElement("img", {
    src: header_below_default,
    alt: "Below Header Illustration",
    className: "absolute w-auto hidden lg:inline-block left-[88%] top-[74.5%] z-0"
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

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/value4value.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Payment, null), /* @__PURE__ */ React.createElement(Wallet_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => index
});
init_react();

// public/images/banner-illustration.png
var banner_illustration_default = "/build/_assets/banner-illustration-6TEH4U4S.png";

// public/images/telegram.png
var telegram_default = "/build/_assets/telegram-R7XR6VN6.png";

// public/images/twitter.png
var twitter_default = "/build/_assets/twitter-XMKQ5RAT.png";

// public/images/github.png
var github_default = "/build/_assets/github-5FT2OTLC.png";

// public/images/call-to-action.svg
var call_to_action_default = "/build/_assets/call-to-action-7BME25NU.svg";

// public/images/do-it-hint.png
var do_it_hint_default = "/build/_assets/do-it-hint-GU2RTDC7.png";

// route-module:/home/morris/Documents/Octan/project-alby/app/routes/index.jsx
function index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[93.194%] mx-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 pb-8 lg:pb-0 items-center absolute w-[93.194%] justify-center lg:justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_default,
    alt: "Logo",
    className: "w-[12.5rem] text-black lg:w-auto lg:h-[3.75rem] h-24"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:flex items-end gap-5 justify-between xl:pt-0 pt-3"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram Logo",
    className: "w-[1.875rem] h-[1.875rem] mb-4"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/getalby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_default,
    alt: "Twitter Logo",
    className: "w-[1.875rem] h-[1.875rem]  mb-4"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub Logo",
    className: "w-[1.875rem] h-[1.875rem]  mb-4"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "bg-white text-black border-[3px] border-solid border-[#333333] font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full"
  }, "Add To Chrome"))), /* @__PURE__ */ React.createElement("div", {
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
  }, "Direct interactions between you and the receiver, no need to worry about third party trackers")), /* @__PURE__ */ React.createElement("img", {
    src: call_to_action_default,
    alt: "Call to Action",
    className: " pt-5 block mx-auto lg:mx-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " mt-6"
  }, /* @__PURE__ */ React.createElement("img", {
    src: do_it_hint_default,
    alt: "Do It Hint",
    className: "block relative mx-auto lg:mx-0 left-[17%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-10 lg:pt-0 basis-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: banner_illustration_default,
    alt: "Header Illustration",
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
    alt: "Twitter Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://getalby.com/privacy-policy",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL21vcnJpcy9Eb2N1bWVudHMvT2N0YW4vcHJvamVjdC1hbGJ5L2FwcC9yb290LmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbW9ycmlzL0RvY3VtZW50cy9PY3Rhbi9wcm9qZWN0LWFsYnkvYXBwL3JvdXRlcy92YWx1ZTR2YWx1ZS5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9IZWFkZXIuanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9QYXltZW50LmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XYWxsZXQuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9tb3JyaXMvRG9jdW1lbnRzL09jdGFuL3Byb2plY3QtYWxieS9hcHAvcm91dGVzL2luZGV4LmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbW9ycmlzL0RvY3VtZW50cy9PY3Rhbi9wcm9qZWN0LWFsYnkvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbW9ycmlzL0RvY3VtZW50cy9PY3Rhbi9wcm9qZWN0LWFsYnkvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL21vcnJpcy9Eb2N1bWVudHMvT2N0YW4vcHJvamVjdC1hbGJ5L2FwcC9yb3V0ZXMvdmFsdWU0dmFsdWUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL21vcnJpcy9Eb2N1bWVudHMvT2N0YW4vcHJvamVjdC1hbGJ5L2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy92YWx1ZTR2YWx1ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3ZhbHVlNHZhbHVlXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwidmFsdWU0dmFsdWVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBleHRlbmRTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcImljb25cIixcbiAgICAgIGhyZWY6IFwiL2Zhdmljb24ucG5nXCIsXG4gICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgaHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtd2FsbGV0LWxheWVyLnN2Z1wiLFxuICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgIGhyZWY6IFwiL2ltYWdlcy9kaWFtb25kLWZvb3Rlci5zdmdcIixcbiAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICB0eXBlOiBcImltYWdlL3N2Zyt4bWxcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFsYnkgLSBCaXRjb2luIExpZ2h0bmluZyBXYWxsZXQgZm9yIHlvdXIgYnJvd3NlclwiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCJ+L2NvbXBvbmVudHMvU2VydmljZXNcIjtcclxuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9QYXltZW50XCI7XHJcbmltcG9ydCBXYWxsZXQgZnJvbSBcIn4vY29tcG9uZW50cy9XYWxsZXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG5cdFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxTZXJ2aWNlIC8+XHJcbiAgICAgIDxQYXltZW50IC8+XHJcbiAgICAgIDxXYWxsZXQgLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJpZ2h0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWJlZS5zdmdcIjtcbmltcG9ydCBMZWZ0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xlZnQtYmVlLnN2Z1wiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wb2ludGVyLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9UZWxlZ3JhbS5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLWxvZ28uc3ZnXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9HaXRIdWIuc3ZnXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHotMTAgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGhvdmVyOmN1cnNvci1wb2ludGVyIG10LTE2IGxnOm10LTI0IHB5LTggbGc6cHktWzguNzVyZW1dIHRleHQtY2VudGVyIHJvdW5kZWQtWzIuNzVyZW1dIG1heC1oLVszMS4yNXJlbV0gbWF4LXctWzc3LjE4NzVyZW1dIHJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctNTAgdy1bOTEuNDYlXSBsZzp3LVs4NS43NiVdIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctWzc4JV0gbXgtYXV0byAgZm9udC1wcmltYXJ5IHRleHQtM3hsIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctWzQuNjg3NXJlbV0gZm9udC1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgWW91IGRvblx1MjAxOXQgaGF2ZSBhIExpZ2h0bmluZyBBZGRyZXNzIHlldD9cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbWQ6dG9wLVs4MiVdIHJpZ2h0LTAgbGc6cmlnaHQtWzI3LjUlXSBoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0Fycm93SWNvbn0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxhIGhyZWY9XCIvbGlnaHRuaW5nLWFkZHJlc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgcmVsYXRpdmUgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMyBsZzpweS00IHB4LTQgbGc6cHgtMTYgcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17UmlnaHRCZWV9XG4gICAgICAgICAgICBhbHQ9XCJSaWdodCBCZWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLVs4JV0gbGVmdC1bNzAlXSBtZDpsZWZ0LVs4NSVdIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e0xlZnRCZWV9XG4gICAgICAgICAgICBhbHQ9XCJMZWZ0IEJlZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0byBhYnNvbHV0ZSBib3R0b20tWzE0JV0gbGVmdC1bODIlXSBtZDpsZWZ0LVs5MSVdIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1lbmQgYmctYWxieVllbGxvdy0zMDAgcHktMTQgbGc6cHktMzIgbXQtMTYgbGc6bXQtMzJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctMTEvMTIgdGV4dC1jZW50ZXIgbWQ6dy1mdWxsIGZvbnQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC0yeGwgbWQ6dGV4dC01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIERvIHlvdSBoYXZlIGZlZWRiYWNrIG9yIG5lZWQgaGVscD9cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LVs1Mi44NCVdIHctMTEvMTIgbXgtYXV0byBwdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtcHJpbWFyeSBmb250LW5vcm1hbCB0ZXh0LWxnIG1kOnRleHQtMnhsIGxlYWRpbmctWzIuMjVyZW1dIHRleHQtYWxieUNvbGRHcmF5LTgwMFwiPlxuICAgICAgICAgICAgQWxieSBpcyBvcGVuLXNvdXJjZSBhbmQgY3VycmVudGx5IGluIGFscGhhIHN0YWdlLiBPdXIgZ29hbCBpcyB0b1xuICAgICAgICAgICAgY3JlYXRlIHRoZSBiZXN0IG9ubGluZSBleHBlcmllbmNlIHRvIGNvbnN1bWUgYW5kIHJld2FyZCBjb250ZW50IGFuZFxuICAgICAgICAgICAgc2VydmljZXMgb25saW5lLiBXZSBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuIEZpbGUgYXtcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieS9saWdodG5pbmctYnJvd3Nlci1leHRlbnNpb24vaXNzdWVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0aHViIGlzc3VlXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgb3Igam9pbiB0aGV7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgVGVsZWdyYW0gY2hhbm5lbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRhbGJ5XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXIgTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB3LVszOXB4XSBoLVszNXB4XSBsZzp3LVs1Mi42N3B4XSBsZzpoLVs0OHB4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1RlbGVncmFtTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJUZWxlZ3JhbSBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtHaXRIdWJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIkdpdEh1YiBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2V0YWxieS5jb20vcHJpdmFjeS1wb2xpY3lcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtcHJpbWFyeSB1bmRlcmxpbmUgcHQtNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IEhlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJlbG93QnV0dG9uSWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2J1dHRvbi1iZWxvdy5zdmdcIjtcbmltcG9ydCBCZWxvd0hlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItYmVsb3cuc3ZnXCI7XG5pbXBvcnQgR3JvdXBEaWFtb25kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2dyb3VwLWRpYW1vbmQuc3ZnXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1hbGJ5WWVsbG93LTMwMCBsZzptaW4taC1zY3JlZW4gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bOTMuMTk0JV0gdy1bOTEuNDYlXSBteC1hdXRvIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdG9wLTAgcHQtNSBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgbGc6dy1bOTMuMTk0JV0gdy1bOTEuNDYlXSBqdXN0aWZ5LWJldHdlZW4gbWF4LWgtWzYuMjVyZW1dXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGxnOmgtWzMuNzVyZW1dIGgtWzIuNzVyZW1dXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWFsYnlXYXJtR3JheS04MDAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hbGJ5V2FybUdyYXktODAwIGZvbnQtcHJpbWFyeSAgbGc6aW5saW5lLWJsb2NrIHRleHQtc20gbWQ6dGV4dC1sZyBsZzpsZWFkaW5nLVsxLjc1cmVtXSBmb250LXNlbWlib2xkIHB5LTIgbGc6cHktNCBweC0zIGxnOnB4LTYgcm91bmRlZC1bMzBweF1cIj5cbiAgICAgICAgICAgICAgSW5zdGFsbCBBbGJ5XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtCZWxvd0J1dHRvbklsbHVzdHJhdGlvbn1cbiAgICAgICAgICAgICAgYWx0PVwiQmVsb3cgQnV0dG9uIElsbHVzdHJhdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctYXV0byBoaWRkZW4gbGc6aW5saW5lLWJsb2NrIGxlZnQtWzgwJV0gdG9wLVs2NyVdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLVtpbmhlcml0XSBqdXN0aWZ5LWJldHdlZW4gZm9udC1wcmltYXJ5IHB0LVs2LjVyZW1dIGxnOnB0LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm1heC13LVszOS43NXJlbV0gbGc6dy0xLzIgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInhsOnRleHQtNnhsIG1kOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgRGlyZWN0IGNvbnRyaWJ1dGlvbnMgZnJvbSB5b3VyIGF1ZGllbmNlXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGc6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHB0LTlcIj5cbiAgICAgICAgICAgICAgVXNlIGEgTGlnaHRuaW5nIEFkZHJlc3MgdG8gcmVjZWl2ZSB2YWx1ZSBmb3IgdmFsdWUgcGF5bWVudHMgaW5cbiAgICAgICAgICAgICAgQml0Y29pbiBmcm9tIHlvdXIgYXVkaWVuY2VcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIGxnOnB0LTI0XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17SGVhZGVySWxsdXN0cmF0aW9ufVxuICAgICAgICAgICAgICBhbHQ9XCJIZWFkZXIgSWxsdXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtaW4tdy1bMTdyZW1dIGgtYXV0byB6LTEwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17QmVsb3dIZWFkZXJJbGx1c3RyYXRpb259XG4gICAgICAgICAgICAgIGFsdD1cIkJlbG93IEhlYWRlciBJbGx1c3RyYXRpb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWF1dG8gaGlkZGVuIGxnOmlubGluZS1ibG9jayBsZWZ0LVs4OCVdIHRvcC1bNzQuNSVdIHotMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e0dyb3VwRGlhbW9uZH1cbiAgICAgICAgYWx0PVwiR3JvdXAgRGlhbW9uZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctYXV0byAgbGVmdC0wIGJvdHRvbS0wIHotMCBoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsICJpbXBvcnQgTGluZXMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvbGluZXMuc3ZnXCI7XG5pbXBvcnQgV2FsbGV0IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhbGxldC5zdmdcIjtcbmltcG9ydCBXYXZlcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YXZlcy5zdmdcIjtcbmltcG9ydCBQdXp6bGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvcHV6emxlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6dy1mdWxsIHB5LTEyIGJnLWFsYnlZZWxsb3ctNTAgeGw6cHgtMzcgeGw6cHQtMzMgeGw6cGItNDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpqdXN0aWZ5LWNlbnRlciB4bDppdGVtcy1jZW50ZXIgeGw6c3BhY2UteC0yMSBzcGFjZS15LTEwIHhsOnNwYWNlLXktMCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17TGluZXN9IGFsdD1cImxpbmVzXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNi41XCI+VXNlIGV4aXN0aW5nIDxici8+cGxhdGZvcm1zPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e1dhbGxldH0gYWx0PVwid2FsbGV0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNi41XCI+UmVjZWl2ZSBwYXltZW50czxici8+IGRpcmVjdGx5PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6c3BhY2UteC0yMSBncmlkIGdyaWQtY29scy0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptdC04XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtXYXZlc30gYWx0PVwid2F2ZXNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwdC01XCI+Tm9uLWludHJ1c2l2ZSBhbmQ8YnIvPiBmcmljdGlvbmxlc3MgZm9yIHlvdXI8YnIvPiBhdWRpZW5jZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgbXItMi41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm10LThcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e1B1enpsZX0gYWx0PVwicHV6emxlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNVwiPlNpbXBsZSBpbnRlZ3JhdGlvbjs8YnIvPiBubyBjb2Rpbmcgc2tpbGxzPGJyLz4gbmVlZGVkPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgICBcbiAgKTtcbn0iLCAiaW1wb3J0IENvZGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY29kZS5zdmdcIjtcbmltcG9ydCBDb2RlTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NvZGUtbW9iaWxlLnN2Z1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdHdpdHRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgVHdpdHRlck1vYmlsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLW1vYmlsZS5zdmdcIjtcbmltcG9ydCBZb3V0dWJlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3lvdXR1YmUtaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IFlvdXR1YmVNb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMveW91dHViZS1tb2JpbGUuc3ZnXCI7XG5pbXBvcnQgQml0Y29pbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9iaXRjb2luLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBCaXRjb2luTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4taWxsdXN0cmF0aW9uLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6cHQtNDAuNSBwdC0yMCBsZzp3LVs5My4zJV0gdy1bOTEuNDYlXSBteC1hdXRvIGJnLXdoaXRlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwieGw6dGV4dC01eHhsIGxnOnRleHQtY2VudGVyIGZvbnQtYmxhY2sgbGc6dGV4dC0zeGwgdGV4dC0yeGxcIj5SZWNlaXZpbmcgcGF5bWVudHMgb248YnIgLz4gIGV4aXN0aW5nIHBsYXRmb3JtczwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTIgeGw6bWwtMTdcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5Zb3VyIG93biBXZWJzaXRlPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIHlvdXIgd2Vic2l0ZTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPHA+QWRkIHRoaXMgaW4gdGhlIEhUTUwgaGVhZGVyIHNlY3Rpb24gb2YgeW91ciB3ZWJzaXRlOlxuXG4gICAgICAgICAgICAgICAgICA8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiAmbHQ7bWV0YSBuYW1lPSZxdW90O2xpZ2h0bmluZyZxdW90OyBjb250ZW50PSZxdW90O3lvdUBsaWdodG5pbmcuYWRkcmVzcyZxdW90Oy8mZ3Q7PC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEwIGgtOCBwLTVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIC1tdC0zIHhsOm10LTBcIj4yPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxwPk1ha2Ugc3VyZSB0byBoYXZlIGFuIG9nOmltYWdlIG1ldGEgdGFnOiA8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiZsdDttZXRhIHByb3BlcnR5PSZxdW90O29nOmltYWdlJnF1b3Q7IGNvbnRlbnQ9JnF1b3Q7aHR0cHM6Ly93d3cueW91cmUuYmxvZy9ZT1VSX0lNQUdFJnF1b3Q7IC8mZ3Q7PC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4zPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgd2Vic2l0ZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Q29kZX0gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIGFsdD1cImNvZGVcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtDb2RlTW9iaWxlfSBjbGFzc05hbWU9XCJpbWFnZS1kcm9wLXNoYWRvdyBteC1hdXRvIGJsb2NrIGxnOmhpZGRlbiBtdC00XCIgYWx0PVwiY29kZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTIgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgIGxnOnRleHQtMnhsIHRleHQteGxcIj5Ud2l0dGVyPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIGxnOnRleHQteGwgdGV4dC1sZ1wiPkhvdyB0byByZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24geW91ciB3ZWJzaXRlPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5cbiAgICAgICAgICAgICAgICA8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgeW91ciBUd3R0ZXIgcHJvZmlsZTogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgVHdpdHRlciBwcm9maWxlIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtUd2l0dGVyfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgPGltZyBzcmM9e1R3aXR0ZXJNb2JpbGV9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJpbWFnZS1kcm9wLXNoYWRvdyBteC1hdXRvIGJsb2NrIGxnOmhpZGRlbiBtdC00XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6c3BhY2UteS02IHNwYWNlLXktMiB4bDptbC0xN1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgbGc6dGV4dC0yeGwgdGV4dC14bFwiPllvdVR1YmU8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIGZvbnQtYm9sZCBsZzp0ZXh0LXhsIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIFlvdVR1YmU8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuXG4gICAgICAgICAgICAgICAgPHA+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlkZW8gaW4geW91ciBZb3VUdWJlIGNoYW5uZWw6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIFlvdVR1YmUgdmlkZW8gc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9e1lvdXR1YmV9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz17WW91dHViZU1vYmlsZX0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImltYWdlLWRyb3Atc2hhZG93IG14LWF1dG8gYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMCBwYi0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS0yIHhsOm1sLTE3IG9yZGVyLWxhc3RcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5CaXRjb2luIFRWPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LWJvbGQgbGc6dGV4dC14bCB0ZXh0LWxnXCI+SG93IHRvIHJlY2VpdmUgY29udHJpYnV0aW9ucyBvbiBCaXRjb2luVFY8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuXG4gICAgICAgICAgICAgICAgPHA+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlkZW8gaW4geW91ciBCaXRjb2luVFYgY2hhbm5lbDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgQml0Y29pblRWIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtCaXRjb2lufSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgPGltZyBzcmM9e0JpdGNvaW5Nb2JpbGV9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJpbWFnZS1kcm9wLXNoYWRvdyBteC1hdXRvIGJsb2NrIGxnOmhpZGRlbiBtdC00XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJmdW5jdGlvbiBXYWxsZXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgIHB5LVs4cmVtXSByZWxhdGl2ZSBiZy1kaWFtb25kTGF5ZXIgYmctcmVwZWF0IGJnLWFsYnlDb2xkR3JheS04MDAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzkxLjQ2JV0gdGV4dC1jZW50ZXIgbWQ6dy1bNTUuNjI1JV0gbWF4LXctWzUwLjA2M3JlbV0gbXgtYXV0byBmb250LXByaW1hcnlcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtNXhsIHRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbGJ5Q29sZEdyYXktMjVcIj5cbiAgICAgICAgICBUaGlzIG5ldyB3YXkgb2YgbW9uZXRpemF0aW9uIGlzIGJyb3VnaHQgdG8geW91IGJ5IEFsYnlcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtYWxieUNvbGRHcmF5LTI1IHB0LTRcIj5cbiAgICAgICAgICBBbGJ5IGlzIGEgYnJvd3NlciBleHRlbnNpb24gZm9yIHRoZSBCaXRjb2luIExpZ2h0bmluZyBOZXR3b3JrLiBZb3UgY2FuXG4gICAgICAgICAgY29ubmVjdCB5b3VyIG93biBMaWdodG5pbmcgd2FsbGV0IG9yIHVzZSBBbGJ5XHUyMDE5cyB3YWxsZXQgYW5kIHN0YXJ0XG4gICAgICAgICAgdHJhbnNhY3RpbmcgaW4gQml0Y29pbiB3aXRoIGVhc2UuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWFsYnlZZWxsb3ctMzAwIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWJhc2UgbGc6dGV4dC1sZyBmb250LW1lZGl1bSBweS0zIGxnOnB5LTQgcHgtNCBsZzpweC04IHJvdW5kZWQtWzEuODc1cmVtXSBtdC00XCI+XG4gICAgICAgICAgICBUcnkgaXQgbm93XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7XG4iLCAiaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmdcIjtcbmltcG9ydCBCYW5uZXJJbGx1c3RyYXRpb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYmFubmVyLWlsbHVzdHJhdGlvbi5wbmdcIjtcbmltcG9ydCBUZWxlZ3JhbUxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdGVsZWdyYW0ucG5nXCI7XG5pbXBvcnQgVHdpdHRlckxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdHdpdHRlci5wbmdcIjtcbmltcG9ydCBHaXRIdWJMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCBDYWxsVG9BY3Rpb25Mb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NhbGwtdG8tYWN0aW9uLnN2Z1wiO1xuaW1wb3J0IERvSXRIaW50IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2RvLWl0LWhpbnQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1hbGJ5WWVsbG93LTMwMCBtaW4taC1zY3JlZW4gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5My4xOTQlXSBteC1hdXRvIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0b3AtMCBwdC01IHBiLTggbGc6cGItMCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdy1bOTMuMTk0JV0ganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIG1heC1oLVs2LjI1cmVtXVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEyLjVyZW1dIHRleHQtYmxhY2sgbGc6dy1hdXRvIGxnOmgtWzMuNzVyZW1dIGgtMjRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1iZXR3ZWVuIHhsOnB0LTAgcHQtM1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtUZWxlZ3JhbUxvZ299XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJUZWxlZ3JhbSBMb2dvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEuODc1cmVtXSBoLVsxLjg3NXJlbV0gbWItNFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dldGFsYnlcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBMb2dvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEuODc1cmVtXSBoLVsxLjg3NXJlbV0gIG1iLTRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dldEFsYnlcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e0dpdEh1YkxvZ299XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHaXRIdWIgTG9nb1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxLjg3NXJlbV0gaC1bMS44NzVyZW1dICBtYi00XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibGFjayBib3JkZXItWzNweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bIzMzMzMzM10gZm9udC1zZWNvbmRhcnkgaW5saW5lLWJsb2NrIHRleHQtbGcgbGc6bGVhZGluZy1bMS44NzVyZW1dIGZvbnQtc2VtaWJvbGQgcHktMiBweC01IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgIEFkZCBUbyBDaHJvbWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm10LTIwIG10LTIyIGxnOm10LTAgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtW2luaGVyaXRdIGp1c3RpZnktYmV0d2VlbiBmb250LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptYXgtdy1bMzlyZW1dIGxnOnctMS8yIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6cHQtNDBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgbGc6bWItMCB4bDp0ZXh0LVs0cmVtXSB4bDpsZWFkaW5nLVsxMTAlXSB0ZXh0LWJsYWNrIG1kOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICBMaWdodG5pbmcgYnV6eiBmb3IgeW91ciBCcm93c2VyXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxnOnRleHQtMnhsIHRleHQteGwgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICBBbGJ5IGJyaW5ncyBCaXRjb2luIHRvIHRoZSB3ZWIgd2l0aCBpbi1icm93c2VyIHBheW1lbnRzIGFuZFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LCBubyBhY2NvdW50IHJlcXVpcmVkLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidWxsZXQtbGlzdHMgcHQtNCB0ZXh0LXhsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00XCI+XG4gICAgICAgICAgICAgICAgICBJbnN0YW50IHBheW1lbnRzIHRvIHlvdXIgZmF2b3VyaXRlIHB1Ymxpc2hlcnMgYW5kIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTRcIj5cbiAgICAgICAgICAgICAgICAgIE5vIG5lZWQgdG8gcmVtZW1iZXIgYSB1c2VybmFtZSBvciBwYXNzd29yZCBmb3IgdGhlc2Ugd2Vic2l0ZXNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00XCI+XG4gICAgICAgICAgICAgICAgICBEaXJlY3QgaW50ZXJhY3Rpb25zIGJldHdlZW4geW91IGFuZCB0aGUgcmVjZWl2ZXIsIG5vIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgIHdvcnJ5IGFib3V0IHRoaXJkIHBhcnR5IHRyYWNrZXJzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17Q2FsbFRvQWN0aW9uTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJDYWxsIHRvIEFjdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHB0LTUgYmxvY2sgbXgtYXV0byBsZzpteC0wXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtNlwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17RG9JdEhpbnR9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJEbyBJdCBIaW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIG14LWF1dG8gbGc6bXgtMCBsZWZ0LVsxNyVdXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBsZzpwdC0wIGJhc2lzLTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtCYW5uZXJJbGx1c3RyYXRpb259XG4gICAgICAgICAgICAgICAgYWx0PVwiSGVhZGVyIElsbHVzdHJhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMCBsZzpwdC1bMTclXSBhc3BlY3QtW2F1dG9fNzEwLzc2MF0gbXgtYXV0byBtaW4tdy1bMTlyZW1dIG1heC13LWZ1bGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtZW5kIGJnLWFsYnlZZWxsb3ctMzAwIHB5LTE0IGxnOnB5LTMyIGZvbnQtc2Vjb25kYXJ5XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LTExLzEyIHRleHQtY2VudGVyIG1kOnctZnVsbCBmb250LWJvbGQgdGV4dC0yeGwgbWQ6dGV4dC01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIERvIHlvdSBoYXZlIGZlZWRiYWNrIG9yIG5lZWQgaGVscD9cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LVs1Mi44NCVdIHctMTEvMTIgbXgtYXV0byBwdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtbm9ybWFsIHRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMi4yNXJlbV0gdGV4dC1hbGJ5Q29sZEdyYXktODAwXCI+XG4gICAgICAgICAgICBBbGJ5IGlzIG9wZW4tc291cmNlIGFuZCBjdXJyZW50bHkgaW4gYWxwaGEgc3RhZ2UuIE91ciBnb2FsIGlzIHRvXG4gICAgICAgICAgICBjcmVhdGUgdGhlIGJlc3Qgb25saW5lIGV4cGVyaWVuY2UgdG8gY29uc3VtZSBhbmQgcmV3YXJkIGNvbnRlbnQgYW5kXG4gICAgICAgICAgICBzZXJ2aWNlcyBvbmxpbmUuIFdlIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gRmlsZSBhe1wiIFwifVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nZXRBbGJ5L2xpZ2h0bmluZy1icm93c2VyLWV4dGVuc2lvbi9pc3N1ZXNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHaXRodWIgaXNzdWVcbiAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICBvciBqb2luIHRoZXtcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3QubWUvZ2V0QWxieVwiIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxuICAgICAgICAgICAgICBUZWxlZ3JhbSBjaGFubmVsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9nZXRhbGJ5LnN1YnN0YWNrLmNvbS9lbWJlZFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjMyMFwiIGNsYXNzTmFtZT1cIlwiIGZyYW1lQm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCI+PC9pZnJhbWU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtNSBqdXN0aWZ5LWNlbnRlciBwdC0xMFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZ2V0YWxieVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtUd2l0dGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIExvZ29cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1bMzlweF0gaC1bMzVweF0gbGc6dy1bNTIuNjdweF0gbGc6aC1bNDhweF1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdC5tZS9nZXRBbGJ5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtUZWxlZ3JhbUxvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiVGVsZWdyYW0gTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB3LVszOXB4XSBoLVszNXB4XSBsZzp3LVs1Mi42N3B4XSBsZzpoLVs0OHB4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dldEFsYnlcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17R2l0SHViTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJHaXRIdWIgTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB3LVszOXB4XSBoLVszNXB4XSBsZzp3LVs1Mi42N3B4XSBsZzpoLVs0OHB4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dldGFsYnkuY29tL3ByaXZhY3ktcG9saWN5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtMnhsIHRleHQtYmFzZSB1bmRlcmxpbmUgcHQtNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7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
