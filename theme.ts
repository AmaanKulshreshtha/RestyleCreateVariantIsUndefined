import {
  AllProps,
  VariantProps,
  VisibleProps,
  createTheme,
} from '@shopify/restyle';
import {PropsWithChildren} from 'react';

const palette = {
  background: '#F5F3F1',
  black: '#000',
  black05: 'rgba(0, 0, 0, 0.05)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black15: 'rgba(0, 0, 0, 0.15)',
  black20: 'rgba(0, 0, 0, 0.2)',
  black30: '#3D3D3D',
  black40: 'rgba(0, 0, 0, 0.4)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black70: 'rgba(0, 0, 0, 0.7)',
  black90: 'rgba(0, 0, 0, 0.9)',
  blueLight: 'rgba(0, 29, 205, 0.1)',
  bluePrimary: 'rgba(0, 29, 205, 1)',
  darkBackground: '#121212',
  greenLight: 'rgba(55, 196, 58, 0.2)',
  greenPrimary: '#40826d',
  orangeLight: 'rgba(255, 115, 0, 0.15)',
  orangePrimary: 'rgba(255, 115, 0, 1)',
  redLight: 'rgba(234, 63, 46, 0.1)',
  redPrimary: 'rgba(234, 63, 46, 1)',
  transparent: 'transparent',
  white10: 'rgba(255, 255, 255, 0.1)',
  white20: 'rgba(255, 255, 255, 0.2)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white40: 'rgba(255, 255, 255, 0.4)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white70: 'rgba(255, 255, 255, 0.7)',
  white100: 'rgba(255, 255, 255, 1)',
  yellowLight: 'rgba(235, 187, 35, 0.2)',
  yellowPrimary: 'rgba(235, 187, 35, 1)',
};

const commonFontStyles = {
  textAlign: 'left',
};

const commonInputStyles = {
  borderRadius: 'input',
  color: 'black90',
  paddingHorizontal: 'xs',
  textAlign: 'left',
};

const commonCTAStyles = {
  borderRadius: 'cta',
};

export const theme = createTheme({
  borderRadii: {
    '0': 0,
    '10': 10,
    '40': 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  buttonVariants: {
    disabled: {
      ...commonCTAStyles,
      backgroundColor: 'background',
    },
    ghost: {
      ...commonCTAStyles,
      backgroundColor: 'transparent',
      borderWidth: 0,
      color: 'brandOrange',
    },
    outline: {
      ...commonCTAStyles,
      backgroundColor: 'white100',
      borderColor: 'black20',
      borderWidth: 1,
    },
    primary: {
      ...commonCTAStyles,
      backgroundColor: 'brandOrange',
    },
    secondary: {
      ...commonCTAStyles,
      backgroundColor: 'brandOrangeShy',
    },
    tertiary: {
      ...commonCTAStyles,
      backgroundColor: 'black90',
    },
  },
  colors: {
    background: palette.background,
    black: palette.black,
    black05: palette.black05,
    black10: palette.black10,
    black15: palette.black15,
    black20: palette.black20,
    black30: palette.black30,
    black40: palette.black40,
    black50: palette.black50,
    black70: palette.black70,
    black90: palette.black90,
    brandBlue: palette.bluePrimary,
    brandBlueShy: palette.blueLight,
    brandOrange: palette.orangePrimary,
    brandOrangeShy: palette.orangeLight,
    darkBackground: palette.darkBackground,
    feedbackGreen: palette.greenPrimary,
    feedbackGreenShy: palette.greenLight,
    feedbackRed: palette.redPrimary,
    feedbackRedShy: palette.redLight,
    feedbackYellow: palette.yellowPrimary,
    feedbackYellowShy: palette.yellowLight,
    transparent: palette.transparent,
    white10: palette.white10,
    white20: palette.white20,
    white30: palette.white30,
    white40: palette.white40,
    white50: palette.white50,
    white70: palette.white70,
    white100: palette.white100,
  },
  inputVariants: {
    active: {
      ...commonInputStyles,
      backgroundColor: 'white100',
      borderColor: 'brandOrange',
      borderWidth: 2,
    },
    default: {
      ...commonInputStyles,
      backgroundColor: 'background',
    },
    disabled: {
      ...commonInputStyles,
      backgroundColor: 'white100',
      borderColor: 'black15',
      borderWidth: 1,
      color: 'black20',
    },
    invalid: {
      ...commonInputStyles,
      backgroundColor: 'feedbackRedShy',
      borderColor: 'feedbackRed',
      borderWidth: 2,
    },
    verify: {
      ...commonInputStyles,
      backgroundColor: 'white100',
      borderColor: 'black15',
      borderWidth: 1,
    },
  },
  spacing: {
    '5': 5,
    '10': 10,
    '15': 15,
    '20': 20,
    '25': 25,
    '30': 30,
    '40': 40,
    '50': 50,
    '60': 60,
    '80': 80,
    '120': 120,
  },
  textVariants: {
    'fs:11': {
      ...commonFontStyles,
      fontSize: 11,
      lineHeight: 15,
    },
    'fs:13': {
      ...commonFontStyles,
      fontSize: 13,
      lineHeight: 15,
    },
    'fs:15': {
      ...commonFontStyles,
      fontSize: 15,
      lineHeight: 20,
    },
    'fs:17': {
      ...commonFontStyles,
      fontSize: 17,
      lineHeight: 25,
    },
    'fs:21': {
      ...commonFontStyles,
      fontSize: 21,
      letterSpacing: -0.01,
      lineHeight: 25,
    },
    'fs:27': {
      ...commonFontStyles,
      fontSize: 27,
      letterSpacing: -0.02,
      lineHeight: 35,
    },
    'fs:40': {
      ...commonFontStyles,
      fontSize: 40,
      letterSpacing: -0.03,
      lineHeight: 45,
    },
    'fs:80': {
      ...commonFontStyles,
      fontSize: 80,
      letterSpacing: -0.04,
      lineHeight: 90,
    },
  },
  zIndices: {
    '1': 1,
    '2': 2,
    '6': 6,
  },
});

export const commonShadowStyles = {
  elevation: 11,
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.15,
  shadowRadius: 4,
};

export {all as allRestyleFunctions} from '@shopify/restyle';

export type Theme = typeof theme;
export type AllRestylePropsWithoutVariantProps = AllProps<Theme> &
  VisibleProps<Theme> &
  PropsWithChildren;
export type RestyleProps<T extends keyof Theme | void = void> =
  T extends keyof Theme
    ? AllRestylePropsWithoutVariantProps & VariantProps<Theme, T>
    : AllRestylePropsWithoutVariantProps;
