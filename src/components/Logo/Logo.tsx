import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import style from './Logo.module.scss';
export default function Logo(): React.JSX.Element {
	const t = useTranslations('Profile');

	return (
		<Link href={'/'} className={style.Logo}>
			<h4>
				<span>{t('first_name')}</span> {''}
				{t('last_name')}
			</h4>
		</Link>
	);
}
