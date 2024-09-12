import type { Content } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

type ImageGridProps = SliceComponentProps<Content.ImageGridSlice>;

export default function ImageGrid({ slice }: ImageGridProps) {
	return (
		<section className="mx-auto w-[calc(100vw-4rem)] max-w-screen-xl py-16 lg:py-40">
			<h2 className="mb-8 text-center text-2xl font-bold leading-snug md:mb-16 md:text-4xl md:leading-snug">
				<PrismicText field={slice.primary.title} />
			</h2>
			<div className="grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-3 md:gap-10">
				{slice.primary.images.map((item, index) => (
					<ImageGridImage key={item.label} image={item} index={index} />
				))}
			</div>
		</section>
	);
}

type ImageGridItemProps = {
	image: Content.ImageGridSliceDefaultPrimaryImagesItem;
	index: number;
};

function ImageGridImage({ image, index }: ImageGridItemProps) {
	const isLarge = index % 6 === 0 || index % 6 === 5;
	const sizes = isLarge
		? "(max-width: 768) 100vw, 66vw"
		: "(max-width: 768) 50vw, 33vw";

	return (
		<div
			className={clsx(
				"relative",
				isLarge && "col-span-2 row-span-2",
				index % 6 === 4 && "md:col-start-1",
			)}
		>
			<PrismicNextImage
				field={image.image}
				sizes={sizes}
				className="rounded-lg"
			/>
			<span className="absolute bottom-4 left-4 text-sm font-bold leading-snug text-white md:bottom-6 md:left-8 md:text-2xl md:leading-snug">
				{image.label}
			</span>
		</div>
	);
}
