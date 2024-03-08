import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6';
import { Container, CustomCard } from '../../../../../components';
import { ButtonLink, Teg } from '../../../../../ui';
import style from './Heroes.module.scss';

export function Heroes(): React.JSX.Element {
	const Page = useTranslations('Page');
	const Profile = useTranslations('Profile');

	return (
		<Container>
			<section className={style.heroes}>
				<div className={style.heroes_left_side}>
					<Teg color='secondary' text={Profile('location')} />
					<Image
						src={'/myphoto.png'}
						alt={''}
						width={500}
						height={750}
						className={style.my_photo}
					/>

					<div className={style.heroes_card_list_left}>
						<CustomCard background={'secondary'}>
							<p>{Page('Heroes.cardCV.text')}</p>
							<ButtonLink
								href='https://docs.google.com/document/d/1v0XOOiloew5vuFW8N3tU65sdKkOmjZ7vUfGgnNhNYP4/edit?usp=sharing'
								target='_blank'>
								{Page('Heroes.cardCV.urlName')}
							</ButtonLink>
						</CustomCard>

						<CustomCard background={'none'}>
							<p>{Page('Heroes.cardForm.text')}</p>
							<ButtonLink href='/'>
								{Page('Heroes.cardForm.urlName')}
							</ButtonLink>
						</CustomCard>
					</div>
				</div>
				<div className={style.heroes_right_side}>
					{/* <h1>
						{O('titleHome')}
						<CarouselWord pre={O('titleHome')} />
					</h1> */}

					<div className={style.heroes_right_side_colume}>
						<h3>{Profile('shortAboutme.title')}</h3>
						<p>{Profile('shortAboutme.text')}</p>
					</div>
					<div className={style.Colume}>
						<h3>{Profile('shortSkills.title')}</h3>
						<p>{Profile('shortSkills.text')}</p>
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
			</section>

			{/* <div className={style.HomeRightSide}>
					<h1>
						{O('titleHome')}
						<CarouselWord pre={O('titleHome')} />
					</h1>

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
				</div> */}
		</Container>
	);
}
