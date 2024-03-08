import { Skills } from '../../../../../../lib/constants/constants';
import { ButtonLink } from '../../../../../../ui';
import style from '../Heroes.module.scss';

export function SkillsList() {
	return (
		<ul className={style.SkillsList}>
			{Skills.map((skill) => (
				<li key={skill.title}>
					<ButtonLink href='/'>{skill.title}</ButtonLink>
				</li>
			))}
		</ul>
	);
}
