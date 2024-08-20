import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function useScrollTriggerFadeIn<
	ContainerElement extends Element = HTMLElement,
>() {
	const ref = useRef<ContainerElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ref.current,
				end: "center 75%",
				scrub: true,
			},
		});
		tl.fromTo(
			ref.current,
			{ scale: 0.9, opacity: 0 },
			{ scale: 1, opacity: 1, ease: "power1.inOut" },
		);
	});

	return ref;
}
