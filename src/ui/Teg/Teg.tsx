import style from './Teg.module.scss';

type TTeg = {
	color?: 'primary' | 'secondary';
	text?: string;
	[key: string]: any;
};

export function Teg({ color = 'primary', text, ...rest }: TTeg) {
	const backgroundClass = getBackgroundClass(color);

	return (
		<article className={`${style.teg} ${backgroundClass}`} {...rest}>
			<span className={style.point}></span>
			{text}
		</article>
	);
}

const getBackgroundClass = (color: TTeg['color']) => {
	switch (color) {
		case 'primary':
			return style.Primary;
		case 'secondary':
			return style.Secondary;
		default:
			return style.Primary;
	}
};
