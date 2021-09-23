import React from 'react'
import Layout from "../partials/Layout";
import variables from "../common/variables";
import { getRequest } from "../common/API";
import fetch from "isomorphic-unfetch";
import { Router } from "../routes";
import {
	Default, //
	BoardOfDirectors,
	Contact,
	Brands,
	Career,
	AvailableJobs,
	Articles
} from "../partials/page_templates";

class Page extends React.Component {
	static async getInitialProps({ asPath, reduxStore, query, req, res }) {
		let json = {};

		let params = asPath.split("?");

		let slug = typeof params[1] === "undefined" ? query.slug : query.slug + "?" + params[1];

		if (req) {
			// const token = req.cookies[variables.apiTokenKey];
			const response = await fetch(variables.apiUrls.getPages(slug), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer " + token
				}
			});
			json = await response.json();
		} else {
			const response = await getRequest(variables.apiUrls.getPages(slug));
			json = response;
		}

		// Redirection Template Starts
		if (json.template_name === "redirect") {
			let redirectUrl = json.redirectUrl == "/" ? "" : json.redirectUrl;
			if (res) {
				res.writeHead(302, {
					Location: "/" + redirectUrl
				});
				res.end();
			} else {
				Router.push("/" + redirectUrl);
			}
		}
		// Redirection Template Ends

		return { item: json, query: query };
	}

	render() {
		const { item, query } = this.props;

		// console.log(item, query);
		let content = null;

		switch (item.template_name) {
			case "default":
				content = <Default item={item} />;
				break;
			case "board-of-directors":
				content = <BoardOfDirectors item={item} />;
				break;
			case "contact":
				content = <Contact item={item} />;
				break;
			case "brands":
				content = <Brands item={item} />;
				break;
			case "career":
				content = <Career item={item} />;
				break;
			case "available-jobs":
				content = <AvailableJobs item={item} />;
				break;
			case "articles":
				content = <Articles item={item} />;
				break;
			default:
				content = <Default item={item} />;
		}
		return (
			<Layout title={item.title} urlPath={query.slug} isHome={false}>
				{content}
			</Layout>
		);
	}
}

export default Page;
