import { PrismicPreview } from "@prismicio/next";
import { MuseoModerno } from "next/font/google";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const museoModerno = MuseoModerno({
	subsets: ["latin"],
	weight: ["600"],
	display: "swap",
	variable: "--font-museo-moderno",
});
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={clsx(museoModerno.variable, roboto.variable)}
			suppressHydrationWarning
		>
			<body className="relative min-h-screen bg-primary-background text-primary-text">
				<ThemeProvider attribute="class">
					<Background />
					<Header />
					<main className="relative">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
