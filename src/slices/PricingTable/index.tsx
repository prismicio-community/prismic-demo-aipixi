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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { BadgeCheck } from "lucide-react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

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
					start: "top 90%",
					end: "bottom 100%",
					scrub: true,
				},
			});

			tl.fromTo(
				".pricing-card",
				{
					scale: 0.9,
					autoAlpha: 0,
					y: 20,
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
		<Bounded as="section" ref={container}>
			<Heading as="h2" size="lg" className="text-center">
				<PrismicText field={slice.primary.title} />
			</Heading>

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
						<Heading as="h3" size="md" className="text-center">
							<PrismicText field={item.name} />
						</Heading>
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
							<PrismicRichText
								field={item.features}
								components={{
									listItem: ({ children }) => (
										<li className="relative py-3 pl-10 before:absolute before:left-0 before:top-0 before:block before:h-px before:w-full before:bg-primary-text before:opacity-25 before:content-[''] first:before:hidden">
											<BadgeCheck className="absolute left-0 top-1/2 -translate-y-1/2 transform" />
											{children}
										</li>
									),
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</Bounded>
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
