/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				headerGreen: '#6bdb50',
				headerWhite: '#fdfffe',
				headerBlue: '#075fb4',
				headerText: '#4a544c',
				headerButtonText: '#f4f6f6',
			},
		},
	},
	plugins: [],
}
