import clsx from "clsx";
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

type SocialProofProps = {
	rating: number;
	quote: string;
	className?: string;
};

export const SocialProof = ({ rating, quote, className }: SocialProofProps) => {
	return (
		<div
			className={clsx(
				"bg-primary-background/50 grid items-start justify-center gap-4 rounded-lg p-6 md:justify-start",
				className,
			)}
		>
			<div className="flex flex-wrap items-center gap-4">
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
				<div className="flex gap-1">{generateStars(rating)}</div>
			</div>
			<p className="text-lg font-medium italic opacity-75">
				<span className="-ml-1">&ldquo;</span>
				{quote}&rdquo;
			</p>
		</div>
	);
};
