import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { checkDocumentEvent, openOptionsList, closeOptionsList, toggleOptionsList } from '../SelectInput';
import SelectOptions from '../SelectInput/SelectOptions';
import {
  colors,
  typography,
  renderThemeKeyOrDefaultValue,
} from '../styles';

export const buttonAnimationTimeSeconds = 2;

const ButtonBase = styled.button`
  animation: ${(props) => {
    if (props.fade) {
      return 'fade';
    }

    return 'none';
  }} ${buttonAnimationTimeSeconds}s;

  --background: ${(props) => {
    if (props.theme.gray) {
      return renderThemeKeyOrDefaultValue({ props, key: 'noValue', defaultValue: colors.grayB });
    }

    return renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green });
  }};
  background: var(--background);
  color: ${(props) => {
    if (props.theme.gray) {
      return renderThemeKeyOrDefaultValue({ props, key: 'noValue', defaultValue: colors.black60 });
    }

    return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white90 });
  }};

  transition: filter .25s ease-in-out, box-shadow .25s ease-in-out;

  &:active {
    background: var(--background);
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24);
  }

  cursor: pointer;

  border: none;

  border-radius: 2px 0 0 2px;

  height: 36px;
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
  ${typography.subhead1}

  filter: none;

  padding: 0;
  margin: 0;
`;

const LeftIconSpan = styled.span`
  display: inline;
  position: relative;
  top: 3px;
  padding: 0 10px 0 0;
`;

const CaretButton = styled(ButtonBase)`
  background-color: ${(props) => {
    if (props.theme.gray) {
      return colors.grayB;
    }

    return renderThemeKeyOrDefaultValue({ props, key: 'brand02', defaultValue: colors.greenB });
  }};
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
    border-${props => props.open ? 'bottom' : 'top'}: 5px ${(props) => {
      if (props.theme.gray) {
        return renderThemeKeyOrDefaultValue({ props, key: 'noValue', defaultValue: colors.black60 });
      }

      return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white });
    }} solid;
  }
`;

const Dropdown = styled(SelectOptions)``;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24);
  &:hover {
    ${ButtonBase}:not(:hover) {
      * {
        opacity: 0.8;
      }
    }

    ${CaretButton}:not(:hover) {
      opacity: 0.8;
    }
  }
`;

export default class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    const selectedOption = _.find(props.options, (option) => {
      return option.value === props.value;
    });

    this.state = {
      optionsListVisible: false,
      dropdownActive: false,
      leaveDropdownOpenClickEventAttached: false,
      selectedOption: selectedOption || props.options[0],
      dropdownId: _.uniqueId('dropdown-button_'),
      bodyClickHandler: this.clickOutsideDropdownHandler.bind(this),
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.state.bodyClickHandler);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.state.bodyClickHandler);
  }

  checkDocumentEvent (e) {
    checkDocumentEvent.call(this, e)
  }

  clickOutsideDropdownHandler = (event) => {
    const clickedInsideComponent = event.target.closest(`#${this.state.dropdownId}`)
    if (this.state.dropdownActive && !clickedInsideComponent) {
      this.toggleOptionsList();
    }
  }

  openOptionsList (event) {
    // Make Wrapper active
    this.setState({
      dropdownActive: true,
    });

    openOptionsList.call(this);
  }

  closeOptionsList () {
    // Make wrapper innactive
    this.setState({
      dropdownActive: false,
    });
    closeOptionsList.call(this);
  }

  toggleOptionsList () {
    toggleOptionsList.call(this)
  }

  updateOption (value) {
    this.setState({
      value,
      selectedOption: _.find(this.props.options, (option) => {
        return option.value === value;
      }),
    });

    if (this.state.dropdownActive) {
      this.toggleOptionsList();
    }
  }

  getLabel () {
    // Get the selected option or return the first as a default
    const selectedOption = _.find(this.props.options, (option) => {
      return option.value === this.props.value;
    }) || this.props.options[0];
    return selectedOption.label || this.props.value || 'Please Select an Option'
  }

  handleBaseButtonClick () {
    if (this.state.dropdownActive) {
      this.toggleOptionsList();
    }
    this.props.onClick(this.state.selectedOption);
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Wrapper id={this.state.dropdownId} isActive={this.state.dropdownActive}>
          <ButtonBase
            className="pb-test__dropdown-base-button"
            onClick={this.handleBaseButtonClick.bind(this)}
          >
            {this.props.icon &&
              <LeftIconSpan>
                {this.props.icon}
              </LeftIconSpan>
            }
            <CenteredSpan>
              {this.state.selectedOption.label}
            </CenteredSpan>
          </ButtonBase>
          <CaretButton
            className="pb-test__dropdown-caret"
            onClick={this.toggleOptionsList.bind(this)}
            ref={(el) => { this.clickEventElement = el }}>
            <CenteredSpan>
              &nbsp;
              <Caret open={this.state.optionsListVisible} />
            </CenteredSpan>
          </CaretButton>
          <Dropdown
            selectedOptions={this.props.value}
            promotedOptions={this.props.promotedOptions}
            onOptionUpdate={this.updateOption.bind(this)}
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
  theme: {},
}

DropdownButton.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
  })).isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
}
