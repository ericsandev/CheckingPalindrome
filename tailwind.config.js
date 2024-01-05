/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-color': '#18112d',
				'secondary-color': '#150f26',
				'accent-color': '#ffe45a',
				'light-secondary': '#FAFAFA',
			},
		},
	},
	plugins: [],
};
