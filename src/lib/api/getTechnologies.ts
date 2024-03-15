import axios from 'axios';
import { Technology } from '../../app/api/technologies/schema';
import { BASE_URL } from '../constants/url';

export const getTechnologies = async () => {
	try {
		const response = await axios.get<Technology[]>('/api/technologies', {
			baseURL: BASE_URL,
		});

		if (!response || response.status !== 200) {
			throw new Error('Invalid response');
		}

		return response.data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
