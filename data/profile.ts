export type TypeSkills = Array<{
	title: string;
	type: 'technologies' | 'Other' | 'language';
}>;
const Skills: TypeSkills = [
	{
		title: 'HTML',
		type: 'technologies',
	},
	{
		title: 'CSS',
		type: 'technologies',
	},
	{
		title: 'SCSS',
		type: 'technologies',
	},
	{
		title: 'Tailwind CSS',
		type: 'technologies',
	},
	{
		title: 'JavaScript',
		type: 'technologies',
	},
	{
		title: 'TypeScript',
		type: 'technologies',
	},
	{
		title: 'Git',
		type: 'technologies',
	},
	{
		title: 'React',
		type: 'technologies',
	},
	{
		title: 'Next.JS',
		type: 'technologies',
	},
	{
		title: 'Git',
		type: 'Other',
	},
	{
		title: 'SQL',
		type: 'technologies',
	},
	{
		title: 'PostgreSQL',
		type: 'technologies',
	},
	{
		title: 'MySQL',
		type: 'technologies',
	},
	{
		title: 'MongoDB',
		type: 'technologies',
	},
	{
		title: 'Prisma',
		type: 'technologies',
	},
	{
		title: 'Go',
		type: 'technologies',
	},
	{
		title: 'Ru',
		type: 'language',
	},
	{
		title: 'EU',
		type: 'language',
	},
];

interface IProfile {
	name: string | Array<string>;
	shortSummary: string;
	fullSummary: string;
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
	fullSummary: '', // написать полное резюме
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
			title: 'Персональные проекты ',
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
				type: 'technologies',
			},
			{
				title: 'CSS',
				type: 'technologies',
			},
			{
				title: 'JavaScript',
				type: 'technologies',
			},
			{
				title: 'PHP',
				type: 'technologies',
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
				type: 'technologies',
			},
			{
				title: 'React',
				type: 'technologies',
			},
			{
				title: 'Next.JS',
				type: 'technologies',
			},
			{
				title: 'SCSS',
				type: 'technologies',
			},
		],
	},
	{
		title: 'Pets server',
		description: '',
		type: 'Личный',
		links: {
			repURL: 'https://github.com/RudinMaxim/go-pets',
		},
		technologies: [
			{
				title: 'GO',
				type: 'technologies',
			},
			{
				title: 'PostgreSQL',
				type: 'technologies',
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
				type: 'technologies',
			},
			{
				title: 'CSS',
				type: 'technologies',
			},
		],
	},
];
