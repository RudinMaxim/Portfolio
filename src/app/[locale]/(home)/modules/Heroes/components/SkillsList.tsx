'use client';
import { ButtonLink } from '../../../../../../ui';
import { useHeroes } from '../Heroes.hook';
import style from '../Heroes.module.scss';

export function SkillsList() {
	const { technologies } = useHeroes();

	if (!technologies.length) {
		return <SkillsListSkeleton />;
	}

	return (
		<ul className={style.SkillsList}>
			{technologies.map((skill) => (
				<li key={skill.id} title={skill.description}>
					<ButtonLink href={`/project?technologies=${skill.name}`}>
						{skill.name}
					</ButtonLink>
				</li>
			))}
		</ul>
	);
}

function SkillsListSkeleton() {
	return <div className={style.SkillsListSkeleton}></div>;
}
