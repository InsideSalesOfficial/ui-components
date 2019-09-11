import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Icons from '../icons';
import { colors, boxShadows } from '../styles';

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding-top: 2px;
  border-radius: 50%;
  border: none;
  background-color: ${colors.green};
  cursor: pointer;
  transition: box-shadow 150ms ease-in-out, background-color 100ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: ${boxShadows.lvl6};
    &:hover {
      box-shadow: ${boxShadows.lvl6};
    }
  }
  &:hover {
    box-shadow: ${boxShadows.lvl2};
    background-color: ${colors.greenDarker};
  }
  &:disabled {
    opacity: 0.4;
    box-shadow: none;
    cursor: default;
    padding: 0;
  }

  svg {
    position: absolute;
    fill: ${colors.white};
    transform: ${(props) => {
      if (props.toggled && props.isAddIcon) {
        return 'rotate(45deg)';
      } else if (!props.toggled && props.isAddIcon) {
        return 'rotate(0deg)';
      } else if (props.toggled && !props.isAddIcon) {
        return 'rotate(45deg) scale(0.5)';
      } else {
        return 'rotate(0deg) scale(1)';
      }
    }};
    opacity: ${(props) => {
      if (!props.isAddIcon) {
        if (props.toggled) {
          return 0;
        }
        return 1;
      }
    }};
    transition: transform 150ms ease-in, opacity 125ms ease-in;
  }
`;

const actionButtonSelector = 'pb-test__action-button';

const FadeInAddIcon = styled(Icons.AddIcon)`
  svg& {
    opacity: ${(props) => {
      if (props['data-toggled']) {
        return 1;
      }
      return 0;
    }};
    transform: ${(props) => {
      if (props['data-toggled']) {
        return 'rotate(45deg) scale(1)';
      } else {
        return 'rotate(0deg) scale(0.5)';
      }
    }};
  }
`;

class ActionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  debouncedOnClick = _.debounce(this.props.onClick, 175, {
    'leading': true,
    'trailing': false
  });

  render() {
    const isAddIcon = this.props.icon === 'AddIcon';
    const Icon = Icons[this.props.icon];
    return (
      <Button
        onClick={this.debouncedOnClick}
        toggled={this.props.toggled}
        isAddIcon={isAddIcon}
        disabled={this.props.disabled}
        className={this.props.className ? [this.props.className, actionButtonSelector].join(' ') : actionButtonSelector}
        title={this.props.title}
      >
        <Icon />
        {!isAddIcon &&
          <FadeInAddIcon data-toggled={this.props.toggled} />
        }
      </Button>
    );
  }
}

ActionButton.defaultProps = {
  icon: 'AddIcon',
  toggle: false,
  onClick: () => {},
  disabled: false
};

ActionButton.propTypes = {
  icon: PropTypes.string,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default ActionButton;
