import axios from "axios";
import cookie from "cookie-machine";
import variables from "../common/variables";

// axios.interceptors.request.use(
// 	function(config) {
// 		const token = cookie.get(variables.apiTokenKey);
// 		if (token != null) {
// 			//console.log(config.method);
// 			if (config.method == "post") {
// 				config.headers.Authorization = `Bearer ${token}`;
// 				config.headers.common["X-CSRF-TOKEN"] = token;
// 			}
// 		}
// 		return config;
// 	},
// 	function(err) {
// 		return Promise.reject(err);
// 	}
// );

export const getRequest = async (url, authToken = null) => {
	let config = null;

	if (authToken) {
		config = {
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
			}
		};
	} else {
		config = {
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
			}
		};
	}

	let response = await axios.get(url, config).catch(function(error) {
		if (error.response) {
			// The request was made, but the server responded with a status code
			// that falls out of the range of 2xx
			// console.log(error.response.data);
			// console.log(error.response.status);
			// console.log(error.response.headers);
		} else {
			// Something happened in setting up the request that triggered an Error
			// console.log("Error", error.message);
		}
	});

	//console.log(response);

	if (typeof response === "undefined") {
		return [];
	} else {
		return response.data;
	}
};

export const postRequest = async (url, data = []) => {
	let form_data = new FormData();
	Object.keys(data).forEach(function(key) {
		form_data.append(key, data[key]);
	});

	let error_messages = "";
	let error_string = [];
	let hasError = false;
	let errorList = {};

	let response = await axios.post(url, form_data).catch(function(error) {
		hasError = true;
		if (error.response) {
			// The request was made, but the server responded with a status code
			// that falls out of the range of 2xx

			/*
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
			*/

			error_messages = error.response.data.errors;
			// let i = 0;
			// Object.keys(error_messages).forEach(function(key) {
			// 	error_string[i] = error_messages[key][0];
			// 	i++;
			// });

			errorList = {
				statusCode: error.response.data.statusCode,
				errors: error_messages
			};
		} else {
			// Something happened in setting up the request that triggered an Error
			//console.log("Error", error.message);
			errorList = {
				statusCode: error.response.data.statusCode,
				errors: error.message
			};
		}
	});

	//console.log(response);

	if (hasError === true) {
		return errorList;
	} else {
		return response.data;
	}
};
