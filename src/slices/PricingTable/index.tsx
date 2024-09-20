"use client";

import { ReactNode, useState } from "react";
import { asText, type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

import { Icon } from "@/components/Icon";

type PricingTableProps = SliceComponentProps<Content.PricingTableSlice>;

export default function PricingTable({ slice }: PricingTableProps) {
	const [isYearlyPricing, setIsYearlyPricing] = useState(true);

	return (
		<section className="mx-auto grid w-[calc(100vw-4rem)] max-w-screen-xl justify-items-center gap-8 py-16 lg:py-40">
			<h2 className="text-center text-2xl font-bold leading-snug md:text-4xl md:leading-snug">
				<PrismicText field={slice.primary.title} />
			</h2>

			<div className="flex items-center gap-6">
				<button
					type="button"
					className={clsx(
						"transition-opacity",
						isYearlyPricing && "opacity-50",
					)}
					onClick={() => setIsYearlyPricing(false)}
				>
					Monthly
				</button>
				<button
					type="button"
					className="h-10 w-20 rounded-full bg-white p-1 dark:bg-slate-950"
					onClick={() => setIsYearlyPricing(!isYearlyPricing)}
					aria-label="Toggle monthly/yearly pricing"
				>
					<span
						className={clsx(
							"block h-8 w-8 rounded-full bg-violet-600 transition-transform duration-150",
							isYearlyPricing && "translate-x-10 transform",
						)}
					/>
				</button>
				<button
					type="button"
					className={clsx(
						"transition-opacity",
						!isYearlyPricing && "opacity-50",
					)}
					onClick={() => setIsYearlyPricing(true)}
				>
					Yearly
				</button>
			</div>

			<div className="flex w-full flex-col justify-center gap-4 lg:flex-row lg:gap-8">
				{slice.primary.pricing_tiers.map((item) => (
					<PriceCard
						key={asText(item.name)}
						item={item}
						isYearlyPricing={isYearlyPricing}
					/>
				))}
			</div>
		</section>
	);
}

type PriceCardProps = {
	item: Content.PricingTableSliceDefaultPrimaryPricingTiersItem;
	isYearlyPricing: boolean;
};

function PriceCard({ item, isYearlyPricing }: PriceCardProps) {
	return (
		<div className="grid content-start gap-4 rounded-lg bg-white p-10 dark:bg-slate-950 sm:gap-6 lg:w-1/3">
			<h3 className="text-center text-2xl font-bold leading-snug lg:text-3xl lg:leading-snug">
				<PrismicText field={item.name} />
			</h3>

			<div className="-mt-4 text-center font-semibold opacity-50">
				{item.tagline}
			</div>

			<div className="-mr-4 flex justify-center text-center text-xl">
				<span className="leading-6">€</span>
				<span className="number mx-1 text-6xl">
					{isYearlyPricing ? item.yearly : item.monthly}
				</span>
				<span className="self-end leading-9 opacity-30">/m</span>
			</div>

			<PrismicNextLink href="/" className="mx-auto block">
				Start with this plan
			</PrismicNextLink>

			<div className="mx-auto w-full max-w-xs">
				<PrismicRichText
					field={item.features}
					components={{ listItem: BadgeListItem }}
				/>
			</div>
		</div>
	);
}

type BadgeListItemProps = {
	children?: ReactNode;
};

function BadgeListItem({ children }: BadgeListItemProps) {
	return (
		<li className="relative border-b border-b-slate-950/25 py-3 pl-10 last:border-b-0 dark:border-b-white/25">
			<Icon name="badgeCheck" className="absolute left-0 top-3 size-6" />
			{children}
		</li>
	);
}
