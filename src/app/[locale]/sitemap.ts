import { MetadataRoute } from 'next';
import { BASE_URL } from '../../lib/constants/url';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: BASE_URL + '/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/project',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
