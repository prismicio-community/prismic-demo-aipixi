import type { Content } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

export default function CallToAction({ slice }: CallToActionProps) {
	return (
		<section className="relative mx-auto my-16 max-w-screen-xl grid-cols-2 items-center overflow-hidden bg-white dark:bg-slate-950 sm:grid md:w-[calc(100vw-4rem)] md:rounded-lg lg:my-40">
			<PrismicNextImage
				field={slice.primary.image}
				sizes="50vw"
				className={clsx(
					"w-full self-stretch object-cover",
					slice.variation === "left" && "order-2",
				)}
			/>

			<div className="p-8 lg:p-16">
				<h2 className="mb-6 font-heading text-2xl font-bold leading-snug lg:text-4xl lg:leading-snug">
					<PrismicText field={slice.primary.title} />
				</h2>
				<PrismicNextLink
					field={slice.primary.link}
					className="inline-block rounded-lg bg-violet-600 px-8 py-4 font-heading font-semibold text-white transition hover:bg-violet-500"
				>
					{slice.primary.label}
				</PrismicNextLink>
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 352 400"
				className={clsx(
					"absolute top-0 hidden h-full text-white dark:text-slate-950 sm:block",
					slice.variation === "left"
						? "left-1/2"
						: "right-1/2 -mr-px -scale-x-100",
				)}
			>
				<path
					fill="currentColor"
					d="M0 0v400h132L2 270l110-110-69-69 90-91H0Z"
				/>
				<path
					fill="currentColor"
					d="m0 268 132 132h220L103 151 0 254v14Z"
					opacity=".4"
				/>
				<path
					fill="currentColor"
					d="M124 0 38 86l135 135L302 92 209 0h-85Z"
					opacity=".6"
				/>
				<path fill="currentColor" d="m209 0 41 41 42-41h-83Z" opacity=".2" />
			</svg>
		</section>
	);
}
