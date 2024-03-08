import Image from 'next/image';
import style from '../Heroes.module.scss';

export function ImageHeroes({ name }: { name: string }) {
	return (
		<Image
			src={'/myphoto.png'}
			alt={name}
			width={600}
			height={900}
			priority
			className={style.my_photo}
		/>
	);
}
