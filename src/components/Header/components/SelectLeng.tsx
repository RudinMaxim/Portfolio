'use client';
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

export function SelectLeng(): React.JSX.Element {
	const locale = useLocale();

	return (
		<div
			style={{
				fontWeight: 600,
			}}>
			{locale === 'en' && (
				<Link href='/' locale='ru'>
					ru
				</Link>
			)}
			{locale !== 'en' && (
				<Link href={'/'} locale='en'>
					en
				</Link>
			)}
		</div>
	);
}
