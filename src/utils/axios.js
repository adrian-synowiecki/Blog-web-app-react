import axios from 'axios';

const axiosInstance = () => {
	const defaultOptions = {
		baseURL: 'https://conduit.productionready.io/',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Create instance
	let instance = axios.create(defaultOptions);

	// Set the AUTH token for any request
	instance.interceptors.request.use(function(config) {
		const token = localStorage.getItem('token');
		config.headers.Authorization = token ? `Token ${token}` : '';
		return config;
	});

	return instance;
};

export default axiosInstance();
