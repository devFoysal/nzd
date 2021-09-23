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
