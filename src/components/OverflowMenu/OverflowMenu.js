import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

import InteractiveElement from '../InteractiveElement';
import Icons from '../icons';
import { boxShadows, colors, typography } from '../styles';

const SelectOption = styled.div`
  cursor: pointer;

  box-sizing: border-box;
  display: flex;
  padding: 0 10px;
  width: 100%;
  height: 38px;
  transition: background .25s ease-in-out;

  ${typography.subhead1}
  color: ${props => props.isDisabled ? colors.grayC : colors.selectItemColor};
  background: ${props => props.isHighlighted ? colors.hoverGray : colors.white};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background: ${props => props.isDisabled ? colors.white : colors.hoverGray};
    color: ${props => props.isDisabled ? colors.grayC : colors.selectItemColor};
  };
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: ${props => props.openUp ? 'initial' : '31px'};
  bottom: ${props => props.openUp ? '31px' : 'initial'};
  right: ${props => props.openRight ? 'auto' : '-6px'};
  left: ${props => props.openRight ? '-6px' : 'auto'};

  min-width: 120px;
  background-color: transparent;
  overflow: visible;
  z-index: 1;

  &:before {
    position: absolute;
    content: '';
    right: ${props => props.openRight ? 'auto' : '10px'};
    left: ${props => props.openRight ? '10px' : 'auto'};
    top: ${props => props.openUp ? 'auto' : '-5px'};
    bottom: ${props => props.openUp ? '-5px' : 'auto'};
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
    box-shadow: ${boxShadows.lvl20};
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: '';
    right: ${props => props.openRight ? 'auto' : '10px'};
    left: ${props => props.openRight ? '10px' : 'auto'};
    top: ${props => props.openUp ? 'auto' : '-16px'};
    bottom: ${props => props.openUp ? '-16px' : 'auto'};
    width: 0;
    height: 0;
    border-top: 8px solid ${props => props.openUp ? colors.white : 'transparent'};
    border-bottom: 8px solid ${props => props.openUp ? 'transparent' : colors.white};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

const OptionsWrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: ${boxShadows.lvl20};
`;

const SubmenuOptionsWrapper = styled.div`
  display: flex;
  background-color: ${colors.white};

`;

const OverflowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

class OverflowMenu extends React.Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    openUp: PropTypes.bool,
    openRight: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.element,
    stayOpen: PropTypes.bool
  };

  static defaultProps = {
    isDisabled: false,
    openUp: false,
    openRight: false,
    options: [],
    onChange: value => value,
    icon: <Icons.MoreVertIcon
      className="overflow-menu__icon"
      fill={colors.white80}
      size={{ width: 24, height: 24 }}
    />,
    stayOpen: false
  };

  constructor() {
    super();

    this.state = {
      menuVisible: false,
      selectedIds: []
    };
  }

  checkDocumentEvent = (event) => {
    if (this.state.menuVisible && !_.includes(event.path, this.clickEventElement)) {
      this.closeMenu();
    }
  }

  onChange = (newValue) => {
    this.props.onChange(newValue);
    this.closeMenu();
  }

  toggleMenu = () => {
    if (this.state.menuVisible) {
      this.closeMenu();
    } else if (!this.props.isDisabled) {
      this.openMenu();
    }
  }

  openMenu = () => {
    document.addEventListener('click', this.checkDocumentEvent);
    this.setState({ menuVisible: true });
  }

  closeMenu = () => {
    document.removeEventListener('click', this.checkDocumentEvent);
    this.setState({
      menuVisible: false,
      selectedIds: []
    });
  }

  handleSelectedId = (selected, depthLevel) => {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray
      })
    }
  }

  renderMenu = (options, depthLevel = 0) => {
    const menu = options.map((option, idx) => {
      const positionText = {position: 'absolute', left: '101%',  width: 'auto'}
      const mainMenu = <SelectOption
        key={idx}
        onMouseEnter={this.handleSelectedId(option.id, depthLevel)}
        onClick={option.isDisabled ? ()=> {} : option.action}
        isHighlighted={option.isHighlighted}
        isDisabled={option.isDisabled}>{option.label}</SelectOption>

      let submenu;
      if (this.state.selectedIds[depthLevel] === option.id && _.get(option,'subOptions.length',0) > 0) {
        const newDepthLevel = depthLevel + 1;
        submenu = this.renderMenu(option.subOptions, newDepthLevel);
      }
      return (
        <SubmenuOptionsWrapper>
          <OptionsWrapper >
            {mainMenu}
          </OptionsWrapper>
          {!_.isUndefined(submenu) &&
            <OptionsWrapper style={positionText}>
              {submenu}
            </OptionsWrapper>
          }
        </SubmenuOptionsWrapper>
      )
    }
    );
    return (
      <div>
        {menu}
      </div>
    );
  }

  render() {
    return (
      <OverflowWrapper
        {...this.props}
        ref={(el) => { this.clickEventElement = el }}>
        <InteractiveElement onClick={() => { this.toggleMenu(); }}>
          {this.props.icon}
        </InteractiveElement>
        {(this.state.menuVisible || this.props.stayOpen) &&
          <OptionsContainer>
            {this.renderMenu(this.props.options)}
          </OptionsContainer>}

      </OverflowWrapper>
    );
  }
}

export default OverflowMenu;
