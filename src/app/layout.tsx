import { PrismicPreview } from "@prismicio/next";
import { MuseoModerno } from "next/font/google";
import { Roboto } from "next/font/google";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";

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
		<html lang="en" className={clsx(museoModerno.variable, roboto.variable)}>
			<body className="min-h-screen bg-primary-background text-primary-text">
				{children}
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
