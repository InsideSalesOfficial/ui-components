import React from 'react';
import styled, { css } from 'styled-components';

import { colors, typography } from '../styles';
import TableItem, { TableItemText, TableItemTextButton, TableItemIconButton } from './TableItem';

export const TR = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
`;

const TableItemCommon = styled(TableItem)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid ${colors.white60};
  color: ${colors.white90};
  padding: 9px 6px;
  overflow: ${(props) => {
    if (!props.overflow) {
      return 'hidden';
    }
    return 'visible';
  }};
  white-space: nowrap;
  vertical-align: middle;
  text-align: ${(props) => {
    if (props.center) {
      return 'center';
    } else if (props.right) {
      return 'right';
    }
    return 'left'
  }};
  ${(props) => {
    if (props.priority) {
      return css`
        flex-grow: ${props.priority};
        flex-basis: ${props.priority}px;
      `;      
    } else {
      return css`
        flex-grow: 1;
        flex-basis: 1px;
      `;      
    }
  }}
  ${(props) => {
    if (props.fixed) {
      return css`
        max-width: ${props.fixed}px;
        flex-shrink: 0;
      `;      
    }
  }}

  svg {
    max-width: 16px;
    fill: ${colors.white90};
    vertical-align: middle;    
  }
  ${TableItemText}, ${TableItemTextButton} {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    text-overflow: ellipsis;
    color: inherit;
    ${typography.caption}
  }
  ${TableItemTextButton} {
    cursor: pointer;
    text-align: inherit;
  }
`;

export const TH = styled(TableItemCommon)`
  color: ${colors.white60};
  ${TableItemIconButton} {
    &:hover {
      svg {
        fill: ${(props) => {
          if (props.onClick) {
            return colors.white90;
          }
          return colors.white60;
        }};
      }
    }
    &:active {
      svg {
        fill: ${(props) => {
          if (props.onClick) {
            return colors.white60;
          }
        }};
      }
    }
  }

  svg {
    fill: ${colors.white60};
  }
  ${TableItemTextButton} {
    &:hover {
      color: ${(props) => {
        if (props.onClick) {
          return colors.white90;
        }
        return colors.white60;
      }};
    }
    &:active {
      color: ${(props) => {
        if (props.onClick) {
          return colors.white60;
        }
      }};
    }
  }
`;

export const TD = styled(TableItemCommon)`
  ${TableItemText} {
    ${typography.body1}
  }
  ${TableItemTextButton} {
    ${typography.body1}
    ${(props) => {
      if (props.onClick) {
        return css`
          cursor: pointer;
          &:hover {
            color: ${colors.white};
          }
          &:active {
            color: ${colors.white60};
          }
        `;
      }
    }};
  }
`;

const FlexTable = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

TH.propTypes = {
  ...TableItem.propTypes
};

TH.defaultProps = {
  ...TableItem.defaultProps
};

export default FlexTable;
