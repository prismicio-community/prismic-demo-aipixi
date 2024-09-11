import { ReactNode } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { createClient } from "@/prismicio";

import { Logo } from "./Logo";
import { Icon } from "./Icon";

export async function Footer() {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<section className="relative mx-auto grid w-[calc(100vw-4rem)] max-w-screen-xl grid-cols-2 gap-10 gap-8 pb-16 sm:grid-cols-4 lg:grid-cols-6 lg:pb-40">
			<div className="col-span-2 sm:col-span-1 lg:col-span-3">
				<PrismicNextLink href="/">
					<Logo className="mx-auto w-40 sm:mx-0" />
				</PrismicNextLink>
			</div>

			<Section heading="Menu">
				<ul className="flex flex-col gap-2 lg:gap-4">
					{settings.data.menu.map((item) => (
						<li key={item.label}>
							<PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
						</li>
					))}
				</ul>
			</Section>

			<Section heading="Contact">
				<PrismicRichText field={settings.data.contact} />
			</Section>

			<Section heading="Social">
				<div className="flex gap-6">
					<PrismicNextLink field={settings.data.instagram}>
						<Icon name="instagram" className="size-6" />
						<span className="sr-only">Instagram</span>
					</PrismicNextLink>
					<PrismicNextLink field={settings.data.twitter}>
						<Icon name="twitter" className="size-6" />
						<span className="sr-only">Twitter</span>
					</PrismicNextLink>
					<PrismicNextLink field={settings.data.facebook}>
						<Icon name="facebook" className="size-6" />
						<span className="sr-only">Facebook</span>
					</PrismicNextLink>
				</div>
			</Section>
		</section>
	);
}

type SectionProps = {
	heading: ReactNode;
	children?: ReactNode;
};

function Section({ heading, children }: SectionProps) {
	return (
		<div>
			<h2 className="mb-4 font-heading text-lg font-bold leading-snug md:text-2xl md:leading-snug lg:mb-6">
				{heading}
			</h2>
			<div className="text-sm opacity-70 lg:text-base">{children}</div>
		</div>
	);
}
