module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        
        'xs':'320px',
        'xsss':'375px',
        '3xl':'2000px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(#8d49f7, #6b53ff)',
      },
      fontFamily: {
        'custom': ['Eina01', '-apple-system', 'blinkmacsystemfont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']
      },
      height: {
        'custom-height': 'calc(100% + var(--navigation-height))',
      },
      clipPath: {
        'custom-circle': 'circle(150vw at 50% calc(100% - 150vw - 10vw))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }, 
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'float-normal': 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
