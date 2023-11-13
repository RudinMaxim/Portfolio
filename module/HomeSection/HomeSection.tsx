import React from 'react';
import style from './HomeSection.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CustomCard, Loader, Teg } from '../../components';
import {
	FaChevronRight,
	FaGithub,
	FaLinkedinIn,
	FaTelegram,
} from 'react-icons/fa6';

export default function HomeSection(): React.JSX.Element {
	const p = useTranslations('Profile');
	const O = useTranslations('Other');
	return (
		<div className='container'>
			<section className={`${style.HomeSection}`}>
				<div className={style.HomeLeftSide}>
					<Teg color='secondary' text={p('location')} />
					<div className={style.myphoto}>
						<Link href={'/project'} className={style.CircleLink}>
							<span>
								<FaChevronRight />
							</span>
						</Link>
					</div>
					<div className={style.HomeCardListLeft}>
						<CustomCard
							background={'secondary'}
							text={O('cardCVHome.text')}
							texturl={O('cardCVHome.urlName')}
							url='/'
						/>
						<CustomCard
							background={'none'}
							text={O('cardFormHome.text')}
							texturl={O('cardFormHome.urlName')}
							url='/'
						/>
					</div>
				</div>
				<div className={style.HomeRightSide}>
					<h1>{O('titleHome')}</h1>

					<div className={style.HomeRightSideAbout}>
						<div className={style.Colume}>
							<h3>{p('shortAboutme.title')}</h3>
							<p>{p('shortAboutme.text')}</p>
						</div>
						<div className={style.Colume}>
							<h3>{p('shortSkills.title')}</h3>
							<p>{p('shortSkills.text')}</p>
						</div>
						<div className={style.SocialLinks}>
							<span>
								<Link href={'https://github.com/RudinMaxim'}>
									<FaLinkedinIn />
								</Link>
							</span>
							<span>
								<Link href={'https://github.com/RudinMaxim'}>
									<FaGithub />
								</Link>
							</span>
							<span>
								<Link href={'https://t.me/Max_Rudin04'}>
									<FaTelegram />
								</Link>
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
