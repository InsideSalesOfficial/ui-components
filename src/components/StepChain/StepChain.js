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
  border-bottom: thin solid ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black20 })};
`;

const StepWrapper = styled.div`
  position: relative;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
    align-items: flex-start;
  }
  &:last-child {
    align-items: flex-end;
  }
`;

const StepItem = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.aluminum })};
  margin: 8px;
  box-sizing: content-box;
`;

const ColoredStep = styled(StepItem)`
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
  color: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
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
    return stepLabels.reduce((acc, text, key) => {
      const keyPlus = key + 1;
      const newThing = () => {
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
    acc.push(newThing());
    stepLabels.length -1 !== key && acc.push(<Line />);
    return acc
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
