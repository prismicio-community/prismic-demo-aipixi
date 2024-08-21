"use client";
import clsx from "clsx";

import { ReactNode, useEffect, useState } from "react";

export function DemoBanner() {
	const [isShowing, setIsShowing] = useState(false);
	const [isShowing2, setIsShowing2] = useState(false);

	useEffect(() => {
		const timers = [
			setTimeout(() => setIsShowing(true), 1500),
			setTimeout(() => setIsShowing2(true), 3500),
			setTimeout(() => setIsShowing(false), 5500),
		];
		return () => timers.forEach((timer) => clearTimeout(timer));
	}, []);

	return (
		<div className="pointer-events-none fixed left-0 right-0 top-0 z-[70] p-8">
			<Chat>
				<ChatMessage show={isShowing}>👋 Hey! How does it look?</ChatMessage>
				<ChatMessage show={isShowing2}>
					Head back to the demo tab when you&rsquo;re ready
				</ChatMessage>
			</Chat>
		</div>
	);
}

type ChatProps = {
	children: ReactNode;
};

function Chat(props: ChatProps) {
	const { children } = props;

	return <div className="flex flex-col items-center gap-2">{children}</div>;
}

type ChatMessageProps = {
	show?: boolean;
	// delay: number;
	children?: ReactNode;
};

function ChatMessage(props: ChatMessageProps) {
	const { show = true, children } = props;

	return (
		<div
			className={clsx(
				"pointer-events-auto relative z-20 flex flex-col gap-1 rounded-xl bg-neutral-900 px-6 py-4 text-center font-system text-xl leading-7 text-white shadow-md transition-[opacity,transform,margin] duration-200 last:z-10 dark:bg-white dark:text-neutral-900",
				!show && "-mt-[60px] origin-bottom scale-75 opacity-0 first:-mt-[68px]",
			)}
		>
			{children}
		</div>
	);
}
