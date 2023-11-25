import style from '../AboutSection.module.scss';
import React from 'react';

interface IHistoryItem {
	date: number;
	position: string;
}
export const history: IHistoryItem[] = [
	{
		date: 2016,
		position: 'Full Stack',
	},
	{
		date: 2012,
		position: 'Full Stack',
	},
];

export default function CompanyHistory(): React.JSX.Element {
	return (
		<div className={style.History}>
			{/* <h3>Моя история</h3> */}
			<ul>
				{history.map((item, index) => (
					<li key={index}>
						<div className={style.date}>
							<data>{item.date},</data>
							<span>{item.position}</span>
						</div>
						{/* <p className={style.event}>{item.event}</p> */}
					</li>
				))}
			</ul>
		</div>
	);
}
