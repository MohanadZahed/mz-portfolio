/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            screens: {
                sm: '808px',
                md: '935px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1280px',
            },
        },
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'var(--color-secondary)'
            }
        },
    },
    plugins: [],
}
