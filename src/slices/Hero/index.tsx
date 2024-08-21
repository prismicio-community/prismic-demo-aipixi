import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";
import { SocialProof } from "@/components/SocialProof";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<Bounded
			as="section"
			paddingY="none"
			className="grid min-h-screen content-center items-center justify-items-center gap-8 md:grid-cols-12 md:gap-10"
		>
			{isFilled.image(slice.primary.image) && (
				<PrismicNextImage
					field={slice.primary.image}
					className={clsx(
						"w-1/2 md:col-span-6 md:w-full lg:col-span-5",
						slice.variation === "left" && "order-2",
					)}
				/>
			)}
			<div
				className={clsx(
					"text-center",
					slice.primary.image.url &&
						"grid gap-8 md:col-span-6 md:gap-10 md:text-left lg:col-span-7",
				)}
			>
				<Heading as="h1" size="xl" className="max-w-xl">
					<PrismicText field={slice.primary.title} />
				</Heading>
				{isFilled.group(slice.primary.links) && (
					<ul className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
						{slice.primary.links.map((item) => (
							<li key={item.label}>
								<PrismicNextButtonLink
									field={item.link}
									key={item.label}
									className="w-full sm:w-auto"
								>
									{item.label}
								</PrismicNextButtonLink>
							</li>
						))}
					</ul>
				)}
				{isFilled.number(slice.primary.social_proof_rating) &&
				isFilled.keyText(slice.primary.social_proof_quote) ? (
					<SocialProof
						rating={slice.primary.social_proof_rating}
						quote={slice.primary.social_proof_quote}
						className="max-w-96"
					/>
				) : null}
			</div>
		</Bounded>
	);
};

export default Hero;
