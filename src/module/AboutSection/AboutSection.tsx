import React from 'react';
import style from './AboutSection.module.scss';
import { FaDatabase, FaDesktop, FaHardDrive } from 'react-icons/fa6';
import { CustomCard, CustomLink } from '../../components';
import History from './components/History';
import { Skills } from '../../lib/constants';
import Swiper from './components/Swiper';

export default function AboutSection(): React.JSX.Element {
	const ClientArray = Skills.filter((el) => el.type == 'Client');
	const ServerArray = Skills.filter((el) => el.type == 'Server');
	const DevOpsArray = Skills.filter((el) => el.type == 'DevOps');

	return (
		<div className='container'>
			<section className={style.AboutSection}>
				<div className={style.ProjectSlider}>{/* <Swiper /> */}</div>
				<div className={style.expline}>
					<History />
				</div>
				<div className={style.skills1}>
					<CustomCard background={'secondary'}>
						<div className={style.Skill}>
							<p className={style.SkillHead}>
								<FaDesktop />
								<span>Клиент</span>
							</p>
							<ul>
								{ClientArray.map((item) => (
									<li key={item.title}>
										<CustomLink to='/'>{item.title}</CustomLink>
									</li>
								))}
							</ul>
						</div>
					</CustomCard>
				</div>
				<div className={style.skills2}>
					<CustomCard background={'secondary'}>
						<div className={style.Skill}>
							<p className={style.SkillHead}>
								<FaDatabase />
								<span>Сервер</span>
							</p>
							<ul>
								{ServerArray.map((item) => (
									<li key={item.title}>
										<CustomLink to='/'>{item.title}</CustomLink>
									</li>
								))}
							</ul>
						</div>
					</CustomCard>
				</div>
				<div className={style.skills3}>
					<CustomCard background={'secondary'}>
						<div className={style.Skill}>
							<p className={style.SkillHead}>
								<FaHardDrive />
								<span>DevOps</span>
							</p>
							<ul>
								{DevOpsArray.map((item) => (
									<li key={item.title}>
										<CustomLink to='/'>{item.title}</CustomLink>
									</li>
								))}
							</ul>
						</div>
					</CustomCard>
				</div>
			</section>
		</div>
	);
}
