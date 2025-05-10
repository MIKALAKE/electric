/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        '300%': '300% 300%',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1.5rem',
        full: '9999px',
      },
      colors: {
        primary: '#1E3A8A',
        secondary: '#FBBF24',
        accent: '#F472B6',
        neutral: '#374151',
        base100: '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },

      animation: {
        vacuum: 'vacuum 2s linear infinite',
        cleaning: 'cleaning 1s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        fadeUp: 'fadeUp 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in',
        fadeInRight: 'fadeInRight 1s ease-in',
        borderBottomWidth: 'borderBottomWidth 1s',
        lava: 'lava 10s ease-in-out infinite',
      },
      keyframes: {
        lava: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        vacuum: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        cleaning: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        borderBottomWidth: {
          '0%': { borderBottomWidth: '0px' },
          '100%': { borderBottomWidth: '4px' },
        },
      },
    },
  },
  plugins: [],
};
