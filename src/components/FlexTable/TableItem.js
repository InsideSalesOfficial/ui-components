import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../icons';
import InteractiveElement from '../InteractiveElement';

const hiddenOrVisible = (props) => {
  if (!props.overflow) {
    return 'hidden';
  }
  return 'visible';
}

export const TableItemText = styled.div`
  overflow: ${(props) => {
    return hiddenOrVisible(props);
  }};
`;

export const TableItemTextButton = styled(InteractiveElement)`
  overflow: ${(props) => {
    return hiddenOrVisible(props);
  }};
`;

export const TableItemIconButton = styled(InteractiveElement)`
  display: contents;
`;

const findIconEl = (props) => {
  const IconItem = Icon[props.icon];
  if (props.onClick) {
    return (<TableItemIconButton onClick={props.onClick}><IconItem/></TableItemIconButton>);
  }
  return (<IconItem/>);
}

const findTextEl = (props) => {
  if (props.onClick) {
    return (
      <TableItemTextButton onClick={props.onClick} overflow={props.overflow}>{props.children}</TableItemTextButton>
    );
  }
  return(
    <TableItemText overflow={props.overflow}>{props.children}</TableItemText>
  );
}

const findChildEl = (props) => {
  if (props.icon) {
    return (
      <div className={props.className}>
        {findIconEl(props)}
      </div>
    );
  }
  return (
    <div className={props.className}>
      {findTextEl(props)}
    </div>
  );
}

const TableItem = ({ ...props }) => {
  return findChildEl(props);
}

TableItem.defaultProps = {
  priority: 1,
  center: false,
  right: false,
};

TableItem.propTypes = {
  fixed: PropTypes.number,
  priority: PropTypes.number,
  center: PropTypes.bool,
  right: PropTypes.bool,
  icon: PropTypes.string
};

export default TableItem;
