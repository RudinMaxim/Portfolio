import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/constants/leng';

export default createMiddleware({
	locales,
	defaultLocale: 'ru',
});
export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
