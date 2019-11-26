import styled from 'styled-components';

import {
  colors,
  fontSizes,
  renderThemeIfPresentOrDefault,
} from '../styles';

const InteractiveElement = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green})};
  cursor: pointer;
  font-size: ${fontSizes.xSmall};
  text-align: left;
  &:focus {
    outline: none;
  }
`;

export default InteractiveElement;
