import styled from 'styled-components';

import { renderThemeIfPresentOrDefault, colors, typography } from '../styles';
import { ellipsis } from 'polished';

const SelectInputLabel = styled.label`
  color: ${(props) => {
    if (props.theme.labelColor) return props.theme.labelColor;
    return renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.boulder });
  }};
  ${typography.caption};
  ${ellipsis()}
`;

export default SelectInputLabel;
