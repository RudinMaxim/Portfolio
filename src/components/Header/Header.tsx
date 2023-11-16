import React from 'react';
import style from './Header.module.scss';
import { Logo, CustomLink } from '../index';
import { useTranslations } from 'next-intl';
import SelectLeng from './components/SelectLeng';

export default function Header(): React.JSX.Element {
	const w = useTranslations('Other');
	return (
		<header className={`${style.Header} container`}>
			<Logo />
			<div className={style.RightSide}>
				<SelectLeng />
				<CustomLink to={'/project'}>{w('project')}</CustomLink>
			</div>
		</header>
	);
}
