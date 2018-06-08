
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';

import { checkDocumentEvent, openOptionsList, closeOptionsList, toggleOptionsList } from '../SelectInput';
import SelectOptions from '../SelectInput/SelectOptions';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import PropTypes from 'prop-types';

const padding = '16px';

export const Label = styled.div`
  color: ${colors.black40};
  transition: all 200ms;
  transform: translateY(-50%);
  position: absolute;
  left: ${(props) => {
    if (props.theme.leftDisplayPosition) {
      return props.theme.leftDisplayPosition;
    }

    return padding;
  }};
  top: 50%;

  ${props => props.value && `
    top: 30%;
    ${typography.caption}
  `}
`

const Caret = styled.div`
  position: absolute;
  right: 24px;
  top: ${(props) => {
    if (props.theme.caretTopPosition) {
      return props.theme.caretTopPosition;
    }

    return '50%';
  }};
  transform: translateY(-50%);
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin: auto;
    border-left: 5px transparent solid;
    border-right: 5px transparent solid;
    border-${props => props.open ? 'bottom' : 'top'}: 5px ${props => props.open ? colors.black90 : colors.black40} solid;
  }
`;

export const Value = styled.button`
  border: 0;
  display: block;
  width: 100%;
  text-align: left;
  ${typography.subhead1};
  color: ${(props) => {
    if (props.isPlaceHolder) {
      return colors.black60;
    }

    return colors.black90;
  }};
  height: 56px;
  padding: 22px ${padding} 0 ${(props) => {
    if (props.theme.leftDisplayPosition) {
      return props.theme.leftDisplayPosition;
    }

    return padding;
  }};
  background: ${(props) => {
    if (props.theme.background) {
      return props.theme.background;
    }

    return colors.lighterGray;
  }};
  box-sizing: border-box;
  border-bottom-width: ${(props) => {
    if (props.theme.borderWidth) {
      return props.theme.borderWidth;
    }

    return '2px';
  }};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.isDisabled ? 'transparent' : colors.black40};
  cursor: ${props => props.isDisabled ? 'auto' : 'pointer'};
  border-radius: ${(props) => {
    if (props.theme.borderRadius) {
      return props.theme.borderRadius;
    }

    return '2px';
  }};
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: 0;
    border-color: ${props => props.isDisabled ? 'transparent' : colors.green};
  }
`;



export const Wrapper = styled.div`
  position: relative;
  ${typography.subhead1};
  width: ${(props) => {
    if (props.theme.selectDisplayWidth) {
      return props.theme.selectDisplayWidth;
    }

    return 'auto';
  }};

  ${props => props.isDisabled && `
    opacity: 0.6;
  `}
`;

export default class SelectInputLabelBox extends React.Component {

  constructor() {
    super();
    this.state = {
      optionsListVisible: false
    }
  }

  checkDocumentEvent = (e) => { checkDocumentEvent.call(this, e) }

  openOptionsList = () => { openOptionsList.call(this) }

  closeOptionsList = () => { closeOptionsList.call(this) }

  toggleOptionsList = () => { toggleOptionsList.call(this) }

  determineLabel = () => {
    const selectedOption = _.find(this.props.options, o => o.value === this.props.value);
    return _.get(selectedOption, 'label', this.props.value);
  }

  render() {
    const optionLabel = this.determineLabel();
    return (
      <ThemeProvider theme={this.props.theme}>
        <Wrapper onClick={this.toggleOptionsList}
          {...this.props}
          ref={(el) => { this.clickEventElement = el }}
          >
          <Caret open={this.state.optionsListVisible} />
          <Label value={this.props.value}>{this.props.label}</Label>
          <Value
            open={this.state.optionsListVisible}
            isDisabled={this.props.isDisabled}
            title={optionLabel}
            isPlaceHolder={this.props.isPlaceHolder}
            className="select-input-label-box-value"
          >{optionLabel}</Value>
          <SelectOptions
            selectedOptions={this.props.value}
            promotedOptions={this.props.promotedOptions}
            onOptionUpdate={this.props.onChange}
            options={this.props.options}
            hideDivider={_.isEmpty(this.props.options)}
            visible={this.state.optionsListVisible}
            multiSelect={this.props.multiSelect}
            searchable={this.props.searchable}
          />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

SelectInputLabelBox.defaultProps = {
  value: '',
  label: '',
  isDisabled: false,
  theme: {},
  isPlaceHolder: false
}

SelectInputLabelBox.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
  })).isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isPlaceHolder: PropTypes.bool,
  multiSelect: PropTypes.bool,
  searchable: PropTypes.bool
}