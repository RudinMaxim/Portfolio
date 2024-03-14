import Link from 'next/link';
import { FaGithub, FaTelegram } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import style from '../Heroes.module.scss';

export function SocialLinks() {
	return (
		<ul className={style.SocialLinks}>
			{/* <li>
				<Link href={'https://github.com/RudinMaxim'} target='_blank'>
					<FaLinkedinIn />
				</Link>
			</li> */}
			<li title='Github'>
				<Link
					href={'https://github.com/RudinMaxim'}
					target='_blank'
					aria-label='Github'>
					<FaGithub />
				</Link>
			</li>
			<li title='Telegram'>
				<Link
					href={'https://t.me/Max_Rudin04'}
					target='_blank'
					aria-label='Telegram'>
					<FaTelegram />
				</Link>
			</li>
			<li title='Leetcode'>
				<Link
					href={'https://leetcode.com/RudinMaxim/'}
					target='_blank'
					aria-label='Leetcode'>
					<SiLeetcode />
				</Link>
			</li>
		</ul>
	);
}
