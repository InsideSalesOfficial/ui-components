import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { colors } from '../styles';

const DialogWrapper = styled.div`
  position: ${(props) => {
    if (props.onStoryBook) {
      return 'relative';
    }
    return 'fixed';
  }};
  display: flex;
  align-items: ${(props) => {
    if (props.center) {
      return 'center';
    }
    return 'flex-start';
  }};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: ${(props) => {
    if (props.center) {
      return '0';
    }
    return '70px 0 50px 0;';
  }};
  z-index: 900050;
`;

const DialogBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.black50};
`;

const DialogBase = styled.div`
  width: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 16px;
  margin: 0 auto;
  margin-top: ${(props) => {
    if (props.center) {
      return '0';
    }
    return '102px';
  }};

  background: ${colors.white};
  box-shadow: 0 15px 12px 0 rgba(0,0,0,0.12), 0 19px 38px 0 rgba(0,0,0,0.3);
  border-radius: 2px;
  z-index: 2;
`;


class Modal extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.message_dialog_background).addEventListener('click', this.clickHandler);
    document.addEventListener('keydown', this.clickHandler);
    document.addEventListener('keyup', this.enterKeyHandler);
    
    const focusableElements = this.focusManagement();
    if(!focusableElements) { return; }
    const firstFocusableEl = focusableElements.firstTab;
    if (firstFocusableEl.id !== 'secondary-button') {
      firstFocusableEl.focus();
    } else {
      // if first focusable element is the cancel/secondary button, remove focus
      document.activeElement.blur();
    }
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.refs.message_dialog_background).removeEventListener('click', this.clickHandler);
    document.removeEventListener('keydown', this.clickHandler);
    document.removeEventListener('keyup', this.enterKeyHandler);
  }

  focusManagement() {
    const modal = ReactDOM.findDOMNode(this.refs.message_dialog_component);
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    if(!_.size(focusableElements)) { return null }
    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];
    this.setState({
      firstTabStop,
      lastTabStop
    });
    return { firstTab: firstTabStop, lastTab: lastTabStop };
  }

  enterKeyHandler = (event) => {
    if (event.key === 'Enter' && _.isFunction(this.props.onPrimaryActionClick) && event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'TEXTAREA') {
      this.props.onPrimaryActionClick();
    }
  }

  clickHandler = (event) => {
    if (event) {
      const firstTabStop = this.state.firstTabStop;
      const lastTabStop = this.state.lastTabStop;
      if ((event.type === 'click' || event.key === 'Escape') && _.isFunction(this.props.onSecondaryActionClick)) {
        this.props.onSecondaryActionClick();
      }
      if (event.key === 'Tab') {
        // SHIFT + TAB
        if (event.shiftKey) {
          if (document.activeElement === firstTabStop) {
            event.preventDefault();
            lastTabStop.focus();
          }
        // TAB
        } else if (document.activeElement === lastTabStop) {
          event.preventDefault();
          firstTabStop.focus();
        }
      }
    }
  }

  render() {
    const {
      center,
      children,
      ...props
    } = this.props;
    return (
      <DialogWrapper ref="message_dialog_wrapper" center={center} {...props}>
        <DialogBackground ref="message_dialog_background" />
        <DialogBase ref="message_dialog_component" center={center}>
            {children}
        </DialogBase>
      </DialogWrapper>
    );
  }
}

Modal.propTypes = {
    center: PropTypes.bool,
    onStoryBook: PropTypes.bool
}


export default Modal;
