import { MetadataRoute } from 'next';
import { BASE_URL } from '../lib/constants/url';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/about-us', '/contacts'],
		},
		host: BASE_URL,
		sitemap: BASE_URL + '/sitemap.xml',
	};
}
