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
    <div>
      {this.props.listItems.map((item, index) => (
        <div key={`accordion-item-${index}`} onClick={this.setExpandedItem.bind(null, index)}>
          <div>
            {item.renderDisplay()}
          </div>
          {this.state.expandedItem === index && item.canOpen &&
            <div>
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
  listItems: PropTypes.array.isRequired,
  onItemExpanded: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  renderDisplay: PropTypes.func.isRequired
};

export default AccordionList;
