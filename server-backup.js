const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const request = require("request");
const LRUCache = require("lru-cache");

const routes = require("./routes");
const variables = require("./common/variables");

const tokenUrl = variables.apiUrls.baseUrl + "/token";
// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
	max: 100,
	maxAge: 1000 * 60 * 60 // 1hour
});

const app = next({
	dev: process.env.NODE_ENV !== "production"
});
const handler = routes.getRequestHandler(app);

//const handler = process.env.NODE_ENV !== "production" ? routes.getRequestHandler(app) : routes.getRequestHandler(app);
// : routes.getRequestHandler(app, ({ req, res, route, query }) => {
// 		renderAndCache(req, res, route.page, query);
//   });

// const redirects = [
// 	{
// 		from: "/",
// 		to: "/" + variables.defaultLocale
// 	}
// ];

app.prepare().then(() => {
	const server = express();

	// need cookieParser middleware before we can do anything with cookies
	server.use(cookieParser());

	server.use(function(req, res, next) {
		// let cookie = req.cookies[variables.apiTokenKey];
		// console.log("------------------------------Old Cookie:------------------------------");
		// console.log(cookie);

		// if (typeof cookie === "undefined") {
		// 	// Set the headers
		// 	var headers = {
		// 		"content-type": "application/json",
		// 		accept: "application/json"
		// 	};

		// 	// Configure the request
		// 	var options = {
		// 		url: tokenUrl,
		// 		method: "POST",
		// 		headers: headers,
		// 		form: {}
		// 	};

		// 	// Start the request
		// 	request(options, function(error, response, body) {
		// 		if (!error && response.statusCode == 200) {
		// 			// Print out the response body
		// 			const data = JSON.parse(body);
		// 			res.cookie(variables.apiTokenKey, data.token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 24 }); // 1 day in millsecs.
		// 			//console.log("End response.");
		// 			next();
		// 		}
		// 	});
		// } else {
		// 	// yes, cookie was already present
		// 	//console.log("------------------------------cookie exists------------------------------");
		// 	next();
		// }
		next()
	});
	server.get("*", (req, res) => {
		return handler(req, res);
	});
	// redirects.forEach(({ from, to, type = 301, method = "get" }) => {
	// 	server[method](from, (req, res) => {
	// 		res.redirect(type, to);
	// 	});
	// });

	server.use(handler).listen(6939);
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
	return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
	const key = getCacheKey(req);

	// If we have a page in the cache, let's serve it
	if (ssrCache.has(key)) {
		res.setHeader("x-cache", "HIT");
		res.send(ssrCache.get(key));
		return;
	}

	try {
		// If not let's render the page into HTML
		const html = await app.renderToHTML(req, res, pagePath, queryParams);

		// Something is wrong with the request, let's skip the cache
		if (res.statusCode !== 200) {
			res.send(html);
			return;
		}

		// Let's cache this page
		ssrCache.set(key, html);

		res.setHeader("x-cache", "MISS");
		res.send(html);
	} catch (err) {
		app.renderError(err, req, res, pagePath, queryParams);
	}
}
