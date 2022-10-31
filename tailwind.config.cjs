/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['MabryPro', 'sans-serif'],
			display: ['Ginger']
		},
		colors: {
			'interactive-hover': '#1B1B1B',
			'white': '#f1f1f1',
		}
	},
	plugins: [],
}
