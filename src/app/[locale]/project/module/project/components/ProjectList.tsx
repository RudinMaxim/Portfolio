import { Technology } from '@prisma/client';
import { Loader, TextTruncator } from '../../../../../../components';
import { Library } from '../../../../../api/libraries/schema';
import { TypeProject } from '../../../../../api/projects/schema';
import { IProject } from '../Project.hook';
import style from '../Project.module.scss';
import { dateRange } from '../utils';

export function ProjectList(props: IProject) {
	const { projects } = props;

	// TODO добавить скелетон
	if (!projects) {
		return <Loader />;
	}

	return (
		<ul className={style.ProjectList}>
			{projects.map((project) => (
				<ProjectItem project={project} key={`ProjectList_${project.id}`} />
			))}
		</ul>
	);
}

function ProjectItem({ project }: { project: TypeProject }) {
	const { name, tag, start, end, description, links, technologies, libraries } =
		project;

	return (
		<li className={style.project_item}>
			<div className={style.project_item_body}>
				<div className={style.project_item_body_left}>
					<div className={style.image}></div>
				</div>
				<div className={style.project_item_body_right}>
					<header>
						<div className={style.project_item_header_title}>
							<h2 id={name}>{name}</h2>
							<span>{dateRange(start, end)}</span>
						</div>
						{/* <Teg text={tag} /> */}
					</header>
					<div className={style.project_item_body_right_item}>
						<h3>Описание:</h3>
						<TextTruncator text={description} maxLength={100} />
					</div>
					{links.length !== 0 && (
						<div className={style.project_item_body_right_item}>
							<h3>Ссылки:</h3>
							<ProjectItemLinkList links={links} />
						</div>
					)}

					{technologies.length !== 0 && (
						<div className={style.project_item_body_right_item}>
							<h3>Технологии:</h3>
							<ProjectItemTehnolaogies
								// @ts-ignore
								technologies={technologies}
								libraries={libraries}
							/>
						</div>
					)}
				</div>
			</div>
		</li>
	);
}

function ProjectItemLinkList({ links }: { links: string[] }) {
	return (
		<ul className={style.project_item_Link}>
			{links.map((link) => (
				<li key={link}>
					<a href={link} aria-label={link} target='_blank' rel='noreferrer'>
						{link}
					</a>
				</li>
			))}
		</ul>
	);
}

function ProjectItemTehnolaogies({
	technologies,
	libraries,
}: {
	technologies: Technology[];
	libraries: Library[];
}) {
	return (
		<ul className={style.project_item_tehnolaogies}>
			{[...technologies, ...libraries].map((technology) => (
				<li key={`ProjectItemTehnolaogies_${technology.id}`}>
					<p>{technology.name}</p>
				</li>
			))}
		</ul>
	);
}
