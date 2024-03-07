import Link from 'next/link';
import React from 'react';
import { getCurrentYear } from '../../lib/utils/utils';
import style from './Footer.module.scss';

export default function Footer(): React.JSX.Element {
	const year: string = getCurrentYear().toString();
	const start: string = '2023';
	const period: string = year == start ? `${year}` : `${start} - ${year}`;

	return (
		<footer className={style.Footer}>
			<div className='continer'>
				<div className={style.Copyright}>
					Copyright &copy; {period}, Все права защищены,
					<Link href={'https://github.com/RudinMaxim'}> Rudin Maxim</Link>
				</div>
			</div>
		</footer>
	);
}
