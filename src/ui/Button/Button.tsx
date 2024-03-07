import Image from 'next/image';
import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';
import style from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	disabled?: boolean;
	isSubmitting?: boolean;
}

export function Button({
	children,
	isSubmitting = false,
	disabled = false,
	...rest
}: IButton) {
	return (
		<button
			className={style.Button}
			disabled={isSubmitting || disabled}
			{...rest}>
			{children}
		</button>
	);
}

interface IButtonIcon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string;
	alt?: string;
}

export function ButtonIcon({ icon, onClick, ...rest }: IButtonIcon) {
	return (
		<button
			className={style.ButtonIcon}
			onClick={onClick}
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			{...rest}>
			<Image src={icon} alt={'ButtonIcon'} />
		</button>
	);
}

interface IButtonLink {
	children: React.ReactNode;
	href: string;
	target?: '_blank' | '_parent' | '_self' | '_top';
}

export function ButtonLink({ children, href, target = '_self' }: IButtonLink) {
	return (
		<Link href={href} className={style.ButtonLink} target={target}>
			<span>{children}</span>
			<FaCircleArrowRight />
		</Link>
	);
}
