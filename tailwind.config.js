const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte'],
  },
  theme: {
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
    },

    extend: {
      colors: {
        grey: {
          100: 'hsl(0, 0%, 63%)',
          200: 'hsl(0, 0%, 27%)',
        },
      },
      spacing: {
        14: '3.5rem',
        18: '4.5rem',
        28: '7rem',
      },
      fontSize: {
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      letterSpacing: {
        tighter: '-1.17px',
        tight: '-0.25px',
        wider: '5px',
        widest: '10px',
      },
      lineHeight: {
        11: '45px',
      },
      maxWidth: {
        25: '25.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
