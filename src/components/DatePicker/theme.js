import { boxShadows } from '../styles';
import { colors } from '../styles/colors';
import { fontSizes, lineHeights, fontFamilies, fontWeights, typography } from '../styles/typography';

const listCardTheme = {
  minHeight: 72,
  topBottomBasePadding: 9,
  borderWidth: 1,
  titleMarginBottom: 2,
  mainContentPadding: 6,
  contactabilityHeight: 28,
  cardMarginBottom: 10,
  dueDateHeight: 24,
  dueDateMarginTop: 8
};

const widths = {
  closedWidth: '440px',
  expandedWidth: '100%'
};

const lightRankBarTheme = {
  foregroundColor: colors.lightBlue,
  rankBackgroundColor: colors.darkGreen,
  emptyBarColor: colors.barLightGray,
  disabledOpacity: '1'
};
  
const darkRankBarTheme = {
  foregroundColor: colors.lightBlue,
  rankBackgroundColor: colors.boulder,
  emptyBarColor: colors.barDarkGray,
  disabledOpacity: '0.25'
};

const baseZIndex = 900000;

const PbTheme = {
  baseZIndex,
  boxShadows,
  colors,
  fontSizes,
  lineHeights,
  listCardTheme,
  fontFamilies,
  fontWeights,
  lightRankBarTheme,
  darkRankBarTheme,
  typography,
  widths
};

export default PbTheme;