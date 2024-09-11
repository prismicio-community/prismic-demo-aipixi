import Image, { ImageProps } from "next/image";
import { type Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Icon } from "@/components/Icon";

import person1 from "./person-1.webp";
import person2 from "./person-2.webp";
import person3 from "./person-3.webp";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

export default function Hero({ slice }: HeroProps) {
	return (
		<section className="mx-auto my-16 grid min-h-[50vh] w-[calc(100vw-4rem)] max-w-screen-xl grid-flow-dense content-center items-center gap-8 md:grid-cols-2 md:gap-10 lg:my-40 lg:gap-24">
			<PrismicNextImage
				field={slice.primary.image}
				className={clsx(
					"mx-auto w-1/2 md:w-full",
					slice.variation === "left" && "col-start-2",
				)}
			/>
			<div className="grid content-center justify-center gap-8">
				<h1 className="max-w-xl text-center text-3xl font-bold leading-snug md:text-left lg:text-5xl lg:leading-tight">
					<PrismicText field={slice.primary.title} />
				</h1>
				<ul className="flex flex-col items-center gap-4 md:items-start">
					{slice.primary.links.map((item) => (
						<li key={item.label}>
							<PrismicNextLink
								field={item.link}
								className="inline-block rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
							>
								{item.label}
							</PrismicNextLink>
						</li>
					))}
				</ul>
				<div className="mx-auto grid max-w-96 items-start justify-center gap-4 rounded-lg bg-white/50 p-6 dark:bg-slate-950/50 md:mx-0 md:justify-start">
					<div className="flex items-center gap-4">
						<Avatar src={person1} className="z-30" />
						<Avatar src={person2} className="z-20" />
						<Avatar src={person3} className="z-10" />
						<Stars count={slice.primary.social_proof_rating ?? 0} />
					</div>
					<p className="text-lg font-medium italic opacity-75">
						<span className="-ml-1">&ldquo;</span>
						{slice.primary.social_proof_quote}&rdquo;
					</p>
				</div>
			</div>
		</section>
	);
}

function Avatar({ className, ...otherProps }: Omit<ImageProps, "alt">) {
	return (
		<Image
			className={clsx(
				"relative -ml-11 size-12 rounded-full border-4 border-white shadow-md first:ml-0",
				className,
			)}
			alt=""
			{...otherProps}
		/>
	);
}

type StarsProps = {
	count: number;
};

function Stars({ count }: StarsProps) {
	return (
		<div className="flex gap-1 text-yellow-500">
			{Array.from({ length: Math.ceil(count) }).map((_, i) => (
				<Icon
					key={i}
					name={count - i > 1 || count - i === 1 ? "star" : "halfStar"}
					className="size-5"
				/>
			))}
		</div>
	);
}
