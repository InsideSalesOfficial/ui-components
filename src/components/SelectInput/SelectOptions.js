import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import {
  colors,
  typography,
  boxShadows,
  renderThemeIfPresentOrDefault,
  renderThemeKeyOrDefaultValue,
  ifThemeInPropsIsPresentUse,
  ifThemeIsPresentUse,
} from '../styles';

import { OverflowWrapper } from './SelectInputThemes';

import Checkbox from '../Checkbox';

import TextInput, { TextBox } from '../TextInput';

import ButtonBar from '../ButtonBar';

export const SelectOptionHeight = 36;

const StyledSearchInput = styled(TextInput)`
  ${TextBox} { ${ifThemeIsPresentUse({ value: 'background-color: transparent;'  })} }
`;

const SelectOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  background: ${renderThemeIfPresentOrDefault({ key: 'primary05', defaultValue: colors.white })};
  position: absolute;
  top: ${(props) => {
    if (props.theme.optionListPosition) return props.theme.optionListPosition;
    return 'calc(100%)';
  }};
  ${props => {
    if (!props.theme.optionListPositionLeft) return '';
    return `left: ${props.theme.optionListPositionLeft};`;
  }}
  width: ${props => props.width ? `${props.width}px` : '100%'};
  z-index: 2;
  box-shadow: ${(props) => {
    if (props.theme.optionsListShadow && props.visible) return props.theme.optionsListShadow;
    else if (props.visible) return boxShadows.lvl8;
    return 'none';
  }};
  border-radius: 2px;
  transform-origin: center 8px 0px;
  will-change: transform, opacity, visibility;
  ${(props) => {
    if (props.visible) {
      return `
        animation-name: open;
        animation-duration: 0.16s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      `;
    }
    if (!props.visible && props.dirty) {
      return `
        animation-name: close;
        animation-duration: 0.1s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      `;
    }
  }}

  @keyframes open {
    0% { transform: translateY(-24px) scaleY(0.4); opacity: 0; visibility: hidden; }
    40% { opacity: 1; }
    100% { transform: translateY(0) scaleY(1); opacity: 1; visibility: visible; }
  }

  @keyframes close {
    0% { transform: translateY(0); opacity: 1; visibility: visible; }
    100% { transform: translateY(-4px); opacity: 0; visibility: hidden; }
  }
`;

const SelectOptionsWrapper = styled.div`
  width: 100%;
  max-height: ${props => props.maxHeight};
  transform: translateZ(0);
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: ${renderThemeIfPresentOrDefault({ key: 'primary05', defaultValue: colors.white })};
    border-left: none;
    margin-right: 10px;
    width: 10px;
    height: 10px
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })};
    border: 1px solid transparent;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const SelectOption = styled.div`
  display: flex;
  align-items: center;
  ${typography.subhead1}
  width: 100%;
  line-height: ${(props) => {
    if (props.theme.optionHeight) return `${props.theme.optionHeight}px`;
    return `${SelectOptionHeight}px`;
  }};
  box-sizing: border-box;
  border-bottom: ${(props) => {
    if (props.theme.optionBorderSeparator) return ifThemeInPropsIsPresentUse({ props, value: `1px solid ${props.theme.white10}`, defaultValue: props.theme.optionBorderSeparator });
    return 'none';
  }};
  opacity: ${(props) => {
    if (props.visible) return 1;
    return 0;
  }};

  padding: ${(props) => {
    if (props.noPadding) return '0';
    if (props.lowPadding) return '0 4px';
    if (props.theme.optionPadding) return props.theme.optionPadding;
    return '0 24px';
  }};

  color:
  ${(props) => {
    if (props.disabled) return renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.middleGray });
    else if (props.theme.optionTextColor) return renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: props.theme.optionTextColor });
    else if (props.theme.textColor) return renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: props.theme.textColor });
    return renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: colors.selectItemColor })
  }};

  cursor: ${(props) => {
    if (props.disabled) return 'default';
    return 'pointer';
  }};

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
    /* accounts for when a border bottom is applied on the theme */
    border-bottom: none;
  }

  ${(props) => {
    if (!props.disabled) {
      return `&:hover {
        background: ${renderThemeKeyOrDefaultValue({ props, key: 'white10', defaultValue: colors.gray90 })};
        color: ${renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: colors.selectItemColor })};
      };`;
    }
  }}
`;

const PromotedOptions = styled.div`
  border-bottom: ${props => (props.listLength === 0 || props.hideDivider) ? '0' : `1px solid ${renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.barLightGray })}`};
  margin-bottom: ${props => props.hideDivider ? '0' : '8px'};
  width: 100%;
`;

const BottomActionAreaWrapper = styled.div`
  padding: 10px;
`;

const BottomActionAreaDivider = styled.hr`
  height: 1px;
  background-color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })};
  color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })};
`;

const OptionsTitle = styled.div`
  height: 24px;
	width: 100%;
	color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: 'rgba(0,0,0,0.87)' })};
	font-family: Roboto;
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
  padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 25px;
`;

class SelectOptions extends React.Component {

  constructor() {
    super();
    this.state = {
      inputUsed: false
    };
  }

  optionElement = (keyID, option) => {
    const { onOptionUpdate, options, promotedOptions, multiSelect, selectedOptions } = this.props;
    const clonedOptionItem = typeof (option.label) === 'string' ? <OverflowWrapper>{option.label}</OverflowWrapper> : option.label;
    const optionsLength = _.get(options, 'length', 0) + _.get(promotedOptions, 'length', 0);
    const delay = {
      transition: `opacity 0.3s ease-in-out ${((keyID + 1) / (optionsLength + 1)) * 0.284}s, background 0.2s ease-in-out`
    };

    const optionSelected = multiSelect && _.includes(selectedOptions, option.value);
    const titleInfo = typeof (option.label) === 'string' ? option.label : option.optionLabel;

    const disabled = option.disabled || this.props.isDisabled;
    return (
      <SelectOption
        className={'pb-option'}
        key={option.keyID || keyID}
        visible={this.props.visible}
        style={delay}
        disabled={disabled}
        noPadding={option.noPadding}
        lowPadding={this.props.lowPadding}
        title={titleInfo}
        onClick={() => {
          if (!disabled) {
            onOptionUpdate(option.value);
          }
        }}>
          {multiSelect &&
          <Checkbox
            disabled={disabled}
            checked={optionSelected}
            onClick={() => {
              if (!disabled) {
                onOptionUpdate(option.value);
              }
            }}/>
          }
          {clonedOptionItem}
          {option.showImage && this.props.image}
        </SelectOption>
    );
  };

  onPrimaryActionClick = () => {
    if (this.props.closeAfterClick) {
      this.props.closeOptionsList();
    }
    this.props.onPrimaryActionClick();
  }

  onSecondaryActionClick = () => {
    if (this.props.closeAfterClick) {
      this.props.closeOptionsList();
    }
    this.props.onSecondaryActionClick();
  }

  renderOptions = () => {
    const { options, promotedOptions } = this.props;
    if (_.isEmpty(options) && _.isEmpty(promotedOptions)) {
      return this.optionElement(undefined, { value: 'select', label: 'Select', disabled: true });
    }
    const numberOfPomoted = _.get(promotedOptions, 'length', 0);
    return (
      options.map((option, idx) => this.optionElement(idx + numberOfPomoted, option))
    );
  };

  renderPromotedOptions = () => {
    const { promotedOptions, hideDivider } = this.props;
    if (_.get(promotedOptions, 'length')) {
      return (
        <PromotedOptions listLength={_.size(promotedOptions)} hideDivider={hideDivider}>
          { promotedOptions.map((option, idx) => this.optionElement(idx, option)) }
        </PromotedOptions>
      );
    }
  }

  renderOptionsTitle = () => {
    if (!this.props.optionsTitle) return null;

    return (
      <OptionsTitle>{this.props.optionsTitle}</OptionsTitle>
    );
  }

  renderSearch = () => {
    if (!this.props.searchable) return null;

    return (
      <div style={{ padding: '0 24px' }} >
        <StyledSearchInput
          label="Label"
          name="selectSearch"
          onChange={this.props.onSearch}
          visible={this.props.visible}
          search
        />
      </div>
    );
  }

  componentDidUpdate() {
    // Check to see if user has opened input, to know if it's okay to run close animation. Not good to run close animation on load.
    if (this.props.visible && !this.state.inputUsed) {
      this.setState({
        inputUsed: true
      });
    }
  }

  render() {
    return (
      <SelectOptionsContainer
      dirty={this.state.inputUsed}
      {...this.props}
      ref={this.props.optionsRef}
      >
        {this.renderOptionsTitle()}
        <SelectOptionsWrapper {...this.props}>
          {this.renderSearch()}
          {this.renderPromotedOptions()}
          {this.renderOptions()}
        </SelectOptionsWrapper>
        {this.props.bottomActionArea &&
          <BottomActionAreaWrapper>
            <BottomActionAreaDivider/>
            {this.props.bottomActionArea}
          </BottomActionAreaWrapper>
        }
        {this.props.showButtonBar &&
          <BottomActionAreaWrapper>
            <ButtonBar
            primaryActionText={this.props.primaryActionText}
            secondaryActionText={this.props.secondaryActionText}
            onPrimaryActionClick={this.onPrimaryActionClick}
            onSecondaryActionClick={this.onSecondaryActionClick}/>
          </BottomActionAreaWrapper>
        }

      </SelectOptionsContainer>
    );
  }
}

SelectOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  promotedOption: PropTypes.objectOf(PropTypes.string),
  options: PropTypes.array.isRequired,
  hideDivider: PropTypes.bool,
  optionsCount: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  multiSelect: PropTypes.bool,
  maxHeight: PropTypes.string.isRequired,
  optionsRef: PropTypes.func,
  closeOptionsList: PropTypes.func,
  primaryActionText: PropTypes.string,
  secondaryActionText: PropTypes.string,
  onPrimaryActionClick: PropTypes.func,
  onSecondaryActionClick: PropTypes.func,
  promotedOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
    disabled: PropTypes.bool
  }))
};

SelectOptions.defaultProps = {
  onClick: _.noop,
  options: [],
  optionsCount: 0,
  visible: false,
  multiSelect: false,
  maxHeight: '200px',
  bottomActionArea: null,
  optionsRef: _.noop,
  primaryActionText: '',
  secondaryActionText: '',
  onPrimaryActionClick: () => {},
  onSecondaryActionClick: () => {},
};

export default SelectOptions;
