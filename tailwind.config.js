/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			display: ["Syne", "sans-serif"],
		},
		extend: {
			colors: {
				themeLightBrown: "#DAD1C0",
				themeBrown: "#A38B5C",
				themeBlack: "#1B2301",
				themeGreenLight: "#E4FD90",
				themeGreenDark: "#A3D10A",
			},
			spacing: {
				gutter: "var(--gutter)",
			},
		},
	},
	plugins: [],
};
