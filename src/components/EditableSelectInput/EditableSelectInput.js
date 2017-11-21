import React from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import { ThemeProvider } from 'styled-components';

// import { lightSelectInputTheme } from '../SelectInput/SelectInputThemes';
import SelectOptions from '../SelectInput/SelectOptions';

import EditableTextInput from './EditableTextInput';
//////////// point this to the SelectWrapper if stays the same
import EditableSelectWrapper from './EditableSelectWrapper';
// import SelectWrapper from './SelectWrapper';
// import SelectInputLabel from './SelectInputLabel';
// import SelectInputDisplay from './SelectInputDisplay';

class SelectInput extends React.Component {
  // static propTypes = {
  //   isDisabled: PropTypes.bool,
  //   options: PropTypes.array.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   selectArrowFollows: PropTypes.bool,
  //   theme: PropTypes.object,
  //   isDisabledOneOption: PropTypes.bool
  // };

  // static defaultProps = {
  //   isDisabled: false,
  //   selectArrowFollows: false,
  //   options: [],
  //   onChange: value => value,
  //   theme: lightSelectInputTheme,
  //   isDisabledOneOption: false // Prop to disable the dropdown if only one option is present
  // }

  constructor() {
    super();

    this.state = {
      optionsListVisible: false,
      valid: false,
      touched: false
    };
  }

  checkDocumentEvent = (event) => {
    const component = ReactDOM.findDOMNode(this.refs.clickEventElement);
    if (!component) {
      document.removeEventListener('click', this.checkDocumentEvent);
      return;
    }
    const clickedOutside = !component.contains(event.target);

    if (this.state.optionsListVisible && clickedOutside) {
      this.closeOptionsList();
    }
  }

  onChange = (newValue) => {
    this.props.onChange(newValue);
    this.closeOptionsList();
  }

  toggleOptionsList = () => {
    if (!this.props.wrapCloseDisabled && this.state.optionsListVisible) {
      this.closeOptionsList();
    } else if (!this.props.isDisabled && !this.state.optionsListVisible) {
      this.openOptionsList();
    }
  }

  openOptionsList = () => {
    document.addEventListener('click', this.checkDocumentEvent);
    this.setState({ optionsListVisible: true });
  }

  closeOptionsList = () => {
    document.removeEventListener('click', this.checkDocumentEvent);
    this.setState({ optionsListVisible: false });
  }

  countOptions = () => {
    const { options } = this.props;

    let optionsCount = 0;

    // Determine how many options there are
    if (options && options.length) {
      optionsCount = options.length;
    }

    return optionsCount;
  }

  determineLabel = () => {
    const { defaultLabel, options, promotedOptions, value } = this.props;

    let copiedOptions = _.map(options, _.clone);

    if (promotedOptions && promotedOptions.length) {
      copiedOptions = [...promotedOptions, ...options];
    }

    let inputLabel;
    let placeholder = 'Select';

    if (defaultLabel) {
      placeholder = defaultLabel;
    }

    // Determine what the input label should be
    if (!_.isNil(value)) {
      const optionObject = _.find(copiedOptions, { value });

      if (optionObject && optionObject.label) {
        inputLabel = optionObject.label;
      } else {
        inputLabel = placeholder;
      }
    } else {
      inputLabel = placeholder;
    }

    return inputLabel;
  }

  render() {
    // const isDisabled = this.props.isDisabled || (this.props.isDisabledOneOption && this.props.options.length <= 1);
    return (
      /*
       * Adding className to the outtermost element allows for users of this component to create a
       * styled component based on this component.
       *
       * see https://github.com/styled-components/styled-components/blob/master/docs/existing-css.md
       */
      /*<ThemeProvider theme={this.props.theme}>
        <SelectWrapper
          ref="clickEventElement" style={this.props.containerStyles || {}}
          className={this.props.className}
          id="select-input__wrapper"
          onClick={() => { if (!isDisabled) { this.toggleOptionsList(); } }}
        >
          {this.props.label &&
            <SelectInputLabel>{this.props.label}</SelectInputLabel>
          }
          <SelectInputDisplay
            label={this.determineLabel()}
            selectArrowFollows={this.props.selectArrowFollows}
            isDisabled={isDisabled}
            noCarat={this.props.noCarat}
          />
          <SelectOptions
            onOptionUpdate={this.onChange}
            promotedOptions={this.props.promotedOptions}
            options={this.props.options}
            optionsCount={this.countOptions()}
            visible={this.state.optionsListVisible} />
        </SelectWrapper>
      </ThemeProvider>*/
      <EditableSelectWrapper ref="clickEventElement">
        <EditableTextInput
          displayValue={this.determineLabel()}
          isDisabled={this.props.isDisabled}
          toggleOptionsList={this.toggleOptionsList} />
        <SelectOptions
          onOptionUpdate={this.onChange}
          promotedOptions={this.props.promotedOptions}
          options={this.props.options}
          optionsCount={this.countOptions()}
          visible={this.state.optionsListVisible} />
      </EditableSelectWrapper>
    );
  }
}

export default SelectInput;
