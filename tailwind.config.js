/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      gridTemplateRows: {
        layout: '32px 1fr 32px'
      },
    },
	},
	plugins: [],
};
