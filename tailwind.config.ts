import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          // Updated light mode colors
          primary: '#8BC34A',  // Fresh green (representing fresh vegetables)
          secondary: '#FF5722',  // Deep orange (representing citrus fruits or tomatoes)
          accent: '#FF9800',  // Orange (vibrant accent, representing fresh produce)
          'base-100': '#ffffff',  // White for the main background
          'base-200': '#f0f4c3',  // Light greenish background (fresh and clean)
          'base-300': '#dce775',  // Soft lime green (freshness)
          '.toaster-con': {
            'background-color': '#ffffff',  // Toast background
            color: '#000000',  // Toast text color
          },
        },
        dark: {
          // Updated dark mode colors
          primary: '#43A047',  // Darker green (representing fresh vegetables)
          secondary: '#D32F2F',  // Strong red (representing ripe tomatoes or deep-colored fruits)
          accent: '#66BB6A',  // Lighter green for accent (balanced)
          'base-100': '#263238',  // Dark background for dark mode (charcoal-like)
          'base-200': '#37474F',  // Dark bluish-gray (depth)
          'base-300': '#455A64',  // Deeper slate green (earthy tone)
          '.toaster-con': {
            'background-color': '#263238',  // Toast background for dark mode
            color: '#ffffff',  // Toast text color for dark mode
          },
        },
      },
    ],
  },
  darkMode: ['class', '["dark"]'],
  plugins: [require('daisyui')],
}

export default config
