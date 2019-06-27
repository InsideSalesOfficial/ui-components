import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import './index.css';

import { colors, fontFamilies, fontSizes, fontWeights } from '../styles';

const RangeSliderWrap = styled.div`  
  font-family: ${fontFamilies.roboto};
  .input-range {
    .input-range__track {
      transition: left 0s, width 0s;
    }
    &:active {
      .input-range__track {
        transition: left 0.2s ease-out, width 0.2s ease-out;
      }
      .input-range__slider-container {
        transition: left 0.2s ease-out;
      }
    }
  }

  .input-range__slider {
    background-clip: padding-box;
    background-color: ${colors.green};
    
    border-radius: 50%;
    border-color: ${colors.green};

    box-sizing: border-box;
    margin-left: 0;
    margin-top: -7px;
    
    cursor: pointer;
    pointer-events: inherit;
    
    width: 12px;
    height: 12px;
    
    overflow: visible;
    outline: none;
  }

  .input-range__slider:hover {
    box-shadow: 0 0 0 5px ${colors.green20};
  }

  .input-range__track {
    background: ${colors.black12};
    height: 2px;
  }

  .input-range__track--active {
    background: ${colors.green};
  }

  .input-range__label {
    color: ${colors.black};
  }

  .input-range__label--min,
  .input-range__label--max {
    display: none;
  }

  .input-range__slider-container {
    transition: left 0s;
    &:active {
      transition: left 0.2s ease-out;
    }
  }

  .input-range__slider-container .input-range__label--value {
    left: 6px;
    top: -33px;
  }

  .input-range__slider-container:last-child .input-range__label--value {
    bottom: -31px;
    top: unset;
  }
`;

const Label = styled.label`
  color: ${colors.aluminum};
  display: block;
  font-size: ${fontSizes.xxSmall};
  font-weight: ${fontWeights.light};
  margin: 0 0 30px 0;
`;

/** A range slider UI element. */
class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({
        value: this.props.initialValue
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { initialValue } = this.props;
    if (nextProps.initialValue && !_.isEqual(nextProps.initialValue, initialValue)) {
      this.setState({
        value: nextProps.initialValue
      });
    }
  }

  setValue = (value) => {
    this.setState({ value }, () => {
      this.props.onRangeUpdate(value);
    });
  }

  render() {
    return (
      <RangeSliderWrap className={this.props.className}>
        {this.props.label &&
          <Label>{this.props.label}</Label>
        }
        <InputRange
          formatLabel={this.props.formatLabel}
          maxValue={this.props.maxValue}
          minValue={this.props.minValue}
          onChange={this.setValue}
          className="pb-test__ranger-slider"
          step={this.props.step}
          value={this.state.value} />
      </RangeSliderWrap>
    );
  }
}

RangeSlider.defaultProps = {
  formatLabel: value => `${value}`,
  initialValue: 0,
  maxValue: 100,
  minValue: 0,
  onRangeUpdate: () => {},
  step: 1
};

RangeSlider.propTypes = {
  /** Function that is passed the slider handle's label and returns the label however user formats it */
  formatLabel: PropTypes.func,
  /** A single integer or an object of integers */
  initialValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]),
  /** Function to execute when range value updates */
  onRangeUpdate: PropTypes.func,
  /** Label of above the range slider component */
  label: PropTypes.string,
  /** Maximum value of the range slide */
  maxValue: PropTypes.number,
  /** Minimum value of the range slider */
  minValue: PropTypes.number,
  /** Range step value for the step slider */
  step: PropTypes.number
};

export default RangeSlider;
