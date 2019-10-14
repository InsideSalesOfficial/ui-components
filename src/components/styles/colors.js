import { transparentize } from 'polished';

import { blueYellowTheme, hotPinkTheme } from'./themes.js';

export const green = {
  green: '#3AB676',
  greenB: '#34A369',
  greenC: '#2A915E',
  green40: 'rgba(58,182,118,0.4)',
  green10: 'rgba(58,182,118,0.1)',
  disabledGreen: '#416463',
  disabledGreenB: '#3F6963'
};

export const tron = {
  tron: '#00C9FF',
  tronB: '#006580',
  tronC: '#004A5E',
  tron40: 'rgba(0,201,255,0.4)',
  tron10: 'rgba(0,201,255,0.1)',
  disabledTronB: '#3A5A64',
  disabledTronC: '#335861'
};

export const blue = {
  blue: '#0075B8',
  blue40: 'rgba(0,117,184,0.4)',
  blue10: 'rgba(0,117,184,0.1)'
};

export const orange = {
  orange: '#F18B14',
  orange40: 'rgba(241,139,20,0.4)',
  orange10: 'rgba(241,139,20,0.1)'
};

export const red = {
  red: '#EA5959',
  red40: 'rgba(234,89,89,0.4)',
  red10: 'rgba(234,89,89,0.1)'
};

export const darkBlue = {
  darkBlue: '#2A434A',
  darkBlue40: 'rgba(42,67,74,0.4)',
  darkBlueB: '#435960',
  darkBlueB40: 'rgba(67,89,96,0.4)',
  darkBlueC: '#21353B',
  darkBlueC40: 'rgba(33,53,59,0.4)',
  darkBlueD: '#1D2E33',
  darkBlueD40: 'rgba(29,46,51,0.4)',
  darkBlueE: '#080D0E',
  darkBlueE40: 'rgba(8,13,14,0.4)'
};

export const gray = {
  grayA: '#F5F5F5',
  grayB: '#E5E5E5',
  grayC: '#999999',
  grayD: '#666666',
  grayE: '#191919',
  grayF: '#0A0A0A'
};

export const black = {
  black: '#000000',
  black90: 'rgba(0,0,0,0.9)',
  black60: 'rgba(0,0,0,0.6)',
  black40: 'rgba(0,0,0,0.4)',
  black20: 'rgba(0,0,0,0.2)',
  black10: 'rgba(0,0,0,0.1)',
  black4: 'rgba(0,0,0,0.04)',
  black14: 'rgba(0,0,0,0.14)',
  black12: 'rgba(0,0,0,0.12)',
};

export const white = {
  white: '#FFFFFF',
  white90: 'rgba(255,255,255,0.9)',
  white60: 'rgba(255,255,255,0.6)',
  white40: 'rgba(255,255,255,0.4)',
  white10: 'rgba(255,255,255,0.1)',
  white4: 'rgba(255,255,255,0.04)'
};

const officialColors = Object.assign({}, white, black, gray, darkBlue, red, orange, blue, tron, green);

// these colors are here for legacy purposes, do not use anymore.
const deprecatedColors = {
  black05: transparentize(.95, black.black),
  black12: transparentize(.88, black.black),
  black20: transparentize(.80, black.black),
  black30: transparentize(.70, black.black),
  black36: transparentize(.46, black.black),
  black24: transparentize(.76, black.black),
  black50: transparentize(.50, black.black),
  black54: transparentize(.46, black.black),
  black80: transparentize(.20, black.black),
  black87: transparentize(.13, black.black),
  blackLight: '#1a1a1a',
  caution: '#E78F2B',
  fontBlack: '#333333',
  lightBlue: '#69D9F9',
  greenDarker: officialColors.greenB,
  greenLighter: '#F0FAF4',
  green00: 'rgba(58, 182, 118, 0)',
  green20: 'rgba(58,182,118,0.2)',
  green30: 'rgba(58, 182, 118, 0.3)',
  green50: 'rgba(58, 182, 118, 0.5)',
  green70: '#2E915E',
  green80: 'rgba(58, 182, 118, 0.8)',
  greenBackground: '#244b4d',
  greenDarkBackground: officialColors.darkBlueD,
  greenBWithOpacity40: '#33AF74',
  disabledGreen: '#cbdad3',
  disabledGreenB: '#bcd3c8',
  darkGreen: '#204244',
  fontDarkGreen: '#0E2E2E',
  greenCard: officialColors.darkBlueB,
  grey: '#7B9394',
  gray: '#7B9394',
  gray90: officialColors.grayB,
  fontGrey: officialColors.grayC,
  grayBlue: '#35444A',
  neuralBlue: officialColors.tron,
  red70: '#B24C4E',
  white20: transparentize(.80, white.white),
  white30: transparentize(.70, white.white),
  white35: transparentize(.65, white.white),
  white50: transparentize(.50, white.white),
  white70: transparentize(.30, white.white),
  white80: transparentize(.20, white.white),
  white87: transparentize(.13, white.white),
  white50green: '#9CDABA',
  white79green: '#D5E6D9',
  white74black: '#BDC9C9',
  offWhite: '#FEFEFE',
  hoverGray: '#D7DBDC',
  lighterGray: '#F0F0F0',
  lightGray: '#D3DBDB',
  barLightGray: '#E1E1E1',
  barDarkGray: 'rgba(229,229,229,0.5)',
  boulder: '#757575',
  galeryGray: '#EFEFEF',
  middleGray: '#808080',
  darkGray: '#4F6F70',
  darkslategray: '#2f4f4f',
  dimGray: officialColors.grayD,
  aluminum: officialColors.grayC,
  silver: '#CCCCCC',
  darkSilver: 'rgba(189,189,189,0.3)',
  selectItemColor: '#152D2E',
  firefly: '#0E2E2E',
  mineShaft: '#333333',
  dustyGray: officialColors.grayC,
  doveGray: officialColors.grayD,
  disabledTronB: '#c4d0d3',
  disabledTronC: '#adbfc5'
};

export function renderThemeIfPresentOrDefault({ key, defaultValue }) {
  return function styledComponentProppedValue(props) {
    return renderThemeKeyOrDefaultValue({ props, key, defaultValue });
  };
}

export function renderThemeKeyOrDefaultValue({ props, key, defaultValue }) {
  if (!key) throw new Error('Missing key renderThemeKeyOrDefaultValue');
  if (!props.theme || !props.theme[key]) return defaultValue;
  return props.theme[key];
}

const utilityFunctions = {
  renderThemeIfPresentOrDefault,
  renderThemeKeyOrDefaultValue
};

export const colors = Object.assign(deprecatedColors, officialColors, utilityFunctions, { hotPinkTheme, blueYellowTheme});
