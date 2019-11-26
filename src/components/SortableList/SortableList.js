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

class SortableList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    onItemsChanged: PropTypes.func
  }

  static defaultProps = {
    onItemsChanged: () => {}
  };

  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    if(!_.get(this.props, 'items')) return;

    this.setState({
      items: _.cloneDeep(this.props.items)
    }, () => {
      this.props.onItemsChanged(this.state.items);
    });
  }

  moveItemInArray(array, element, delta) {
    const newArray = _.cloneDeep(array);

    const index = _.findIndex(array, {id: element.id});
    const newIndex = index + delta;

    if (newIndex < 0 || newIndex === newArray.length) return;

    var indexes = [index, newIndex].sort(); 

    newArray.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]);

    this.setState({
      items: newArray
    }, () => {
      this.props.onItemsChanged(this.state.items);
    });
  }

  moveItemUp = (item) => {
    this.moveItemInArray(this.state.items, item, -1);
  }

  moveItemDown = (item) => {
    this.moveItemInArray(this.state.items, item, 1);
  }

  removeItem = (itemId) => {
    const items = _.cloneDeep(this.state.items);
    this.setState({
      items: _.filter(items, (item) => item.id !== itemId)
    }, () => {
      this.props.onItemDeleted(itemId)
    });
  }

  generateMenuOptions = (item) => [{
    action: this.moveItemUp.bind(null, item),
    label: 'Move Up'
  }, {
    action: this.moveItemDown.bind(null, item),
    label: 'Move Down'
  }, {
    action: this.removeItem.bind(null, item.id),
    label: 'Delete'
  }];

  render() {
    return (
      <ItemList>
        {this.state.items.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Menu options={this.generateMenuOptions(item)} />
          </Item>
        ))}
      </ItemList>
    )
  }
}

export default SortableList;
