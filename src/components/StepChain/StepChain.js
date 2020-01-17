import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import {
  colors,
  typography,
  renderThemeIfPresentOrDefault,
} from '../styles';
import Icons from '../icons';

const StepChainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  align-self: flex-start;
  padding-top: 20px;
  border-bottom: 2px solid ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black20 })};
`;

const StepWrapper = styled.div`
  position: relative;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepItem = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.white })};
  background-color: ${renderThemeIfPresentOrDefault({ key: 'white10', defaultValue: colors.aluminum })};
  margin: 8px;
  box-sizing: content-box;
`;

const ColoredStep = styled(StepItem)`
  color: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
  background-color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
`;

const StepText = styled.span`
  position: absolute;
  display: inline-block;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin: auto;
  width: 100%;
  text-align: center;
  ${typography.caption}
`;

const StyledCheckMark = styled(Icons.CheckmarkFilledIcon)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  fill: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
`;

const StepName = styled.div`
  text-align: center;
  color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })};
  white-space: nowrap;
  ${typography.body2}
`;

const DarkStepName = styled(StepName)`
  color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black90 })};
`;

class StepChain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  checkMark = () => (<StyledCheckMark size={{width: '20px', height: '20px'}} />);

  chainItems = () => {
    const { stepLabels, currentStep } = this.props;
    return stepLabels.reduce((array, text, key) => {
      const keyPlus = key + 1;
      const step = () => {
        if (currentStep >= keyPlus) {
        const checkOrKey = (currentStep === keyPlus) ? keyPlus : this.checkMark();
        return (
          <StepWrapper key={key}>
            <ColoredStep>
              <StepText>{checkOrKey}</StepText>
            </ColoredStep>
            <DarkStepName>{text}</DarkStepName>
          </StepWrapper>
        );
      }
      return (
        <StepWrapper key={key}>
          <StepItem>
            <StepText>{keyPlus}</StepText>
          </StepItem>
          <StepName>{text}</StepName>
        </StepWrapper>
      );
    }
    array.push(step());
    stepLabels.length - 1 !== key && array.push(<Line />);
    return array
  }, [])
  };

  render() {
    return (
      <StepChainWrapper className={this.props.className}>
        {this.chainItems()}
      </StepChainWrapper>
    );
  }
}

StepChain.defaultProps = {
  stepLabels: ['a','b'],
  currentStep: 1
};

StepChain.propTypes = {
  stepLabels: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired
};

export default StepChain;
