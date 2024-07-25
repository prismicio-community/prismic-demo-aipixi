import { asText, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";

type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice }: FeaturesProps): JSX.Element => {
	return (
		<section className="container my-16 lg:my-40 lg:grid lg:grid-cols-12 lg:gap-10">
			<h2 className="max-w-xl font-heading text-2xl md:text-4xl lg:col-span-4">
				<PrismicText field={slice.primary.title} />
			</h2>
			<div className="sm:mt-8 sm:grid sm:grid-cols-8 sm:gap-10 lg:col-span-8 lg:mt-0">
				{slice.primary.features.map((item) => (
					<div
						key={asText(item.title)}
						className="mt-8 grid grid-cols-4 gap-4 sm:col-span-4 sm:mt-0"
					>
						<div className="col-span-1">
							<div className="h-12 w-12 overflow-hidden rounded-full bg-secondary-background p-3 md:h-16 md:w-16 md:p-4">
								<PrismicNextImage
									field={item.icon}
									className="h-6 w-6 md:h-8 md:w-8"
								/>
							</div>
						</div>
						<div className="col-span-3">
							<h3 className="mt-3 font-heading text-lg md:mt-4 md:text-2xl">
								<PrismicText field={item.title} />
							</h3>
							<div className="mt-2 text-sm opacity-70 lg:text-base">
								<PrismicRichText field={item.text} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
