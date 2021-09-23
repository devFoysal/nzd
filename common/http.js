import axios from "axios";
import CONSTANTS from "../common/variables";
const httpInstance = axios.create({
	baseURL: CONSTANTS.apiUrls.baseUrl,
	timeout: 1000,
	"Content-Type": "application/json"
});
// httpInstance.interceptors.request.use(request => {
//     // console.log('Starting Request', request);
//     return request;
// });

// httpInstance.interceptors.response.use(response => {
//     // console.log('Response:', response);
//     return response
// });
const httpGetInstance = async (url, params = {}, config) => {
	try {
		let response = await httpInstance({
			method: "get",
			url: url,
			timeout: 120000,
			params: {
				...params
			},
			...config
		});
		//console.log("responseHTTP",JSON.stringify(response));
		// if(response.status === 200){
		return response.data;
	} catch (error) {
		return error;
	}
};
const httpPostInstance = async (url, params = {}, data = {}, config) => {
	try {
		let response = await httpInstance({
			method: "post",
			url: url,
			timeout: 120000,
			data: {
				...data
			},
			params: {
				...params
			},
			...config
		});
		//console.log("responseHTTP",JSON.stringify(response));
		// if(response.status === 200){
		if (response) {
			return {
				error: false,
				status: response.status,
				data: response.data
			};
		} else {
			return {
				error: true,
				status: response.status,
				data: []
			};
		}
	} catch (error) {
		if (error.response) {
			return {
				error: true,
				status: error.response.status,
				data: []
			};
		} else {
			return {
				error: true,
				status: 422,
				data: []
			};
		}
	}
};
export { httpInstance, httpPostInstance, httpGetInstance };
