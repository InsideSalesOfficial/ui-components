import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  colors,
  renderThemeKeyOrDefaultValue,
  renderThemeIfPresentOrDefault,
  ifThemeInPropsIsPresentUse
} from '../styles';

const SliderBase = styled.label`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  height: 14px;
  position: relative;
  width: 37px;
  ${props => ifThemeInPropsIsPresentUse({ props, value: props.disabled ? 'opacity: 0.6;' : '' })}
`;

const SliderInput = styled.input`
  display: none;
`;

function renderDefaultSliderKnobColors(props) {
  if (props.disabled) return colors.grayC;
  if (props.checked) return colors.green;
  return colors.lightGray;
}

function renderBrandedSliderKnobColors(props) {
  if (!props.checked) return props.theme.white40;
  return props.theme.brand01;
}

const SliderTrack = styled.div`
  background-color: ${props => {
    if (!props.checked) return renderThemeKeyOrDefaultValue({ props, key: 'white10', defaultValue: colors.grey });
    return renderThemeKeyOrDefaultValue({ props, key: 'brand03', defaultValue: colors.green70 });
  }};
  border-radius: 34px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;

  &:before {
    background-color: ${props => ifThemeInPropsIsPresentUse({ props, value: renderBrandedSliderKnobColors(props), defaultValue: renderDefaultSliderKnobColors(props) })};
    border-radius: 50%;
    box-shadow: 0 1px 1px ${renderThemeIfPresentOrDefault({ key: 'black', defaultValue: colors.black })};
    content: "";
    height: 20px;
    left: 0px;
    position: absolute;
    top: -3px;
    transform: ${(props) => {
      if (props.checked) {
        return 'translateX(17px)';
      }

      return 'translateX(0)';
    }};
    transition: .4s;
    width: 20px;
  }
`;

class ToggleSlider extends React.PureComponent {
  render() {
    return (
      <SliderBase disabled={this.props.disabled}>
        <SliderInput
          className="pb-test__toggle-slider"
          type="checkbox"
          disabled={this.props.disabled}
          onChange={this.props.toggle}
          checked={this.props.checked} />
        <SliderTrack checked={this.props.checked} disabled={this.props.disabled} />
      </SliderBase>
    );
  }
}

ToggleSlider.defaultProps = {
  /** Function to execute when toggle is clicked */
  toggle: () => {},
  /** Boolean of whether the toggle is on */
  checked: false,
  disabled: false
};

ToggleSlider.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default ToggleSlider;
