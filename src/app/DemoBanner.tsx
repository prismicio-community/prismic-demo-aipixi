"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export function DemoBanner() {
	const [isShowing, setIsShowing] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsShowing(true), 1000);
	}, []);

	return (
		<div className="pointer-events-none fixed top-0 z-[70] flex w-full justify-center p-4 md:p-8">
			<div
				className={clsx(
					"pointer-events-auto relative rounded-xl bg-neutral-900 px-4 py-2 text-center font-system text-sm leading-7 text-white shadow-md transition-[opacity,transform] duration-200 dark:bg-white dark:text-neutral-900 md:px-6 md:py-4 md:text-xl",
					isShowing
						? "translate-y-0 opacity-100"
						: "-translate-y-full opacity-0",
				)}
			>
				👋 Hey! Head back to the demo tab when you&rsquo;re ready.
			</div>
		</div>
	);
}
