import { PrismicNextLink } from "@prismicio/next";
import { ThemeProvider } from "next-themes";

import { createClient } from "@/prismicio";

import { ThemeToggle } from "./ThemeToggle";
import {
	Navigation,
	NavigationDrawer,
	NavigationLink,
	NavigationOverlay,
	NavigationTrigger,
} from "./Navigation";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export async function Header() {
	return (
		<header className="absolute top-0 z-[60] w-full">
			<div className="flex items-center justify-between px-8 pt-4 sm:pt-10">
				<PrismicNextLink href="/">
					<Logo className="w-20" />
					<span className="sr-only">Go to homepage</span>
				</PrismicNextLink>
				<div className="relative -mr-3 flex">
					<ThemeProvider attribute="class">
						<ThemeToggle />
					</ThemeProvider>
					<HeaderNavigation />
				</div>
			</div>
		</header>
	);
}

async function HeaderNavigation() {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<Navigation>
			<NavigationTrigger
				renderOpen={<Icon name="menu" className="h-6 w-6" />}
				renderClose={<Icon name="x" className="h-7 w-7" />}
			/>
			<NavigationOverlay />
			<NavigationDrawer>
				<ul className="flex flex-col gap-4">
					{settings.data.menu.map((item) => (
						<li key={item.label}>
							<NavigationLink
								field={item.link}
								className="block text-lg transition-opacity first:mt-0 hover:opacity-50"
							>
								{item.label}
							</NavigationLink>
						</li>
					))}
				</ul>
			</NavigationDrawer>
		</Navigation>
	);
}
