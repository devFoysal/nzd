import React from "react";
import Document, { Html,Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import theme from "../common/theme";

class MyDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta name="viewport" content={"user-scalable=0, initial-scale=1, " + "minimum-scale=1, width=device-width, height=device-height"} />
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render


	// const cookie = ctx.req ? ctx.req.headers.cookie : null



	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{/* {sheets.getStyleElement()} */}
				<style id="jss-server-side">{sheets.toString().replace(/(\r\n\t|\n|\r\t)/gm, "")}</style>
			</React.Fragment>
		]
	};
};

export default MyDocument;
