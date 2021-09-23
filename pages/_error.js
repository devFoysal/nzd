import React from 'react'
import Layout from "../partials/Layout";

export default class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<Layout title="404 Error" isHome={false}>
				<p>Error</p>
			</Layout>
		);
	}
}
