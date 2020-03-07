import axios from 'axios';

/* export const axiosInstance = axios.create({
	baseURL: 'https://conduit.productionready.io/',
	headers: { 'Content-Type': 'application/json' }
});


 export function setAuthToken(token) {
	axios.defaults.headers.common['Authorization'] = '';
	delete axios.defaults.headers.common['Authorization'];
  
	if (token) {
	  axios.defaults.headers.common['Authorization'] = `${token}`;
	}
  }

 */
/* instance.defaults.headers.common['Authorization'] = AUTH_TOKEN; */

const axiosInstance = () => {
	const defaultOptions = {
		baseURL: 'https://conduit.productionready.io/',
	  	headers: {
		'Content-Type': 'application/json',
	  },
	};
  
	// Create instance
	let instance = axios.create(defaultOptions);
  
	// Set the AUTH token for any request
	instance.interceptors.request.use(function (config) {
	  const token = localStorage.getItem('token');
	  config.headers.Authorization =  token ? `Token ${token}` : '';
	  return config;
	});
  
	return instance;
  };
  
  export default axiosInstance();