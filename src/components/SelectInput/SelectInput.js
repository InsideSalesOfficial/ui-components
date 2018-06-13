import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { ThemeProvider } from 'styled-components';

import { lightSelectInputTheme } from './SelectInputThemes';

import SelectWrapper from './SelectWrapper';
import SelectInputLabel from './SelectInputLabel';
import SelectInputDisplay from './SelectInputDisplay';
import SelectOptions from './SelectOptions';

export function checkDocumentEvent(event) {
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

export function openOptionsList() {
  document.addEventListener('click', this.checkDocumentEvent);
  this.setState({ optionsListVisible: true });
}

export function closeOptionsList() {
  document.removeEventListener('click', this.checkDocumentEvent);
  this.setState({ optionsListVisible: false });
}

export function toggleOptionsList() {
  if (!this.props.wrapCloseDisabled && this.state.optionsListVisible) {
    this.closeOptionsList();
  } else if (!this.props.isDisabled && !this.state.optionsListVisible) {
    this.openOptionsList();
  }
}

export function toggleOptionsListOnSearch(e) {
  if (!this.props.wrapCloseDisabled && this.state.optionsListVisible) {
    const clickedInsideSearch = () => {
      const clickedElement = e.target.getAttribute('name');
      return clickedElement === 'selectSearch';
    }
    if (clickedInsideSearch()) {
      return
    }
    this.closeOptionsList();
  } else if (!this.props.isDisabled && !this.state.optionsListVisible) {
    this.openOptionsList();
  }
}

class SelectInput extends React.Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    selectArrowFollows: PropTypes.bool,
    theme: PropTypes.object,
    isDisabledOneOption: PropTypes.bool,
    multiSelect: PropTypes.bool
  };

  static defaultProps = {
    isDisabled: false,
    selectArrowFollows: false,
    options: [],
    onChange: value => value,
    theme: lightSelectInputTheme,
    isDisabledOneOption: false, // Prop to disable the dropdown if only one option is present
    multiSelect: false
  }

  constructor() {
    super();

    this.state = {
      optionsListVisible: false,
      valid: false,
      touched: false,
      searchFilter: ''
    };
  }

  checkDocumentEvent = checkDocumentEvent.bind(this)

  onChange = (newValue) => {
    if(this.props.multiSelect) {
      if(_.includes(this.props.value, newValue)) {
        this.props.onChange(_.without(this.props.value, newValue));
      } else {
        this.props.onChange(_.concat(this.props.value, [newValue]));
      }
    } else {
      this.props.onChange(newValue);
      this.closeOptionsList();
    }
  }

  toggleOptionsList = (e) => {toggleOptionsListOnSearch.bind(this)(e)}

  openOptionsList = openOptionsList.bind(this);

  closeOptionsList = closeOptionsList.bind(this);

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
    const { defaultLabel, options, promotedOptions, value, multiSelect } = this.props;

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

      if (multiSelect && _.size(value)) {
        inputLabel = `${_.size(value)} Selected`;
      } else if (optionObject && optionObject.label) {
        inputLabel = optionObject.label;
      } else {
        inputLabel = placeholder;
      }
    } else {
      inputLabel = placeholder;
    }

    return inputLabel;
  }

  filterOptions = (searchFilter) => {
    this.setState({
      searchFilter
    });
  }

  filterOptionsWithSearch = (options) => _.filter(options, (option) => {
    return option.label.toLowerCase().search(this.state.searchFilter.toLowerCase()) !== -1;
  });

  render() {
    const isDisabled = this.props.isDisabled || (this.props.isDisabledOneOption && this.props.options.length <= 1);

    const options = this.filterOptionsWithSearch(this.props.options);
    const promotedOptions = this.filterOptionsWithSearch(this.props.promotedOptions);

    return (
      /*
       * Adding className to the outtermost element allows for users of this component to create a
       * styled component based on this component.
       *
       * see https://github.com/styled-components/styled-components/blob/master/docs/existing-css.md
       */
      <ThemeProvider theme={this.props.theme}>
        <SelectWrapper
          ref={(el) => { this.clickEventElement = el }}
          style={this.props.containerStyles || {}}
          className={this.props.className}
          id="select-input__wrapper"
        >
          {this.props.label && !this.props.addButtonList &&
            <SelectInputLabel>{this.props.label}</SelectInputLabel>
          }
          <div
            style={{width: '100%'}}
            className='pb-test__selectInputDisplay'
            onClick={(e) => { if (!isDisabled) { this.toggleOptionsList(e); } }}>
            <SelectInputDisplay
              defaultLabel={this.props.defaultLabel}
              label={this.determineLabel()}
              selectArrowFollows={this.props.selectArrowFollows}
              isDisabled={isDisabled}
              noCarat={this.props.noCarat}
              addButtonList={this.props.addButtonList}
            />
          </div>
          <SelectOptions
            className='pb-test__selectInputOptions'
            selectedOptions={this.props.value}
            onOptionUpdate={this.onChange}
            promotedOptions={promotedOptions}
            options={options}
            optionsCount={this.countOptions()}
            searchable={this.props.searchable}
            onSearch={this.filterOptions}
            width={this.props.selectOptionsWidth}
            visible={this.state.optionsListVisible}
            multiSelect={this.props.multiSelect}
            bottomActionArea={this.props.bottomActionArea}/>
        </SelectWrapper>
      </ThemeProvider>
    );
  }
}

export default SelectInput;
