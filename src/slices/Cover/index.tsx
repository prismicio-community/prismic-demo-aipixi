"use client";

import { isFilled, type Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading } from "@/components/Heading";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type CoverProps = SliceComponentProps<Content.CoverSlice>;

const Cover = ({ slice }: CoverProps): JSX.Element => {
	const container = useRef<HTMLElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
	const filteredImage = useRef<HTMLImageElement>(null);
	const originalImage = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					end: "bottom",
					scrub: true,
				},
			});

			tl.fromTo(
				filteredImage.current,
				{
					y: "0",
				},
				{
					y: "-50%",
					ease: "Power1.easeInOut",
				},
			);

			tl.fromTo(
				originalImage.current,
				{
					y: 0,
					clipPath: "inset(0 0 0 0)",
				},
				{
					y: "-50%",
					clipPath: "inset(0 0 100% 0)",
					ease: "Power1.easeInOut",
				},
				"<",
			);

			tl.fromTo(
				title.current,
				{
					scale: 0.9,
					autoAlpha: 0,
				},
				{
					scale: 1,
					autoAlpha: 1,
					ease: "Power1.easeInOut",
					duration: 0.3,
				},
				"<",
			);
		},
		{ scope: container },
	);

	return (
		<section
			ref={container}
			className="relative overflow-hidden"
			style={{ paddingBottom: "50%" }}
		>
			<div ref={filteredImage} className="absolute left-0 w-full">
				{isFilled.image(slice.primary.filteredImage) && (
					<PrismicNextImage
						field={slice.primary.filteredImage}
						className="w-full"
						alt=""
					/>
				)}
			</div>
			<div ref={originalImage} className="absolute left-0 w-full">
				<PrismicNextImage
					field={slice.primary.originalImage}
					className="w-full"
					alt=""
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center">
				<Heading
					ref={title}
					as="h2"
					size="lg"
					className="max-w-xl px-10 text-center text-white lg:text-5xl lg:leading-tight"
				>
					<PrismicText field={slice.primary.title} />
				</Heading>
			</div>
		</section>
	);
};

export default Cover;
