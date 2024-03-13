import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
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
			<li>
				<Link href={'https://leetcode.com/RudinMaxim/'} target='_blank'>
					<SiLeetcode />
				</Link>
			</li>
		</ul>
	);
}
