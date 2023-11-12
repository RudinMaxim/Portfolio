'use client';
import Link from 'next-intl/link';
import { useLocale } from 'next-intl';
import React from 'react';

export default function SelectLeng(): React.JSX.Element {
	const locale = useLocale();
	console.log(locale);

	return (
		<>
			{locale === 'en' ? (
				<Link href='/' locale='ru'>
					ru
				</Link>
			) : (
				<Link href={'/'} locale='en'>
					en
				</Link>
			)}
		</>
	);
}
