import styled from 'styled-components';
import React from 'react';
import _ from 'lodash';

import { typography, colors } from '../styles';
import MiniInput from '../MiniInput/MiniInput';
import Icons from '../icons';

const PaginatedControlsWrapper = styled.div`
  width: 182px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  ${typography.bodyCompact}
  color: ${colors.white90};
`;

const StyledBodyText = styled.span`
  ${typography.bodyCompact}
  color: ${colors.white90};
  ${props => props.disabled && `opacity: 0.4;`}
`;

const StyledBodyTextWithSpacing = styled(StyledBodyText)`
  margin: 0 12px;
`;

const StyledArrowBack = styled(Icons.ArrowBack)`
  margin-left: 8px;
  fill: ${props => props.disabled ? colors.white20 : colors.white};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

const StyledArrowForward = styled(Icons.ArrowForward)`
  margin-left: 8px;
  fill: ${props => props.disabled ? colors.white20 : colors.white};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: props.currentPage, focused: false };
  }

  onPageRequest = (value) => {
    let currentPage = value;
    if (value > this.props.totalPages) currentPage = this.props.totalPages;
    else if (value <= 0 && !_.isEmpty(value)) currentPage = 1;

    this.setState({ currentPage });
  }

  render() {
    const { totalPages } = this.props;

    return (
      <MiniInput
        type="number"
        name="CurrentPageNumber"
        value={this.state.focused ? this.state.currentPage : this.props.currentPage}
        disabled={totalPages === 1}
        onChange={this.onPageRequest}
        onEnterUp={() => !_.isInteger(this.state.currentPage) ? _.noop : this.props.requestPage(Number(this.state.currentPage))}
        onFocus={() => this.setState({focused: true, currentPage: this.props.currentPage})}
        onBlur={() => this.setState({focused: false})}
      />
    );
  }
}

// TODO disable text box when there are 1 of 1 pages
export default function PaginationControls({ currentPage, totalPages, isRequestPageValid, requestPage }) {
  const disabled = currentPage === totalPages;
  return (
    <PaginatedControlsWrapper>
      <PageSelector
        currentPage={currentPage}
        totalPages={totalPages}
        isRequestPageValid={isRequestPageValid}
        requestPage={requestPage}
      />
      <StyledBodyTextWithSpacing disabled={disabled}>of</StyledBodyTextWithSpacing>
      <StyledBodyText disabled={disabled}> {totalPages} </StyledBodyText>
      <NavigationArrows
        currentPage={currentPage}
        totalPages={totalPages}
        advanceAPage={() => currentPage >= totalPages ? _.noop : requestPage(Number(currentPage) + 1)}
        goBackAPage={() => currentPage <= 1 ? _.noop : requestPage(Number(currentPage) - 1)}
      />
    </PaginatedControlsWrapper>
  );
}

function NavigationArrows({ currentPage, totalPages, advanceAPage, goBackAPage }) {
  return (
    <span>
      <StyledArrowBack disabled={currentPage === 1} onClick={goBackAPage} />
      <StyledArrowForward disabled={currentPage === totalPages} onClick={advanceAPage} />
    </span>
  );
}
