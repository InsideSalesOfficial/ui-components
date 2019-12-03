import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Icons from '../icons';
import _ from 'lodash';

import { typography, fontFamilies } from '../styles/typography';
import { renderThemeIfPresentOrDefault, white, black } from '../styles/colors';

import { verifiedStates } from './constants';

const { NeuralIcon } = Icons;


const FlyoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => props.displaysAboveIcon ? 'initial' : '35px'};
  bottom: ${props => props.displaysAboveIcon ? '35px' : 'initial'};
  right: ${props => props.flyoutOffset * -1}px;
  border-radius: 3px;
  min-height: 100px;
  width: 360px;
  background-color: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: white.white })};
  overflow: visible;
  z-index: 110;
  box-shadow: 0 2px 4px 0 ${black.black14}, 0 3px 4px 0 ${black.black12}, 0 1px 5px 0 ${black.black20};
  padding: 24px;
  color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: black.black90 })};
  white-space: normal;
  font-family: ${fontFamilies.roboto};

  &:before {
    position: absolute;
    content: '';
    right: ${props => props.flyoutOffset + 5}px;
    top: ${(props) => {
      if (props.displaysAboveIcon) {
        return 'auto';
      }
      return '-5px';
    }};
    bottom: ${(props) => {
      if (props.displaysAboveIcon) {
        return '-5px';
      }
      return 'auto';
    }};
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
    box-shadow: ${(props) => {
      if (props.displaysAboveIcon) {
        return `-2px 3px 4px 0 ${black.black20}`;
      }
      return `2px -3px 4px 0 ${black.black10}`;
    }};
    z-index: -1;
    background-color: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: white.white })}
  }

  &:after {
    position: absolute;
    content: '';
    right: ${props => props.flyoutOffset + 5}px;
    top: ${(props) => {
      if (props.displaysAboveIcon) {
        return 'auto';
      }
      return '-16px';
    }};
    bottom: ${(props) => {
      if (props.displaysAboveIcon) {
        return '-16px';
      }
      return 'auto';
    }};
    width: 0;
    height: 0;
    border-top: ${(props) => {
      if (props.displaysAboveIcon) {
        return `8px solid ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: white.white })}`;
      }
      return '8px solid transparent';

    }};
    border-bottom: ${(props) => {
      if (props.displaysAboveIcon) {
        return '8px solid transparent';
      }
      return `8px solid ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: white.white })}`;

    }};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

const TopContainer = styled.div`
  padding-left: 2px;
  padding-bottom: 20px;
  display: flex;
`;

const Header = styled.div`
  ${typography.title};
  letter-spacing: 0px;
  line-height: 24px;
`;

const SubHeader = styled.div`
  ${fontFamilies.subhead3};
  color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: black.black40 })};
`;

const HeaderContainer = styled.div`
  padding-left: 17px;
`;

const NeuralMessageWrapper = styled.div`
  ${typography.body1};
  letter-spacing: 0px;
`;

export class NeuralVerifyFlyout extends React.Component {
  getDaysSinceVerified() {
    const compareDate = _.get(this.props.verifiedDetail, 'verifiedDate') || _.get(this.props.verifiedDetail, 'verifiedReasonDetail') || moment();
    return moment().diff(moment(compareDate), 'days');
  }

  getMessage() {
    const type = this.props.type === 'email' ? 'email address' : 'phone number';

    switch (this.props.verifiedState) {
      case verifiedStates.VERIFIED_HIGH:
        return `This ${type} has been verified as working within the last ${this.getDaysSinceVerified()} days and you have a high likelihood of making contact.`;
      case verifiedStates.VERIFIED:
        return `This ${type} has been verified as working within the last ${this.getDaysSinceVerified()} days.`;
      case verifiedStates.CORPORATE:
        return `This ${type} may be a common corporate ${type}.`;
      case verifiedStates.PREVIOUSLY_VERIFIED:
        return `This ${type} was last verified more than ${this.getDaysSinceVerified()} days ago.`;
      case verifiedStates.MATCHING:
        return `This ${type} matches other records elsewhere in our data set.`;
      case verifiedStates.NOT_ANSWERED:
        return 'Calls to this phone number are not typically answered.';
      case verifiedStates.STALE:
        return `Many users have attempted to ${this.props.type === 'email' ? 'contact this email address' : 'call this line'} with little to no recent success.`;
      case verifiedStates.FAX:
        return 'This phone number appears to be associated with a fax number.';
      case verifiedStates.VERIFIED_BAD:
        return this.props.type === 'email' ? `Emails sent to this email address within the last ${this.getDaysSinceVerified()} days have bounced.` :
          'This number has been reported as disconnected.';
      case verifiedStates.MOBILE:
        return 'This phone number appears to be a mobile phone number or direct dial line.';
      case verifiedStates.MOBILE_VERIFIED:
        return 'This mobile phone number has been verified as working within the last 60 days and you have a high likelihood of making contact.';
      case verifiedStates.MOBILE_NOT_ANSWERED:
        return 'Calls to this mobile phone number are not typically answered.';
      default:
        return '';
    }
  }


  getHeader() {
    switch (this.props.verifiedState) {
      case verifiedStates.VERIFIED: // Fallthrough
      case verifiedStates.VERIFIED_HIGH:
        return this.props.type === 'email' ? 'Verified Email Address' : 'Verified Number';
      case verifiedStates.CORPORATE:
        return this.props.type === 'email' ? 'Corporate Email Address' : 'Corporate Number';
      case verifiedStates.PREVIOUSLY_VERIFIED:
        return 'Previously Verified';
      case verifiedStates.MATCHING:
        return this.props.type === 'email' ? 'Matching Email Address' : 'Matching Number';
      case verifiedStates.NOT_ANSWERED:
        return 'No Answer';
      case verifiedStates.STALE:
        return this.props.type === 'email' ? 'Stale Email Address' : 'Stale Number';
      case verifiedStates.FAX:
        return 'Fax Number';
      case verifiedStates.VERIFIED_BAD:
        return this.props.type === 'email' ? 'Bad Email Address' : 'Bad Number';
      case verifiedStates.MOBILE:
        return 'Mobile Number';
      case verifiedStates.MOBILE_VERIFIED:
        return 'Verified Mobile Number';
      case verifiedStates.MOBILE_NOT_ANSWERED:
        return 'No Answer';
      default:
        return '';
    }
  }

  render() {
    return (
      <FlyoutContainer flyoutOffset={this.props.flyoutOffset} displaysAboveIcon={this.props.displaysAboveIcon}>
        <TopContainer>
          <NeuralIcon/>
          <HeaderContainer>
            <Header>{this.getHeader()}</Header>
            {this.props.location === 'crm' && <SubHeader>Powered by Playbooks</SubHeader>}
          </HeaderContainer>
        </TopContainer>
        <NeuralMessageWrapper>
          {this.getMessage()}
        </NeuralMessageWrapper>
      </FlyoutContainer>
    );
  }
}
