import styled from 'styled-components';

import { colors, typography } from '../styles';
import { ellipsis } from 'polished';

const SelectInputLabel = styled.label`
  color: ${(props) => {
    if (props.theme.labelColor) return props.theme.labelColor;
    return colors.boulder;
  }};
  transition: color .25s ease-in-out;
  ${typography.caption};
  ${ellipsis()}
`;

export default SelectInputLabel;
