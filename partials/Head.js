import NextHead from "next/head";
import { string } from "prop-types";

import NProgress from "nprogress";
import Router from "next/router";

import * as gtag from "../common/gtag";

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
	NProgress.done();
	gtag.pageview(url);
};
Router.onRouteChangeError = () => NProgress.done();

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ""}</title>
		<meta name="description" content={props.description || defaultDescription} />
		{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

		{/* FAVICON START */}
		<link rel="icon" href="/static/favicons/favicon.ico" />
		<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
		<link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android-icon-192x192.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
		<link rel="manifest" href="/static/favicons/manifest.json" />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
		<meta name="theme-color" content="#ffffff" />
		{/* FAVICON END */}

		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ""} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		{/* 1200 */}
		<meta property="og:image:width" content="1200" />
		{/* 630 */}
		<meta property="og:image:height" content="630" />

		{/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,700i" rel="stylesheet" /> */}
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossOrigin="anonymous"
		/>
		{/* <link href="https://fonts.googleapis.com/css?family=Bitter:400,400i,700" rel="stylesheet" /> */}
		<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
		{/* <link rel="stylesheet" href="/static/styles/vendor.css" /> */}

		{/* <link rel="stylesheet" href="/static/styles/main.css" /> */}

		{/* <script src="/static/scripts/vendor/modernizr.js" />*/}

		<script src="https://cdn.polyfill.io/v3/polyfill.min.js" />

		{/* Global Site Tag (gtag.js) - Google Analytics */}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
		<script
			dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${gtag.GA_TRACKING_ID}');
				`
			}}
		/>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
};

export default Head;
