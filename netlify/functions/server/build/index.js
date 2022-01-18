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
var tailwind_default = "/build/_assets/tailwind-WJBPY2NG.css";

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
var right_bee_default = "/build/_assets/right-bee-O2VKZW7X.svg";

// public/images/left-bee.svg
var left_bee_default = "/build/_assets/left-bee-VTMCWK6F.svg";

// public/images/arrow-icon.svg
var arrow_icon_default = "/build/_assets/arrow-icon-CHQKVCSS.svg";

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
		className: "grid place-items-center mt-24 py-[8.75rem] bg-diamondFooter bg-repeat text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-300 w-[85.76%] mx-auto"
	}, /* @__PURE__ */ React.createElement("div", {
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
		src: twitter_default,
		alt: "Twitter Logo",
		className: "w-[1.875rem] h-[1.875rem]  mb-4"
	}), /* @__PURE__ */ React.createElement("img", {
		src: telegram_default,
		alt: "Telegram Logo",
		className: " w-[1.875rem] h-[1.875rem] mb-4"
	}), /* @__PURE__ */ React.createElement("img", {
		src: github_default,
		alt: "GitHub Logo",
		className: "w-[1.875rem] h-[1.875rem]  mb-4"
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
		src: twitter_default,
		alt: "Twitter Logo",
		className: "w-[1.875rem] h-[1.875rem]  mb-4"
	}), /* @__PURE__ */ React.createElement("img", {
		src: telegram_default,
		alt: "Telegram Logo",
		className: " w-[1.875rem] h-[1.875rem] mb-4"
	}), /* @__PURE__ */ React.createElement("img", {
		src: github_default,
		alt: "GitHub Logo",
		className: "w-[1.875rem] h-[1.875rem]  mb-4"
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
		className: "xl:w-full py-12 bg-albyWarmGray-50 xl:px-37 xl:pt-41 xl:pb-38"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-5 xl:space-y-0 mx-auto"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "xl:flex xl:space-x-21 grid grid-cols-2"
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
	}, "Use existing ", /* @__PURE__ */ React.createElement("br", null), "platforms")), /* @__PURE__ */ React.createElement("div", {
		className: "space-y-2 block"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto"
	}, /* @__PURE__ */ React.createElement("img", {
		className: "absolute top-1.5 xl:w-12",
		src: wallet_default,
		alt: "wallet"
	})), /* @__PURE__ */ React.createElement("p", {
		className: "xl:text-2xl text-center"
	}, "Receive payments", /* @__PURE__ */ React.createElement("br", null), " directly"))), /* @__PURE__ */ React.createElement("div", {
		className: "xl:flex xl:space-x-21 grid grid-cols-2"
	}, /* @__PURE__ */ React.createElement("div", {
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
		className: "space-y-2 block mr-2.5"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto xl:mt-8"
	}, /* @__PURE__ */ React.createElement("img", {
		className: "absolute -mt-1.5 ml-1 xl:w-11",
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

// public/images/twitter-illustration.svg
var twitter_illustration_default = "/build/_assets/twitter-illustration-2J2CAHLE.svg";

// public/images/youtube-illustration.svg
var youtube_illustration_default = "/build/_assets/youtube-illustration-CTG7AL37.svg";

// public/images/bitcoin-illustration.svg
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-WLSP4IQ5.svg";

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
	}, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "<meta name=\"lightning\" content=\"you@lightning.address\"/>")))), /* @__PURE__ */ React.createElement("div", {
		className: "flex gap-6"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
	}, /* @__PURE__ */ React.createElement("p", {
		className: "flex justify-center -mt-3 xl:mt-0"
	}, "2")), /* @__PURE__ */ React.createElement("div", {
		className: "xl:text-2xl xl:leading-8 font-normal"
	}, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "<meta property=\"og:image\" content=\"https://www.youre.blog/", /* @__PURE__ */ React.createElement("br", null), "YOUR_IMAGE\" />")))), /* @__PURE__ */ React.createElement("div", {
		className: "flex gap-6"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
	}, /* @__PURE__ */ React.createElement("p", {
		className: "flex justify-center mt-2 xl:mt-0"
	}, "3")), /* @__PURE__ */ React.createElement("p", {
		className: "xl:text-2xl xl:leading-8 font-normal"
	}, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
		className: "xl:pt-20 image-shadow"
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
	}, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
		className: "image-shadow"
	}, /* @__PURE__ */ React.createElement("img", {
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
	}, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
		className: "image-shadow"
	}, /* @__PURE__ */ React.createElement("img", {
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
	}, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
		className: "image-shadow"
	}, /* @__PURE__ */ React.createElement("img", {
		src: bitcoin_illustration_default,
		alt: "code"
	}))));
}

// app/components/Wallet.jsx
init_react();

// public/images/right-flying-bee.svg
var right_flying_bee_default = "/build/_assets/right-flying-bee-CAPLZOUK.svg";

// public/images/left-flying-bee.svg
var left_flying_bee_default = "/build/_assets/left-flying-bee-VIRU4E4V.svg";

// app/components/Wallet.jsx
function Wallet() {
	return /* @__PURE__ */ React.createElement("div", {
		className: " py-[18.25rem] min-h-screen relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center"
	}, /* @__PURE__ */ React.createElement("div", {
		className: "text-center w-[11/12] md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary"
	}, /* @__PURE__ */ React.createElement("h1", {
		className: "md:text-5xl text-3xl font-black text-albyColdGray-25"
	}, "This new way of monetization is brought to you by Alby"), /* @__PURE__ */ React.createElement("p", {
		className: "md:text-2xl text-xl font-normal text-albyColdGray-25 pt-9"
	}, "Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby\u2019s wallet and start transacting in Bitcoin with ease."), /* @__PURE__ */ React.createElement("button", {
		className: "bg-albyYellow-300 text-black text-xl md:text-2xl font-bold py-[0.875rem] px-8 rounded-full mt-[3.125rem]"
	}, "Try it now \u203A")), /* @__PURE__ */ React.createElement("div", {
		className: "absolute bottom-[-1.8%] left-[-0.23%] "
	}, /* @__PURE__ */ React.createElement("img", {
		src: right_flying_bee_default,
		alt: "Right Flying Bee",
		className: "w-auto mx-auto"
	})), /* @__PURE__ */ React.createElement("div", {
		className: "absolute bottom-[79.14%] right-[4.96%]"
	}, /* @__PURE__ */ React.createElement("img", {
		src: left_flying_bee_default,
		alt: "Left Flying Bee",
		className: "w-auto mx-auto"
	})));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2t0c2NhdGVzL0Rlc2t0b3AvQWxieSBQcm9qZWN0L3dlYnNpdGUvYXBwL3Jvb3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGF5bWVudC5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2FsbGV0LmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUva3RzY2F0ZXMvRGVza3RvcC9BbGJ5IFByb2plY3Qvd2Vic2l0ZS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcblx0cmVxdWVzdCxcblx0cmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRyZXNwb25zZUhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dFxuKSB7XG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcblx0fSk7XG59XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb25cbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IGV4dGVuZFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcblx0cmV0dXJuIFsge1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtd2FsbGV0LWxheWVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0e1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtZm9vdGVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuXHRyZXR1cm4geyB0aXRsZTogXCJHZXQgQWxieVwiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwifi9jb21wb25lbnRzL1NlcnZpY2VzXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwifi9jb21wb25lbnRzL1BheW1lbnRcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIn4vY29tcG9uZW50cy9XYWxsZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxTZXJ2aWNlIC8+XG5cdFx0XHQ8UGF5bWVudCAvPlxuXHRcdFx0PFdhbGxldCAvPlxuXHRcdFx0PEZvb3RlciAvPlx0XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IFJpZ2h0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWJlZS5zdmdcIjtcbmltcG9ydCBMZWZ0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xlZnQtYmVlLnN2Z1wiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnJvdy1pY29uLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90ZWxlZ3JhbS5wbmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLnBuZ1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB6LTEwIHBiLTcyIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG10LTI0IHB5LVs4Ljc1cmVtXSBiZy1kaWFtb25kRm9vdGVyIGJnLXJlcGVhdCB0ZXh0LWNlbnRlciByb3VuZGVkLVsyLjc1cmVtXSBtYXgtaC1bMzEuMjVyZW1dIG1heC13LVs3Ny4xODc1cmVtXSByZWxhdGl2ZSBiZy1hbGJ5WWVsbG93LTMwMCB3LVs4NS43NiVdIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInctWzc4JV0gbXgtYXV0byAgZm9udC1wcmltYXJ5IHRleHQtM3hsIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctWzQuNjg3NXJlbV0gZm9udC1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgIFlvdSBkb25cdTIwMTl0IGhhdmUgYSBMaWdodG5pbmcgQWRkcmVzcyB5ZXQ/XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIG1kOnRvcC0zLzQgcmlnaHQtMCBsZzpyaWdodC0xLzRcIj4gPGltZyBzcmM9e0Fycm93SWNvbn0gLz48L3NwYW4+XG5cdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgcHQtMTAgZm9udC1wcmltYXJ5IHRleHQteGwgbWQ6dGV4dC0yeGwgbWQ6bGVhZGluZy1bMS44NzVyZW1dIGZvbnQtbWVkaXVtIHJlbGF0aXZlXCI+RmluZCBtb3JlIGluZm9ybWF0aW9uIGhlcmU8L3A+XG5cdFx0XHRcdFx0PGltZyBzcmM9e1JpZ2h0QmVlfSBhbHQ9XCJSaWdodCBCZWVcIiBjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0byBhYnNvbHV0ZSBib3R0b20tWzglXSBsZWZ0LVs3MCVdIG1kOmxlZnQtWzg1JV1cIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtMZWZ0QmVlfSBhbHQ9XCJMZWZ0IEJlZVwiIGNsYXNzTmFtZT1cInctYXV0byBteC1hdXRvIGFic29sdXRlIGJvdHRvbS1bMTQlXSBsZWZ0LVs4MiVdIG1kOmxlZnQtWzkyJV1cIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWVuZCBwdC00OFwiPlxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidy0xMS8xMiB0ZXh0LWNlbnRlciBtZDp3LWZ1bGwgZm9udC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgZmVlZGJhY2sgb3IgbmVlZCBoZWxwP1xuXHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1kOnctWzUyLjg0JV0gdy0xMS8xMiBteC1hdXRvIHB0LTggdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgZm9udC1wcmltYXJ5IGZvbnQtbm9ybWFsIHRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMi4yNXJlbV0gdGV4dC1bIzcwNzA3MF1cIj5cbiAgICAgICAgICBBbGJ5IGlzIG9wZW4tc291cmNlIGFuZCBjdXJyZW50bHkgaW4gYWxwaGEgc3RhZ2UuIE91ciBnb2FsIGlzIHRvIGNyZWF0ZSB0aGUgYmVzdCBvbmxpbmUgZXhwZXJpZW5jZSB0byBjb25zdW1lIGFuZCByZXdhcmQgY29udGVudCBhbmQgc2VydmljZXMgb25saW5lLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17VHdpdHRlckxvZ299IGFsdD1cIlR3aXR0ZXIgTG9nb1wiIGNsYXNzTmFtZT1cInctWzEuODc1cmVtXSBoLVsxLjg3NXJlbV0gIG1iLTRcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e1RlbGVncmFtTG9nb30gYWx0PVwiVGVsZWdyYW0gTG9nb1wiIGNsYXNzTmFtZT1cIiB3LVsxLjg3NXJlbV0gaC1bMS44NzVyZW1dIG1iLTRcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0dpdEh1YkxvZ299IGFsdD1cIkdpdEh1YiBMb2dvXCIgY2xhc3NOYW1lPVwidy1bMS44NzVyZW1dIGgtWzEuODc1cmVtXSAgbWItNFwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IEhlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90ZWxlZ3JhbS5wbmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLnBuZ1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IENhbGxUb0FjdGlvbkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY2FsbC10by1hY3Rpb24uc3ZnXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBiZy1hbGJ5WWVsbG93LTMwMCBtaW4taC1zY3JlZW4gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1bOTMuMTk0JV0gbXgtYXV0byBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHRvcC0wIHB0LTUgaXRlbXMtY2VudGVyIGFic29sdXRlIHctWzkzLjE5NCVdIGp1c3RpZnktYmV0d2VlbiBtYXgtaC1bNi4yNXJlbV1cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0xvZ299IGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJ3LWF1dG8gbGc6aC1bMy43NXJlbV0gaC1bMi43NXJlbV1cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17VHdpdHRlckxvZ299IGFsdD1cIlR3aXR0ZXIgTG9nb1wiIGNsYXNzTmFtZT1cInctWzEuODc1cmVtXSBoLVsxLjg3NXJlbV0gIG1iLTRcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e1RlbGVncmFtTG9nb30gYWx0PVwiVGVsZWdyYW0gTG9nb1wiIGNsYXNzTmFtZT1cIiB3LVsxLjg3NXJlbV0gaC1bMS44NzVyZW1dIG1iLTRcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0dpdEh1YkxvZ299IGFsdD1cIkdpdEh1YiBMb2dvXCIgY2xhc3NOYW1lPVwidy1bMS44NzVyZW1dIGgtWzEuODc1cmVtXSAgbWItNFwiIC8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgYm9yZGVyLVszcHhdIGJvcmRlci1zb2xpZCBib3JkZXItWyMzMzMzMzNdIGZvbnQtc2Vjb25kYXJ5IGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgdGV4dC1sZyBsZzpsZWFkaW5nLVsxLjg3NXJlbV0gZm9udC1zZW1pYm9sZCBweS0yIHB4LTUgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdEFkZCBUbyBDaHJvbWVcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLVtpbmhlcml0XSBqdXN0aWZ5LWJldHdlZW4gZm9udC1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDptYXgtdy1bMzkuNzVyZW1dIGxnOnctMS8yIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTZ4bCBtZDp0ZXh0LTR4bCB0ZXh0LTN4bCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgIERpcmVjdCBjb250cmlidXRpb25zIGZyb20geW91ciBhdWRpZW5jZVxuXHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxnOnRleHQtMnhsIHRleHQteGwgZm9udC1ub3JtYWwgcHQtOVwiPlxuICAgICAgICAgICAgICBVc2UgYSBMaWdodG5pbmcgQWRkcmVzcyB0byByZWNlaXZlIHZhbHVlIGZvciB2YWx1ZSBwYXltZW50cyBpbiBCaXRjb2luIGZyb20geW91ciBhdWRpZW5jZSBcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDYWxsVG9BY3Rpb25Mb2dvfSBhbHQ9XCJDYWxsIHRvIEFjdGlvblwiIGNsYXNzTmFtZT1cIiBwdC05IGhpZGRlbiBsZzpibG9ja1wiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0xMCBsZzpwdC00MCBcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtIZWFkZXJJbGx1c3RyYXRpb259IGFsdD1cIkhlYWRlciBJbGx1c3RyYXRpb25cIiBjbGFzc05hbWU9XCJ3LVs0MnZ3XSBteC1hdXRvIG1pbi13LVsxOXJlbV0gaC1hdXRvXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwgImltcG9ydCBMaW5lcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9saW5lcy5wbmdcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2FsbGV0LnBuZ1wiO1xuaW1wb3J0IFdhdmVzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhdmVzLnBuZ1wiO1xuaW1wb3J0IFB1enpsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wdXp6bGUucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICAgIFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp3LWZ1bGwgcHktMTIgYmctYWxieVdhcm1HcmF5LTUwIHhsOnB4LTM3IHhsOnB0LTQxIHhsOnBiLTM4XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6anVzdGlmeS1jZW50ZXIgeGw6aXRlbXMtY2VudGVyIHhsOnNwYWNlLXgtMjEgc3BhY2UteS01IHhsOnNwYWNlLXktMCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBibG9ja1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1hbGJ5WWVsbG93LTIwMCByb3VuZGVkLWZ1bGwgdy0xMi41IGgtMTIuNSBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIuNSB4bDp3LTEzXCIgc3JjPXtMaW5lc30gYWx0PVwibGluZXNcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPlVzZSBleGlzdGluZyA8YnIvPnBsYXRmb3JtczwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctMjAwIHJvdW5kZWQtZnVsbCB3LTEyLjUgaC0xMi41IG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS41IHhsOnctMTJcIiBzcmM9e1dhbGxldH0gYWx0PVwid2FsbGV0XCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5SZWNlaXZlIHBheW1lbnRzPGJyLz4gZGlyZWN0bHk8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBibG9ja1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1hbGJ5WWVsbG93LTIwMCByb3VuZGVkLWZ1bGwgdy0xMy41IGgtMTIuNSBteC1hdXRvIHhsOm10LThcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS41IHhsOnctMTQuNVwiIHNyYz17V2F2ZXN9IGFsdD1cIndhdmVzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5Ob24taW50cnVzaXZlIGFuZDxici8+IGZyaWN0aW9ubGVzcyBmb3IgeW91cjxici8+IGF1ZGllbmNlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgYmxvY2sgbXItMi41XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctMjAwIHJvdW5kZWQtZnVsbCB3LTEyLjUgaC0xMi41IG14LWF1dG8geGw6bXQtOFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImFic29sdXRlIC1tdC0xLjUgbWwtMSB4bDp3LTExXCIgc3JjPXtQdXp6bGV9IGFsdD1cInB1enpsZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHRleHQtY2VudGVyXCI+U2ltcGxlIGludGVncmF0aW9uOzxici8+IG5vIGNvZGluZyBza2lsbHM8YnIvPiBuZWVkZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+ICAgIFxuXHQpO1xufSIsICJpbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jb2RlLnN2Z1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdHdpdHRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgWW91dHViZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy95b3V0dWJlLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBCaXRjb2luIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4taWxsdXN0cmF0aW9uLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6cHQtNDAuNSBwdC0yMCB4bDpweC0xN1wiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInhsOnRleHQtNXh4bCB0ZXh0LWNlbnRlciBmb250LWJsYWNrIHRleHQtM3hsXCI+UmVjZWl2ZWluZyBwYXltZW50cyBvbjxiciAvPiBleGlzdGluZyBwbGF0Zm9ybXM8L2gxPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnB4LTE3IHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcHQtMTAgcHgtNVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTdcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIHhsOnB0LTQyIHRleHQtMnhsXCI+WW91ciBvd24gV2Vic2l0ZTwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSBwYXltZW50cyBieSBhZGRpbmcgYSBtZXRhIHRhZyB0byB5b3VyIHdlYnNpdGU8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIEhUTUwgaGVhZGVyIHNlY3Rpb24gb2YgeW91ciB3ZWJzaXRlOiBcblx0XHRcdFx0XHRcdFx0XHRcdDxici8+PGI+Jmx0O21ldGEgbmFtZT0mcXVvdDtsaWdodG5pbmcmcXVvdDsgY29udGVudD0mcXVvdDt5b3VAbGlnaHRuaW5nLmFkZHJlc3MmcXVvdDsvJmd0OzwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPk1ha2Ugc3VyZSB0byBoYXZlIGFuIG9nOmltYWdlIG1ldGEgdGFnOjxici8+PGI+Jmx0O21ldGEgcHJvcGVydHk9JnF1b3Q7b2c6aW1hZ2UmcXVvdDsgY29udGVudD0mcXVvdDtodHRwczovL3d3dy55b3VyZS5ibG9nLzxici8+WU9VUl9JTUFHRSZxdW90OyAvJmd0OzwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjM8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTggZm9udC1ub3JtYWxcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgd2Vic2l0ZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpwdC0yMCBpbWFnZS1zaGFkb3dcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17Q29kZX0gYWx0PVwiY29kZVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6cHgtMTcgeGw6Z3JpZCB4bDpncmlkLWNvbHMtMiBwdC01IHB4LTVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpzcGFjZS15LTYgc3BhY2UteS01IHhsOm9yZGVyLWxhc3QgeGw6bWwtMzJcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIHhsOnB0LTQyIHRleHQtMnhsXCI+VHdpdHRlcjwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSB0aXBzIG9uIFR3aXR0ZXIgYnkgYWRkaW5nIGEgTGlnaHRuaW5nIGFkZHJlc3MgdG8geW91ciBwcm9maWxlPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB5b3VyIFR3dHRlciBwcm9maWxlOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTggZm9udC1ub3JtYWxcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgVHdpdHRlciBwcm9maWxlIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNoYWRvd1wiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtUd2l0dGVyfSBhbHQ9XCJjb2RlXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpweC0xNyB4bDpncmlkIHhsOmdyaWQtY29scy0yIHB0LTUgcHgtNVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6bWwtMTdcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIHhsOnB0LTQyIHRleHQtMnhsXCI+WW91VHViZTwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+UmVjZWl2ZSBjb250cmlidXRpb25zIG9uIFlvdVR1YmUgYnkgYWRkaW5nIGEgTGlnaHRuaW5nIGFkZHJlc3MgdG8geW91ciB2aWRlbyBkZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC0zLjVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTggZm9udC1ub3JtYWxcIj5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSBWaWRlbyBpbiB5b3VyIFlvdVR1YmUgY2hhbm5lbCA6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMCBoLTggcC01XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciAtbXQtMyB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPlZlcmlmeSBpZiB5b3UgZW5oYW5jZWQgeW91ciBZb3VUdWJlIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNoYWRvd1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtZb3V0dWJlfSBhbHQ9XCJjb2RlXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDpweC0xNyB4bDpncmlkIHhsOmdyaWQtY29scy0yIHB0LTUgcHgtNVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnNwYWNlLXktNiBzcGFjZS15LTUgeGw6b3JkZXItbGFzdCB4bDptbC0zMlwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCB4bDpsZWFkaW5nLTEwIGZvbnQtYmxhY2sgeGw6cHQtNDIgdGV4dC0yeGxcIj5CaXRjb2luIFRWPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQteGxcIj5SZWNlaXZlIHRpcHMgb24gQml0Y29pbiBUViBieSBhZGRpbmcgYSBMaWdodG5pbmcgYWRkcmVzcyB0byB5b3VyIHZpZGVvIGRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtM3hsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIHhsOmxlYWRpbmctOCBmb250LW5vcm1hbFwiPkFkZCB0aGlzIGluIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpZGVvIGluIHlvdXIgQml0Y29pblRWIGNoYW5uZWwgOiA8Yj5cdTI2QTF5b3VAbGlnaHRuaW5nLmFkZHJlc3M8L2I+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTAgaC04IHAtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgLW10LTMgeGw6bXQtMFwiPjI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTggZm9udC1ub3JtYWxcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgQml0Y29pblRWIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNoYWRvd1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtCaXRjb2lufSBhbHQ9XCJjb2RlXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn0iLCAiaW1wb3J0IFJpZ2h0Rmx5aW5nQmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWZseWluZy1iZWUuc3ZnXCI7XG5pbXBvcnQgTGVmdEZseWluZ0JlZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sZWZ0LWZseWluZy1iZWUuc3ZnXCI7XG5cbmZ1bmN0aW9uIFdhbGxldCgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBweS1bMTguMjVyZW1dIG1pbi1oLXNjcmVlbiByZWxhdGl2ZSBiZy1kaWFtb25kTGF5ZXIgYmctcmVwZWF0IGJnLWFsYnlDb2xkR3JheS04MDAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1bMTEvMTJdIG1kOnctWzU1LjYyNSVdIG1heC13LVs1MC4wNjNyZW1dIG14LWF1dG8gZm9udC1wcmltYXJ5XCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTV4bCB0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtYWxieUNvbGRHcmF5LTI1XCI+XG4gICAgICAgICAgVGhpcyBuZXcgd2F5IG9mIG1vbmV0aXphdGlvbiBpcyBicm91Z2h0IHRvIHlvdSBieSBBbGJ5XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1kOnRleHQtMnhsIHRleHQteGwgZm9udC1ub3JtYWwgdGV4dC1hbGJ5Q29sZEdyYXktMjUgcHQtOVwiPlxuICAgICAgICAgIEFsYnkgaXMgYSBicm93c2VyIGV4dGVuc2lvbiBmb3IgdGhlIEJpdGNvaW4gTGlnaHRuaW5nIE5ldHdvcmsuIFlvdSBjYW4gY29ubmVjdCB5b3VyIG93biBMaWdodG5pbmcgd2FsbGV0IG9yIHVzZSBBbGJ5XHUyMDE5cyB3YWxsZXQgYW5kIHN0YXJ0IHRyYW5zYWN0aW5nIGluIEJpdGNvaW4gd2l0aCBlYXNlLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgdGV4dC1ibGFjayB0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtYm9sZCBweS1bMC44NzVyZW1dIHB4LTggcm91bmRlZC1mdWxsIG10LVszLjEyNXJlbV1cIj5cbiAgICAgICAgICBUcnkgaXQgbm93IFx1MjAzQVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tWy0xLjglXSBsZWZ0LVstMC4yMyVdIFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17UmlnaHRGbHlpbmdCZWV9IGFsdD1cIlJpZ2h0IEZseWluZyBCZWVcIiBjbGFzc05hbWU9XCJ3LWF1dG8gbXgtYXV0b1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLVs3OS4xNCVdIHJpZ2h0LVs0Ljk2JV1cIj5cblx0XHRcdFx0PGltZyBzcmM9e0xlZnRGbHlpbmdCZWV9IGFsdD1cIkxlZnQgRmx5aW5nIEJlZVwiIGNsYXNzTmFtZT1cInctYXV0byBteC1hdXRvXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxX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
