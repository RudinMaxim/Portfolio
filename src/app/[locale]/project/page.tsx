import { Metadata } from 'next';
import { Container } from '../../../components';
import { getMetadata } from '../../../lib/utils/getMetadata';
import { Project } from './module';

export const metadata: Metadata = getMetadata({
	title: 'Maksim Rudin | Project',
});

export default function page() {
	return (
		<main>
			<Container>
				<Project />
			</Container>
		</main>
	);
}
