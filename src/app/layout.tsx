import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";

import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
	variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={clsx(plusJakartaSans.variable)}
			suppressHydrationWarning
		>
			<body
				className="relative min-h-screen bg-neutral-100 leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-white dark:antialiased"
				suppressHydrationWarning
			>
				<ThemeProvider attribute="class">
					<Background />
					<Header />
					<main className="relative">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
