import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SelectOptions from '../SelectInput/SelectOptions';
import SelectWrapper from '../SelectInput/SelectWrapper';

import EditableTextInput from './EditableTextInput';

class EditableSelectInput extends React.Component {
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
      touched: false,
      inputValue: 'Select'
    };
  }

  componentDidMount() {
    const {value} = this.props;

    if (value) {
      this.setState({
        inputValue: value
      });
    } else {
      this.setState({
        inputValue: this.determineLabel()
      });
    }
  }

  checkDocumentEvent = (event) => {
    const component = ReactDOM.findDOMNode(this.clickEventElement);
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
    if (this.props.onChange) {
      this.props.onChange(newValue);
    } else {
      this.setState({
        inputValue: _.find(this.props.options, ['value', newValue]).label
      })
    }
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

    if (this.state.inputValue) {
      placeholder = this.state.inputValue;
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
      if (!_.isEmpty(copiedOptions)) {
        inputLabel = copiedOptions[0].label
      } else {
        inputLabel = placeholder;        
      }
    }
    return inputLabel;
  }

  inputChange = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      inputValue: _.get(e, 'target.value', this.textInputParent.textInput.value)
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.inputValue);
      }
    });
  }

  render() {
    return (
      <SelectWrapper>
        <EditableTextInput
          displayValue={this.state.inputValue}
          isDisabled={this.props.isDisabled}
          toggleOptionsList={this.toggleOptionsList}
          inputChange={this.inputChange}
          ref={(input) => { this.textInputParent = input; }}/>
        <SelectOptions
          ref={(options) => { this.clickEventElement = options; }}
          onOptionUpdate={this.onChange}
          promotedOptions={this.props.promotedOptions}
          options={this.props.options}
          optionsCount={this.countOptions()}
          visible={this.state.optionsListVisible} />
      </SelectWrapper>
    );
  }
}

export default EditableSelectInput;
