import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

import InteractiveElement from '../InteractiveElement';
import Icons from '../icons';
import { boxShadows, colors, typography } from '../styles';

const OverflowParent = styled.div`
  position: relative;
  display: flex;
`;

const FlexInteractiveElement = styled(InteractiveElement)`
  display: flex;
`;

const SelectOption = styled.div`
  cursor: pointer;

  box-sizing: border-box;
  display: flex;
  padding: 0 24px 0 10px;
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



  &:hover {
    background: ${props => props.isDisabled ? colors.white : colors.hoverGray};
    color: ${props => props.isDisabled ? colors.grayC : colors.selectItemColor};
  };
`;

const caretSize = 11;
const caretDiagonal = Math.round(Math.sqrt(Math.pow(caretSize, 2) * 2));


const DropdownCaret = styled.div`
  overflow: hidden;
  position: absolute;
  ${props => props.openUp ? 'bottom' : 'top'}: calc(100% - ${caretSize / 2 - 1}px);
  width: ${caretDiagonal + 15}px;
  height: ${caretDiagonal}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 2;

  &:before {
    content: '';
    width: ${caretSize}px;
    height: ${caretSize}px;
    transform: translateY(${props => props.openUp ? '-' : ''}50%) rotate(45deg);
    transform-origin: center;
    background: ${colors.white};
    box-shadow: ${boxShadows.lvl20};
    display: block;
    position: absolute;
    ${props => props.openUp ? 'top' : 'bottom'}: 0;
  }
`

const OptionsContainer = styled.div`
  position: absolute;
  top: ${props => props.openUp ? 'initial' : `calc(100% + ${caretSize}px)`};
  bottom: ${props => props.openUp ? `calc(100% + ${caretSize}px)` : 'initial'};
  right: ${props => props.openRight ? 'auto' : '-6px'};
  left: ${props => props.openRight ? '-6px' : 'auto'};
  min-width: 120px;
  background-color: transparent;
  overflow: visible;
  z-index: 1;
  box-shadow: ${boxShadows.lvl20};
`;

const OptionsWrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  background-color: ${colors.white};
  border-radius: 3px;
`;

const SubmenuOptionsWrapper = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: ${colors.white};

  &:first-child ${SelectOption} {
    margin-top: 8px;
  }

  &:last-child ${SelectOption} {
    margin-bottom: 8px;
  }
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
        <SubmenuOptionsWrapper key={idx}>
          <OptionsWrapper>
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
        <OverflowParent>
          <FlexInteractiveElement onClick={() => { this.toggleMenu(); }}>
            {this.props.icon}
          </FlexInteractiveElement>
          {(this.state.menuVisible || this.props.stayOpen) &&
              [<DropdownCaret {..._.pick(this.props, ['openUp', 'openDown'])} />,
              <OptionsContainer openUp={this.props.openUp} openRight={this.props.openRight}>
                {this.renderMenu(this.props.options)}
              </OptionsContainer>]
          }
        </OverflowParent>
      </OverflowWrapper>
    );
  }
}

export default OverflowMenu;
