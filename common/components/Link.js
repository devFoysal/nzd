import { Link as NLink } from "../../routes";

const Link = (props) => {
	const { route, children, slug = [], params = {} } = props;
	let extraAttributes = { prefetch: false };

	let defaultParams = {};
	let newRoute = route;

	if (route == "page") {
		newRoute = "page.show";

		if (slug.length > 0) {
			defaultParams = { slug: slug.split("/") };
		} else {
			defaultParams = { slug: "/" };
		}
	} else if (route == "url") {
		if (validateUrl(slug)) {
			newRoute = slug;
			defaultParams = null;
		} else {
			defaultParams = {};
			newRoute = slug;
		}
	} else if (route == "brand.show" || route == "brands") {
		newRoute = "brand.show";
		defaultParams = { slug: slug };
	} else if (route == "article.show" || route == "articles") {
		newRoute = "article.show";
		defaultParams = { slug: slug };
	} else if (route == "director.show" || route == "board-of-directors") {
		newRoute = "director.show";
		defaultParams = { slug: slug };
	} else if (route == "job.show" || route == "jobs") {
		newRoute = "job.show";
		defaultParams = { slug: slug };
	} else {
		if (slug.length > 0) defaultParams = { slug: slug };
		newRoute = route;
	}

	defaultParams = { ...params, ...defaultParams };

	return (
		<NLink route={newRoute} params={defaultParams} {...extraAttributes}>
			{children}
		</NLink>
	);
};

function validateUrl(str) {
	var tarea = str;
	if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
		return true;
	} else {
		return false;
	}
}

export default Link;
