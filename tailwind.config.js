/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '0.938rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    colors: {
      primary: '#0856CF',
      'on-primary': '#FFFFFF',
      'primary-container': '#DAE2FF',
      'on-primary-container': '#001847',
      secondary: '#585E71',
      'on-secondary': '#FFFFFF',
      'secondary-container': '#DCE2F9',
      'on-secondary-container': '#151B2C',
      tertiary: '#735471',
      'on-tertiary': '#FFFFFF',
      'tertiary-container': '#FED7F9',
      'on-tertiary-container': '#2B122B',
      error: '#BA1A1A',
      'on-error': '#FFFFFF',
      'error-container': '#FFDAD6',
      'on-error-container': '#410002',
      background: '#FEFBFF',
      'on-background': '#1B1B1F',
      surface: '#FEFBFF',
      'on-surface': '#1B1B1F',
      'surface-variant': '#E1E2EC',
      'on-surface-variant': '#45464F',
      outline: '#757780',
      'outline-variant': '#CAC4D0',
      'surface-5': '#f2f3fd',
      'surface-8': '#eaeefb',
      'surface-11': '#e2e8f9',
      'surface-12': '#e0e7f9',
      'surface-14': '#dce4f8'
    },
    extend: {}
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
