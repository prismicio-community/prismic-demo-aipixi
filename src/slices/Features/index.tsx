"use client";

import { asText, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice }: FeaturesProps): JSX.Element => {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 90%",
					end: "bottom 100%",
					scrub: true,
				},
			});

			tl.fromTo(
				".features-part",
				{
					scale: 0.9,
					autoAlpha: 0,
					y: 20,
				},
				{
					scale: 1,
					autoAlpha: 1,
					y: 0,
					ease: "power1.inOut",
					stagger: 0.2,
				},
			);
		},
		{ scope: container },
	);

	return (
		<Bounded
			as="section"
			className="lg:grid lg:grid-cols-12 lg:gap-10"
			ref={container}
		>
			<Heading
				as="h2"
				size="lg"
				className="features-part max-w-xl lg:col-span-4"
			>
				<PrismicText field={slice.primary.title} />
			</Heading>
			<div className="sm:mt-8 sm:grid sm:grid-cols-8 sm:gap-10 lg:col-span-8 lg:mt-0">
				{slice.primary.features.map((item) => (
					<div
						key={asText(item.title)}
						className="features-part mt-8 grid grid-cols-4 gap-4 sm:col-span-4 sm:mt-0"
					>
						<div className="col-span-1">
							<div className="h-12 w-12 overflow-hidden rounded-full bg-secondary-background p-3 md:h-16 md:w-16 md:p-4">
								<PrismicNextImage
									field={item.icon}
									className="h-6 w-6 md:h-8 md:w-8"
									alt=""
								/>
							</div>
						</div>
						<div className="col-span-3">
							<Heading as="h3" size="sm" className="mt-3 md:mt-4">
								<PrismicText field={item.title} />
							</Heading>
							<div className="mt-2 text-sm opacity-70 lg:text-base">
								<PrismicRichText field={item.text} />
							</div>
						</div>
					</div>
				))}
			</div>
		</Bounded>
	);
};

export default Features;
