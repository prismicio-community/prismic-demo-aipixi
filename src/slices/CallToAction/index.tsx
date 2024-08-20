import type { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";

type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
	return (
		<Bounded as="section">
			<div className="-mx-6 overflow-hidden bg-secondary-background sm:-mx-10 sm:flex md:mx-0 md:rounded-lg">
				<div
					className={clsx(
						"relative sm:w-1/2",
						slice.variation === "left" && "sm:order-2",
					)}
				>
					<div className="relative h-full pb-[50%]">
						<PrismicNextImage
							field={slice.primary.image}
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<svg
						className={clsx(
							"absolute bottom-0 top-0 hidden h-full w-auto text-secondary-background sm:block",
							slice.variation === "left"
								? "left-0 -ml-px"
								: "right-0 -mr-px -scale-x-100",
						)}
						width="352"
						height="400"
						viewBox="0 0 352 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 0V400H132.1L2.22778 270.128L112.222 160.133L42.7111 90.6223L133.333 0H0Z"
							fill="currentColor"
						/>
						<path
							opacity="0.4"
							d="M0 267.994L131.975 399.969H351.964L102.994 151L0 253.994V267.994Z"
							fill="currentColor"
						/>
						<path
							opacity="0.6"
							d="M124.194 0L38.1418 86.0525L173.06 220.971L301.657 92.3735L209.284 0H124.194Z"
							fill="currentColor"
						/>
						<path
							opacity="0.2"
							d="M209.283 0L250.475 41.1917L291.667 0H209.283Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<div className="flex flex-col items-start justify-center p-8 sm:w-1/2 lg:p-16">
					<Heading
						as="h2"
						size="md"
						className="font-heading text-2xl lg:text-4xl"
					>
						<PrismicText field={slice.primary.title} />
					</Heading>
					<PrismicNextButtonLink
						field={slice.primary.link}
						className="mt-6 lg:mt-8"
					>
						{slice.primary.label}
					</PrismicNextButtonLink>
				</div>
			</div>
		</Bounded>
	);
};

export default CallToAction;
