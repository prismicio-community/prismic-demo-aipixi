import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					background: "var(--bg-primary)",
					text: "var(--text-primary)",
					brand: {
						DEFAULT: "var(--brand-primary)",
						light: "var(--brand-primary-light)",
					},
				},
				secondary: {
					background: "var(--bg-secondary)",
				},
			},
			fontFamily: {
				heading: ["var(--font-museo-moderno)", "sans-serif"],
				sans: ["var(--font-roboto)", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
