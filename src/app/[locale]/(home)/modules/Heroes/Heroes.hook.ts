import { useEffect, useState } from 'react';
import { getTechnologies } from '../../../../../lib/api/getTechnologies';
import { Technology } from '../../../../api/technologies/schema';

interface IHeroes {
	technologies: Technology[] | null;
	isLoading: boolean;
}

export const useHeroes = (): IHeroes => {
	const [technologies, setTechnologies] = useState<Technology[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getTechnologies()
			.then((data) => {
				setTechnologies(data);
			})
			.catch((error) => {
				console.error('Error fetching technologies:', error);
			});
	}, []);

	return { technologies, isLoading };
};
