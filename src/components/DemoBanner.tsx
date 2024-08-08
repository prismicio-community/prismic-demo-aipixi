"use client";
import clsx from "clsx";

import { ReactNode, useEffect, useState } from "react";

export function DemoBanner() {
	return (
		<div className="pointer-events-none fixed left-0 right-0 top-0 z-20 p-8">
			<Chat>
				<ChatMessage delay={1500}>👋 Hey! How does it look?</ChatMessage>
				<ChatMessage delay={3500}>
					Head back to the demo tab when you&rsquo;re ready.{" "}
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

type ChatBubbleProps = {
	delay: number;
	children?: ReactNode;
};

function ChatMessage(props: ChatBubbleProps) {
	const { delay, children } = props;

	const [isShowing, setIsShowing] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => setIsShowing(true), delay);
		return () => clearTimeout(timeout);
	}, [delay]);

	return (
		<div
			className={clsx(
				"font-system pointer-events-auto flex flex-col gap-1 rounded-xl bg-neutral-900 px-6 py-4 text-center text-xl text-white shadow-md transition-[opacity,transform] transition-transform duration-200 dark:bg-white dark:text-neutral-900",
				!isShowing && "-translate-y-4 scale-95 opacity-0",
			)}
		>
			{children}
		</div>
	);
}
