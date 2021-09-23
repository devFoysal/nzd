import React from 'react'
import Layout from "../partials/Layout";
import variables from "../common/variables";
import { getRequest } from "../common/API";
import fetch from "isomorphic-unfetch";
import Single from "../partials/brand_single";

class Show extends React.Component {
	static async getInitialProps({ asPath, reduxStore, query, req }) {
		let json = {};
		let params = asPath.split("?");
		let slug = typeof params[0] === "undefined" ? null : query.slug;
		if (req) {
			// const token = req.cookies[variables.apiTokenKey];
			const res = await fetch(variables.apiUrls.getPost(slug), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer " + token
				}
			});
			json = await res.json();
		} else {
			const res = await getRequest(variables.apiUrls.getPost(slug));
			json = res;
		}
		return { item: json, query: query };
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { item } = this.props;
		return (
			<Layout title={item.title}>
				<Single item={item} />
			</Layout>
		);
	}
}

export default Show;
