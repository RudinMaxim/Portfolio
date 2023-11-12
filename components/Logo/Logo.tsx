import React from 'react';
import style from './Logo.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
export default function Logo(): React.JSX.Element {
	const t = useTranslations('Profile');

	return (
		<Link href={'/'} className={style.Logo}>
			<h4>{t('name')}</h4>
		</Link>
	);
}
