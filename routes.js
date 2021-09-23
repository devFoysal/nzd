const routes = (module.exports = require("next-routes")());

routes
	// For Home
	.add("index", "/", "index")

	// Brand Single Pages
	.add("brand.show", "/brands/:slug", "brand_single")

	// Article Single Pages
	.add("article.show", "/blogs/:slug", "article_single")

	// Board Of Director Single Pages
	.add("director.show", "/about-us/board-of-directors/:slug", "director_single")

	// Job Single Pages
	.add("job.show", "/career/available-jobs/:slug", "job_single")

	// Pages
	.add("page.show", "/:slug+", "page");
