import React from 'react';
import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';
import style from './CustomLink.module.scss';
interface ICustomLink {
	to: string;
	background?: 'primary' | 'secondary' | 'bg' | 'none';
	children: React.ReactNode;
}

export default function CustomLink({
	to,
	children,
	background = 'primary',
}: ICustomLink): React.JSX.Element {
	const backgroundClasses = {
		primary: style.Primary,
		secondary: style.Secondary,
		bg: style.BG,
		none: style.None,
	};
	let backgroundClass = backgroundClasses[background] || style.Primary;

	return (
		<Link href={to} className={`${style.CustomLink} ${backgroundClass}`}>
			<span>{children}</span>
			<FaCircleArrowRight />
		</Link>
	);
}
