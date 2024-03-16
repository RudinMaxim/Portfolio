import { useTranslations } from 'next-intl';
import React from 'react';
import { CustomCard } from '../../../../../components';
import { ButtonLink, Teg } from '../../../../../ui';
import style from './Heroes.module.scss';
import { ImageHeroes, SkillsList, SocialLinks } from './components';

export function Heroes(): React.JSX.Element {
	const Page = useTranslations('Page');
	const Profile = useTranslations('Profile');

	return (
		<section className={style.heroes}>
			<div className={style.heroes_left_side}>
				<Teg color='secondary' text={Profile('location')} />
				<SocialLinks />
				<ImageHeroes
					name={`${Profile('first_name')} ${Profile('last_name')}`}
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

					<CustomCard background={'secondary'}>
						<p>{Page('Heroes.cardForm.text')}</p>
						<ButtonLink href='/'>{Page('Heroes.cardForm.urlName')}</ButtonLink>
					</CustomCard>
				</div>
			</div>
			<div className={style.heroes_right_side}>
				<h1>{Page('Heroes.title')}</h1>

				<div className={style.heroes_right_side_list}>
					<div className={style.heroes_right_side_list_colume}>
						<h2>{Profile('shortAboutme.title')}</h2>
						<p>{Profile('shortAboutme.text')}</p>
					</div>
					<div className={style.heroes_right_side_list_colume}>
						<h2>{Page('Heroes.shortSkills.title')}</h2>
						<SkillsList />
					</div>
				</div>
			</div>
		</section>
	);
}
