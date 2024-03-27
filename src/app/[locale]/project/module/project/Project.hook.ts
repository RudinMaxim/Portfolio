import { useEffect, useState } from 'react';
import { getProject } from '../../../../../lib/api/getProject';
import { TypeProject } from '../../../../api/projects/schema';

export interface IProject {
	projects: TypeProject[] | null;
}

export const useProject = (): IProject => {
	const [projects, setProjects] = useState<TypeProject[]>(null);

	useEffect(() => {
		const fetchProjects = async () => {
			const data = await getProject();
			if (data) {
				setProjects(data);
			}
		};

		fetchProjects();
	}, []);

	return { projects };
};
