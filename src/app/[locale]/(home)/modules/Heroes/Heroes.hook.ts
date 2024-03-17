import { useEffect, useState } from 'react';
import { getSkills } from '../../../../../lib/api/getSkills';
import { Library } from '../../../../api/libraries/schema';
import { Technology } from '../../../../api/technologies/schema';

export const useHeroes = (): { skills: Technology[] | null } => {
	const [skills, setSkills] = useState<
		(Technology & { libraries?: Library[] })[]
	>([]);

	useEffect(() => {
		getSkills()
			.then((data) => {
				const mergedSkills = data.reduce((result, technology) => {
					const { libraries, ...rest }: Technology & { libraries?: Library[] } =
						technology;

					result.push(rest);

					if (libraries && libraries.length > 0) {
						result.push(
							...libraries.map((library: Library) => ({
								...library,
								isTechnology: false,
							}))
						);
					}
					return result;
				}, [] as (Technology & { libraries?: Library[]; isTechnology?: boolean })[]);
				setSkills(mergedSkills);
			})
			.catch((error) => {
				console.error('Error fetching technologies:', error);
			});
	}, []);

	return { skills };
};
