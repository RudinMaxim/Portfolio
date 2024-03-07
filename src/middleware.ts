import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/constants/leng';

export default createMiddleware({
	locales: locales,
	defaultLocale: 'ru',
});
export const config = {
	matcher: ['/', '/(ru|en)/:path*'],
};
