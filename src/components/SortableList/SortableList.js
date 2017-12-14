import React from 'react';
import styled from 'styled-components';

import Icons from '../icons'
import { colors, typography } from '../styles';

const { MoreVertIcon } = Icons;

const UL = styled.ul`
  list-style: none;
  padding: 0;
`;

const LI = styled.li`
  background: ${colors.galeryGray};
  border-radius: 2px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 8px 0 16px;
`;

const Label = styled.p`
  ${typography.body1};
  margin: 0;
`;

const MoreIcon = styled(MoreVertIcon)`
  cursor: pointer;  
`;

class SortableList extends React.Component {
  render() {
    return (
      <UL>
        {this.props.items.map(item => (
          <LI key={item.id}>
            <Label>{item.label}</Label>
            <MoreIcon fill={colors.dimGray} size={{width: "26", height: "26"}} />
          </LI>
        ))}
      </UL>
    )
  }
}

export default SortableList;