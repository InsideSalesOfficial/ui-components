import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class AccordionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedItem: [0]
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.expandedItem !== nextProps.expandedItem) {
      this.setState({
        expandedItem: [nextProps.expandedItem]
      });
    }
  }

  setExpandedItem = (itemIndex) => {
    let expandedItem = this.state.expandedItem;
    this.props.multipleOpen ? _.includes(expandedItem, itemIndex) ? _.pull(expandedItem, itemIndex) : expandedItem.push(itemIndex) : expandedItem = [itemIndex]
    this.setState({
      expandedItem: (this.props.canCollapse && _.includes(this.state.expandedItem, itemIndex)) ? null : expandedItem
    }, () => {
      this.props.onItemExpanded(expandedItem);
    });
  }

  render = () => (
    <div className={`accordion ${this.props.className}`} >
      {this.props.listItems.map((item, index) => (
        <div className={`accordion__item accordion__item-${index}`}
          key={`accordion-item-${index}`}>
          <div className="accordion__item__display" onClick={this.setExpandedItem.bind(null, index)}>
            {item.renderDisplay()}
          </div>
          {this.state.expandedItem.includes(index) && item.canOpen &&
            <div className="accordion__item__conent">
              {item.renderContent()}
            </div>
          }
        </div>
      ))}
    </div>
  )
}

AccordionList.defaultProps = {
  expandedItem: 0,
  onItemExpanded: () => { },
  canCollapse: false,
  multipleOpen: false
};

AccordionList.PropTypes = {
  expandedItem: PropTypes.number,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      renderDisplay: PropTypes.func.isRequired,
      renderContent: PropTypes.func.isRequired,
      canOpen: PropTypes.bool.isRequired
    })
  ).isRequired,
  onItemExpanded: PropTypes.func,
  canCollapse: PropTypes.bool
};

export default AccordionList;
