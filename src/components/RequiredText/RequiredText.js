import {colors} from '../styles/colors';
import {typography} from '../styles/typography';
import styled from 'styled-components';

export const RequiredText = styled.div`
  color: ${(props) => {
    return props.theme.requiredColor || colors.black40;
}};
  opacity: ${(props) => {
  if (props.open || props.isFocused) {
    return 0;
  } else {
  return 1;
  }
}};
  top: 0;
  right: 30px;
  position: absolute;
  transform: translateY(24px);
  transition: font-size 0.14s ease-in-out, transform 0.14s ease-in-out, color 0.14s ease-in-out;
  ${typography.caption}
  `;

