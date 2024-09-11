import { asText, type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	type SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

export default function Features({ slice }: FeaturesProps) {
	return (
		<section className="mx-auto my-16 grid w-[calc(100vw-4rem)] max-w-screen-xl gap-8 lg:my-40 lg:grid-cols-3">
			<h2 className="max-w-xl text-2xl font-bold leading-snug md:text-4xl md:leading-snug">
				<PrismicText field={slice.primary.title} />
			</h2>
			<ul className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
				{slice.primary.features.map((item) => (
					<Feature key={asText(item.text)} feature={item} />
				))}
			</ul>
		</section>
	);
}

type FeatureProps = {
	feature: Content.FeaturesSliceDefaultPrimaryFeaturesItem;
};

function Feature({ feature }: FeatureProps) {
	return (
		<li className="flex gap-4">
			<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-950 md:mb-4 md:size-14">
				<PrismicNextImage
					field={feature.icon}
					className="size-6 md:size-7"
					alt=""
				/>
			</div>
			<div className="pt-3">
				<h3 className="mb-3 text-lg font-bold leading-snug md:text-2xl md:leading-snug">
					<PrismicText field={feature.title} />
				</h3>
				<div className="text-sm opacity-70 lg:text-base lg:leading-relaxed">
					<PrismicRichText field={feature.text} />
				</div>
			</div>
		</li>
	);
}
