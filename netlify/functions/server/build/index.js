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
var tailwind_default = "/build/_assets/tailwind-LR4HQQ6R.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-5HVOVQJU.css";

// route-module:/home/ktscates/Desktop/Alby Project/website/app/root.jsx
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

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
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
    className: "grid place-items-center hover:cursor-pointer mt-24 py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[85.76%] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "z-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative"
  }, "You don\u2019t have a Lightning Address yet?", /* @__PURE__ */ React.createElement("span", {
    className: "absolute top-1/2 md:top-[82%] right-0 lg:right-1/4"
  }, " ", /* @__PURE__ */ React.createElement("img", {
    src: pointer_default
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-4 px-16 rounded-[1.875rem] mt-4"
  }, "Label"), /* @__PURE__ */ React.createElement("img", {
    src: right_bee_default,
    alt: "Right Bee",
    className: "w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%]"
  }), /* @__PURE__ */ React.createElement("img", {
    src: left_bee_default,
    alt: "Left Bee",
    className: "w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[92%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end bg-albyYellow-300 py-32 mt-32"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto"
  }, "Do you have feedback or need help?"), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-[52.84%] w-11/12 mx-auto pt-8 text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800"
  }, "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online. We love to hear from you. File a ", /* @__PURE__ */ React.createElement("span", {
    className: "underline"
  }, " Github issue "), " or join the ", /* @__PURE__ */ React.createElement("span", {
    className: "underline"
  }, " Telegram channel"), "."), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-center pt-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Twitter_default,
    alt: "Twitter Logo",
    className: "  mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: Telegram_default,
    alt: "Telegram Logo",
    className: "  mb-4"
  }), /* @__PURE__ */ React.createElement("img", {
    src: GitHub_default,
    alt: "GitHub Logo",
    className: "  mb-4"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-2xl font-primary underline pt-5"
  }, "Privacy Policy"))));
}
var Footer_default = Footer;

// app/components/Header.jsx
init_react();

// public/images/Logo.svg
var Logo_default = "/build/_assets/Logo-4A6ZFMFX.svg";

// public/images/header-illustration.svg
var header_illustration_default = "/build/_assets/header-illustration-6WXMSZQB.svg";

// app/components/Header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[93.194%] mx-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 items-center absolute w-[93.194%] justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: Logo_default,
    alt: "Logo",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-transparent text-albyWarmGray-800 border-2 border-solid border-albyWarmGray-800 font-primary  lg:inline-block text-lg lg:leading-[1.75rem] font-semibold py-2 px-5 rounded-[30px]"
  }, "Add to Chrome"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-6xl md:text-4xl text-3xl font-black"
  }, "Direct contributions from your audience"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-2xl text-xl font-normal pt-9"
  }, "Use a Lightning Address to receive value for value payments in Bitcoin from your audience")), /* @__PURE__ */ React.createElement("div", {
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
var code_default = "/build/_assets/code-CIQ54P7C.svg";

// public/images/twitter-illustration.svg
var twitter_illustration_default = "/build/_assets/twitter-illustration-2J2CAHLE.svg";

// public/images/youtube-illustration.svg
var youtube_illustration_default = "/build/_assets/youtube-illustration-CTG7AL37.svg";

// public/images/bitcoin-illustration.svg
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-WLSP4IQ5.svg";

// app/components/Payment.jsx
function Payment() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-40.5 pt-20 w-[93.3%] mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-5xxl text-center font-black text-3xl"
  }, "Receiving payments", /* @__PURE__ */ React.createElement("br", null), " existing platforms"), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black text-2xl"
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
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, ' <meta name="lightning" content="you@lightning.address"/>')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag: ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, '<meta property="og:image" content="https://www.youre.blog/YOUR_IMAGE" />')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "3")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: code_default,
    className: "",
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black  text-2xl"
  }, "Twitter"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive tips on Twitter by adding a Lightning address to your profile"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of your Twtter profile: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_illustration_default,
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black  text-2xl"
  }, "YouTube"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive contributions on YouTube by adding a Lightning address to your video description"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your YouTube channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: youtube_illustration_default,
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-5 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black  text-2xl"
  }, "Bitcoin TV"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-xl"
  }, "Receive tips on Bitcoin TV by adding a Lightning address to your video description"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your BitcoinTV channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md"
  }, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: " image-shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code"
  }))));
}

// app/components/Wallet.jsx
init_react();
function Wallet() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " py-[8rem] relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center w-[11/12] md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "md:text-5xl text-3xl font-black text-albyColdGray-25"
  }, "This new way of monetization is brought to you by Alby"), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-2xl text-xl font-normal text-albyColdGray-25 pt-4"
  }, "Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby\u2019s wallet and start transacting in Bitcoin with ease."), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 text-albyColdGray-800 text-lg font-medium py-4 px-8 rounded-[1.875rem] mt-4"
  }, "Try it now")));
}
var Wallet_default = Wallet;

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2t0c2NhdGVzL0Rlc2t0b3AvQWxieSBQcm9qZWN0L3dlYnNpdGUvYXBwL3Jvb3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGF5bWVudC5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2FsbGV0LmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUva3RzY2F0ZXMvRGVza3RvcC9BbGJ5IFByb2plY3Qvd2Vic2l0ZS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcblx0cmVxdWVzdCxcblx0cmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRyZXNwb25zZUhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dFxuKSB7XG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcblx0fSk7XG59XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb25cbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IGV4dGVuZFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcblx0cmV0dXJuIFsge1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtd2FsbGV0LWxheWVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0e1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtZm9vdGVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuXHRyZXR1cm4geyB0aXRsZTogXCJHZXQgQWxieVwiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwifi9jb21wb25lbnRzL1NlcnZpY2VzXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwifi9jb21wb25lbnRzL1BheW1lbnRcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIn4vY29tcG9uZW50cy9XYWxsZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxTZXJ2aWNlIC8+XG5cdFx0XHQ8UGF5bWVudCAvPlxuXHRcdFx0PFdhbGxldCAvPlxuXHRcdFx0PEZvb3RlciAvPlx0XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IFJpZ2h0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWJlZS5zdmdcIjtcbmltcG9ydCBMZWZ0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xlZnQtYmVlLnN2Z1wiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wb2ludGVyLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9UZWxlZ3JhbS5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9Ud2l0dGVyLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvR2l0SHViLnN2Z1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB6LTEwIFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBob3ZlcjpjdXJzb3ItcG9pbnRlciBtdC0yNCBweS1bOC43NXJlbV0gdGV4dC1jZW50ZXIgcm91bmRlZC1bMi43NXJlbV0gbWF4LWgtWzMxLjI1cmVtXSBtYXgtdy1bNzcuMTg3NXJlbV0gcmVsYXRpdmUgYmctYWxieVllbGxvdy01MCB3LVs4NS43NiVdIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInctWzc4JV0gbXgtYXV0byAgZm9udC1wcmltYXJ5IHRleHQtM3hsIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctWzQuNjg3NXJlbV0gZm9udC1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgIFlvdSBkb25cdTIwMTl0IGhhdmUgYSBMaWdodG5pbmcgQWRkcmVzcyB5ZXQ/XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIG1kOnRvcC1bODIlXSByaWdodC0wIGxnOnJpZ2h0LTEvNFwiPiA8aW1nIHNyYz17QXJyb3dJY29ufSAvPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgcmVsYXRpdmUgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGcgZm9udC1tZWRpdW0gcHktNCBweC0xNiByb3VuZGVkLVsxLjg3NXJlbV0gbXQtNFwiPlxuICAgICAgICAgIExhYmVsXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGltZyBzcmM9e1JpZ2h0QmVlfSBhbHQ9XCJSaWdodCBCZWVcIiBjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0byBhYnNvbHV0ZSBib3R0b20tWzglXSBsZWZ0LVs3MCVdIG1kOmxlZnQtWzg1JV1cIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtMZWZ0QmVlfSBhbHQ9XCJMZWZ0IEJlZVwiIGNsYXNzTmFtZT1cInctYXV0byBteC1hdXRvIGFic29sdXRlIGJvdHRvbS1bMTQlXSBsZWZ0LVs4MiVdIG1kOmxlZnQtWzkyJV1cIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWVuZCBiZy1hbGJ5WWVsbG93LTMwMCBweS0zMiBtdC0zMlwiPlxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidy0xMS8xMiB0ZXh0LWNlbnRlciBtZDp3LWZ1bGwgZm9udC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgZmVlZGJhY2sgb3IgbmVlZCBoZWxwP1xuXHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1kOnctWzUyLjg0JV0gdy0xMS8xMiBteC1hdXRvIHB0LTggdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgZm9udC1wcmltYXJ5IGZvbnQtbm9ybWFsIHRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMi4yNXJlbV0gdGV4dC1hbGJ5Q29sZEdyYXktODAwXCI+XG4gICAgICAgICAgQWxieSBpcyBvcGVuLXNvdXJjZSBhbmQgY3VycmVudGx5IGluIGFscGhhIHN0YWdlLiBPdXIgZ29hbCBpcyB0byBjcmVhdGUgdGhlIGJlc3Qgb25saW5lIGV4cGVyaWVuY2UgdG8gY29uc3VtZSBhbmQgcmV3YXJkIGNvbnRlbnQgYW5kIHNlcnZpY2VzIG9ubGluZS5cbldlIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gRmlsZSBhIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPiBHaXRodWIgaXNzdWUgPC9zcGFuPiBvciBqb2luIHRoZSA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj4gVGVsZWdyYW0gY2hhbm5lbDwvc3Bhbj4uXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1jZW50ZXIgcHQtMTBcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTG9nb30gYWx0PVwiVHdpdHRlciBMb2dvXCIgY2xhc3NOYW1lPVwiICBtYi00XCIgLz5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUZWxlZ3JhbUxvZ299IGFsdD1cIlRlbGVncmFtIExvZ29cIiBjbGFzc05hbWU9XCIgIG1iLTRcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0dpdEh1YkxvZ299IGFsdD1cIkdpdEh1YiBMb2dvXCIgY2xhc3NOYW1lPVwiICBtYi00XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXByaW1hcnkgdW5kZXJsaW5lIHB0LTVcIj5Qcml2YWN5IFBvbGljeTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgImltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL0xvZ28uc3ZnXCI7XG5pbXBvcnQgSGVhZGVySWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGJnLWFsYnlZZWxsb3ctMzAwIG1pbi1oLXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LVs5My4xOTQlXSBteC1hdXRvIFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdG9wLTAgcHQtNSBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdy1bOTMuMTk0JV0ganVzdGlmeS1iZXR3ZWVuIG1heC1oLVs2LjI1cmVtXVwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17TG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctYXV0byBsZzpoLVszLjc1cmVtXSBoLVsyLjc1cmVtXVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtNSBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1hbGJ5V2FybUdyYXktODAwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWxieVdhcm1HcmF5LTgwMCBmb250LXByaW1hcnkgIGxnOmlubGluZS1ibG9jayB0ZXh0LWxnIGxnOmxlYWRpbmctWzEuNzVyZW1dIGZvbnQtc2VtaWJvbGQgcHktMiBweC01IHJvdW5kZWQtWzMwcHhdXCI+XG5cdFx0XHRcdFx0XHRcdEFkZCB0byBDaHJvbWVcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLVtpbmhlcml0XSBqdXN0aWZ5LWJldHdlZW4gZm9udC1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDptYXgtdy1bMzkuNzVyZW1dIGxnOnctMS8yIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTZ4bCBtZDp0ZXh0LTR4bCB0ZXh0LTN4bCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgIERpcmVjdCBjb250cmlidXRpb25zIGZyb20geW91ciBhdWRpZW5jZVxuXHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxnOnRleHQtMnhsIHRleHQteGwgZm9udC1ub3JtYWwgcHQtOVwiPlxuICAgICAgICAgICAgICBVc2UgYSBMaWdodG5pbmcgQWRkcmVzcyB0byByZWNlaXZlIHZhbHVlIGZvciB2YWx1ZSBwYXltZW50cyBpbiBCaXRjb2luIGZyb20geW91ciBhdWRpZW5jZSBcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIGxnOnB0LTQwIFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0hlYWRlcklsbHVzdHJhdGlvbn0gYWx0PVwiSGVhZGVyIElsbHVzdHJhdGlvblwiIGNsYXNzTmFtZT1cInctWzQydnddIG14LWF1dG8gbWluLXctWzE5cmVtXSBoLWF1dG9cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCAiaW1wb3J0IExpbmVzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xpbmVzLnN2Z1wiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YWxsZXQuc3ZnXCI7XG5pbXBvcnQgV2F2ZXMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2F2ZXMuc3ZnXCI7XG5pbXBvcnQgUHV6emxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3B1enpsZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG4gICAgXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnctZnVsbCBweS0xMiBiZy1hbGJ5WWVsbG93LTUwIHhsOnB4LTM3IHhsOnB0LTMzIHhsOnBiLTQwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6anVzdGlmeS1jZW50ZXIgeGw6aXRlbXMtY2VudGVyIHhsOnNwYWNlLXgtMjEgc3BhY2UteS0xMCB4bDpzcGFjZS15LTAgbXgtYXV0b1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6c3BhY2UteC0yMSBncmlkIGdyaWQtY29scy0yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0xpbmVzfSBhbHQ9XCJsaW5lc1wiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyIHB0LTYuNVwiPlVzZSBleGlzdGluZyA8YnIvPnBsYXRmb3JtczwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtXYWxsZXR9IGFsdD1cIndhbGxldFwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyIHB0LTYuNVwiPlJlY2VpdmUgcGF5bWVudHM8YnIvPiBkaXJlY3RseTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4IHhsOnNwYWNlLXgtMjEgZ3JpZCBncmlkLWNvbHMtMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6bXQtOFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17V2F2ZXN9IGFsdD1cIndhdmVzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNVwiPk5vbi1pbnRydXNpdmUgYW5kPGJyLz4gZnJpY3Rpb25sZXNzIGZvciB5b3VyPGJyLz4gYXVkaWVuY2U8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG1yLTIuNVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDptdC04XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtQdXp6bGV9IGFsdD1cInB1enpsZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyIHB0LTVcIj5TaW1wbGUgaW50ZWdyYXRpb247PGJyLz4gbm8gY29kaW5nIHNraWxsczxici8+IG5lZWRlZDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj4gICAgXG5cdCk7XG59IiwgImltcG9ydCBDb2RlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NvZGUuc3ZnXCI7XG5pbXBvcnQgVHdpdHRlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBZb3V0dWJlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3lvdXR1YmUtaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJpdGNvaW4gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYml0Y29pbi1pbGx1c3RyYXRpb24uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnQoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpwdC00MC41IHB0LTIwIHctWzkzLjMlXSBteC1hdXRvXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwieGw6dGV4dC01eHhsIHRleHQtY2VudGVyIGZvbnQtYmxhY2sgdGV4dC0zeGxcIj5SZWNlaXZpbmcgcGF5bWVudHM8YnIgLz4gZXhpc3RpbmcgcGxhdGZvcm1zPC9oMT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtMTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6c3BhY2UteS02IHNwYWNlLXktNSB4bDptbC0xN1wiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgdGV4dC0yeGxcIj5Zb3VyIG93biBXZWJzaXRlPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQteGxcIj5SZWNlaXZlIHBheW1lbnRzIGJ5IGFkZGluZyBhIG1ldGEgdGFnIHRvIHlvdXIgd2Vic2l0ZTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BZGQgdGhpcyBpbiB0aGUgSFRNTCBoZWFkZXIgc2VjdGlvbiBvZiB5b3VyIHdlYnNpdGU6IFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyLz48YiBjbGFzc05hbWU9XCJicmVhay1hbGxcIj4gJmx0O21ldGEgbmFtZT0mcXVvdDtsaWdodG5pbmcmcXVvdDsgY29udGVudD0mcXVvdDt5b3VAbGlnaHRuaW5nLmFkZHJlc3MmcXVvdDsvJmd0OzwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPk1ha2Ugc3VyZSB0byBoYXZlIGFuIG9nOmltYWdlIG1ldGEgdGFnOiA8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiZsdDttZXRhIHByb3BlcnR5PSZxdW90O29nOmltYWdlJnF1b3Q7IGNvbnRlbnQ9JnF1b3Q7aHR0cHM6Ly93d3cueW91cmUuYmxvZy9ZT1VSX0lNQUdFJnF1b3Q7IC8mZ3Q7PC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MzwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciB3ZWJzaXRlIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBpbWFnZS1zaGFkb3dcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17Q29kZX0gY2xhc3NOYW1lPVwiXCIgYWx0PVwiY29kZVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgIHRleHQtMnhsXCI+VHdpdHRlcjwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSB0aXBzIG9uIFR3aXR0ZXIgYnkgYWRkaW5nIGEgTGlnaHRuaW5nIGFkZHJlc3MgdG8geW91ciBwcm9maWxlPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB5b3VyIFR3dHRlciBwcm9maWxlOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIFR3aXR0ZXIgcHJvZmlsZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgaW1hZ2Utc2hhZG93XCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e1R3aXR0ZXJ9IGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS01IHhsOm1sLTE3XCI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInhsOnRleHQtNHhsIHhsOmxlYWRpbmctMTAgZm9udC1ibGFjayAgdGV4dC0yeGxcIj5Zb3VUdWJlPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQteGxcIj5SZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24gWW91VHViZSBieSBhZGRpbmcgYSBMaWdodG5pbmcgYWRkcmVzcyB0byB5b3VyIHZpZGVvIGRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+IFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aWRlbyBpbiB5b3VyIFlvdVR1YmUgY2hhbm5lbDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZFwiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBZb3VUdWJlIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBpbWFnZS1zaGFkb3dcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17WW91dHViZX0gYWx0PVwiY29kZVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwIHBiLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTcgb3JkZXItbGFzdFwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgIHRleHQtMnhsXCI+Qml0Y29pbiBUVjwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSB0aXBzIG9uIEJpdGNvaW4gVFYgYnkgYWRkaW5nIGEgTGlnaHRuaW5nIGFkZHJlc3MgdG8geW91ciB2aWRlbyBkZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aWRlbyBpbiB5b3VyIEJpdGNvaW5UViBjaGFubmVsOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIEJpdGNvaW5UViB2aWRlbyBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgaW1hZ2Utc2hhZG93XCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0JpdGNvaW59IGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufSIsICJmdW5jdGlvbiBXYWxsZXQoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCIgcHktWzhyZW1dIHJlbGF0aXZlIGJnLWRpYW1vbmRMYXllciBiZy1yZXBlYXQgYmctYWxieUNvbGRHcmF5LTgwMCBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LVsxMS8xMl0gbWQ6dy1bNTUuNjI1JV0gbWF4LXctWzUwLjA2M3JlbV0gbXgtYXV0byBmb250LXByaW1hcnlcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtNXhsIHRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbGJ5Q29sZEdyYXktMjVcIj5cbiAgICAgICAgICBUaGlzIG5ldyB3YXkgb2YgbW9uZXRpemF0aW9uIGlzIGJyb3VnaHQgdG8geW91IGJ5IEFsYnlcblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWQ6dGV4dC0yeGwgdGV4dC14bCBmb250LW5vcm1hbCB0ZXh0LWFsYnlDb2xkR3JheS0yNSBwdC00XCI+XG4gICAgICAgICAgQWxieSBpcyBhIGJyb3dzZXIgZXh0ZW5zaW9uIGZvciB0aGUgQml0Y29pbiBMaWdodG5pbmcgTmV0d29yay4gWW91IGNhbiBjb25uZWN0IHlvdXIgb3duIExpZ2h0bmluZyB3YWxsZXQgb3IgdXNlIEFsYnlcdTIwMTlzIHdhbGxldCBhbmQgc3RhcnQgdHJhbnNhY3RpbmcgaW4gQml0Y29pbiB3aXRoIGVhc2UuXG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1hbGJ5WWVsbG93LTMwMCB0ZXh0LWFsYnlDb2xkR3JheS04MDAgdGV4dC1sZyBmb250LW1lZGl1bSBweS00IHB4LTggcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICBUcnkgaXQgbm93XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMz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
