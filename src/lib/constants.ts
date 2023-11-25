export type TypeSkills = Array<{
	title: string;
	type?: 'Client' | 'Server' | 'DevOps';
}>;
export const Skills: TypeSkills = [
	{
		title: 'TypeScript',
		type: 'Client',
	},
	{
		title: 'SCSS',
		type: 'Client',
	},
	{
		title: 'React',
		type: 'Client',
	},
	{
		title: 'Next.JS',
		type: 'Client',
	},
	{ title: 'Styled-components', type: 'Client' },
	{
		title: 'Git',
		type: 'DevOps',
	},
	{
		title: 'Go',
		type: 'Server',
	},
	{
		title: 'SQL',
		type: 'Server',
	},
	{
		title: 'Prisma',
		type: 'Server',
	},
	{
		title: 'Docker',
		type: 'Server',
	},
	{
		title: 'Linux',
		type: 'DevOps',
	},
	{
		title: 'Networks',
		type: 'DevOps',
	},
];
