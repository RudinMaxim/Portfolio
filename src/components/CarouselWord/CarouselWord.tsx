import React from 'react';
import style from './CarouselWord.module.scss';

interface ICarouselWord {
	pre: string;
}

export default function CarouselWord({ pre }: ICarouselWord) {
	const ElementArray: Array<string> = ['Front-end', 'Back-end', 'DevSecOps'];
	return (
		<div className={style.carousel}>
			<div className={style.pre}>{pre}</div>
			<ul className={style.change_inner}>
				{ElementArray.map((item) => (
					<li className={style.element} key={item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
