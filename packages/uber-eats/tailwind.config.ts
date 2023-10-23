import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
         'base-black': '#333333',
        'base-gray-1': '#646464',
        'base-gray-2': '#979797',
        'base-gray-3': '#CACACA',
        'base-gray-4': '#F2F2F2',
        'base-gray-5': '#F5F5F5',
      },
      fontFamily: {
        source: ['source-sans-pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  
  variants: {
       extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
export default config;
