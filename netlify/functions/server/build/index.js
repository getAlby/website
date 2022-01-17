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

// route-module:/home/ktscates/Desktop/Alby Project/website/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-37EDOOZ7.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-5HVOVQJU.css";

// route-module:/home/ktscates/Desktop/Alby Project/website/app/root.jsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }, { rel: "stylesheet", href: tailwind_default2 }];
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

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/components/Footer.jsx
init_react();

// public/images/right-bee.svg
var right_bee_default = "/build/_assets/right-bee-O2VKZW7X.svg";

// public/images/left-bee.svg
var left_bee_default = "/build/_assets/left-bee-VTMCWK6F.svg";

// public/images/arrow-icon.svg
var arrow_icon_default = "/build/_assets/arrow-icon-CHQKVCSS.svg";

// public/images/diamond-footer.svg
var diamond_footer_default = "/build/_assets/diamond-footer-N4QX34O5.svg";

// public/images/telegram.png
var telegram_default = "/build/_assets/telegram-R7XR6VN6.png";

// public/images/twitter.png
var twitter_default = "/build/_assets/twitter-XMKQ5RAT.png";

// public/images/github.png
var github_default = "/build/_assets/github-5FT2OTLC.png";

// app/components/Footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white z-10 pb-72 hover:cursor-pointer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center mt-24 py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] relative bg-albyYellow-300 w-[85.76%] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " z-0 absolute max-h-[31.25rem] max-w-max w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: diamond_footer_default,
    alt: "Diamond Footer",
    className: "w-full h-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "z-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative"
  }, "You don\u2019t have a Lightning Address yet?", /* @__PURE__ */ React.createElement("span", {
    className: "absolute top-1/2 md:top-3/4 right-0 lg:right-1/4"
  }, " ", /* @__PURE__ */ React.createElement("img", {
    src: arrow_icon_default
  }))), /* @__PURE__ */ React.createElement("p", {
    className: " pt-10 font-primary text-xl md:text-2xl md:leading-[1.875rem] font-medium relative"
  }, "Find more information here"), /* @__PURE__ */ React.createElement("img", {
    src: right_bee_default,
    alt: "Right Bee",
    className: "w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%]"
  }), /* @__PURE__ */ React.createElement("img", {
    src: left_bee_default,
    alt: "Left Bee",
    className: "w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[92%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end pt-48"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto"
  }, "Do you have feedback or need help?"), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-[52.84%] w-11/12 mx-auto pt-8 text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-[#707070]"
  }, "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online."), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-center pt-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram Logo",
    className: " lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem] mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: twitter_default,
    alt: "Twitter Logo",
    className: "lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub Logo",
    className: "lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
  })))));
}
var Footer_default = Footer;

// app/components/Header.jsx
init_react();

// public/images/logo.png
var logo_default = "/build/_assets/logo-D3F6I3SO.png";

// public/images/header-illustration.svg
var header_illustration_default = "/build/_assets/header-illustration-6WXMSZQB.svg";

// public/images/call-to-action.svg
var call_to_action_default = "/build/_assets/call-to-action-7BME25NU.svg";

// app/components/Header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[93.194%] mx-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 items-center absolute w-[93.194%] justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: logo_default,
    alt: "Logo",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-between"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram_default,
    alt: "Telegram Logo",
    className: " lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem] mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: twitter_default,
    alt: "Twitter Logo",
    className: "lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: github_default,
    alt: "GitHub Logo",
    className: "lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-white text-black border-[3px] border-solid border-[#333333] font-secondary hidden lg:inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full"
  }, "Add To Chrome"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-6xl md:text-4xl text-3xl font-black"
  }, "Direct contributions from your audience"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-2xl text-xl font-normal pt-9"
  }, "Use a Lightning Address to receive value for value payments in Bitcoin from your audience"), /* @__PURE__ */ React.createElement("img", {
    src: call_to_action_default,
    alt: "Call to Action",
    className: " pt-9 hidden lg:block"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pt-10 lg:pt-40 "
  }, /* @__PURE__ */ React.createElement("img", {
    src: header_illustration_default,
    alt: "Header Illustration",
    className: "w-[42vw] mx-auto min-w-[19rem] h-auto"
  })))));
}
var Header_default = Header;

// app/components/Services.jsx
init_react();

// public/images/lines.png
var lines_default = "/build/_assets/lines-OOP2BLR7.png";

// public/images/wallet.png
var wallet_default = "/build/_assets/wallet-A5H2QBX3.png";

// public/images/waves.png
var waves_default = "/build/_assets/waves-Z6NB75GQ.png";

// public/images/puzzle.png
var puzzle_default = "/build/_assets/puzzle-EVL6G2S3.png";

// app/components/Services.jsx
function Services() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-41 xl:pb-38"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-5 xl:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute top-2.5 xl:w-13",
    src: lines_default,
    alt: "lines"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Use existing", /* @__PURE__ */ React.createElement("br", null), " platforms")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute top-1.5 xl:w-12",
    src: wallet_default,
    alt: "wallet"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Receive payments", /* @__PURE__ */ React.createElement("br", null), " directly")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-albyYellow-200 rounded-full w-13.5 h-12.5 mx-auto xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute top-1.5 xl:w-14.5",
    src: waves_default,
    alt: "waves"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Non-intrusive and", /* @__PURE__ */ React.createElement("br", null), " frictionless for your", /* @__PURE__ */ React.createElement("br", null), " audience")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute -mt-1.5 ml-1 xl:w-11",
    src: puzzle_default,
    alt: "puzzle"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center"
  }, "Simple integration;", /* @__PURE__ */ React.createElement("br", null), " no coding skills", /* @__PURE__ */ React.createElement("br", null), " needed"))));
}

// app/components/Payment.jsx
init_react();

// public/images/code.png
var code_default = "/build/_assets/code-WUANHS4Y.png";

// public/images/twitter-illustration.png
var twitter_illustration_default = "/build/_assets/twitter-illustration-JDJSASZ7.png";

// public/images/youtube-illustration.png
var youtube_illustration_default = "/build/_assets/youtube-illustration-GVNGJKDY.png";

// public/images/bitcoin-illustration.png
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-443X2GNO.png";

// app/components/Payment.jsx
function Payment() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-40.5 pt-20 xl:px-17"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-5xxl text-center font-black text-3xl"
  }, "Receiveing payments on", /* @__PURE__ */ React.createElement("br", null), " existing platforms"), /* @__PURE__ */ React.createElement("div", {
    className: "xl:px-17 xl:grid xl:grid-cols-2 pt-10 px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl"
  }, "Your own Website"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive payments by adding a meta tag to your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, '<meta name="lightning" content="you@lightning.address"/>')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, '<meta property="og:image" content="https://www.youre.blog/', /* @__PURE__ */ React.createElement("br", null), 'YOUR_IMAGE" />')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "3")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-20"
  }, /* @__PURE__ */ React.createElement("img", {
    src: code_default,
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:space-y-6 space-y-5 xl:order-last xl:ml-32"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl"
  }, "Twitter"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive tips on Twitter by adding a Lightning address to your profile"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Add this in the description of your Twtter profile: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: twitter_illustration_default,
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl"
  }, "YouTube"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive contributions on YouTube by adding a Lightning address to your video description"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Add this in the description of a Video in your YouTube channel : ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: youtube_illustration_default,
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:space-y-6 space-y-5 xl:order-last xl:ml-32"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl"
  }, "Bitcoin TV"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive tips on Bitcoin TV by adding a Lightning address to your video description"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Add this in the description of a video in your BitcoinTV channel : ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl xl:leading-8 font-normal"
  }, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code"
  }))));
}

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Payment, null), /* @__PURE__ */ React.createElement(Footer_default, null));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2t0c2NhdGVzL0Rlc2t0b3AvQWxieSBQcm9qZWN0L3dlYnNpdGUvYXBwL3Jvb3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGF5bWVudC5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2t0c2NhdGVzL0Rlc2t0b3AvQWxieSBQcm9qZWN0L3dlYnNpdGUvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUva3RzY2F0ZXMvRGVza3RvcC9BbGJ5IFByb2plY3Qvd2Vic2l0ZS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUva3RzY2F0ZXMvRGVza3RvcC9BbGJ5IFByb2plY3Qvd2Vic2l0ZS9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG5cdHJlcXVlc3QsXG5cdHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0cmVzcG9uc2VIZWFkZXJzLFxuXHRyZW1peENvbnRleHRcbikge1xuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHQpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG5cdH0pO1xufVxuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBleHRlbmRTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG5cdHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuXHRyZXR1cm4geyB0aXRsZTogXCJHZXQgQWxieVwiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwifi9jb21wb25lbnRzL1NlcnZpY2VzXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwifi9jb21wb25lbnRzL1BheW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxTZXJ2aWNlIC8+XG5cdFx0XHQ8UGF5bWVudCAvPlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCBSaWdodEJlZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9yaWdodC1iZWUuc3ZnXCI7XG5pbXBvcnQgTGVmdEJlZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sZWZ0LWJlZS5zdmdcIjtcbmltcG9ydCBBcnJvd0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJyb3ctaWNvbi5zdmdcIjtcbmltcG9ydCBEaWFtb25kRm9vdGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2RpYW1vbmQtZm9vdGVyLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90ZWxlZ3JhbS5wbmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLnBuZ1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB6LTEwIHBiLTcyIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG10LTI0IHB5LVs4Ljc1cmVtXSB0ZXh0LWNlbnRlciByb3VuZGVkLVsyLjc1cmVtXSBtYXgtaC1bMzEuMjVyZW1dIHJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctMzAwIHctWzg1Ljc2JV0gbXgtYXV0b1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB6LTAgYWJzb2x1dGUgbWF4LWgtWzMxLjI1cmVtXSBtYXgtdy1tYXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0RpYW1vbmRGb290ZXJ9IGFsdD1cIkRpYW1vbmQgRm9vdGVyXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotMTBcIj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidy1bNzglXSBteC1hdXRvICBmb250LXByaW1hcnkgdGV4dC0zeGwgbWQ6dGV4dC02eGwgbWQ6bGVhZGluZy1bNC42ODc1cmVtXSBmb250LWJsYWNrIHJlbGF0aXZlXCI+XG4gICAgICAgICAgWW91IGRvblx1MjAxOXQgaGF2ZSBhIExpZ2h0bmluZyBBZGRyZXNzIHlldD9cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbWQ6dG9wLTMvNCByaWdodC0wIGxnOnJpZ2h0LTEvNFwiPiA8aW1nIHNyYz17QXJyb3dJY29ufSAvPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIiBwdC0xMCBmb250LXByaW1hcnkgdGV4dC14bCBtZDp0ZXh0LTJ4bCBtZDpsZWFkaW5nLVsxLjg3NXJlbV0gZm9udC1tZWRpdW0gcmVsYXRpdmVcIj5GaW5kIG1vcmUgaW5mb3JtYXRpb24gaGVyZTwvcD5cblx0XHRcdFx0XHQ8aW1nIHNyYz17UmlnaHRCZWV9IGFsdD1cIlJpZ2h0IEJlZVwiIGNsYXNzTmFtZT1cInctYXV0byBteC1hdXRvIGFic29sdXRlIGJvdHRvbS1bOCVdIGxlZnQtWzcwJV0gbWQ6bGVmdC1bODUlXVwiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0xlZnRCZWV9IGFsdD1cIkxlZnQgQmVlXCIgY2xhc3NOYW1lPVwidy1hdXRvIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLVsxNCVdIGxlZnQtWzgyJV0gbWQ6bGVmdC1bOTIlXVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtZW5kIHB0LTQ4XCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ3LTExLzEyIHRleHQtY2VudGVyIG1kOnctZnVsbCBmb250LXByaW1hcnkgZm9udC1ib2xkIHRleHQtMnhsIG1kOnRleHQtNXhsIG14LWF1dG9cIj5cbiAgICAgICAgICBEbyB5b3UgaGF2ZSBmZWVkYmFjayBvciBuZWVkIGhlbHA/XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6dy1bNTIuODQlXSB3LTExLzEyIG14LWF1dG8gcHQtOCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIiBmb250LXByaW1hcnkgZm9udC1ub3JtYWwgdGV4dC1sZyBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsyLjI1cmVtXSB0ZXh0LVsjNzA3MDcwXVwiPlxuICAgICAgICAgIEFsYnkgaXMgb3Blbi1zb3VyY2UgYW5kIGN1cnJlbnRseSBpbiBhbHBoYSBzdGFnZS4gT3VyIGdvYWwgaXMgdG8gY3JlYXRlIHRoZSBiZXN0IG9ubGluZSBleHBlcmllbmNlIHRvIGNvbnN1bWUgYW5kIHJld2FyZCBjb250ZW50IGFuZCBzZXJ2aWNlcyBvbmxpbmUuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1jZW50ZXIgcHQtMTBcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUZWxlZ3JhbUxvZ299IGFsdD1cIlRlbGVncmFtIExvZ29cIiBjbGFzc05hbWU9XCIgbGc6dy1bMS44NzVyZW1dIHctWzFyZW1dIGxnOmgtWzEuODc1cmVtXSBoLVsxcmVtXSBtYi00XCIgLz5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTG9nb30gYWx0PVwiVHdpdHRlciBMb2dvXCIgY2xhc3NOYW1lPVwibGc6dy1bMS44NzVyZW1dIHctWzFyZW1dIGxnOmgtWzEuODc1cmVtXSBoLVsxcmVtXSAgbWItNFwiIC8+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17R2l0SHViTG9nb30gYWx0PVwiR2l0SHViIExvZ29cIiBjbGFzc05hbWU9XCJsZzp3LVsxLjg3NXJlbV0gdy1bMXJlbV0gbGc6aC1bMS44NzVyZW1dIGgtWzFyZW1dICBtYi00XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgImltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgSGVhZGVySWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgVGVsZWdyYW1Mb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3RlbGVncmFtLnBuZ1wiO1xuaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3R3aXR0ZXIucG5nXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9naXRodWIucG5nXCI7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jYWxsLXRvLWFjdGlvbi5zdmdcIjtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGJnLWFsYnlZZWxsb3ctMzAwIG1pbi1oLXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LVs5My4xOTQlXSBteC1hdXRvIFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdG9wLTAgcHQtNSBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdy1bOTMuMTk0JV0ganVzdGlmeS1iZXR3ZWVuIG1heC1oLVs2LjI1cmVtXVwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17TG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctYXV0byBsZzpoLVszLjc1cmVtXSBoLVsyLjc1cmVtXVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtNSBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUZWxlZ3JhbUxvZ299IGFsdD1cIlRlbGVncmFtIExvZ29cIiBjbGFzc05hbWU9XCIgbGc6dy1bMS44NzVyZW1dIHctWzFyZW1dIGxnOmgtWzEuODc1cmVtXSBoLVsxcmVtXSBtYi00XCIgLz5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTG9nb30gYWx0PVwiVHdpdHRlciBMb2dvXCIgY2xhc3NOYW1lPVwibGc6dy1bMS44NzVyZW1dIHctWzFyZW1dIGxnOmgtWzEuODc1cmVtXSBoLVsxcmVtXSAgbWItNFwiIC8+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17R2l0SHViTG9nb30gYWx0PVwiR2l0SHViIExvZ29cIiBjbGFzc05hbWU9XCJsZzp3LVsxLjg3NXJlbV0gdy1bMXJlbV0gbGc6aC1bMS44NzVyZW1dIGgtWzFyZW1dICBtYi00XCIgLz5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibGFjayBib3JkZXItWzNweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bIzMzMzMzM10gZm9udC1zZWNvbmRhcnkgaGlkZGVuIGxnOmlubGluZS1ibG9jayB0ZXh0LWxnIGxnOmxlYWRpbmctWzEuODc1cmVtXSBmb250LXNlbWlib2xkIHB5LTIgcHgtNSByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0QWRkIFRvIENocm9tZVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtW2luaGVyaXRdIGp1c3RpZnktYmV0d2VlbiBmb250LXByaW1hcnlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOm1heC13LVszOS43NXJlbV0gbGc6dy0xLzIgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInhsOnRleHQtNnhsIG1kOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgRGlyZWN0IGNvbnRyaWJ1dGlvbnMgZnJvbSB5b3VyIGF1ZGllbmNlXG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGc6dGV4dC0yeGwgdGV4dC14bCBmb250LW5vcm1hbCBwdC05XCI+XG4gICAgICAgICAgICAgIFVzZSBhIExpZ2h0bmluZyBBZGRyZXNzIHRvIHJlY2VpdmUgdmFsdWUgZm9yIHZhbHVlIHBheW1lbnRzIGluIEJpdGNvaW4gZnJvbSB5b3VyIGF1ZGllbmNlIFxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0NhbGxUb0FjdGlvbkxvZ299IGFsdD1cIkNhbGwgdG8gQWN0aW9uXCIgY2xhc3NOYW1lPVwiIHB0LTkgaGlkZGVuIGxnOmJsb2NrXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIGxnOnB0LTQwIFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0hlYWRlcklsbHVzdHJhdGlvbn0gYWx0PVwiSGVhZGVyIElsbHVzdHJhdGlvblwiIGNsYXNzTmFtZT1cInctWzQydnddIG14LWF1dG8gbWluLXctWzE5cmVtXSBoLWF1dG9cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCAiaW1wb3J0IExpbmVzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xpbmVzLnBuZ1wiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YWxsZXQucG5nXCI7XG5pbXBvcnQgV2F2ZXMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2F2ZXMucG5nXCI7XG5pbXBvcnQgUHV6emxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3B1enpsZS5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG4gICAgXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnctZnVsbCBweS0xMiBiZy1hbGJ5WWVsbG93LTUwIHhsOnB4LTM3IHhsOnB0LTQxIHhsOnBiLTM4XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6anVzdGlmeS1jZW50ZXIgeGw6aXRlbXMtY2VudGVyIHhsOnNwYWNlLXgtMjEgc3BhY2UteS01IHhsOnNwYWNlLXktMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBibG9ja1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctYWxieVllbGxvdy0yMDAgcm91bmRlZC1mdWxsIHctMTIuNSBoLTEyLjUgbXgtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMi41IHhsOnctMTNcIiBzcmM9e0xpbmVzfSBhbHQ9XCJsaW5lc1wiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5Vc2UgZXhpc3Rpbmc8YnIvPiBwbGF0Zm9ybXM8L3A+XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJsb2NrXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1hbGJ5WWVsbG93LTIwMCByb3VuZGVkLWZ1bGwgdy0xMi41IGgtMTIuNSBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLjUgeGw6dy0xMlwiIHNyYz17V2FsbGV0fSBhbHQ9XCJ3YWxsZXRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyXCI+UmVjZWl2ZSBwYXltZW50czxici8+IGRpcmVjdGx5PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBibG9ja1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctYWxieVllbGxvdy0yMDAgcm91bmRlZC1mdWxsIHctMTMuNSBoLTEyLjUgbXgtYXV0byB4bDptdC04XCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLjUgeGw6dy0xNC41XCIgc3JjPXtXYXZlc30gYWx0PVwid2F2ZXNcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyXCI+Tm9uLWludHJ1c2l2ZSBhbmQ8YnIvPiBmcmljdGlvbmxlc3MgZm9yIHlvdXI8YnIvPiBhdWRpZW5jZTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgYmxvY2tcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctMjAwIHJvdW5kZWQtZnVsbCB3LTEyLjUgaC0xMi41IG14LWF1dG8geGw6bXQtOFwiPlxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbXQtMS41IG1sLTEgeGw6dy0xMVwiIHNyYz17UHV6emxlfSBhbHQ9XCJwdXp6bGVcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyXCI+U2ltcGxlIGludGVncmF0aW9uOzxici8+IG5vIGNvZGluZyBza2lsbHM8YnIvPiBuZWVkZWQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+ICAgIFxuXHQpO1xufSIsICJpbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jb2RlLnBuZ1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdHdpdHRlci1pbGx1c3RyYXRpb24ucG5nXCI7XG5pbXBvcnQgWW91dHViZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy95b3V0dWJlLWlsbHVzdHJhdGlvbi5wbmdcIjtcbmltcG9ydCBCaXRjb2luIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4taWxsdXN0cmF0aW9uLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6cHQtNDAuNSBwdC0yMCB4bDpweC0xN1wiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInhsOnRleHQtNXh4bCB0ZXh0LWNlbnRlciBmb250LWJsYWNrIHRleHQtM3hsXCI+UmVjZWl2ZWluZyBwYXltZW50cyBvbjxiciAvPiBleGlzdGluZyBwbGF0Zm9ybXM8L2gxPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnB4LTE3IHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcHQtMTAgcHgtNVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTdcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIHhsOnB0LTQyIHRleHQtMnhsXCI+WW91ciBvd24gV2Vic2l0ZTwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSBwYXltZW50cyBieSBhZGRpbmcgYSBtZXRhIHRhZyB0byB5b3VyIHdlYnNpdGU8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIEhUTUwgaGVhZGVyIHNlY3Rpb24gb2YgeW91ciB3ZWJzaXRlOiBcblx0XHRcdFx0XHRcdFx0XHRcdDxici8+PGI+Jmx0O21ldGEgbmFtZT0mcXVvdDtsaWdodG5pbmcmcXVvdDsgY29udGVudD0mcXVvdDt5b3VAbGlnaHRuaW5nLmFkZHJlc3MmcXVvdDsvJmd0OzwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPk1ha2Ugc3VyZSB0byBoYXZlIGFuIG9nOmltYWdlIG1ldGEgdGFnOjxici8+PGI+Jmx0O21ldGEgcHJvcGVydHk9JnF1b3Q7b2c6aW1hZ2UmcXVvdDsgY29udGVudD0mcXVvdDtodHRwczovL3d3dy55b3VyZS5ibG9nLzxici8+WU9VUl9JTUFHRSZxdW90OyAvJmd0OzwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjM8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTggZm9udC1ub3JtYWxcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgd2Vic2l0ZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpwdC0yMFwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtDb2RlfSBhbHQ9XCJjb2RlXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpweC0xNyB4bDpncmlkIHhsOmdyaWQtY29scy0yIHB0LTUgcHgtNVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6b3JkZXItbGFzdCB4bDptbC0zMlwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgeGw6cHQtNDIgdGV4dC0yeGxcIj5Ud2l0dGVyPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQteGxcIj5SZWNlaXZlIHRpcHMgb24gVHdpdHRlciBieSBhZGRpbmcgYSBMaWdodG5pbmcgYWRkcmVzcyB0byB5b3VyIHByb2ZpbGU8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsXCI+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIHlvdXIgVHd0dGVyIHByb2ZpbGU6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMCBoLTggcC01XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciAtbXQtMyB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBUd2l0dGVyIHByb2ZpbGUgc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e1R3aXR0ZXJ9IGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnB4LTE3IHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcHQtNSBweC01XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6c3BhY2UteS02IHNwYWNlLXktNSB4bDptbC0xN1wiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgeGw6cHQtNDIgdGV4dC0yeGxcIj5Zb3VUdWJlPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQteGxcIj5SZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24gWW91VHViZSBieSBhZGRpbmcgYSBMaWdodG5pbmcgYWRkcmVzcyB0byB5b3VyIHZpZGVvIGRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiBhIFZpZGVvIGluIHlvdXIgWW91VHViZSBjaGFubmVsIDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEwIGgtOCBwLTVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIC1tdC0zIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIFlvdVR1YmUgdmlkZW8gc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGltZyBzcmM9e1lvdXR1YmV9IGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnB4LTE3IHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcHQtNSBweC01XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6c3BhY2UteS02IHNwYWNlLXktNSB4bDpvcmRlci1sYXN0IHhsOm1sLTMyXCI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInhsOnRleHQtNHhsIHhsOmxlYWRpbmctMTAgZm9udC1ibGFjayB4bDpwdC00MiB0ZXh0LTJ4bFwiPkJpdGNvaW4gVFY8L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC14bFwiPlJlY2VpdmUgdGlwcyBvbiBCaXRjb2luIFRWIGJ5IGFkZGluZyBhIExpZ2h0bmluZyBhZGRyZXNzIHRvIHlvdXIgdmlkZW8gZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsXCI+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlkZW8gaW4geW91ciBCaXRjb2luVFYgY2hhbm5lbCA6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMCBoLTggcC01XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciAtbXQtMyB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBCaXRjb2luVFYgdmlkZW8gc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIEFsYnkgYnJvd3NlciBleHRlbnNpb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0JpdGNvaW59IGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDNUlsQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDcEQxQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNoQ2pDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxXQUFXO0FBSWYsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxVQUFVLFFBQVEsU0FBVSxHQUFHO0FBQzFDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNuQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFFYix1QkFDZCxTQUNBLG9CQUNBLGlCQUNBLGNBQ0M7QUFDRCxRQUFNLFNBQVMsa0NBQ2Qsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR2xELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQy9DLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNqQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFPTzs7Ozs7Ozs7O0FBSUEsaUJBQWlCO0FBQ3ZCLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNLG9CQUFVLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUdsRSxnQkFBZ0I7QUFDdEIsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdGLGVBQWU7QUFDN0IsU0FDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVixvQ0FBQyxRQUFELE1BQ0Msb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRCxvQ0FBQyxRQUFELE1BQ0Msb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQzJDLG9DQUFDLDBCQUFEO0FBQUE7OztBQ2hDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLGtCQUFrQjtBQUNqQixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFlLEtBQUk7QUFBQSxJQUFpQixXQUFVO0FBQUEsT0FFekQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWdHLGdEQUU3RyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBbUQsS0FBQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsUUFFL0Usb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQXFGLCtCQUNsRyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBVSxLQUFJO0FBQUEsSUFBWSxXQUFVO0FBQUEsTUFDOUMsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQVMsS0FBSTtBQUFBLElBQVcsV0FBVTtBQUFBLFFBRzlDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFvRix1Q0FHbEcsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWlGLDBKQUc5RixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBYyxLQUFJO0FBQUEsSUFBZ0IsV0FBVTtBQUFBLE1BQ3RELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFhLEtBQUk7QUFBQSxJQUFlLFdBQVU7QUFBQSxNQUNwRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBWSxLQUFJO0FBQUEsSUFBYyxXQUFVO0FBQUE7QUFBQTtBQVF4RCxJQUFPLGlCQUFROzs7QUM1Q2Y7Ozs7Ozs7Ozs7OztBQU9BLGtCQUFrQjtBQUNqQixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxXQUFVO0FBQUEsT0FFdEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQWMsS0FBSTtBQUFBLElBQWdCLFdBQVU7QUFBQSxNQUN0RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBYSxLQUFJO0FBQUEsSUFBZSxXQUFVO0FBQUEsTUFDcEQsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQVksS0FBSTtBQUFBLElBQWMsV0FBVTtBQUFBLE1BQ2xELG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUEwSyxvQkFNOUwsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQThDLDRDQUc1RCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBdUMsOEZBR3BELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFrQixLQUFJO0FBQUEsSUFBaUIsV0FBVTtBQUFBLE9BRTVELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFvQixLQUFJO0FBQUEsSUFBc0IsV0FBVTtBQUFBO0FBQUE7QUFReEUsSUFBTyxpQkFBUTs7O0FDNUNmOzs7Ozs7Ozs7Ozs7Ozs7QUFLZSxvQkFBb0I7QUFFbEMsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBMkIsS0FBSztBQUFBLElBQU8sS0FBSTtBQUFBLE9BRTNELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUEwQixnQkFBWSxvQ0FBQyxNQUFELE9BQUssZ0JBR3pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUEyQixLQUFLO0FBQUEsSUFBUSxLQUFJO0FBQUEsT0FFNUQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQTBCLG9CQUFnQixvQ0FBQyxNQUFELE9BQUssZUFHN0Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQTZCLEtBQUs7QUFBQSxJQUFPLEtBQUk7QUFBQSxPQUU3RCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBMEIscUJBQWlCLG9DQUFDLE1BQUQsT0FBSywwQkFBc0Isb0NBQUMsTUFBRCxPQUFLLGVBR3pGLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFnQyxLQUFLO0FBQUEsSUFBUSxLQUFJO0FBQUEsT0FFakUsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQTBCLHVCQUFtQixvQ0FBQyxNQUFELE9BQUsscUJBQWlCLG9DQUFDLE1BQUQsT0FBSztBQUFBOzs7QUNuQzFGOzs7Ozs7Ozs7Ozs7Ozs7QUFLZSxtQkFBbUI7QUFDakMsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBK0MsMEJBQXNCLG9DQUFDLE1BQUQsT0FBTSx3QkFFekYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXlELHFCQUN2RSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBb0MsMERBQ2pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFtQyxPQUVqRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcsd0RBQ0Ysb0NBQUMsTUFBRCxPQUFLLG9DQUFDLEtBQUQsTUFBRyxnRUFJWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBb0MsT0FFbEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRCxNQUFHLDJDQUF1QyxvQ0FBQyxNQUFELE9BQUssb0NBQUMsS0FBRCxNQUFHLDhEQUE0RSxvQ0FBQyxNQUFELE9BQUssc0JBSXJJLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFtQyxPQUVqRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBdUMsd0ZBSXZELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFNLEtBQUk7QUFBQSxRQUl0QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBeUQsWUFDdkUsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQW9DLDBFQUNqRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBbUMsT0FFakQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQXVDLHdEQUFvRCxvQ0FBQyxLQUFELE1BQUcsa0NBRTVHLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFvQyxPQUVsRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBdUMsZ0dBSXZELG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBRyxLQUFLO0FBQUEsSUFBUyxLQUFJO0FBQUEsUUFJdEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXlELFlBQ3ZFLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFvQyw2RkFDakQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQW1DLE9BRWpELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUF1QyxxRUFBaUUsb0NBQUMsS0FBRCxNQUFHLGtDQUV6SCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBb0MsT0FFbEQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQXVDLDhGQUl2RCxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQVMsS0FBSTtBQUFBLFFBSXpCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF5RCxlQUN2RSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBb0MsdUZBQ2pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFtQyxPQUVqRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBdUMsdUVBQW1FLG9DQUFDLEtBQUQsTUFBRyxrQ0FFM0gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQW9DLE9BRWxELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUF1QyxnR0FJdkQsb0NBQUMsT0FBRCxNQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFTLEtBQUk7QUFBQTtBQUFBOzs7QUo5R2IsaUJBQWlCO0FBQy9CLFNBQ0Msb0NBQUMsT0FBRCxNQUNDLG9DQUFDLGdCQUFELE9BQ0Esb0NBQUMsVUFBRCxPQUNBLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxnQkFBRDtBQUFBOzs7QUhQSCxvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
