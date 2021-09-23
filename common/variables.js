// const baseUrl_local = "http://nzd-api.web.mahfuj.xyz/v1";

// const baseUrl_local = "https://api.newzealanddairybd.com/v1";
// const baseUrl_prod = "https://api.newzealanddairybd.com/v1";

const baseUrl_local = "https://api.newzealanddairybd.bdtiger.xyz/v1";
const baseUrl_prod = "https://api.newzealanddairybd.bdtiger.xyz/v1";

const baseUrl = process.env.NODE_ENV == "production" ? baseUrl_prod : baseUrl_local;

const dataRefetchMins = process.env.NODE_ENV == "production" ? 30 : 5;

module.exports = {
	appVersion: "1.0",
	apiUrls: {
		baseUrl: baseUrl,
		getPages: (slug) => {
			return `${baseUrl}/pages/${slug}`;
		},
		getNavigation: `${baseUrl}/navigation`,
		getFooter: `${baseUrl}/footer`,
		getHomeContent: `${baseUrl}/pages/home`,
		getPost: (slug) => {
			return `${baseUrl}/posts/${slug}`;
		},
		search: (query) => {
			return `${baseUrl}/search?query=${query}`;
		},
		postContactUs: `${baseUrl}/contact-us`
	},
	apiTokenKey: "nzd_web_session",
	defaultLocale: "en",
	developmentGA: "UA-154213657-2",
	productionGA: "UA-154213657-1",
	dataRefetchMins: dataRefetchMins,
	shouldRefetch: (time, fetchMins = dataRefetchMins) => {
		return new Date().getTime() - time > 1000 * 60 * fetchMins;
	},
	urlMultiItemSeparator: "--",
	apiStatusCodes: {
		// 400200 : Balance/Recharge/Mife Success
		// 400400 : Bad Request / Server Error / API error
		// 400500 : Insufficient Balance
		// 400300 : Unprocessable Request / Validation Error
		// 400600 : OTP expired
		success: 400200,
		validationError: 400300,
		error: 400400,
		insufficientBalance: 400500,
		otpExpired: 400600
	},
	staticPageUrl: {},
	pageTakeoverExitSecs: 10 * 1000
};
