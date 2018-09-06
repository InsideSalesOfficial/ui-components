import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { colors, typography } from '../styles';
import Icons from '../icons';

import SelectInputLabel from './SelectInputLabel';
import { OverflowWrapper } from './SelectInputThemes';
import { SelectOptionHeight } from './SelectOptions';

const Input = styled.div`
  width: ${(props) => {
    if (props.theme.inputWidth) {
      return props.theme.inputWidth;
    }
    return '100%';
  }};
  background: ${(props) => {
    if (props.theme.background) {
      return props.theme.background;
    }

    return colors.white10;
  }};
  border-radius: 2px;
  box-sizing: border-box;
  border-bottom: ${(props) => {
    if (props.theme.borderColor) {
      return `1px solid ${props.theme.borderColor}`;
    }

    return 0;
  }};

  padding-left: ${(props) => {
    if (props.theme.noLeftPadding) return `${0}px`;
    return '10px';
  }};

  padding-right: ${(props) => {
    if (props.theme.inputPaddingRight) return `${props.theme.inputPaddingRight}px`;
    return '10px';
  }};

  color: ${(props) => {
    if (!props.isDisabled && props.theme.textColor) return props.theme.textColor;
    if (!props.isDisabled) return props.theme.inputColor;
    return props.theme.disabledInputColor;
  }};
  cursor: ${(props) => {
    if (!props.isDisabled) return 'pointer';
    return 'default';
  }};

  display: flex;
  justify-content: ${(props) => {
    if (props.selectArrowFollows) return 'flex-start';
    return 'space-between';
  }};
  align-items: center;


  height: ${(props) => {
    if (props.theme.optionHeight === 'auto') return 'auto';
    if (props.theme.optionHeight) return `${props.theme.optionHeight}px`;
    return `${SelectOptionHeight}px`;
  }};

  min-height: ${(props) => {
    if (props.theme.optionMinHeight) return `${props.theme.optionMinHeight}px`;
    return 0;
  }};

  transition: ${(props) => {
    if (props.theme.transition) {
      return props.theme.transition;
    }
    return 'background .25s ease-in-out';
  }};

  &:focus {
    color: ${(props) => {
      if (props.isDisabled && props.theme.disabledInputColor) {
        return props.theme.disabledInputColor;
      } else if (props.theme.focusTextColor) {
        return props.theme.focusTextColor;
      }
    }};

    .input-carat {
      border-top: ${(props) => {
        if (props.isDisabled && props.theme.disabledSelectArrowColor) return `5px solid ${props.theme.disabledSelectArrowColor}`;
        else if (props.theme.focusSelectArrowColor) {
          return `5px solid ${props.theme.focusSelectArrowColor}`;
        }
      }};
    }
  }

  &:hover {
    background: ${(props) => {
      if (props.theme.background) {
        return props.theme.background;
      }

      return colors.white20;
    }};

    color: ${(props) => {
      if (props.isDisabled && props.theme.disabledInputColor) {
        return props.theme.disabledInputColor;
      } else if (props.theme.hoverTextColor) {
        return props.theme.hoverTextColor;
      }
    }};

    .input-carat {
      border-top: ${(props) => {
        if (props.isDisabled && props.theme.disabledSelectArrowColor) return `5px solid ${props.theme.disabledSelectArrowColor}`;
        else if (props.theme.hoverSelectArrowColor) {
          return `5px solid ${props.theme.hoverSelectArrowColor}`;
        }
      }};
    }
  }
  &:focus {
    box-shadow: ${(props) => {
      if (!props.theme) {
        return `inset 0 1px 1px transparent, 0 0 5px ${colors.white60}`;
      }
    }};
    outline: none;
  }
`;

const Carat = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${(props) => {
    if (props.isDisabled && props.theme.disabledSelectArrowColor) return `5px solid ${props.theme.disabledSelectArrowColor}`;
    else if (props.theme.iconColor) return `5px solid ${props.theme.iconColor}`;
    else if (props.theme.selectArrowColor) return `5px solid ${props.theme.selectArrowColor}`;
  }};

  position: ${(props) => {
    if (props.theme.iconPosition) return props.theme.iconPosition;
    return 'relative';
  }};
  margin-left: ${(props) => {
    if (props.theme.iconMargin) return props.theme.iconMargin;
    if (props.selectArrowFollows) return '11px';
    return '0px';
  }};
  display: ${(props) => {
    if (!props.noCarat && (!props.isDisabled || props.theme.caratVisibleWhenDisabled)) return 'block';
    return 'none';
  }};
  flex-shrink: 0;
  right: ${(props) => {
    if (props.theme.iconRightPosition) return props.theme.iconRightPosition;
    return 'unset';
  }};
  transition: ${(props) => {
    if (props.theme.caratTransition) {
      return props.theme.caratTransition;
    }
  }};
`;

const Label = styled.div`
  margin: 0;
  width: 100%;
  padding-right: ${(props) => {
    if (props.theme.textPaddingRight) return props.theme.textPaddingRight;
    return 0;
  }};
  padding-left: ${(props) => {
    return props.theme.textPaddingLeft || 0;
  }};
  text-transform: ${(props) => {
    if (props.theme.textTransform) return props.theme.textTransform;
    return 'inherit';
  }};

  vertical-align: middle;

  ${(props) => {
    if (props.theme.textTypography) {
      return props.theme.textTypography;
    }
    return typography.subhead1;
  }};
`;

const AddButton = styled.div`
  ${typography.body2};
  color: ${colors.green};
  padding-left: 32px;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class SelectInputDisplay extends React.Component {
  render() {
    const { onClick, label, isDisabled, selectArrowFollows, noCarat, defaultLabel } = this.props;
    const clonedLabel = typeof (label) === 'string' ? <OverflowWrapper>{label}</OverflowWrapper> : React.cloneElement(label, { isClickable: true });

    return (
      <div style={{ width: '100%' }}>

        {this.props.addButtonList &&
          <AddButton><Icons.AddCircleIcon fill={colors.green} size={{ width: 24, height: 24 }} /> {defaultLabel}</AddButton>
        }
        {!this.props.addButtonList &&
          <Input
            id="select-input__input"
            onClick={onClick}
            tabIndex={(isDisabled) ? -1 : 0}
            selectArrowFollows={selectArrowFollows}
            isDisabled={isDisabled}
          >
            <LabelWrapper>
              {this.props.headerLabel && !this.props.addButtonList &&
                <SelectInputLabel>{this.props.headerLabel}</SelectInputLabel>
              }
              <Label title={typeof (label) === 'string' ? label : _.get(label, 'props.label')}>{clonedLabel}</Label>
            </LabelWrapper>
            <Carat isDisabled={isDisabled} selectArrowFollows={selectArrowFollows} noCarat={noCarat} className="input-carat" />
          </Input>
        }
      </div>
    );
  }
}

SelectInputDisplay.propTypes = {
  label: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  headerLabel: PropTypes.any,
  value: PropTypes.string
};

SelectInputDisplay.defaultProps = {
  label: 'Select',
  headerLabel: '',
  onClick: () => {},
  value: 'select',
};

export default SelectInputDisplay;
