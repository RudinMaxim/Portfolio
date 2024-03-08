import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import style from './Logo.module.scss';

export function Logo(): React.JSX.Element {
	const t = useTranslations('Profile');

	return (
		<Link href={'/'} className={style.Logo}>
			<b>M.</b>
			<p>
				<span>{t('first_name')}</span> {''}
				{t('last_name')}
			</p>
		</Link>
	);
}
