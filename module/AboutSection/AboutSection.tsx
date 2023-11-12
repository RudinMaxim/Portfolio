import React from 'react';
import style from './AboutSection.module.scss';
import { CustomLink } from '../../components';
export default function AboutSection(): React.JSX.Element {
	return (
		<div className='container'>
			{/* <section className={`${style.AboutSection}`}>
				<div className={style.AboutTopBar}>
					<div className={style.AboutTopBarColume}>
						<h3>Что я умею</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
							non placeat distinctio molestiae aliquid nobis soluta consectetur?
							Repellat deserunt minus qui quae iusto. Eligendi voluptatem
							nesciunt expedita tempore quidem dolor.
						</p>
						<CustomLink to='#'>Lorem</CustomLink>
					</div>
					<div className={style.AboutTopBarColume}>
						<h3>Обо мне</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
							amet neque. Eligendi dolorem assumenda eum corporis, earum at
							necessitatibus aperiam voluptate iusto minus eveniet doloribus,
							dolore ipsa, illum est eos?
						</p>
						<CustomLink to='#'>Lorem</CustomLink>
					</div>
				</div>
			</section> */}
		</div>
	);
}
