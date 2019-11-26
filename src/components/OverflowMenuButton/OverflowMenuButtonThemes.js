import { colors, ifThemeInPropsIsPresentUse } from "../styles/colors";

const originalNeuralColors = {
  actionButtonTextColor: colors.white,
  actionButtonDisabledTextColor: colors.white60,
  actionButtonBackgroundColor: colors.tronB,
  actionButtonDisabledBackgroundColor: colors.disabledTronB,
  actionButtonDisabledFillColor: colors.grayB,
  caretButtonBackgroundColor: colors.tronC,
  caretButtonHoverBackgroundColor: colors.tronC,
  caretButtonDisabledBackgroundColor: colors.disabledTronC,
  caretColor: colors.white
};

const originalNormalColors = {
  actionButtonTextColor: colors.white,
  actionButtonDisabledTextColor: colors.white60,
  actionButtonTextHoverColor: colors.white40,
  actionButtonBackgroundColor: colors.green,
  actionButtonDisabledBackgroundColor: colors.disabledGreen,
  caretButtonBackgroundColor: colors.greenB,
  caretButtonHoverBackgroundColor: colors.greenC,
  caretButtonDisabledBackgroundColor: colors.disabledGreenB,
  caretColor: colors.white
};

export const neuralSendEmailTheme = {
  actionButtonWidth: "218px",
  ...originalNeuralColors,
  neuralSendEmailOverflowMenuTheme: true
};

export const neuralScheduledEmailTheme = {
  actionButtonWidth: "245px",
  ...originalNeuralColors,
  neuralSendEmailScheduledOverflowMenuTheme: true
};

export const regularScheduledEmailTheme = {
  actionButtonWidth: "245px",
  ...originalNormalColors,
  regularScheduledEmailOverflowMenuTheme: true
};

export const defaultTheme = {
  actionButtonWidth: "88px",
  ...originalNormalColors,
  defaultOverflowMenuTheme: true
};

function generateBaseNormalBranded(theme) {
  return {
    actionButtonTextColor: theme.primary01,
    actionButtonDisabledTextColor: theme.primary01,
    actionButtonBackgroundColor: theme.brand01,
    actionButtonBackgroundHoverColor: theme.brand02,
    actionButtonDisabledBackgroundColor: theme.brand03,
    caretButtonBackgroundColor: theme.brand02,
    caretButtonHoverBackgroundColor: theme.brand01,
    caretButtonDisabledBackgroundColor: theme.brand03,
    caretColor: theme.primary01
  };
}

function generateNeuralBranded(theme) {
  return {
    actionButtonTextColor: theme.primary01,
    actionButtonDisabledTextColor: theme.primary01,
    actionButtonBackgroundColor: theme.tron01,
    actionButtonBackgroundHoverColor: theme.tron02,
    actionButtonDisabledBackgroundColor: theme.tron03,
    caretButtonBackgroundColor: theme.tron02,
    caretButtonHoverBackgroundColor: theme.tron01,
    caretButtonDisabledBackgroundColor: theme.tron03,
    caretColor: theme.primary01
  };
}

export function generateThemedGlobalDefault(theme) {
  return {
    ...defaultTheme,
    ...generateBaseNormalBranded(theme),
    isLoaderOnDarkBackground: true
  };
}

export function generateThemedScheduledEmailGlobalDefault(theme) {
  return {
    ...regularScheduledEmailTheme,
    ...generateBaseNormalBranded(theme),
    isLoaderOnDarkBackground: true
  };
}

export function generateThemedNeuralScheduledEmailGlobalDefault(theme) {
  return {
    ...neuralScheduledEmailTheme,
    ...generateNeuralBranded(theme),
    isLoaderOnDarkBackground: true
  };
}

export function generateThemedNeuralEmailGlobalDefault(theme) {
  return {
    ...neuralSendEmailTheme,
    ...generateNeuralBranded(theme),
    isLoaderOnDarkBackground: true
  };
}

function resolveToModifiedTheme({ theme }) {
  if (theme.defaultOverflowMenuTheme) return generateThemedGlobalDefault(theme);
  else if (theme.regularScheduledEmailOverflowMenuTheme)
    return generateThemedScheduledEmailGlobalDefault(theme);
  else if (theme.neuralSendEmailScheduledOverflowMenuTheme)
    return generateThemedNeuralScheduledEmailGlobalDefault(theme);
  else if (theme.neuralSendEmailOverflowMenuTheme)
    return generateThemedNeuralEmailGlobalDefault(theme);
  return theme;
}

export function themeToThemeResolver({ theme, key }) {
  if (!ifThemeInPropsIsPresentUse({ props: { theme }, value: true }))
    return theme[key];
  return resolveToModifiedTheme({ theme })[key];
}

export default {
  neuralSendEmailTheme,
  neuralScheduledEmailTheme,
  regularScheduledEmailTheme,
  defaultTheme
};
