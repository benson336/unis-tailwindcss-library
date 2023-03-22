/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      colors:{
        'gray': {
          50:  '#F6F6F6',
          100: '#ECECEC',
          200: '#CECECE',
          300: '#B3B4B5',
          400: '#989A9C',
          500: '#88898B',
          600: '#777879',
          700: '#5E5F5F',
          800: '#444545',
          900: '#323232',
      },
        'night': {
          50: '#E2E3F5',
          100: '#CBCCDE',
          200: '#B3B6C8',
          300: '#9C9FB1',
          400: '#84889B',
          500: '#6D7284',
          600: '#555B6E',
          700: '#3E4457',
          800: '#262E41',
          900: '#0f172a',
      },      
  
        'sky': {
          50:  '#F3FBFF',
          100: '#E1F6FF',
          200: '#B2E9FF',
          300: '#83DBFF',
          400: '#54CEFF',
          500: '#25C0FF',
          600: '#00A8EC',
          700: '#008DC6',
          800: '#006087',
          900: '#002F42',
      },       
        'blue': {
          50:  '#F0FAFF',
          100: '#E5F5FD',
          200: '#B4DBF8',
          300: '#82C0F4',
          400: '#51A6EF',
          500: '#1F8BEA',
          600: '#1772C6',
          700: '#1059A1',
          800: '#083F7D',
          900: '#002658',
      },
  
        'red': {
          50:  '#FFECEC',
          100: '#FFD0D0',
          200: '#FFB1B1',
          300: '#F67D7B',
          400: '#EC4A44',
          500: '#E52628',
          600: '#BE110B',
          700: '#990B07',
          800: '#740604',
          900: '#4F0000',
      },
  
        'teal': {
          50:  '#EDFAFA',
          100: '#D5F5F6',
          200: '#AFECEF',
          300: '#7EDCE2',
          400: '#16BDCA',
          500: '#0694A2',
          600: '#047481',
          700: '#036672',
          800: '#05505C',
          900: '#014451',
      },    
      },
      
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
        "Elevation/Light 1": "0px 2px 6px 0px rgba(0,0,0,0.2)",
        "Elevation/Light 2": "0px 3px 8px 0px rgba(0,0,0,0.2)",
        "Elevation/Light 3": "0px 4px 10px 3px rgba(0,0,0,0.2)",
        "Elevation/Light 4": "0px 6px 15px 4px rgba(0,0,0,0.3)",
        "Elevation/Light 5": "0px 8px 20px 6px rgba(0,0,0,0.35)",
        "Elevation/Dark 1": "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
        "Elevation/Dark 2": "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)",
        "Elevation/Dark 3": "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
        "Elevation/Dark 4": "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
        "Elevation/Dark 5": "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)"
      },
      /*borderRadius:{
        "none": "0",
        "xs": "-0.0625rem",
        "sm": "0.00004929577335133217rem",
        "default": "0.00005720070475945249rem",
        "lg": "0.00010140844824491069rem",
        "xl": "0.0027173913549631834rem",
        "2xl": "0.0033602151088416576rem",
        "3xl": "0.0033967390190809965rem",
        "4xl": "0.004054054152220488rem",
        "5xl": "0.004200269002467394rem",
        "6xl": "0.005067567341029644rem",
        "7xl": "0.0052083334885537624rem",
        "8xl": "0.005434782709926367rem",
        "9xl": "0.0065104165114462376rem",
        "10xl": "0.006720430217683315rem",
        "11xl": "0.008108108304440975rem",
        "12xl": "0.009859154932200909rem",
        "13xl": "0.010416666977107525rem",
        "14xl": "0.011440141126513481rem",
        "15xl": "0.015625rem",
        "16xl": "0.017952127382159233rem",
        "17xl": "0.01953125rem",
        "18xl": "0.02028168924152851rem",
        "19xl": "0.0223214291036129rem",
        "20xl": "0.02244015969336033rem",
        "21xl": "0.02790178544819355rem",
        "22xl": "0.03125rem",
        "23xl": "0.035904254764318466rem",
        "24xl": "0.0390625rem",
        "25xl": "0.0446428582072258rem",
        "26xl": "0.0625rem",
        "27xl": "0.078125rem",
        "28xl": "0.09375rem",
        "29xl": "0.125rem",
        "30xl": "0.1875rem",
        "31xl": "0.25rem",
        "32xl": "0.3125rem",
        "33xl": "0.375rem",
        "34xl": "0.4375rem",
        "35xl": "0.5rem",
        "36xl": "0.625rem",
        "37xl": "0.75rem",
        "38xl": "1rem",
        "39xl": "1.125rem",
        "40xl": "1.25rem",
        "41xl": "1.375rem",
        "42xl": "1.4375rem",
        "43xl": "1.5rem",
        "44xl": "1.75rem",
        "45xl": "1.875rem",
        "46xl": "2rem",
        "47xl": "2.5rem",
        "48xl": "3.125rem",
        "49xl": "3.75rem",
        "full": "9999px"
      },*/
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      fontFamily:{
        lato:['Lato'],
        helvetica:['Helvetica']
      },
      spacing:{
        '1%':'1%',
        '2%':'2%',
        '3%':'3%',
        '4%':'4%',
        '5%':'5%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '98%':'98%',
        '97%':'97%',
        '96%':'96%',
        '95%':'95%',
        '94%':'94%',
        '93%':'93%',
        '92%':'92%',
        '91%':'91%',
        '90%':'90%',

      },
    },

  },
  plugins: [require('@tailwindcss/typography')],
}
