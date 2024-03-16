import { useTranslations } from 'next-intl';
import style from './Connect.module.scss';

export function Connect() {
	const Page = useTranslations('Page');

	return (
		<section className={style.Connect}>
			<h2>{Page('Connect.title')}</h2>
		</section>
	);
}
