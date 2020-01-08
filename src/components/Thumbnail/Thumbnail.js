import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  colors,
  boxShadows,
  typography,
  renderThemeIfPresentOrDefault,
  renderThemeKeyOrDefaultValue,
} from '../styles';

const Box = styled.div`
    color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black80 })};
    position: absolute;
    border-radius: 4px;
    background: ${renderThemeIfPresentOrDefault({ key:'primary05', defaultValue: colors.white })};
    box-shadow: ${boxShadows.lvl6};
    padding: ${props => props.padding || '15px'};
    ${typography.body1}

    ${props => props.dialogYCenter && `
        top: 50%;
        transform: translateY(-50%);
    `}

    ${props => props.dialogXCenter && `
        left: 50%;
        transform: translateX(-50%);
    `}

    ${props => props.dialogLeftOuter && `
        right: calc(100% + 7px);
    `}

    ${props => props.dialogRightOuter && `
        left: calc(100% + 7px);
    `}

    ${props => props.dialogLeftInner && `
        left: 0;
    `}

    ${props => props.dialogRightInner && `
        right: 0;
    `}

    ${props => props.dialogBottomOuter && `
        top: calc(100% + 7px);
    `}

    ${props => props.dialogTopOuter && `
        bottom: calc(100% + 7px);
    `};

    ${props => props.dialogBottomInner && `
        bottom: 0;
    `};

    ${props => props.dialogTopInner && `
        top: 0;
    `};
`;

const arrowSize = '6px';

const arrowUpDown = `
    border-left: ${arrowSize} solid transparent;
    border-right: ${arrowSize} solid transparent;
`;

const arrowLeftRight = `
    border-top: ${arrowSize} solid transparent;
    border-bottom: ${arrowSize} solid transparent; 
`;

const Arrow = styled.span`
    width: 0; 
    height: 0; 
    position: absolute;

    ${props => props.arrowTop && `
        ${arrowUpDown}
        border-bottom: ${arrowSize} solid ${renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white })};
        bottom: 100%;
    `}

    ${props => props.arrowBottom && `
        ${arrowUpDown}
        border-top: ${arrowSize} solid ${renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white })};
        top: 100%;
    `}

    ${props => props.arrowLeft && `
        ${arrowLeftRight}
        border-right: ${arrowSize} solid ${renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white })};
        right: 100%;
    `}

    ${props => props.arrowRight && `
        ${arrowLeftRight}
        border-left: ${arrowSize} solid ${renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white })};
        left: 100%;
    `}

    ${props => props.arrowXCenter && `
        left: 50%;
        transform: translateX(-50%);
    `};

    ${props => props.arrowYCenter && `
        top: 50%;
        transform: translateY(-50%);
    `};

    ${props => props.arrowX && `
        left: ${props.arrowX};
    `}

    ${props => props.arrowY && `
        top: ${props.arrowY};
    `}

`;

const Thumbnail = (props) =>
    <Box {..._.pick(props, [
        'dialogYCenter',
        'dialogXCenter',
        'dialogLeftOuter',
        'dialogRightOuter',
        'dialogRightInner',
        'dialogLeftInner',
        'dialogBottomOuter',
        'dialogTopOuter',
        'dialogBottomInner',
        'dialogTopInner',
        'padding'
        ])}>
        <Arrow {..._.pick(props, [
            'arrowXCenter',
            'arrowYCenter',
            'arrowBottom',
            'arrowTop',
            'arrowLeft',
            'arrowRight',
            'arrowX',
            'arrowY',
        ])}/>
        <div>
            {props.children}
        </div>
    </Box>

Thumbnail.propTypes = {
    dialogYCenter: PropTypes.bool,
    dialogXCenter: PropTypes.bool,
    dialogLeftOuter: PropTypes.bool,
    dialogRightOuter: PropTypes.bool,
    dialogLeftInner: PropTypes.bool,
    dialogRightInner: PropTypes.bool,
    dialogBottomOuter: PropTypes.bool,
    dialogTopOuter: PropTypes.bool,
    dialogBottomInner: PropTypes.bool,
    dialogTopInner: PropTypes.bool,
    arrowXCenter: PropTypes.bool,
    arrowYCenter: PropTypes.bool,
    arrowBottom: PropTypes.bool,
    arrowTop: PropTypes.bool,
    arrowLeft: PropTypes.bool,
    arrowRight: PropTypes.bool,
    arrowX: PropTypes.number,
    arrowY: PropTypes.number,
}


export default Thumbnail;
