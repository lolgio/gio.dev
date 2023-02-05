/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
    darkMode: "class",
    theme: {
        extend: {},
        extend: {
            colors: {
                highlight: "#6BABF5",
            },
        },
    },
    plugins: [],
};
