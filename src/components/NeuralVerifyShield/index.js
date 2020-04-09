import React from 'react';
import _ from 'lodash';
import styled, { withTheme } from 'styled-components';
import Icons from '../icons';

import {
  tron,
  black,
  orange,
  renderThemeKeyOrDefaultValue
} from '../styles/colors';

import { NeuralVerifyFlyout } from './neural-verify-flyout';
import { verifiedStates } from './constants';
import { getVerifiedState } from './utils';

const { VerifyFilledIcon, CautionFilledIcon, VerifyIcon,
  CompanyIcon, MobilePhoneIcon, RemoveCircleIcon, PrintIcon,
  VerifiedMobilePhoneIcon, NoAnswerIcon, NoAnswerMobileIcon, CheckmarkFilledIcon } = Icons;

const NeuralVerifiedContainer = styled.div`
  align-items: center;
  position: absolute;
`;

const iconStyle = (color, iconSize) => (
  {
    fill: color,
    height: iconSize,
    width: iconSize
  }
);

function getVerifiedIcon({ verifiedState, iconSize, theme = {} }) {
  const blueIconStyle = iconStyle(renderThemeKeyOrDefaultValue({ props: { theme }, key: 'tron01', defaultValue: tron.tron }), iconSize);
  const greyIconStyle = iconStyle(renderThemeKeyOrDefaultValue({ props: { theme }, key: 'grey', defaultValue: black.black40 }), iconSize);
  const orangeIconStyle = iconStyle(renderThemeKeyOrDefaultValue({ props: { theme }, key: 'caution01', defaultValue: orange.orange }), iconSize);

  switch (verifiedState) {
    case verifiedStates.VERIFIED_HIGH:
      return <VerifyFilledIcon style={blueIconStyle} />;
    case verifiedStates.VERIFIED:
      return <VerifyIcon style={blueIconStyle} />;
    case verifiedStates.CORPORATE:
      return <CompanyIcon style={blueIconStyle} />;
    case verifiedStates.PREVIOUSLY_VERIFIED:
      return <VerifyIcon style={greyIconStyle} />;
    case verifiedStates.MATCHING:
      return <CheckmarkFilledIcon style={greyIconStyle} />;
    case verifiedStates.NOT_ANSWERED:
      return <NoAnswerIcon style={orangeIconStyle} />;
    case verifiedStates.STALE:
      return <RemoveCircleIcon style={orangeIconStyle} />;
    case verifiedStates.FAX:
      return <PrintIcon style={orangeIconStyle} />;
    case verifiedStates.VERIFIED_BAD:
      return <CautionFilledIcon style={orangeIconStyle} />;
    case verifiedStates.MOBILE:
      return <MobilePhoneIcon style={blueIconStyle} />;
    case verifiedStates.MOBILE_VERIFIED:
      return <VerifiedMobilePhoneIcon style={blueIconStyle} />;
    case verifiedStates.MOBILE_NOT_ANSWERED:
      return <NoAnswerMobileIcon style={orangeIconStyle} />;
    default:
      return '';
  }
}


class NeuralVerifyShield extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNeuralVerifiedMessage: false,
    };

    // Throttled hover action for event tracking
    this.throttledHoverAction = _.throttle(
      this.props.hoverAction,
      3000,
      { leading: true }
    );
  }


  render() {
    const stateData = _.get(this.props, 'neuralVerified.state', 0);
    const detailData = _.get(this.props, 'neuralVerified.detail', {});
    const carrierData = _.get(this.props, 'neuralVerified.carrier', null);

    const verifiedState = getVerifiedState(stateData, detailData.verifiedReason, carrierData);
    return (verifiedState !== 0 &&
      <NeuralVerifiedContainer className={this.props.className}
        onMouseEnter={() => {
          if (this.props.allowOverflow) this.throttledHoverAction(verifiedState, this.props.location);
          this.setState({ showNeuralVerifiedMessage: true });
        }}
        onMouseLeave={() => this.setState({ showNeuralVerifiedMessage: false })}
      >
        {getVerifiedIcon({ verifiedState, iconSize: this.props.iconSize, theme: this.props.theme })}
        {this.state.showNeuralVerifiedMessage && this.props.allowOverflow &&
          <NeuralVerifyFlyout
            type={this.props.type}
            verifiedState={verifiedState}
            verifiedDetail={detailData}
            displaysAboveIcon={this.props.displaysAboveIcon}
            flyoutOffset={this.props.flyoutOffset}
            flyoutPosition={this.props.flyoutPosition}
            flyoutTop={this.props.flyoutTop}
            flyoutLeft={this.props.flyoutLeft}
            location={this.props.location}
          />
        }
      </NeuralVerifiedContainer>
    );
  }
}

NeuralVerifyShield.defaultProps = {
  location: '',
  hoverAction: () => {},
  iconSize: '24px',
  allowOverflow: false,
  displaysAboveIcon: true,
  flyoutOffset: 0,
  theme: {}
};

export default withTheme(NeuralVerifyShield);
