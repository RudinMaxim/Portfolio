import { useTranslations } from 'next-intl';
import Link from 'next/link';
import style from '../Connect.module.scss';

export function ConnectInfo() {
	const Page = useTranslations('Page');

	return (
		<div className={style.connect__info}>
			<h2>{Page('Connect.title')}</h2>

			<div>
				<Link href='mailto:maxrudin2004@gmail.com'>maxrudin2004@gmail.com</Link>
				<Link href='tel:+79223261682'>+79223261682</Link>
			</div>
			<div>
				<h3>{Page('Connect.activity')}</h3>
				<p>ПН - ВТ: 12:00 - 19:00</p>
			</div>
		</div>
	);
}
