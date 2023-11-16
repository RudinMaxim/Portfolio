import React from 'react';
import style from './Teg.module.scss';

interface ITeg {
	color?: 'primary' | 'secondary';
	text?: string;
	[key: string]: any;
}

export function Teg({ color = 'primary', text, ...rest }: ITeg) {
	let backgroundClass = '';
	switch (color) {
		case 'primary':
			backgroundClass = style.Primary;
			break;
		case 'secondary':
			backgroundClass = style.Secondary;
			break;
		default:
			backgroundClass = style.Primary;
	}
	return (
		<article className={`${style.teg} ${backgroundClass}`} {...rest}>
			<span className={style.point}></span>
			{text}
		</article>
	);
}
