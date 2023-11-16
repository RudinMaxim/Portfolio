import React from 'react';
import style from './AboutSection.module.scss';
export default function AboutSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.AboutSection}>
				<div className={style.main}>main</div>
				<div className={style.skill1}>skill1</div>
				<div className={style.skill12}>skill2</div>
				<div className={style.skill3}>skill3</div>
				<div className={style.sliderProject}>sliderProject</div>
			</section>
		</div>
	);
}
