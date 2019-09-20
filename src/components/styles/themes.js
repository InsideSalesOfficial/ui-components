import { tint, shade } from 'polished';

const hotPinkDerivableTransparencies = {
  brand: '#F53E73',
  primary: '#813DFB',
  contrast: '#372D49',
  white: '#FFF',

  neural01: '#00C9FF',
  neural02: '#006580',

  success: '#16C99D',
  caution: '#FFA210',
  error: '#FF1743',
};

const hotPinkThemeBase = {
  secondary01: '#7A6891',
  secondary02: '#C4B2D3',
  secondary03: '#E1D8E9',
  secondary04: '#F9F1FF'
};

const hotPinkThemeDerivations = Object.keys(hotPinkDerivableTransparencies).map((name) => (
  createTintAndShadeVersions(hotPinkDerivableTransparencies[name], name)
)).reduce((acc, items) => ({ ...acc, ...items }), {});


function createTintAndShadeVersions(color, colorName) {
  return {
    [`${colorName}Tint10`]: tint(.90, color),
    [`${colorName}Tint40`]: tint(.60, color),
    [`${colorName}Tint60`]: tint(.40, color),
    [`${colorName}Tint90`]: tint(.10, color),
    [`${colorName}Shade10`]: shade(.90, color),
    [`${colorName}Shade40`]: shade(.60, color),
    [`${colorName}Shade60`]: shade(.40, color),
    [`${colorName}Shade90`]: shade(.10, color),
  }
}

export const hotPinkTheme = Object.assign(hotPinkThemeBase, hotPinkDerivableTransparencies, hotPinkThemeDerivations);
