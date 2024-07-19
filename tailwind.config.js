import colors from 'tailwindcss/colors';

// Extract all the color keys from the Tailwind colors
const colorKeys = Object.keys(colors).filter((color) => typeof colors[color] === 'object');

// Generate all the color classes for the safelist
const generateColorClasses = (colors) => {
    let classes = [];
    colorKeys.forEach((color) => {
        const shades = Object.keys(colors[color]);
        shades.forEach((shade) => {
            classes.push(`bg-${color}-${shade}`);
            classes.push(`text-${color}-${shade}`);
            classes.push(`shadow-${color}-${shade}`);
            classes.push(`from-${color}-${shade}`);
            classes.push(`to-${color}-${shade}`);
        });
    });
    return classes;
};

const safelist = [
    'bg-gradient-to-r',
    'bg-gradient-to-l',
    'bg-gradient-to-t',
    'bg-gradient-to-b',
    'bg-gradient-to-tr',
    'bg-gradient-to-tl',
    'bg-gradient-to-br',
    'bg-gradient-to-bl',
    // Add other static classes you might use
    ...generateColorClasses(colors),
];

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./client/src/**/*.{js,jsx,tsx}', './client/src/index.html'],
    safelist,
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
