/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      gridTemplateRows: {
        layout: '60px 1fr 60px'
      },
    },
	},
	plugins: [],
};
