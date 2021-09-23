import React from "react";
import App from "next/app";
import withReduxStore from "../redux/lib/with-redux-store";
import { Provider } from "react-redux";
// import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../common/getPageContext";

import { ThemeProvider } from "@material-ui/styles";
import theme from "../common/theme";
// import CssBaseline from "@material-ui/core/CssBaseline";

// Import all scss here
import "../static/styles/nprogress.scss";
import "../static/styles/styles.scss";
import "../static/styles/animation.scss";

class MyApp extends App {
	constructor(props) {
		super(props);
		this.pageContext = getPageContext();
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}

		if (process.env.NODE_ENV !== "development") {
			// disable react-dev-tools for this project
			if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
				for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
					window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? () => {} : null;
				}
			}
		}
	}

	render() {
		const { Component, pageProps, reduxStore } = this.props;

		return (
			// <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
			// 	{/* MuiThemeProvider makes the theme available down the React tree thanks to React context. */}
			// 	{/* <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}> */}
			// 	{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			// 	{/* <CssBaseline /> */}
			// 	{/* Pass pageContext to the _document though the renderPage enhancer to render collected styles on server side. */}
			// 	<ThemeProvider theme={theme}>
			// 		{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			// 		{/* <CssBaseline /> */}
			// 		<Provider store={reduxStore}>
			// 			<Component pageContext={this.pageContext} {...pageProps} />
			// 		</Provider>
			// 	</ThemeProvider>

			// 	{/* </MuiThemeProvider> */}
			// </JssProvider>

			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				{/* <CssBaseline /> */}
				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		);
	}
}

export default withReduxStore(MyApp);
