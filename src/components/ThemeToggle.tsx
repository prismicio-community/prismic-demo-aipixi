"use client";

import { useTheme } from "next-themes";

import { Icon } from "./Icon";

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	}

	return (
		<button
			onClick={() => toggleTheme()}
			className="flex h-12 w-12 items-center justify-center rounded-sm"
			type="button"
		>
			<Icon
				name={resolvedTheme === "dark" ? "moon" : "sun"}
				className="h-6 w-6"
			/>
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
