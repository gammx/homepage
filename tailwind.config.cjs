/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			opacity: {
				'2': '0.02',
				'8': '0.08',
				'25': '0.25',
			},
			fontSize: {
				'2xs': '0.625rem',
			}
		},
		fontFamily: {
			brand: ['Miedinger'],
			display: ['Sohnebreit'],
			sans: ['MabryPro', 'sans-serif'],
			mono: ['IBM Plex Mono', 'monospace'],
		},
		colors: {
			'interactive-hover': '#1B1B1B',
			'white': '#f1f1f1',
			'smoke': '#0B0B0B',
			'bones': '#EFEFEF',
			'primary': '#CECECE',
			'accent': '#F63A22',
		},
	},
	plugins: [],
}
