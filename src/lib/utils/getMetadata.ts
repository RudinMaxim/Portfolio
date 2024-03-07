import { type Metadata } from 'next';
import { BASE_URL } from '../constants/url';

interface IMetadata {
	title?: string;
	description?: string;
	keywords?: string | Array<string>;
	url?: string;
}

export const getMetadata = (props: IMetadata): Metadata => {
	return {
		title: props.title ?? 'Maksim Rudin',
		description:
			props.description ??
			`Поддержка и помощь в преодолении трудностей в Пермском крае. Наш сайт предоставляет информацию, поддержку и ресурсы для тех, кто сталкивается с зависимостями или находится в трудной жизненной ситуации на территории Пермского края. Наша цель - помочь вам преодолеть трудности и получить необходимую поддержку.`,
		keywords: props.keywords ?? [
			'Пермский край помощь',
			'Помощь Пермь',
			'поддержка',
			'помощь',
			'зависимости',
			'трудности',
			'ресурсы',
			'исцеление',
			'проблемы',
			'сила',
			'духа',
			'восстановление',
			'радость',
		],
		icons: [
			{
				url: `${BASE_URL}/android-chrome-512x512.png`,
				sizes: '512x512',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/android-chrome-192x192.png`,
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/apple-touch-icon.png`,
				sizes: '180x180',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/favicon-32x32.png`,
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/favicon-16x16.png`,
				sizes: '16x16',
				type: 'image/png',
			},
		],
		other: {
			'og:type': 'website',
			'og:title': `${props.title ?? 'Помощь Пермь'}`,
			'og:url': `${props.url ? BASE_URL + '/' + props.url : BASE_URL + '/'}`,
			'og:site_name': 'Помощь Пермь',
			'og:description':
				props.description ??
				'Поддержка и помощь в преодолении трудностей в Пермском крае. Наш сайт предоставляет информацию, поддержку и ресурсы для тех, кто сталкивается с зависимостями или находится в трудной жизненной ситуации на территории Пермского края. Наша цель - помочь вам преодолеть трудности и получить необходимую поддержку.',
			'og:locale': 'ru_RU',
			'og:locale:alternate': 'en_US',
			'og:image': `${BASE_URL}/android-chrome-512x512.png`,
			'og:image:width': '512',
			'og:image:height': '512',
			'og:image:alt': 'Помощь Пермь',
			'og:image:type': 'image/png',
			'og:image:secure_url': `${BASE_URL}/android-chrome-512x512.png`,
		},
	};
};
