import { SVGProps } from "react";
import { createClient } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import {
	Navigation,
	NavigationDrawer,
	NavigationLink,
	NavigationOverlay,
	NavigationTrigger,
} from "./Navigation";

export async function Header() {
	const client = createClient(repositoryName);
	const settings = await client.getSingle("settings");

	return (
		<header className="absolute top-0 z-[60] w-full">
			<div className="flex items-center justify-between px-6 pt-4 sm:px-10 sm:pt-10">
				<PrismicNextLink href="/">
					<Logo className="h-6 sm:h-8" />
					<span className="sr-only">Go to homepage</span>
				</PrismicNextLink>
				<div className="relative -mr-3 flex">
					<ThemeToggle />
					<Navigation>
						<NavigationTrigger
							renderOpen={<MenuIcon className="h-6 w-6" />}
							renderClose={<XIcon className="h-6 w-6" />}
						/>
						<NavigationOverlay />
						<NavigationDrawer>
							<ul className="flex flex-col gap-4">
								{settings.data.menu.map((item) => (
									<li key={item.label}>
										<NavigationLink
											field={item.link}
											className="block font-heading text-lg transition-opacity first:mt-0 hover:opacity-50"
										>
											{item.label}
										</NavigationLink>
									</li>
								))}
							</ul>
						</NavigationDrawer>
					</Navigation>
				</div>
			</div>
		</header>
	);
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	);
}

function XIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
}
