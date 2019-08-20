import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Icons from '../icons';

import { colors } from '../styles';

import { NeuralVerifyFlyout } from './neural-verify-flyout.js';
import { verifiedStates } from './constants';
import { getVerifiedState } from './utils';

const { VerifyFilledIcon, CautionFilledIcon, VerifyIcon,
  CompanyIcon, MobilePhoneIcon, RemoveCircleIcon, PrintIcon,
  VerifiedMobilePhoneIcon, NoAnswerIcon, NoAnswerMobileIcon, CheckmarkFilledIcon } = Icons;

const NeuralVerifiedContainer = styled.div`

  align-items: center;
  position: relative;
  top: ${(props) => {
    if (props.small) return '0px';
    return '0';
}};
  right: ${(props) => {
    if (props.small) return '14px';
    return '0';
}};
`;

const blueIconStyle = {
  fill: colors.neuralBlue,
  height: '24px',
  width: '24px'
};

const greyIconStyle = {
  fill: colors.black40,
  height: '24px',
  width: '24px'
};

const orangeIconStyle = {
  fill: colors.orange,
  height: '24px',
  width: '24px'
};

const blueIconStyleSmall = {
  fill: colors.neuralBlue,
  height: '20px',
  width: '20px'
};

const greyIconStyleSmall = {
  fill: colors.black40,
  height: '20px',
  width: '20px'
};

const orangeIconStyleSmall = {
  fill: colors.orange,
  height: '20px',
  width: '20px'
};

class NeuralVerifyISC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNeuralVerifiedMessage: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const previousVerifiedState = _.get(this.props, 'neuralVerified.state');
    const previousVerifiedDetail = _.get(this.props, 'neuralVerified.detail');
    const previousCarrier = _.get(this.props, 'neuralVerified.carrier', null);

    const nextVerifiedState = _.get(nextProps, 'neuralVerified.state', 0);
    const nextVerifiedDetail = _.get(nextProps, 'neuralVerified.detail', {});
    const nextCarrier = _.get(nextProps, 'neuralVerified.carrier', null);

    if (!this.state.neuralVerifiedState || previousVerifiedState !== nextVerifiedState || _.get(previousVerifiedDetail, 'verifiedReason') !== _.get(nextVerifiedDetail, 'verifiedReason') ||
        previousCarrier !== nextCarrier) {
      const neuralVerifiedState = getVerifiedState(nextVerifiedState, nextVerifiedDetail.verifiedReason, nextCarrier);
      this.setState({ neuralVerifiedState });
    }
  }

  getVerifiedIcon() {
    switch (this.state.neuralVerifiedState) {
      case verifiedStates.VERIFIED_HIGH:
        return <VerifyFilledIcon style={this.props.small ? blueIconStyleSmall : blueIconStyle} />;
      case verifiedStates.VERIFIED:
        return <VerifyIcon style={this.props.small ? blueIconStyleSmall : blueIconStyle} />;
      case verifiedStates.CORPORATE:
        return <CompanyIcon style={this.props.small ? blueIconStyleSmall : blueIconStyle} />;
      case verifiedStates.PREVIOUSLY_VERIFIED:
        return <VerifyIcon style={this.props.small ? greyIconStyleSmall : greyIconStyle} />;
      case verifiedStates.MATCHING:
        return <CheckmarkFilledIcon style={this.props.small ? greyIconStyleSmall : greyIconStyle} />;
      case verifiedStates.NOT_ANSWERED:
        return <NoAnswerIcon style={this.props.small ? orangeIconStyleSmall : orangeIconStyle} />;
      case verifiedStates.STALE:
        return <RemoveCircleIcon style={this.props.small ? orangeIconStyleSmall : orangeIconStyle} />;
      case verifiedStates.FAX:
        return <PrintIcon style={this.props.small ? orangeIconStyleSmall : orangeIconStyle} />;
      case verifiedStates.VERIFIED_BAD:
        return <CautionFilledIcon style={this.props.small ? orangeIconStyleSmall : orangeIconStyle} />;
      case verifiedStates.MOBILE:
        return <MobilePhoneIcon style={this.props.small ? blueIconStyleSmall : blueIconStyle} />;
      case verifiedStates.MOBILE_VERIFIED:
        return <VerifiedMobilePhoneIcon style={this.props.small ? blueIconStyleSmall : blueIconStyle} />;
      case verifiedStates.MOBILE_NOT_ANSWERED:
        return <NoAnswerMobileIcon style={this.props.small ? orangeIconStyleSmall : orangeIconStyle} />;
      default:
        return '';
    }
  }

  trackNeuralVerify () {
    this.props.trackNeuralVerify(this.state.neuralVerifiedState, this.props.location);
  } 

  render() {
    const verifiedState = this.state.neuralVerifiedState;
    const verifiedDetail = _.get(this.props.neuralVerified, 'detail', {});
    return (verifiedState !== 0 &&
          <NeuralVerifiedContainer
            small={this.props.small}
            onMouseEnter={() => {
              if (this.props.allowOverflow) this.trackNeuralVerify();
              this.setState({ showNeuralVerifiedMessage: true });
            }}
            onMouseLeave={() => this.setState({ showNeuralVerifiedMessage: false })}
          >
            {this.getVerifiedIcon()}
            {this.state.showNeuralVerifiedMessage && this.props.allowOverflow &&
              <NeuralVerifyFlyout
                type={this.props.type}
                verifiedState={verifiedState}
                verifiedDetail={verifiedDetail}
              />
            }
          </NeuralVerifiedContainer>
    );
  }
}

NeuralVerifyISC.defaultProps = {
  location: ''
};

export default NeuralVerifyISC;
