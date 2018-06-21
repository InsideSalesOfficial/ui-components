import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../styles';
import TextInput, { TextInputWrapper, InputItem, TextLabel } from '../TextInput/TextInput';
import { defaultTheme } from './TextInputBoxThemes';

const TextBox = styled.div`
    background-color: ${props => props.theme.background};
    border-bottom: thin solid ${colors.black40};
    border-radius: 2px;
    border-width: 2px; 
    border-color: ${(props) => {
    if (props.error) {
        return colors.red;
    } else if (props.isFocused) {
        return colors.green;
    } else if (props.disabled) {
        return colors.black20;
    } else if (props.lineColor) {
        return props.lineColor;
    } else {
        return props.theme.borderColor;
    }
    }};

    box-sizing: border-box;
    cursor: ${(props) => {
        if (props.disabled) {
            return 'default';
        }
        return 'text';
        }};

    padding-top: ${props => props.label ? '26px' : '18px'};
    position: relative;
    transition: border-color 0.14s ease-in-out;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: ${props => props.label ? '10px' : '18px'};

    ${(props) => {
        if (props.disabled) {
            return `
            background-color: ${colors.black05};
            label {
                color: ${colors.black40};
            }
            `;
        }
    }}
`;

const TextBoxLabel = styled(TextLabel)`
    left: 16px; 

    transform: ${(props) => {
        if (props.open || props.isFocused) {
            return 'translateY(8px)';
        } else {
            return 'translateY(22px)';
        }
    }};
`;


const InputBoxItem = styled(InputItem)`
    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    ${(props) => {
        if(props.theme.valueColor){
            return ('color: ' + props.theme.valueColor) ;
        }
    }}
`;

export default class TextInputBox extends TextInput {
    render() {
        const { label, name, inputType, error, disabled, collapsed, className, labelColor, lineColor } = this.props;
        return (
        <ThemeProvider theme={this.props.theme}>
            <TextInputWrapper
                className={className}
                ref={(el) => { this.clickEventElement = el }}>
                <TextBox
                    onMouseUp={this.removeCancelBlur}
                    onMouseDown={this.cancelBlur}
                    onMouseLeave={this.removeCancelBlur}
                    onClick={this.focusOnTextInput}
                    isFocused={this.state.focused}
                    error={error}
                    open={this.getValue()}
                    disabled={disabled}
                    lineColor={lineColor}
                    collapsed={collapsed}
                    label={label}>
                <InputBoxItem
                    type={this.getInputType(inputType)}
                    onFocus={this.focused}
                    onBlur={this.blurred}
                    id={name}
                    name={name}
                    disabled={disabled}
                    error={error}
                    value={this.getValue()}
                    ref={(input) => { this.textInputEl = ReactDOM.findDOMNode(input); }}
                    onChange={this.onChange} />
                { this.props.label &&
                    <TextBoxLabel 
                        isFocused={this.state.focused} 
                        labelColor={this.props.theme.labelColor || labelColor} 
                        open={this.getValue()} 
                        htmlFor={name} 
                        error={error}>{label}
                    </TextBoxLabel>
                }
                </TextBox>
                {this.renderHelperText()}
            </TextInputWrapper>
        </ThemeProvider>)
    }
}


TextInput.defaultProps = {
    name: 'Name',
    label: '',
    theme: defaultTheme
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    collapsed: PropTypes.bool,
};