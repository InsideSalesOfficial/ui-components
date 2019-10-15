import { tint, shade, transparentize } from 'polished';

// Hot Pink
const hotPinkDerivable = {
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

const hotPinkThemeDerivations = Object.keys(hotPinkDerivable).map((name) => ({
  ...createTintVersions(hotPinkDerivable[name], name),
  ...createShadeVersions(hotPinkDerivable[name], name)
})).reduce((acc, items) => ({ ...acc, ...items }), {});

export const hotPinkTheme = Object.assign(hotPinkThemeBase, hotPinkDerivable, hotPinkThemeDerivations);

// Blue Yellow
const blueYellowDerivable = {
  brand01: '#ffdd00',
  ...createShadeForSecondaries('#ffdd00', 'brand'),
  brand04: 'rgba(255, 221, 0, 0.1)',

  primary01: '#16283a',
  ...createShadeForSecondaries('#16283a', 'primary'),
  primary04: '#737e89',

  brandBackup01: '#0e6aff',
  ...createShadeForSecondaries('#0e6aff', 'brandBackup'),
  brandBackup04: '#9fc4ff',

  white: '#FFF',
  ...createTransparencyVersions('#FFF', 'white'),

  black: '#000',
  black04: transparentize(.96, '#000'),
  ...createTransparencyVersions('#000', 'black'),


  tron01: '#00c9ff',
  ...createShadeForSecondaries('#00c9ff', 'tron'),

  success01: '#16c99d',
  ...createShadeForSecondaries('#16c99d', 'success'),

  caution01: '#ffa210',
  ...createShadeForSecondaries('#ffa210', 'caution'),

  warning01: '#ff1743',
  ...createShadeForSecondaries('#ff1743', 'warning'),
};

export const blueYellowTheme = blueYellowDerivable;

function createShadeVersions(color, colorName) {
  return {
    [`${colorName}Shade10`]: shade(.90, color),
    [`${colorName}Shade40`]: shade(.60, color),
    [`${colorName}Shade60`]: shade(.40, color),
    [`${colorName}Shade90`]: shade(.10, color),
  };
}

function createTintVersions(color, colorName) {
  return {
    [`${colorName}Tint10`]: tint(.90, color),
    [`${colorName}Tint40`]: tint(.60, color),
    [`${colorName}Tint60`]: tint(.40, color),
    [`${colorName}Tint90`]: tint(.10, color),
  };
}

function createTransparencyVersions(color, colorName) {
  return {
    [`${colorName}10`]: transparentize(.90, color),
    [`${colorName}40`]: transparentize(.60, color),
    [`${colorName}60`]: transparentize(.40, color),
    [`${colorName}90`]: transparentize(.10, color),
  };

}

function createShadeForSecondaries(color, colorName) {
  return {
    [`${colorName}02`]: shade(.90, color),
    [`${colorName}03`]: shade(.40, color),
  };
}
