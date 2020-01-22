import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { colors, typography, renderThemeIfPresentOrDefault } from '../styles';
import Icons from '../icons';

const StepChainWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr 32px 1fr);
`;

const Number = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${props =>
    props.colorChange
      ? renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.white })
      : renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
  background-color: ${props =>
    props.colorChange
      ? renderThemeIfPresentOrDefault({ key: 'white10', defaultValue: colors.aluminum })
      : renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
  grid-column: ${props => props.column};
  ${typography.caption}
`;

const Label = styled.div`
  text-align: center;
  grid-row: 2;
  grid-column-start: ${props => props.column - 1};
  grid-column-end: ${props => props.column + 2};
  color: ${props =>
    props.colorChange
      ? renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })
      : renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black90 })};
  ${typography.body2}
`;

const Line = styled.div`
  :first-child {
    border-top: none;
  }
  :last-child {
    border-top: none;
  }
  width: 100%;
  align-self: center;
  border-top: 2px solid
    ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black20 })};
  grid-column: ${props => props.column};
`;

const StyledCheckMark = styled(Icons.CheckmarkFilledIcon)`
  fill: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
`;

class StepChain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  checkMark = () => <StyledCheckMark size={{ width: '20px', height: '20px' }} />;

  chainItems = () => {
    const { stepLabels, currentStep } = this.props;
    return stepLabels.reduce((array, label, index) => {
      const col = index * 3 + 2;
      const checkOrKey = currentStep <= index + 1 ? index + 1 : this.checkMark();
      const colorChange = currentStep <= index;
      array.push(
        <Line column={col - 1} key={`pb-stepchain-line-${col - 1}`} />,
        <Number column={col} colorChange={colorChange} key={`pb-stepchain-number-${col}`}>
          {checkOrKey}
        </Number>,
        <Label column={col} colorChange={colorChange} key={`pb-stepchain-label-${col}`}>
          {label}
        </Label>,
        <Line column={col + 1} key={`pb-stepchain-line-${col + 1}`} />
      );
      return array;
    }, []);
  };

  render() {
    return (
      <StepChainWrapper className={this.props.className}>{this.chainItems()}</StepChainWrapper>
    );
  }
}

StepChain.defaultProps = {
  stepLabels: ['a', 'b'],
  currentStep: 1,
};

StepChain.propTypes = {
  stepLabels: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default StepChain;
