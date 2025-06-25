import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'TTSP - тестировщики всего подряд.',
	description: 'Аутсорсинговая команда тестировщиков и девопсов.',
	icons: [
		{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
		// { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
		// { rel: 'apple-touch-icon', url: '/apple-touch-icon.svg', sizes: '180x180' },
		// { rel: 'icon', url: '/android-chrome-192x192.svg', sizes: '192x192' },
		// { rel: 'icon', url: '/android-chrome-512x512.svg', sizes: '512x512' },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				{/* <link rel="icon" href="/favicon.ico" sizes="any" /> */} */}
				{/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" /> */}
				{/* <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" /> */}
				{/* <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" /> */}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
