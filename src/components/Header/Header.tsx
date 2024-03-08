import { useTranslations } from 'next-intl';
import React from 'react';
import { ButtonLink } from '../../ui';
import { Container, Logo, ThemeButton } from '../index';
import style from './Header.module.scss';
import { SelectLeng } from './components';

export function Header(): React.JSX.Element {
	const w = useTranslations('Components');

	return (
		<Container>
			<header className={style.header}>
				<Logo />
				<div className={style.header_side}>
					<SelectLeng />
					<ThemeButton />
					<ButtonLink href={'/project'}>{w('header.project')}</ButtonLink>
				</div>
			</header>
		</Container>
	);
}
