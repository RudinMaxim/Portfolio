import style from './CustomCard.module.scss';

interface ICustomCard {
	children: React.ReactNode;
	background?: 'primary' | 'secondary' | 'bg' | 'none';
}

export default function CustomCard({
	children,
	background = 'primary',
}: ICustomCard) {
	const backgroundClasses = {
		primary: style.Primary,
		secondary: style.Secondary,
		bg: style.BG,
		none: style.None,
	};
	let backgroundClass = backgroundClasses[background] || style.Primary;

	return (
		<div className={`${style.CustomCard} ${backgroundClass}`}>{children}</div>
	);
}
