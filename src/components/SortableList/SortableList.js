import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';

import {
  colors,
  typography,
  renderThemeIfPresentOrDefault,
} from '../styles';
import OverflowMenu from '../OverflowMenu';

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.galeryGray })};
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
  color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.dimGray })};
`;

const Menu = styled(OverflowMenu)`
  .overflow-menu__icon {
    fill: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.dimGray })};
  }
`;


function moveItemInArray(onItemsChanged) {
  return function(array, element, delta) {
    const newArray = _.cloneDeep(array);

    const index = _.findIndex(array, {id: element.id});
    const newIndex = index + delta;

    if (newIndex < 0 || newIndex === newArray.length) return;

    var indexes = [index, newIndex].sort();

    newArray.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]);

    onItemsChanged(newArray);
  }
}

function generateMenuOptions({ onItemsChanged, onItemDeleted }) {
  return function({ item, items }) {
    return [{
      action: () => moveItemInArray(onItemsChanged)(items, item, -1),
      label: 'Move Up'
    }, {
      action: () => moveItemInArray(onItemsChanged)(items, item, 1),
      label: 'Move Down'
    }, {
      action: () => onItemDeleted(item.id),
      label: 'Delete'
    }];
  }
}


function SortableList(props) {
  const items = props.items || [];
  const { onItemsChanged, onItemDeleted } = props;
  return (
    <ItemList>
      {items.map(item => (
        <Item key={item.id}>
          <Label>{item.label}</Label>
          <Menu options={generateMenuOptions({ onItemsChanged, onItemDeleted })({ item, items })} />
        </Item>
      ))}
    </ItemList>
  );
}

SortableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  onItemsChanged: PropTypes.func,
  onItemDeleted: PropTypes.func,
}

SortableList.defaultProps = {
  onItemsChanged: () => {},
  onItemDeleted: () => {}
};


export default SortableList;
