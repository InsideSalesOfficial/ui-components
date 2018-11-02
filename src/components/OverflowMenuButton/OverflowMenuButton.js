import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import styled, { ThemeProvider } from 'styled-components';
import InteractiveElement from '../InteractiveElement';
import { colors, boxShadows, typography } from '../styles';
import ArrowDropUpIcon from '../icons/ArrowDropUpIcon';
import ArrowDropDownIcon from '../icons/ArrowDropDownIcon';

const ActionButtonWrapper = styled(InteractiveElement)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: ${props => props.theme.actionButtonWidth ? props.theme.actionButtonWidth : '88px'};
  border-radius: 2px 0 0 2px;
  background: ${(props) => {
    if (props.theme.actionButtonBackgroundColor && !props.disabled) {
      return props.theme.actionButtonBackgroundColor;
    }
    if (!props.disabled) {
      return colors.green;
    }
    if (props.theme.actionButtonDisabledBackgroundColor && props.disabled) {
      return props.theme.actionButtonDisabledBackgroundColor;
    }

    return colors.disabledGreen;
  }};
  ${(props) => {
    if (props.disabled) {
      return `
        cursor: default;
        * {
          fill: ${props.theme.actionButtonDisabledFillColor};
        }
      `;
    }

    return '';
  }}
`;

const CaretWrapper = styled(InteractiveElement)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 0 2px 2px 0;
  background: ${(props) => {
    if (props.theme.caretButtonBackgroundColor && !props.disabled) {
      return props.theme.caretButtonBackgroundColor;
    }
    if (!props.disabled) {
      return colors.greenB;
    }
    if (props.theme.caretButtonDisabledBackgroundColor && props.disabled) {
      return props.theme.caretButtonDisabledBackgroundColor;
    }

    return colors.disabledGreenB;
  }};
  ${props => props.disabled ? 'cursor: default;' : ''}
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  ${(props) => {
    if (!props.disabled && props.shouldHover) {
      return `
        &:hover {
          .action {
            * {
              color: ${colors.white40};
              fill-opacity: 0.4;
            }
            &:hover * {
              color: ${colors.white};
              fill-opacity: 1;
            }
          }
          .caret {
            background: ${props => props.theme.caretButtonBackgroundColor ? props.theme.caretButtonBackgroundColor : colors.greenBWithOpacity40};
            .arrow {
              fill-opacity: 0.4;
            }
            &:hover {
              background: ${props => props.theme.caretButtonBackgroundColor ? props.theme.caretButtonBackgroundColor : colors.greenC};
              .arrow {
                fill-opacity: 1;
              }
            }
          }
        }
      `;
    }
  }}
`;

const OverflowMenuWrapper = styled.div`
  position: absolute;
  bottom: ${props => props.openDirection === 'up' ? '100%' : 'auto'};
  top: ${props => props.openDirection === 'up' ? 'auto' : '100%'};
  right: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  background: ${colors.white};
  box-shadow: ${boxShadows.lvl9};
`;

const MenuOption = styled(InteractiveElement)`
  width: 100%;
  padding: 8px 16px;
  color: ${(props) => {
    if (props.disabled) return colors.grayD;
    return colors.black;
  }};
  ${props => props.disabled ? 'cursor: default;' : ''}
  ${typography.subhead1};
  &:hover {
    background: ${colors.hoverGray};
  }
`;

export default class OverflowMenuButton extends React.Component {
  constructor() {
    super();
    this.overflowMenu = null;
    this.setOverflowMenuRef = element => {
      this.overflowMenu = element;
    };

    this.state = {
      menuOpen: false
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.checkDocumentEvent);
  }

  caretOnClick = () => {
    const currentMenuOpenState = this.state.menuOpen;
    if (currentMenuOpenState === true) {
      this.closeOverflowMenu();
      return;
    }

    this.openOverflowMenu();
  }

  checkDocumentEvent = (event) => {
    const component = ReactDOM.findDOMNode(this.overflowMenu);
    if (!component) {
      document.removeEventListener('click', this.checkDocumentEvent);
      return;
    }
    const clickedOutside = !component.contains(event.target);
    if (this.state.menuOpen && clickedOutside) {
      this.closeOverflowMenu();
    }
  }

  openOverflowMenu = () => {
    document.addEventListener('click', this.checkDocumentEvent);
    this.setState({
      menuOpen: true
    });
  }

  closeOverflowMenu = () => {
    document.removeEventListener('click', this.checkDocumentEvent);
    this.setState({
      menuOpen: false
    });
  }

  optionClick = (option) => () => {
    if (!option.disabled) {
      this.closeOverflowMenu();
    }

    if (_.isFunction(option.onClick)) {
      option.onClick();
    }
  } 

  getMenuOptions = () => _.map(this.props.options, option => (
    <MenuOption disabled={option.disabled} onClick={this.optionClick(option)}>
      {option.content}
    </MenuOption>
  ))

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <ButtonWrapper
          disabled={this.props.disabled}
          shouldHover={this.props.shouldHover}>
          <ActionButtonWrapper
            className='action'
            disabled={this.props.disabled}
            onClick={this.props.actionButtonOnClick}>
            {this.props.content}
          </ActionButtonWrapper>
          <CaretWrapper
            className='caret'
            disabled={this.props.disabled}
            onClick={this.caretOnClick}>
            {
              this.state.menuOpen ? <ArrowDropUpIcon className="arrow" fill={colors.white}/> : <ArrowDropDownIcon className="arrow" fill={colors.white}/>
            }
            
          </CaretWrapper>
          {
            this.state.menuOpen &&
            <OverflowMenuWrapper
              ref={this.setOverflowMenuRef}
              openDirection={this.props.openDirection}>
              {this.getMenuOptions()}
            </OverflowMenuWrapper>
          }
        </ButtonWrapper>
      </ThemeProvider>
    )
  }
}

OverflowMenuButton.defaultProps = {
  theme: {},
  actionButtonOnClick: _.noop
}
