import { colors } from '../styles';
import Icons from '../icons';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';


const SearchBarContainer = styled.div`
    height: 36px;
    border: 1px solid;
    border-color: ${(props) => { return props.theme.borderColor || colors.white60; }};
    background: ${(props) => { return props.theme.background || colors.white10; }};
    border-radius: 3px;
    position: relative;
    width: 100%;
`;


const SearchIconWrapper = styled(Icons.SearchMaterialIcon)`
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${(props) => { return props.theme.iconColor || colors.white60; }};
`;

const SearchBarText = styled.input`
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => { return props.theme.valueColor || colors.white60; }};
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
    &::placeholder {
    color: ${(props) => { return props.theme.placeholderColor || colors.white60; }};
    }
`;

const SearchClearContent = styled(Icons.CloseIcon)`
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      optionsListVisible: false,
      value: this.props.value || ''
    };
  }

  onChange = (e) => {
    _.invoke(e, 'preventDefault');
    const value =  _.get(e, 'target.value', this.textInputEl.value)
    this.setState({ value });
    _.invoke(this, 'props.onChange', value);
  }

  clearSearch = () => {
    this.setState({ value: '' })
    _.invoke(this, 'props.onChange', '')
  }

  render() {
    const size = { width: `${this.props.iconSize}px`, height: `${this.props.iconSize}px` };
    return (
        <ThemeProvider theme={this.props.theme}>
            <SearchBarContainer>
                <SearchIconWrapper size={size} />
                {this.props.enabled &&
                    <SearchBarText
                        value={this.state.value}
                        placeholder={this.props.placeholder} onChange={this.onChange}
                        ref={(input) => { this.textInputEl = ReactDOM.findDOMNode(input); }}/>}
                {_.size(this.state.value) > 0 &&
                <SearchClearContent onClick={this.clearSearch} fill={colors.white90}/>}
            </SearchBarContainer>
        </ThemeProvider>
    );
  }
}

SearchBox.propTypes = {
  enabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  iconSize: PropTypes.number
};

SearchBox.defaultProps = {
  placeholder: 'Search',
  value: '',
  theme: {},
  enabled: true,
  onChange: () => {},
  iconSize: 20
};


export default SearchBox;
