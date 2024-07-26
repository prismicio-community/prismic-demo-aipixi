import type { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Heading } from "@/components/Heading";
import { Bounded } from "@/components/Bounded";

type ImageGridProps = SliceComponentProps<Content.ImageGridSlice>;

const ImageGrid = ({ slice }: ImageGridProps): JSX.Element => {
	return (
		<Bounded as="section">
			<Heading as="h2" size="lg" className="mx-auto max-w-xl text-center">
				<PrismicText field={slice.primary.title} />
			</Heading>
			<div className="mt-8 grid grid-flow-row-dense grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-10">
				{slice.primary.images.map((item, i) => (
					<div
						key={item.label}
						className={clsx(
							"relative",
							i % 6 === 0 || i % 6 === 5
								? "col-span-2 row-span-2"
								: "col-span-1 row-span-1",
							i % 6 === 4 && "md:col-start-1",
						)}
					>
						<PrismicNextImage
							field={item.image}
							sizes={getImageSizes(i)}
							className="rounded-lg"
						/>
						<Heading
							as="span"
							size="xs"
							className="absolute bottom-4 left-4 text-white md:bottom-6 md:left-8"
						>
							{item.label}
						</Heading>
					</div>
				))}
			</div>
		</Bounded>
	);
};

function getImageSizes(index: number) {
	let sizes = "";

	if (index % 6 === 0 || index % 6 === 5) {
		sizes += "(max-width: 768) 100vw, 66vw";
	} else {
		sizes += "(max-width: 768) 50vw, 33vw";
	}

	return sizes;
}

export default ImageGrid;
