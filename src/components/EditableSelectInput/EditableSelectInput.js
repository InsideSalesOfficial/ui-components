import React from 'react';
import PropTypes from 'prop-types';

import SelectOptions from '../SelectInput/SelectOptions';
import SelectWrapper from '../SelectInput/SelectWrapper';

import EditableTextInput from './EditableTextInput';
import {
  checkDocumentEvent,
  openOptionsList,
  closeOptionsList,
  toggleOptionsList
} from '../SelectInput';


class EditableSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsListVisible: false
    };
  }

  checkDocumentEvent = checkDocumentEvent.bind(this);

  onChange = (newValue) => {
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
    this.closeOptionsList();
  }

  toggleOptionsList = toggleOptionsList.bind(this)

  openOptionsList = openOptionsList.bind(this)

  closeOptionsList = closeOptionsList.bind(this)

  countOptions = () => {
    const { options } = this.props;

    let optionsCount = 0;

    // Determine how many options there are
    if (options && options.length) {
      optionsCount = options.length;
    }

    return optionsCount;
  }

  inputChange = (val) => {
    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }

  render() {
    const isOptionsDisabled = this.props.options.length <= 1;
    return (
      <SelectWrapper className={this.props.className}>
        <EditableTextInput
          displayValue={this.props.value}
          displayPlaceholder={this.props.placeholder}
          isDisabled={this.props.isDisabled}
          toggleOptionsList={this.toggleOptionsList}
          inputChange={this.inputChange}
          ref={(input) => { this.textInputParent = input; }}
          isOptionsDisabled={isOptionsDisabled}
          textInputType={this.props.editableTextInputType}
          toggleFocusState={this.props.toggleFocusState} />
        <SelectOptions
          ref={(options) => { this.clickEventElement = options; }}
          onOptionUpdate={this.onChange}
          optionsTitle={this.props.optionsTitle}
          promotedOptions={this.props.promotedOptions}
          options={this.props.options}
          optionsCount={this.countOptions()}
          visible={this.state.optionsListVisible} />
      </SelectWrapper>
    );
  }
}

EditableSelectInput.propTypes = {
  isDisabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  editableTextInputType: PropTypes.string
};

EditableSelectInput.defaultProps = {
  isDisabled: false,
  options: [],
  onChange: () => {}
}

export default EditableSelectInput;
