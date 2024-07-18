/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./client/src/**/*.{js,jsx,tsx}', './client/src/index.html'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            colors: {
                primary: {
                    light: '#3490DC',
                    DEFAULT: '#2185D0',
                    dark: '#13496B',
                },
                secondary: {
                    light: '#E74C3C',
                    DEFAULT: '#C0392B',
                    dark: '#9B3A2E',
                },
                tertiary: {
                    light: '#2ECC71',
                    DEFAULT: '#27AE60',
                    dark: '#16A085',
                },
                background: {
                    DEFAULT: '#111827',
                },
                gray: {
                    DEFAULT: '#F9F9F9',
                    light: '#374151',
                    dark: '#9B9B9B',
                },
            },
        },
    },
    plugins: [],
};
