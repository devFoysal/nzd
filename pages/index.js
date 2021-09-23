import React from 'react'
import Layout from "../partials/Layout";
import { connect } from "react-redux";
import variables from "../common/variables";
import { getRequest } from "../common/API";
import fetch from "isomorphic-unfetch";
import Simpleslider from "../partials/home/homeslider";
import HomeAbout from "../partials/home/aboutSection";
import Homewhatsnew from "../partials/home/homeWhatsnew";
// class Index extends React.Component {
// 	static async getInitialProps({ reduxStore, req }) {
// 		let json = {};

// 		if (req) {
// 			// const token = req.cookies[variables.apiTokenKey];
// 			const response = await fetch(variables.apiUrls.getHomeContent, {
// 				method: "GET",
// 				headers: {
// 					"Content-Type": "application/json",
// 					// Authorization: "Bearer " + token
// 				}
// 			});
// 			json = await response.json();
// 		} else {
// 			const response = await getRequest(variables.apiUrls.getHomeContent);
// 			json = response;
// 		}

// 		return { item: json, reduxStore: reduxStore };
// 	}

// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}

// 	render() {
// 		const { item } = this.props;
// 		return (
// 			<Layout title={"Home"} isHome={true}>
// 				<Simpleslider data={item.data.sections.homeSlider.data} />
// 				<HomeAbout data={item.data.sections.aboutSection} />
// 				<Homewhatsnew data={item.data.sections.whatsNew} whatsnew={true} />
// 			</Layout>
// 		);
// 	}
// }


const Index = ({item}) => {
	return (
		<Layout title={"Home"} isHome={true}>
			<Simpleslider data={item.data.sections.homeSlider.data} />
			<HomeAbout data={item.data.sections.aboutSection} />
			<Homewhatsnew data={item.data.sections.whatsNew} whatsnew={true} />
		</Layout>
	);
}


Index.getInitialProps = async({ reduxStore, req }) => {
	let json = {};

	if (req) {
		// const token = req.cookies[variables.apiTokenKey];
		const response = await fetch(variables.apiUrls.getHomeContent, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				// Authorization: "Bearer " + token
			}
		});
		json = await response.json();
	} else {
		const response = await getRequest(variables.apiUrls.getHomeContent);
		json = response;
	}

	return { item: json, reduxStore: reduxStore };
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Index);
