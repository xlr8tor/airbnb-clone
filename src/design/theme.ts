import { extendTheme } from "@chakra-ui/react";

const space = {
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  4.5: '1.125rem', // 18px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
}

const colors = {
  white: "#fff",
  black: "#000",
  gray: {
    25: "#DDDDDD",
    50: "#717171",
    100: "#F7F7F7"
  },
  pink: {
    25: "#ff385c"
  }
};

const fontWeights = {
  thin: '300',
  normal: '400',
  boldXs: '500',
  boldSm: '600',
  bold: '700',
}

const borders = {
  none: 0,
  "0.1px": "0.1px solid",
  "0.5px": "0.5px solid",
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
};

const radii = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xls: '0.625rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  '4xl': '2.5rem',
  round: '50%',
  full: '9999px',
}

const shadows = {
  sm: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
}

const customTheme = {
  colors,
  borders,
  space,
  fontWeights,
  shadows,
  radii
};



export type CustomTheme = typeof customTheme;

export const theme =  extendTheme(customTheme);
