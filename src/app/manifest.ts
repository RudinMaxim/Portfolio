import { MetadataRoute } from 'next';
import { BASE_URL } from '../lib/constants/url';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Помощь Перми',
		short_name: 'Поддержка и помощь в преодолении трудностей в Пермском крае.',
		description:
			'Наш сайт предоставляет информацию, поддержку и ресурсы для тех, кто сталкивается с зависимостями или находится в трудной жизненной ситуации на территории Пермского края. Наша цель - помочь вам преодолеть трудности и получить необходимую поддержку.',
		start_url: BASE_URL,
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
