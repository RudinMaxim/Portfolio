import { Metadata } from 'next';
import { getMetadata } from '../../../lib/utils/getMetadata';

export const metadata: Metadata = getMetadata({
	title: 'Maksim Rudin | Project',
});

export default function page() {
	return <main>page</main>;
}
