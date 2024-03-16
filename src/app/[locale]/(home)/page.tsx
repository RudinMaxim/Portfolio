import { Container } from '../../../components';
import { About, Connect, Heroes } from './modules';

export default function page() {
	return (
		<main>
			<Container>
				<Heroes />
				<About />
				<Connect />
			</Container>
		</main>
	);
}
