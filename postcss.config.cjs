const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require('tailwindcss'),
        // isProd ? require('autoprefixer') : null,
        // isProd ? cssnano({ preset: 'default' }) : null,
        // purgecss({
        //     content: ['./**/*.html', './src/**/*.ts'],
        //     defaultExtractor: (content) =>
        //         content.match(/[\w-/:]+(?<!:)/g) || [],
        // }),
    ],
};
