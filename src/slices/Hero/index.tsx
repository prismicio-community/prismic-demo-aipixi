import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section className="container flex flex-col items-center justify-center py-36 md:flex-row md:justify-around md:py-56 lg:py-72 xl:py-80">
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
				<h1 className="max-w-xl font-heading text-3xl leading-snug lg:text-5xl lg:leading-tight">
					<PrismicText field={slice.primary.title} />
				</h1>
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
		</section>
	);
};

export default Hero;
