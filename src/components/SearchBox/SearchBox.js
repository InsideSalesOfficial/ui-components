import { colors } from '../styles';
import Icons from '../icons';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


const SearchBarContainer = styled.div`
    height: 36px;
    border: 1px solid;
    border-color: ${(props) => { return props.theme.onWhite ? colors.grayC : colors.white60; }};
    background: ${colors.white10};
    border-radius: 3px;
    position: relative;
    width: 100%;
`;

const SearchIconWrapper = styled(Icons.SearchMaterialIcon)`
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${(props) => { return props.theme.onWhite ? colors.grayC : colors.white60; }};
`;

const SearchBarText = styled.input`
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => { return props.theme.onWhite ? colors.grayC : colors.white60; }};
    width: 100%;
    height: 100%;
    padding-right: 8px;
    padding-left: 40px;
    background: none;
    box-sizing: border-box;
    line-height: 19px;
    margin: 0;
    outline: 0;
    border: 0;

    ${_.map(['::-webkit-input-placeholder', '::-moz-placeholder', ':-ms-input-placeholder', ':-moz-placeholder'], selector => `
      ${selector} {
        color: ${(props) => { return props.theme.onWhite ? colors.grayC : colors.white60; }};
        }
        `).join('')}
`;

const SearchClearContent = styled(Icons.CloseIcon)`
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const SearchBox = (props) => {
    const size = { width: `${props.iconSize}px`, height: `${props.iconSize}px` };
    return (
        <ThemeProvider theme={props.theme}>
        <SearchBarContainer>
            <SearchIconWrapper size={size} />
            {props.enabled &&
                <SearchBarText
                    onWhite={props.onWhiteBg}
                    value={props.value}
                    placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)}/>}
            {props.value.length > 0 &&
            <SearchClearContent onClick={props.clearSearch} fill={colors.white90}/>}
        </SearchBarContainer>
        </ThemeProvider>
    );
}

SearchBox.propTypes = {
  enabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  clearSearch: PropTypes.func,
  iconSize: PropTypes.number
};

SearchBox.defaultProps = {
  placeholder: 'Search',
  value: '',
  theme: {},
  enabled: true,
  onChange: () => {},
  clearSearch: () => {},
  iconSize: 20
};


export default SearchBox;
