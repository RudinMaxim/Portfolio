import style from './Connect.module.scss';
import { ConnectForm, ConnectInfo } from './components';

export function Connect() {
	return (
		<section className={style.connect}>
			<ConnectInfo />
			<ConnectForm />
		</section>
	);
}
