import axios from 'axios';
import { TypeProject } from '../../app/api/projects/schema';
import { BASE_URL } from '../constants/url';

export const getProject = async () => {
	try {
		const response = await axios.get<TypeProject[]>('/api/projects', {
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
