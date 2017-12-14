import React from 'react';
import styled from 'styled-components';

import { colors, typography } from '../styles';
import OverflowMenu from '../OverflowMenu';

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

const ItemActions = styled(OverflowMenu)`
  .overflow-menu__icon {
    fill: ${colors.dimGray};
  }
`;

const overflowMenuOptions = [{
  action: () => {},
  label: 'Move Up'
}, {
  action: () => {},
  label: 'Move Down'
}, {
  action: () => {},
  label: 'Delete'
}]

class SortableList extends React.Component {
  render() {
    return (
      <UL>
        {this.props.items.map(item => (
          <LI key={item.id}>
            <Label>{item.label}</Label>
            <ItemActions options={overflowMenuOptions} />
          </LI>
        ))}
      </UL>
    )
  }
}

export default SortableList;