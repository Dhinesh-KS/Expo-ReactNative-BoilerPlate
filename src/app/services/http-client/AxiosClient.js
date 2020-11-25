import axios from 'axios';
import { baseURL } from '../../constants/BaseURL';

const client = axios.create({
	baseURL
});

client.interceptors.request.use(
	config => {
		/*
		 * Here you can add a header with a JWT token, ensuring it will be
		 * sent with ALL your requests.
		 */
		return config;
	},
	error => Promise.reject(error)
);

client.interceptors.response.use(
	response => response,
	error => {
		/*
		 * Here you can add a central error handling mechanism
		 */
		return Promise.reject(error);
	}
);

// Exports Axios object to be used by the services
export default client;
