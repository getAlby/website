import { createRequestHandler } from "@remix-run/netlify";

exports.handler = createRequestHandler({
	build: import("./build")
});