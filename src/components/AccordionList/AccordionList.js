import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedItem: null
    };
  }

  componentDidMount() {
    this.setExpandedItem(this.props.expandedItem);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.expandedItem !== nextProps.expandedItem) {
      this.setState({
        expandedItem: nextProps.expandedItem
      });
    }
  }

  setExpandedItem = (itemIndex) => {
    this.setState({
      expandedItem: itemIndex
    }, () => {
      this.props.onItemExpanded(itemIndex);
    });
  }

  render = () => (
    <div className={`accordion ${this.props.className}`} >
      {this.props.listItems.map((item, index) => (
        <div className={`accordion__item accordion__item-${index}`}
          key={`accordion-item-${index}`}
          onClick={this.setExpandedItem.bind(null, index)}>
          <div className="accordion__item__display">
            {item.renderDisplay()}
          </div>
          {this.state.expandedItem === index && item.canOpen &&
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
  onItemExpanded: () => {}
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
  onItemExpanded: PropTypes.func
};

export default AccordionList;
