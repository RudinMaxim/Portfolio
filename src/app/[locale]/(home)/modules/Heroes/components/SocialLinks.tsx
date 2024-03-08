import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6';
import style from '../Heroes.module.scss';

export function SocialLinks() {
	return (
		<ul className={style.SocialLinks}>
			<li>
				<Link href={'https://github.com/RudinMaxim'} target='_blank'>
					<FaLinkedinIn />
				</Link>
			</li>
			<li>
				<Link href={'https://github.com/RudinMaxim'} target='_blank'>
					<FaGithub />
				</Link>
			</li>
			<li>
				<Link href={'https://t.me/Max_Rudin04'} target='_blank'>
					<FaTelegram />
				</Link>
			</li>
		</ul>
	);
}
