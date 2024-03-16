import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import { Footer, Header } from '../../components';
import '../../lib/utils/env';
import { getMetadata } from '../../lib/utils/getMetadata';
import '../globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = getMetadata({});

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale}>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
				<Toaster position='top-right' expand={false} richColors />
			</body>
		</html>
	);
}
