import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<Bounded
			as="section"
			paddingY="lg"
			className="flex flex-col items-center justify-center md:flex-row md:justify-around"
		>
			{isFilled.image(slice.primary.image) && (
				<div
					className={clsx(
						"w-2/4 flex-grow-0 md:w-3/12",
						slice.variation === "left" && "md:order-2",
					)}
				>
					<PrismicNextImage field={slice.primary.image} />
				</div>
			)}
			<div
				className={clsx(
					"text-center",
					slice.primary.image.url && "mt-8 md:mt-0 md:w-6/12 md:text-left",
				)}
			>
				<Heading as="h1" size="xl" className="max-w-xl">
					<PrismicText field={slice.primary.title} />
				</Heading>
				{isFilled.group(slice.primary.links) && (
					<nav className="-m-2 mt-10">
						{slice.primary.links.map((item) => (
							<PrismicNextButtonLink
								field={item.link}
								key={item.label}
								className="m-2"
							>
								{item.label}
							</PrismicNextButtonLink>
						))}
					</nav>
				)}
			</div>
		</Bounded>
	);
};

export default Hero;
