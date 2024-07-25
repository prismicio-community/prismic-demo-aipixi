"use client";

import { isFilled, type Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
			className="cover relative overflow-hidden"
			style={{ paddingBottom: 50 + "%" }}
		>
			<div className="absolute inset-0 z-10 flex items-center justify-center">
				<h2
					ref={title}
					className="max-w-xl px-10 text-center font-heading text-2xl text-white md:text-4xl lg:text-5xl"
				>
					<PrismicText field={slice.primary.title} />
				</h2>
			</div>
			<div ref={filteredImage} className="absolute left-0 w-full">
				{isFilled.image(slice.primary.filteredImage) && (
					<PrismicNextImage
						field={slice.primary.filteredImage}
						className="w-full"
					/>
				)}
			</div>
			<div ref={originalImage} className="absolute left-0 w-full">
				<PrismicNextImage
					field={slice.primary.originalImage}
					className="w-full"
				/>
			</div>
		</section>
	);
};

export default Cover;
