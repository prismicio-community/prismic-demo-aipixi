"use client";

import { asText, type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);
registerGSAPCounterEffect();

type PricingTableProps = SliceComponentProps<Content.PricingTableSlice>;

const PricingTable = ({ slice }: PricingTableProps): JSX.Element => {
	const [isMonthlyPricing, setIsMonthlyPricing] = useState(true);
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 80%",
					end: "bottom 80%",
					scrub: true,
				},
			});

			tl.fromTo(
				".pricing-card",
				{
					scale: 0.8,
					autoAlpha: 0,
					y: 40,
				},
				{
					scale: 1,
					autoAlpha: 1,
					y: 0,
					ease: "power1.inOut",
					stagger: 0.2,
				},
			);
		},
		{ scope: container },
	);

	function toggleMonthlyPricing() {
		setIsMonthlyPricing((value) => !value);
		animateNumbers();
	}

	function animateNumbers() {
		const numbers = document.querySelectorAll<HTMLElement>(".number");

		const tl = gsap.timeline();

		numbers.forEach((number) => {
			tl.counter(
				number,
				{
					end: !isMonthlyPricing
						? number.dataset.monthly
						: number.dataset.yearly,
				},
				"<",
			);
		});
	}

	return (
		<section ref={container} className="container my-16 lg:my-40">
			<h2 className="text-center font-heading text-2xl md:text-4xl">
				<PrismicText field={slice.primary.title} />
			</h2>

			<div className="my-8 flex items-center justify-center space-x-6 font-heading">
				<button
					type="button"
					className={clsx(
						"transition-opacity",
						!isMonthlyPricing && "opacity-50",
					)}
					onClick={() => setIsMonthlyPricing(true)}
				>
					Monthly
				</button>
				<button
					type="button"
					className="h-10 w-20 rounded-full bg-secondary-background p-1"
					aria-label="Switch between monthly and yearly cost"
					onClick={() => toggleMonthlyPricing()}
				>
					<span
						className={clsx(
							"block h-8 w-8 rounded-full bg-primary-brand transition-transform duration-150",
							!isMonthlyPricing && "translate-x-10 transform",
						)}
					/>
				</button>
				<button
					type="button"
					className={clsx(
						"transition-opacity",
						isMonthlyPricing && "opacity-50",
					)}
					onClick={() => setIsMonthlyPricing(false)}
				>
					Yearly
				</button>
			</div>
			<div className="flex flex-col justify-center lg:flex-row lg:space-x-10">
				{slice.primary.pricing_tiers.map((item) => (
					<div
						key={asText(item.name)}
						className="pricing-card mt-4 rounded-lg bg-secondary-background p-10 first:mt-0 lg:mt-0 lg:w-1/3"
					>
						<h3 className="text-center font-heading text-2xl md:text-3xl">
							<PrismicText field={item.name} />
						</h3>
						<div className="my-4 text-center sm:my-6">{item.tagline}</div>
						<div className="my-4 -mr-4 flex justify-center text-center font-heading text-xl sm:my-6">
							<span className="leading-6">€</span>
							<div
								className="number mx-1 text-6xl"
								data-monthly={item.monthly}
								data-yearly={item.yearly}
							>
								{item.monthly}
							</div>
							<span className="self-end leading-9 opacity-30">/m</span>
						</div>
						<button type="button" className="button mx-auto my-4 block sm:my-6">
							Start with this plan
						</button>
						<div className="features mx-auto mt-4 max-w-xs sm:mt-6">
							<PrismicRichText field={item.features} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PricingTable;

function registerGSAPCounterEffect() {
	gsap.registerEffect({
		name: "counter",
		extendTimeline: true,
		defaults: {
			end: 0,
			duration: 0.5,
			ease: "power2.out",
			increment: 1,
		},
		effect: (targets: HTMLElement[], config: any) => {
			const tl = gsap.timeline();
			const num = targets[0].innerText.replace(/,/g, "");
			targets[0].innerText = num;

			tl.to(
				targets,
				{
					duration: config.duration,
					innerText: config.end,
					modifiers: {
						innerText: (innerText) => {
							return gsap.utils
								.snap(config.increment, innerText)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						},
					},
					ease: config.ease,
				},
				0,
			);

			return tl;
		},
	});
}
