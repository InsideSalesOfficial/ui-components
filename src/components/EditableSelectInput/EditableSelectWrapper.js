import styled from 'styled-components';

import { fontWeights } from '../styles';

const SelectWrapper = styled.div`
  align-items: flex-start;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) => {
    if (props.theme.wrapperJustifyContent) {
      return props.theme.wrapperJustifyContent;
    }
    return 'flex-start';
  }};
  font-family: 'isdc-roboto', 'Roboto', sans-serif;
  font-weight: ${fontWeights.light};
  position: relative;
  width: ${props => props.theme.wrapperWidth || '100%'};
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default SelectWrapper;
