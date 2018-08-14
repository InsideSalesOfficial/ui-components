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
      expandedItem: (this.props.canCollapse && this.state.expandedItem === itemIndex) ? null : itemIndex
    }, () => {
      this.props.onItemExpanded(itemIndex);
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
  onItemExpanded: () => { },
  canCollapse: false
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
