/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			opacity: {
				'2': '0.02',
				'8': '0.08',
				'25': '0.25',
			}
		},
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
