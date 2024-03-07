import { useTranslations } from 'next-intl';
import React from 'react';

export function Heroes(): React.JSX.Element {
	const p = useTranslations('Profile');
	const O = useTranslations('Other');
	return (
		<div className='container'>
			{/* <section className={`${style.HomeSection}`}>
				<div className={style.HomeLeftSide}>
					<Teg color='secondary' text={p('location')} />
					<div className={style.myphoto}></div>
					<div className={style.HomeCardListLeft}>
						<CustomCard background={'none'}>
							<p>{O('cardCVHome.text')}</p>
							<CustomLink to='/'>{O('cardCVHome.urlName')}</CustomLink>
						</CustomCard>

						<CustomCard background={'none'}>
							<p>{O('cardFormHome.text')}</p>
							<CustomLink to='/'>{O('cardFormHome.urlName')}</CustomLink>
						</CustomCard>
					</div>
				</div>
				<div className={style.HomeRightSide}>
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
				</div>
			</section> */}
		</div>
	);
}
