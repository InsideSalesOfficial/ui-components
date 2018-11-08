import { colors } from "../styles/colors";

export const neuralSendEmailTheme = {
  actionButtonWidth: '218px',
  actionButtonBackgroundColor: colors.tronB,
  actionButtonDisabledBackgroundColor: colors.disabledTronB,
  actionButtonDisabledFillColor: colors.grayB,
  caretButtonBackgroundColor: colors.tronC,
  caretButtonHoverBackgroundColor: colors.tronC,
  caretButtonDisabledBackgroundColor: colors.disabledTronC
}

export const neuralScheduledEmailTheme = {
  actionButtonWidth: '245px',
  actionButtonBackgroundColor: colors.tronB,
  actionButtonDisabledBackgroundColor: colors.disabledTronB,
  actionButtonDisabledFillColor: colors.grayB,
  caretButtonBackgroundColor: colors.tronC,
  caretButtonHoverBackgroundColor: colors.tronC,
  caretButtonDisabledBackgroundColor: colors.disabledTronC
}

export const regularScheduledEmailTheme = {
  actionButtonWidth: '245px',
  actionButtonBackgroundColor: colors.green,
  actionButtonDisabledBackgroundColor: colors.disabledGreen,
  caretButtonBackgroundColor: colors.greenB,
  caretButtonHoverBackgroundColor: colors.greenC,
  caretButtonDisabledBackgroundColor: colors.disabledGreenB
}

export const defaultTheme = {
  actionButtonWidth: '88px',
  actionButtonBackgroundColor: colors.green,
  actionButtonDisabledBackgroundColor: colors.disabledGreen,
  caretButtonBackgroundColor: colors.greenB,
  caretButtonHoverBackgroundColor: colors.greenC,
  caretButtonDisabledBackgroundColor: colors.disabledGreenB
}

export default { neuralSendEmailTheme, neuralScheduledEmailTheme, regularScheduledEmailTheme, defaultTheme };