import { Plus_Jakarta_Sans } from "next/font/google";
import { PrismicPreview } from "./PrismicPreview";

import { repositoryName } from "@/prismicio";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconSymbols } from "@/components/Icon";
import { DemoBanner } from "./DemoBanner";

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={plusJakartaSans.variable}
			suppressHydrationWarning
		>
			<body className="relative min-h-screen bg-neutral-100 leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-white dark:antialiased">
				<Background />
				<Header />
				<main className="relative">{children}</main>
				<Footer />
				<IconSymbols />
				<DemoBanner />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
	variable: "--font-plus-jakarta-sans",
});
