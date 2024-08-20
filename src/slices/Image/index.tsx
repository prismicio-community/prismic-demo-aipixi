"use client";

import { isFilled, type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { useScrollTriggerFadeIn } from "@/lib/useScrollTriggerFadeIn";
import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice }: ImageProps): JSX.Element => {
	const container = useScrollTriggerFadeIn();

	return (
		<Bounded ref={container} as="section">
			<div className="-mx-6 flex flex-col sm:-mx-10 sm:grid sm:grid-cols-12 md:mx-0 lg:gap-10">
				<div
					style={{ paddingBottom: 100 + "%" }}
					className={clsx(
						"relative order-1 overflow-hidden sm:col-span-6 sm:row-span-full sm:self-stretch lg:rounded-lg",
						slice.variation === "left"
							? "sm:col-start-7 md:rounded-r-lg"
							: "sm:col-start-1 md:rounded-l-lg",
					)}
				>
					<PrismicNextImage
						field={slice.primary.image}
						fill
						className="object-cover"
					/>
				</div>

				<div
					className={clsx(
						"relative order-2 flex flex-col items-start justify-center bg-secondary-background p-8 sm:col-span-6 sm:row-span-full sm:self-stretch lg:col-span-8 lg:self-center lg:rounded-lg lg:p-16",
						slice.variation === "left"
							? "sm:col-start-1 md:rounded-l-lg lg:col-start-1"
							: "sm:col-start-7 md:rounded-r-lg lg:col-start-5",
					)}
				>
					<Heading as="h2" size="lg">
						<PrismicText field={slice.primary.title} />
					</Heading>

					<div className="rich-text-content mt-6 text-sm opacity-70 lg:text-base">
						<PrismicRichText field={slice.primary.content} />
					</div>
					{isFilled.keyText(slice.primary.ctaLabel) && (
						<PrismicNextButtonLink
							field={slice.primary.ctaLink}
							className="mt-6 lg:mt-8"
						>
							{slice.primary.ctaLabel}
						</PrismicNextButtonLink>
					)}
				</div>
			</div>
		</Bounded>
	);
};

export default Image;
