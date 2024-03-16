'use client';
import { ButtonLink } from '../../../../../../ui';
import { useHeroes } from '../Heroes.hook';
import style from '../Heroes.module.scss';

export function SkillsList() {
	const { skills } = useHeroes();

	if (!skills || !skills.length) {
		return <SkillsListSkeleton />;
	}

	return (
		<ul className={style.SkillsList}>
			{skills.map((skill) => (
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
