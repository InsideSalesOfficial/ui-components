import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import styled, { ThemeProvider, withTheme } from 'styled-components';

import InteractiveElement from '../InteractiveElement';
import { colors, boxShadows, typography, ifThemeInPropsIsPresentUse, renderThemeIfPresentOrDefault } from '../styles';
import ArrowDropUpIcon from '../icons/ArrowDropUpIcon';
import ArrowDropDownIcon from '../icons/ArrowDropDownIcon';
import Loader from '../Loader';

import { defaultTheme, themeToThemeResolver } from './OverflowMenuButtonThemes';

const disabledState = `
  .action {
    cursor: default;
    * {
      color: ${props => themeToThemeResolver({ key: 'actionButtonTextColor', theme: props.theme })};
      ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: `fill: ${colors.white};` })}
      ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: 'fill-opacity: 0.6;' })}
    }
  }
  .caret {
    cursor: default;
    * {
      color: ${props => themeToThemeResolver({ key: 'actionButtonTextColor', theme: props.theme })}};
      ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: 'fill-opacity: 0.6;' })}
    }
  }
`;
const loadingState = ` * { cursor: default; } `;

const ActionButtonWrapper = styled(InteractiveElement)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: ${props => props.theme.actionButtonWidth};
  border-radius: 2px 0 0 2px;
  color: ${props => themeToThemeResolver({ key: 'actionButtonTextColor', theme: props.theme })};
  &:hover {
    background: ${props => (props.disabled || props.loading) ? '' : themeToThemeResolver({ key: 'actionButtonBackgroundHoverColor', theme: props.theme })};
  }
  &:hover + button {
    background: ${props => (props.disabled || props.loading) ? '' : themeToThemeResolver({ key: 'caretButtonHoverBackgroundColor', theme: props.theme })};
  }
`;

const CaretWrapper = styled(InteractiveElement)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 0 2px 2px 0;
  background: ${props => themeToThemeResolver({ key: props.disabled ? 'caretButtonDisabledBackgroundColor' : 'caretButtonBackgroundColor', theme: props.theme })};
  fill: ${props => themeToThemeResolver({ key: 'caretColor', theme: props.theme })};
`;

function renderButtonWrapperDefaultValues(props) {
  return `
    &:hover {
      .action {
        * {
          ${ifThemeInPropsIsPresentUse({ props, defaultValue: 'fill-opacity: 0.4;' })}
          ${ifThemeInPropsIsPresentUse({ props, defaultValue: `color: ${colors.white40};` })}
        }
        &:hover * {
          ${ifThemeInPropsIsPresentUse({ props, defaultValue: 'fill-opacity: 1;' })}
          ${ifThemeInPropsIsPresentUse({ props, defaultValue: `color: ${colors.white};` })}
        }
      }
      .caret {
        ${ifThemeInPropsIsPresentUse({ props, defaultValue: 'opacity: 0.4;' })}
        &:hover {
          background: ${themeToThemeResolver({ key: 'caretButtonHoverBackgroundColor', theme: props.theme })};
          ${ifThemeInPropsIsPresentUse({ props, defaultValue: 'opacity: 1;' })}
        }
      }
    }
  `;
}

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 2px;
  background: ${props => themeToThemeResolver({ key: props.disabled ? 'actionButtonDisabledBackgroundColor' : 'actionButtonBackgroundColor', theme: props.theme })};
  ${(props) => {
    if (props.disabled) return disabledState;
    else if (props.loading) return loadingState;
    return ifThemeInPropsIsPresentUse({ props, defaultValue: renderButtonWrapperDefaultValues(props) });
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
  background: ${renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
  box-shadow: ${boxShadows.lvl9};
`;

const MenuOption = styled(InteractiveElement)`
  width: 100%;
  padding: 8px 16px;
  color: ${(props) => {
    if (props.disabled) return renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.grayD });
    return renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black });
  }};
  ${props => props.disabled ? 'cursor: default;' : ''}
  ${typography.subhead1};
  &:hover {
    background: ${renderThemeIfPresentOrDefault({ key: 'white10', defaultValue: colors.hoverGray })};
  }
`;

class OverflowMenuButtonBase extends React.Component {
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
    const passedTheme = this.props.passedTheme;
    const conglomerateTheme = { ...this.props.theme, ...passedTheme }
    const shouldUseWhiteLoader = Boolean(ifThemeInPropsIsPresentUse({
      value: themeToThemeResolver({ key: 'isLoaderOnDarkBackground', theme: conglomerateTheme }), defaultValue: true, props: this.props
    }));
    return (
      <ThemeProvider theme={passedTheme}>
        <ButtonWrapper
          disabled={this.props.disabled}
          shouldHover={this.props.shouldHover}
          loading={this.props.loading}
        >
          <ActionButtonWrapper
            className={'action pb-test__overflow-menu-button-action'}
            disabled={this.props.disabled}
            id={this.props.id}
            loading={this.props.loading}
            onClick={this.props.loading ? _.noop : this.props.actionButtonOnClick}>
            {this.props.loading ? <Loader white={shouldUseWhiteLoader} small/> : this.props.content}
          </ActionButtonWrapper>
          <CaretWrapper
            className='caret pb-test__overflow-menu-button-caret'
            disabled={this.props.disabled}
            loading={this.props.loading}
            onClick={this.props.loading ? _.noop : this.caretOnClick}>
            {
              this.state.menuOpen ? <ArrowDropUpIcon className="arrow"/> : <ArrowDropDownIcon className="arrow"/>
            }
          </CaretWrapper>
          {
            this.state.menuOpen && !this.props.loading &&
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

const ThemedOverflowMenuButtonBase = withTheme(OverflowMenuButtonBase);

// NOTE: you have to do this extra component to access the global theme in the base to change the loader color
// Could be solved by fully re-writing this component to not use an internal theme-provider but its too much work
export default function OverflowMenuButton(props) {
  return <ThemedOverflowMenuButtonBase {..._.omit(props, ['theme'])} passedTheme={props.theme} />
}

OverflowMenuButton.defaultProps = {
  theme: defaultTheme,
  actionButtonOnClick: _.noop
}
