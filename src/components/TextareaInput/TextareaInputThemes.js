import { colors, ifThemeInPropsIsPresentUse } from "../styles/colors";

const originalShared = {
  disabledBorderColor: colors.black20,
  disabledBackgroundColor: colors.black05,
  focusedBorderColor: colors.green,
  errorBorderColor: colors.red,
  disabledColor: colors.black40,
  placeholderColor: colors.black40,
  labelErrorColor: colors.red,
  labelFocusedColor: colors.green
};

export const darkTheme = {
  ...originalShared,
  background: colors.darkBlueC,
  valueColor: colors.white90,
  labelColor: colors.white60,
  borderColor: colors.white40,
  helperColor: colors.white60,
  textAreaInputDarkTheme: true
};

export const defaultTheme = {
  ...originalShared,
  background: colors.white,
  valueColor: colors.black,
  labelColor: colors.black60,
  borderColor: colors.black40,
  helperColor: colors.black40,
  textAreaInputWhiteTheme: true
};

export default { darkTheme, defaultTheme };

function sharedGlobalTheme(theme) {
  return {
    focusedBorderColor: theme.brand01,
    errorBorderColor: theme.warning04,
    placeholderColor: theme.white40,
    labelFocusedColor: theme.brand01,
    labelErrorColor: theme.warning04
  };
}

export function generateFlatTheme(theme) {
  return {
    ...sharedGlobalTheme(theme),
    background: theme.primary01,
    disabledBackgroundColor: theme.primary01,
    valueColor: theme.white90,
    labelColor: theme.white60,
    borderColor: theme.white40,
    helperColor: theme.white60,
    disabledBorderColor: theme.white10
  };
}

export function generateAlternateTheme(theme) {
  return {
    ...sharedGlobalTheme(theme),
    background: theme.primary05,
    disabledBackgroundColor: theme.primary05,
    valueColor: theme.white90,
    labelColor: theme.white60,
    helperColor: theme.white60,
    borderColor: theme.transparent,
    disabledBorderColor: theme.transparent
  };
}

function resolveToModifiedTheme({ theme }) {
  if (theme.textAreaInputWhiteTheme) return generateFlatTheme(theme);
  return generateAlternateTheme(theme);
}

export function themeToThemeResolver({ theme, key }) {
  if (!ifThemeInPropsIsPresentUse({ props: { theme }, value: true }))
    return theme[key];
  return resolveToModifiedTheme({ theme })[key];
}
