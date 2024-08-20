import { Content, isFilled } from "@prismicio/client";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const generateStars = (rating: number) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStar;

	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<Star
				size={20}
				fill="#eab308"
				className="text-yellow-500"
				key={`full-${i}`}
			/>,
		);
	}

	if (halfStar) {
		stars.push(
			<StarHalf
				size={20}
				fill="#eab308"
				className="text-yellow-500"
				key="half"
			/>,
		);
	}

	for (let i = 0; i < emptyStars; i++) {
		stars.push(<div key={`empty-${i}`} />); // Replace with your EmptyStar component if you have one
	}

	return stars;
};

export const SocialProof = ({ slice }: { slice: Content.HeroSlice }) => {
	return (
		isFilled.keyText(slice.primary.social_proof_text) &&
		isFilled.number(slice.primary.social_proof_rating) && (
			<div className="mt-8 flex items-start justify-center md:justify-start">
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
							"Aipixi is amazing and I love it. It's the best thing since sliced
							bread!"
						</p>
					</div>
				</div>
			</div>
		)
	);
};
