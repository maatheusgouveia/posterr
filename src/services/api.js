import axios from 'axios';

const api = axios.create({
	//  a .env file could be used here to make it easier
	//  to switch between develop and production environment
	baseURL: 'http://localhost:3333',
});

export default api;
