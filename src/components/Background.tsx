import Image from "next/image";

import bgLightSVG from "@/assets/bg-light.svg";
import bgDarkSVG from "@/assets/bg-dark.svg";

export function Background() {
	return (
		<div className="pointer-events-none absolute inset-0 min-h-screen overflow-hidden dark:opacity-40">
			<div className="absolute left-0 right-0 top-0 pb-[186.66666667%]">
				{bgImages}
			</div>
			<div className="absolute bottom-0 left-0 right-0 rotate-180 transform pb-[186.66666667%]">
				{bgImages}
			</div>
		</div>
	);
}

const bgImages = (
	<>
		<Image
			src={bgLightSVG}
			alt=""
			fill
			className="absolute top-0 w-full dark:hidden"
			priority
		/>
		<Image
			src={bgDarkSVG}
			alt=""
			fill
			className="absolute top-0 hidden w-full dark:block"
			priority
		/>
	</>
);
