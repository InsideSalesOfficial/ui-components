import styled from 'styled-components';

import { ellipsis } from 'polished';
import { colors, typography } from '../styles';

// Styles

export const OverflowWrapper = styled.span`
  font-size: inherit;
  margin: 0;
  width: 100%;
  line-height: inherit !important;
  display: inline-block;
  text-transform: inherit;
  vertical-align: middle;
  ${ellipsis()}
`;


// Themes

export const taskSelectInputTheme = {
  background: 'transparent',
  iconColor: colors.black50,
  iconMargin: '0',
  iconPosition: 'absolute',
  iconRightPosition: '10px',
  optionHeight: 'auto',
  optionMinHeight: 32,
  optionListPosition: '0',
  optionListPositionLeft: '0',
  optionsListShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  optionBorderSeparator: `1px solid ${colors.gray90}`,
  textColor: colors.black90,
  textTypography: typography.body1,
  inputColor: colors.black90,
  disabledInputColor: colors.black60
};

export const transparentSelectInputTheme = {
  inputWidth: 'initial',
  textPaddingRight: '13px',
  textColor: colors.white70,
  textTypography: typography.body1,
  hoverTextColor: colors.white90,
  focusTextColor: colors.white90,
  disabledInputColor: colors.white35,
  background: 'transparent',
  selectArrowColor: colors.white70,
  hoverSelectArrowColor: colors.white90,
  focusSelectArrowColor: colors.white90,
  disabledSelectArrowColor: colors.white35,
  transition: 'color 0.15s ease-in-out',
  caratTransition: 'border-top 0.15s ease-in-out',
  wrapperJustifyContent: 'flex-end',
  textTransform: 'uppercase',
  inputPaddingRight: 16,
  optionTextColor: colors.black90,
  caratVisibleWhenDisabled: true
};

export const addButtonSelectInputTheme = {
  wrapperWidth: '220px',
  inputPaddingRight: '0',
  textTypography: typography.subhead1,
  background: 'transparent',
  transition: 'color 0.15s ease-in-out',
  wrapperJustifyContent: 'flex-end',
  textTransform: 'uppercase',
  optionHeight: 'auto',
  optionMinHeight: 32,
  optionListPosition: '0',
  optionListPositionLeft: '0',
  optionTextColor: colors.black90,
  optionsListShadow: '0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)',
};

export const lightSelectInputTheme = {
  inputColor: colors.white80,
  disabledInputColor: colors.white50,
  selectArrowColor: colors.white80
};

export const darkSelectInputTheme = {
  inputColor: colors.black80,
  disabledInputColor: colors.black50,
  selectArrowColor: colors.black80
};

export const transparentCenterTheme = {
  background: 'transparent',
  iconColor: colors.grayC,
  textPaddingLeft: '29px',
  alignSelf: 'center'
}

export const lineSelectInputTheme = {
  background: 'transparent',
  borderColor: colors.lightGray,
  iconColor: colors.black50,
  iconMargin: '0',
  iconPosition: 'absolute',
  iconRightPosition: '6px',
  optionListPosition: '0',
  optionListPositionLeft: '0',
  optionsListShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  textColor: colors.black,
  noLeftPadding: true,
  inputPaddingRight: 22,
  borderRadius: '0'
};
