import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { colors, typography } from '../styles';
import Icons from '../icons';

const StepChainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 20px;
    border-bottom: thin solid ${colors.black20};
  }
`;

const StepWrapper = styled.div`
  position: relative;
  &:first-child::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 40px;
    top: 0;
    background-color: ${colors.white};
  }
  &:last-child::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 40px;
    top: 0;
    right: 0;
    background-color: ${colors.white};
  }
`;

const StepItem = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.black40};
  margin: auto;
  margin-bottom: 8px;
  border: 8px solid ${colors.white};
  box-sizing: content-box;
`;

const GreenStep = styled(StepItem)`
  background-color: ${colors.green};
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
  color: ${colors.white};
  ${typography.caption}
`;

const StyledCheckMark = styled(Icons.CheckmarkFilledIcon)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  fill: ${colors.white};
`;

const StepName = styled.div`
  text-align: center;
  color: ${colors.black40};
  ${typography.body2}
`;

const DarkStepName = styled(StepName)`
  color: ${colors.black90};
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
    return _.map(stepLabels, (text, key) => {
      const keyPlus = key + 1;

      if (currentStep >= keyPlus) {
        const checkOrKey = (currentStep === keyPlus) ? keyPlus : this.checkMark();
        return (
          <StepWrapper key={key}>
            <GreenStep>
              <StepText>{checkOrKey}</StepText>
            </GreenStep>
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
  )};

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
