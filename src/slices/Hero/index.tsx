import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { PrismicNextButtonLink } from "@/components/PrismicNextButtonLink";
import { Heading } from "@/components/Heading";

import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section className="mx-auto flex min-h-screen w-full max-w-[90rem] flex-col items-center justify-center p-0 px-6 sm:px-10 md:flex-row md:justify-between">
			{isFilled.image(slice.primary.image) && (
				<div
					className={clsx(
						"w-2/4 flex-grow-0 md:w-5/12",
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
					<nav className="-m-2 mt-8">
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
				{isFilled.keyText(slice.primary.social_proof_text) &&
					isFilled.number(slice.primary.social_proof_rating) && (
						<div className="mt-8 flex items-start justify-start">
							<div className="relative flex overflow-hidden rounded-lg">
								<div className="absolute inset-0 bg-primary-background opacity-50" />
								<div className="relative z-10 flex flex-col p-6">
									<div className="flex items-center gap-4">
										<div className="flex">
											<Image
												className="relative z-30 rounded-full border-4 border-white shadow-lg"
												src="/pp1.webp"
												width={48}
												height={48}
												alt=""
											/>
											<Image
												className="relative z-20 -ml-7 rounded-full border-4 border-white shadow-lg"
												src="/pp2.webp"
												width={48}
												height={48}
												alt=""
											/>
											<Image
												className="relative z-10 -ml-7 rounded-full border-4 border-white"
												src="/pp3.webp"
												width={48}
												height={48}
												alt=""
											/>
										</div>
										<div className="flex gap-1">
											{generateStars(slice.primary.social_proof_rating)}
										</div>
									</div>
									<p className="mt-4 max-w-80 text-lg font-medium italic opacity-75">
										"Aipixi is amazing and I love it. It's the best thing since
										sliced bread!"
									</p>
								</div>
							</div>
						</div>
					)}
			</div>
		</section>
	);
};

const generateStars = (rating: number) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStar;

	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<Star
				size={20}
				fill="#facc15"
				className="text-yellow-400"
				key={`full-${i}`}
			/>,
		);
	}

	if (halfStar) {
		stars.push(
			<StarHalf
				size={20}
				fill="#facc15"
				className="text-yellow-400"
				key="half"
			/>,
		);
	}

	for (let i = 0; i < emptyStars; i++) {
		stars.push(<div key={`empty-${i}`} />); // Replace with your EmptyStar component if you have one
	}

	return stars;
};

export default Hero;
