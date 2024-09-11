"use client";

import { useMemo, useRef } from "react";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type CoverProps = SliceComponentProps<Content.CoverSlice>;

export default function Cover({ slice }: CoverProps) {
	const { containerRef, filteredImageRef, originalImageRef } =
		useScrollEffect();

	return (
		<section
			ref={containerRef}
			className="relative overflow-hidden"
			style={{ paddingBottom: "50%" }}
		>
			<div ref={filteredImageRef} className="absolute left-0 w-full">
				{isFilled.image(slice.primary.filteredImage) && (
					<PrismicNextImage
						field={slice.primary.filteredImage}
						className="w-full"
						alt=""
					/>
				)}
			</div>
			<div ref={originalImageRef} className="absolute left-0 w-full">
				<PrismicNextImage
					field={slice.primary.originalImage}
					className="w-full"
					alt=""
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center">
				<h2 className="max-w-3xl px-10 text-center text-3xl font-bold leading-snug text-white lg:text-5xl lg:leading-tight">
					<PrismicText field={slice.primary.title} />
				</h2>
			</div>
		</section>
	);
}

function useScrollEffect() {
	const containerRef = useRef<HTMLElement>(null);
	const filteredImageRef = useRef<HTMLDivElement>(null);
	const originalImageRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					end: "bottom",
					scrub: true,
				},
			});

			tl.fromTo(
				filteredImageRef.current,
				{ y: "0" },
				{ y: "-50%", ease: "Power1.easeInOut" },
			);

			tl.fromTo(
				originalImageRef.current,
				{ y: 0, clipPath: "inset(0 0 0 0)" },
				{ y: "-50%", clipPath: "inset(0 0 100% 0)", ease: "Power1.easeInOut" },
				"<",
			);
		},
		{ scope: containerRef },
	);

	return useMemo(
		() => ({ containerRef, filteredImageRef, originalImageRef }),
		[],
	);
}
