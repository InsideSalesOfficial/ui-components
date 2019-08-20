import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Icons from '../icons';
import _ from 'lodash';

import { colors, typography } from '../styles';

import { verifiedStates } from './constants';

const { NeuralIcon } = Icons;


const FlyoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => props.type === 'email' ? '35px' : 'initial'};
  bottom: ${props => props.type === 'email' ? 'initial' : '35px'};
  right: ${props => props.type === 'email' ? '-48px' : '0px'};
  border-radius: 3px;
  height: 154px;
  width: 360px;
  background-color: ${colors.white};
  overflow: visible;
  z-index: 1;
  box-shadow: 0 2px 4px 0 ${colors.black14}, 0 3px 4px 0 ${colors.black12}, 0 1px 5px 0 ${colors.black20};
  padding: 24px;
  color: ${colors.black90};

  &:before {
    position: absolute;
    content: '';
    right: ${props => props.type === 'email' ? '53px' : '5px'};
    top: ${(props) => {
      if (props.type === 'email') {
        return '-5px';
      }
      return 'auto';
    }};
    bottom: ${(props) => {
      if (props.type === 'email') {
        return 'auto';
      }
      return '-5px';
    }};
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
    box-shadow: ${(props) => {
      if (props.type === 'email') {
        return `2px -3px 4px 0 ${colors.black10}`;
      }
      return `-2px 3px 4px 0 ${colors.black20}`;
    }};
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: '';
    right: ${props => props.type === 'email' ? '53px' : '5px'};
    top: ${(props) => {
      if (props.type === 'email') {
        return '-16px';
      }
      return 'auto';
    }};
    bottom: ${(props) => {
      if (props.type === 'email') {
        return 'auto';
      }
      return '-16px';
    }};
    width: 0;
    height: 0;
    border-top: ${(props) => {
      if (props.type === 'email') {
        return '8px solid transparent';
      }
      return `8px solid ${colors.white}`;
    }};
    border-bottom: ${(props) => {
      if (props.type === 'email') {
        return `8px solid ${colors.white}`;
      }
      return '8px solid transparent';
    }};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

const HeaderBar = styled.div`
  padding-left: 2px;
  display: flex;
`;

const Header = styled.div`
  ${typography.title};
  letter-spacing: 0px
  line-height: 24px;
  padding-left: 17.33px;
  padding-bottom: 16px;
`;

const NeuralMessageWrapper = styled.div`
  ${typography.body1}
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
        return 'Calls to his mobile phone number are not typically answered.';
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
      <FlyoutContainer type={this.props.type}>
        <HeaderBar>
          <NeuralIcon/>
          <Header>
            {this.getHeader()}
          </Header>
        </HeaderBar>
        <NeuralMessageWrapper>
          {this.getMessage()}
        </NeuralMessageWrapper>
      </FlyoutContainer>
    );
  }
}
