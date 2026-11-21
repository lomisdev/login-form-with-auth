import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Login page with Auth',
		default: 'Login page with Auth',
	},
	description:
		'This is a mobile first login page with auth using postgres, zod, drizzle and bcrypt',
	metadataBase: 'http://localhost:3000',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
