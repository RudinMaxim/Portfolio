export type TypeSkills = Array<{
	title: string;
}>;
const Skills: TypeSkills = [
	{
		title: 'HTML',
	},
	{
		title: 'CSS',
	},
	{
		title: 'SCSS',
	},
	{
		title: 'Tailwind CSS',
	},
	{
		title: 'JavaScript',
	},
	{
		title: 'TypeScript',
	},
	{
		title: 'Git',
	},
	{
		title: 'React',
	},
	{
		title: 'Next.JS',
	},
	{
		title: 'Git',
	},
	{
		title: 'SQL',
	},
	{
		title: 'PostgreSQL',
	},
	{
		title: 'MySQL',
	},
	{
		title: 'MongoDB',
	},
	{
		title: 'Redis',
	},
	{
		title: 'Prisma',
	},
	{
		title: 'Go',
	},
];

interface IProfile {
	name: string | Array<string>;
	shortSummary: string;
	skills?: Array<{}>;

	education?: Array<{
		title: string;
		subTitle?: string;
		dataStart?: string | Date | 'NOW';
		dataEnd?: string | Date;
		type?: string;
	}>;

	experience?: Array<{
		title: string;
		subTitle?: string;
		description?: string;
		post?: string;
		type?: string;
		dataStart?: string | Date;
		dataEnd?: string | Date;
	}>;

	otherInf?: {
		post?: string | Array<string>;
		dateOfBirth?: string | Date;
		location?: string;
		connect?: Array<{
			title?: string;
			url?: string;
		}>;
	};
}
export const Profile: IProfile = {
	name: 'Рудин Максим Викторович',
	shortSummary: '', // написать краткое резюме, так же для сайтов по найму
	skills: [...Skills],
	otherInf: {
		dateOfBirth: '21.03.2004',
		location: 'Пермь',
		post: ['Frontend', 'Full Stuck'],
		connect: [
			{
				title: 'GitHub',
				url: 'https://github.com/RudinMaxim?tab=repositories',
			},
			{
				title: 'Почта',
				url: 'mailto:rudin.maksimka@bk.ru',
			},
		],
	},
	education: [
		{
			title: 'ПТПИТ',
			subTitle: 'Системная Защита Информации',
			type: 'СУЗ',
			dataStart: '01.09.2021',
			dataEnd: '01.07.2025',
		},
		{
			title: 'Доп. Курсы',
			subTitle: 'Full stack',
			type: 'Курс',
			dataStart: '01.10.2021',
			dataEnd: '01.04.2024',
		},
	],

	experience: [
		{
			title: 'Персональные проекты',
			description: '', // Написать описание работы с solo dance и фац
			type: 'Freelance',
		},
	],
};

interface IProject {
	title: string;
	subTitle?: string;
	description: string;
	technologies: TypeSkills;
	type: 'Коммерческий' | 'Личный';
	links?: {
		liveURL?: string;
		repURL?: string;
		prodURL?: string;
	};
}
export const Project: IProject[] = [
	{
		title: 'SOLO DANCE STUDIO PERM',
		description: '',
		type: 'Коммерческий',
		links: {
			liveURL: 'https://rudinmaxim.github.io/SOLO-DANCE/',
			repURL: 'https://github.com/RudinMaxim/SOLO-DANCE',
		},
		technologies: [
			{
				title: 'HTML',
			},
			{
				title: 'CSS',
			},
			{
				title: 'JavaScript',
			},
			{
				title: 'PHP',
			},
		],
	},
	{
		title: 'Федеральный аккредитационный центр',
		description: '',
		type: 'Коммерческий',
		links: {
			repURL: 'https://github.com/RudinMaxim/fac-app-dev',
			liveURL: 'https://fac-app.vercel.app/',
		},
		technologies: [
			{
				title: 'TypeScript',
			},
			{
				title: 'React',
			},
			{
				title: 'Next.JS',
			},
			{
				title: 'SCSS',
			},
		],
	},

	{
		title: 'schedule',
		description: '',
		type: 'Личный',
		links: {
			repURL: 'https://github.com/RudinMaxim/project_schedule',
		},
		technologies: [
			{
				title: 'React',
			},
			{
				title: 'CSS',
			},
		],
	},
];
