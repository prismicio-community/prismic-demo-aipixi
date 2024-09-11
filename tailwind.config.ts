import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"var(--font-plus-jakarta-sans)",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
} satisfies Config;
