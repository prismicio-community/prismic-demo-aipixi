"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import bgLightSVG from "../assets/bg-light.svg";
import bgDarkSVG from "../assets/bg-dark.svg";

export function Background() {
	const { resolvedTheme } = useTheme();
	const bgImage = resolvedTheme === "dark" ? bgDarkSVG : bgLightSVG;

	return (
		<div className="pointer-events-none absolute inset-0 min-h-screen overflow-hidden">
			<div className="absolute left-0 right-0 top-0 pb-[186.66666667%]">
				<Image src={bgImage} alt="" fill className="absolute top-0 w-full" />
			</div>
			<div className="absolute bottom-0 left-0 right-0 rotate-180 transform pb-[186.66666667%]">
				<Image src={bgImage} alt="" fill className="absolute top-0 w-full" />
			</div>
		</div>
	);
}
