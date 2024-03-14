import style from './Loader.module.scss';

export default function Loader() {
	return (
		<div className={style.Loader__Wrapper}>
			<div className={style.Loader}>
				<div className={style.circle}></div>
				<div className={style.circle}></div>
				<div className={style.circle}></div>
			</div>
		</div>
	);
}
