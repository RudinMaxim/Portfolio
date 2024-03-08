import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './lib/constants/leng';

export default createMiddleware({
	locales,
	defaultLocale,
});
export const config = {
	matcher: ['/', '/(ru|en)/:path*'],
};
