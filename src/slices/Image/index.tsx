import { type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

export default function Image({ slice }: ImageProps) {
	return (
		<section className="mx-auto my-16 grid max-w-screen-xl overflow-hidden sm:grid-cols-12 md:w-[calc(100vw-4rem)] md:rounded-lg lg:my-40 lg:items-center">
			<PrismicNextImage
				field={slice.primary.image}
				sizes="(min-width: 1280px) 1280px, 100vw"
				className={clsx(
					"col-span-6 h-full object-cover sm:row-span-full lg:rounded-lg",
					slice.variation === "left" ? "sm:col-start-7" : "sm:col-start-1",
				)}
			/>
			<div
				className={clsx(
					"col-span-6 flex flex-col justify-center gap-6 bg-white p-8 dark:bg-slate-950 sm:row-span-full lg:col-span-8 lg:gap-8 lg:rounded-lg lg:p-16",
					slice.variation === "left" ? "lg:col-start-1" : "lg:col-start-5",
				)}
			>
				<h2 className="text-2xl font-bold leading-snug md:text-4xl md:leading-snug">
					<PrismicText field={slice.primary.title} />
				</h2>
				<div className="text-sm opacity-70 lg:text-base lg:leading-relaxed">
					<PrismicRichText field={slice.primary.content} />
				</div>
				<PrismicNextLink
					field={slice.primary.ctaLink}
					className="self-start rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
				>
					{slice.primary.ctaLabel}
				</PrismicNextLink>
			</div>
		</section>
	);
}
