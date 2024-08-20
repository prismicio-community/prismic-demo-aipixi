import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					background: "rgb(var(--bg-primary) / <alpha-value>)",
					text: "rgb(var(--text-primary) / <alpha-value>)",
					brand: {
						DEFAULT: "rgb(var(--brand-primary) / <alpha-value>)",
						light: "rgb(var(--brand-primary-light) / <alpha-value>)",
					},
				},
				secondary: {
					background: "rgb(var(--bg-secondary) / <alpha-value>)",
				},
			},
			fontFamily: {
				heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
				sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
				system: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [],
} satisfies Config;
