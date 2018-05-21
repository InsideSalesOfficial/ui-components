import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';

import { checkDocumentEvent, openOptionsList, closeOptionsList, toggleOptionsList } from '../SelectInput';
import SelectOptions from '../SelectInput/SelectOptions';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import PropTypes from 'prop-types';

export const buttonAnimationTimeSeconds = 2;
const padding = '16px';

const WrapperHoverStyles = (props) => {
  console.log(props);
  return `
  box-shadow: ${(props.loading || props.fade || props.disabled || props.flat) ?
    0 :
    '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)'};

    button {
      background: ${(props.flat) ?
        'rgba(58,182,118,0.12)' :
        'var(--background)'};

      filter: ${(props.loading || props.fade || props.disabled) ?
        'none' :
        'brightness(0.9)'};
    }
`;
}
const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${(props) => {
    if (props.isActive) {
      return WrapperHoverStyles(props);
    }
  }}
  &:hover {
    ${(props) => {
      return WrapperHoverStyles(props);
    }}
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

const ButtonBase = styled.button`
  animation: ${(props) => {
    if (props.fade) {
      return 'fade';
    }

    return 'none';
  }} ${buttonAnimationTimeSeconds}s;

  --background: ${(props) => {
    if (props.flat) {
      return 'none';
    }

    if (props.danger) {
      return colors.red;
    }

    if (props.disabled || props.fade) {
      return colors.green50;
    }

    if (props.neuralytics) {
      return colors.neuralBlue;
    }

    return colors.green;
  }};
  background: var(--background);

  transition: filter .25s ease-in-out, box-shadow .25s ease-in-out;

  &:active {
    background: ${(props) => {
      if (props.flat) {
        return 'rgba(58,182,118,0.24)';
      }

      return 'var(--background)';
    }};

    box-shadow: ${(props) => {
      if (props.loading || props.fade || props.disabled || props.flat) {
        return 0;
      }

      return '0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)';
    }};
  }

  cursor: ${(props) => {
    if (props.disabled || props.fade || props.loading) {
      return 'default';
    }
    return 'pointer';
  }};

  border: ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `1px solid ${colors.green30}`;
      }
      return `1px solid ${colors.green}`;
    }
    return 'none';
  }};

  border-radius: 2px 0 0 2px;
  color: ${colors.white90};

  height: 36px;
  line-height: 24px;
  outline: 0;

  width: auto;
  min-width: 88px;
  padding: 0 16px;

  align-items: center;
  justify-content: center;
`;

const CenteredSpan = styled.span`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  font-family: 'isdc-roboto', 'Roboto', sans-serif;
  ${typography.body2}

  filter: none;

  padding: 0;
  margin: 0;
`;

const CaretButton = styled(ButtonBase)`
  border-radius: 0 2px 2px 0;
  width: 36px;
  min-width: unset;
  border-left: solid 1px rgba(0, 0, 0, 0.2);
`;

const Caret = styled.div`
  transform: translateY(-50%);
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: -15px;
    left: -3px;
    width: 0;
    height: 0;
    margin: auto;
    border-left: 5px transparent solid;
    border-right: 5px transparent solid;
    border-${props => props.open ? 'bottom' : 'top'}: 5px ${props => props.open ? colors.black90 : colors.black40} solid;
  }
`;

const Dropdown = styled(SelectOptions)`
`;

export default class DropdownButton extends React.Component {
  constructor() {
    super();
    this.state = {
      optionsListVisible: false,
      dropdownActive: false,
    }
  }

  checkDocumentEvent = (e) => { checkDocumentEvent.call(this, e) }

  openOptionsList = () => {
    console.log('make wrapper active');
    this.setState({
      dropdownActive: true,
    });
    openOptionsList.call(this);
  }

  closeOptionsList = () => {
    console.log('make wrapper not active');
    this.setState({
      dropdownActive: false,
    });
    closeOptionsList.call(this);
  }

  toggleOptionsList = () => { toggleOptionsList.call(this) }

  determineLabel = () => {
    const selectedOption = _.find(this.props.options, o => o.value === this.props.value);
    return _.get(selectedOption, 'label', this.props.value);
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Wrapper isActive={this.state.dropdownActive}>
          <ButtonBase>
            <CenteredSpan>
              {this.props.label}
            </CenteredSpan>
          </ButtonBase>
          <CaretButton onClick={this.toggleOptionsList} {...this.props} ref={(el) => { this.clickEventElement = el }}>
            <CenteredSpan>
              &nbsp;
              <Caret open={this.state.optionsListVisible} />
            </CenteredSpan>
          </CaretButton>
          <Dropdown
            selectedOptions={this.props.value}
            promotedOptions={this.props.promotedOptions}
            onOptionUpdate={this.props.onChange}
            options={this.props.options}
            hideDivider={_.isEmpty(this.props.options)}
            visible={this.state.optionsListVisible}
          />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

DropdownButton.defaultProps = {
  value: '',
  label: '',
  isDisabled: false,
  theme: {},
  isPlaceHolder: false
}

DropdownButton.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
  })).isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isPlaceHolder: PropTypes.bool
}
