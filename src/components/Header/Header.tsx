import { useTranslations } from 'next-intl';
import React from 'react';
import { ButtonLink } from '../../ui';
import { Container, Logo, ThemeButton } from '../index';
import style from './Header.module.scss';
import { SelectLeng } from './components';

export default function Header(): React.JSX.Element {
	const w = useTranslations('Components');

	return (
		<Container>
			<header className={style.Header}>
				<Logo />
				<div className={style.RightSide}>
					<SelectLeng />
					<ThemeButton />
					<ButtonLink href={'project'}>{w('header.project')}</ButtonLink>
				</div>
			</header>
		</Container>
	);
}
