import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { Container } from '../Container/Container';
import style from './Footer.module.scss';

const start: string = '2023';
const year: string = new Date().getFullYear().toString();
const period: string = year == start ? `${year}` : `${start} - ${year}`;

export function Footer(): React.JSX.Element {
	const w = useTranslations('Components');

	return (
		<footer className={style.Footer}>
			<Container>
				<div className={style.Copyright}>
					&copy; {w('footer.Copyright')}, {period}
					<Link href={'https://github.com/RudinMaxim'}> Rudin Maxim</Link>
				</div>
			</Container>
		</footer>
	);
}
