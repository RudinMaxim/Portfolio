import React from 'react';
import style from './CustomCard.module.scss';
import CustomLink from '../CustomLink/CustomLink';

interface ILink {
	url: string;
	name: string;
}

interface ICustomCard {
	text: string;
	url?: string;
	texturl?: string;
	background: 'primary' | 'secondary' | 'bg' | 'none';
}

export default function CustomCard({
	text,
	url,
	texturl,
	background,
}: ICustomCard) {
	const backgroundClasses = {
		primary: style.Primary,
		secondary: style.Secondary,
		bg: style.BG,
		none: style.None,
	};
	let backgroundClass = backgroundClasses[background] || style.Primary;

	return (
		<div className={`${style.CustomCard} ${backgroundClass}`}>
			<p>{text}</p>
			<CustomLink to={url} background='primary'>
				{texturl}
			</CustomLink>
		</div>
	);
}
