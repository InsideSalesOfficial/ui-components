import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { colors, typography } from '../styles';
import TextInput, { TextInputWrapper, InputItem, TextLabel } from '../TextInput/TextInput';
import { defaultTheme } from './TextInputBoxThemes';
import { hasValue } from './utils';
import SelectOptions from '../SelectInput/SelectOptions';

const TextBox = styled.div`
    background-color: ${props => colors.renderThemeIfPresentOrDefault({key: 'primary05', defaultValue: props.background})};
    border-bottom: thin solid ${colors.renderThemeIfPresentOrDefault({key: 'white40', defaultValue: colors.black40})};
    border-radius: 2px;
    border-width: 2px;
    border-color: ${(props) => {
    if (props.error) {
        return colors.renderThemeKeyOrDefaultValue({props, key: 'warning04', defaultValue: colors.red });
    } else if (props.isFocused) {
        return colors.renderThemeKeyOrDefaultValue({props, key: 'brand01', defaultValue: 'green'});
    } else if (props.disabled) {
        return colors.renderThemeKeyOrDefaultValue({props, key: 'white40', defaultValue: colors.black20 });
    } else if (props.lineColor) {
        return props.lineColor;
    } else {
        return colors.renderThemeKeyOrDefaultValue({props, key: 'white40', defaultValue: props.borderColor });
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
    padding-right: ${(props) => {
        if (props.options) return '25px';
        return '16px';
    }};
    padding-bottom: ${props => props.label ? '9px' : '17px'};

    ${(props) => {
        if (props.disabled) {
            return `
            background-color: ${colors.renderThemeKeyOrDefaultValue({props, key: 'white10', defaultValue: colors.black05})};
            label {
                color: ${colors.renderThemeIfPresentOrDefault({props, key: 'white40', defaultValue: colors.black40})};
            }
            `;
        }
    }}
`;

const Caret = styled.div`
    position: absolute;
    right: 0;
    top: 55%;
    transform: translateY(-50%);
    width: 32px;
    cursor: pointer;
    height: 32px;



    &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-left: 5px transparent solid;
    border-right: 5px transparent solid;
    border-${props => props.open ? 'bottom' : 'top'}: 5px ${colors.renderThemeIfPresentOrDefault({key: 'white40', defaultValue: colors.black40})} solid;
    }
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

const Chars = styled.div`
  color: ${props => {
    if(props.error) return colors.renderThemeKeyOrDefaultValue({props, key: 'warning04', defaultValue: colors.red });
    return colors.renderThemeKeyOrDefaultValue({props, key: 'brand01', defaultValue: colors.green });
  }};
  text-align: right;
  padding: 0.25em 0;
  ${typography.caption}
`;


const InputBoxItem = styled(InputItem)`
    &[type=number]::-webkit-inner-spin-button,
    &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ${props => props.inert && `color: ${colors.renderThemeKeyOrDefaultValue({props, key: 'white90', defaultValue: colors.black90})};`}
    ${(props) => {
        if(props.valueColor){
            return ('color: ' + colors.renderThemeKeyOrDefaultValue({props, key: 'white90', defaultValue: props.valueColor}));
        }
    }}
`;

export default class TextInputBox extends TextInput {
    render() {
        const {
            label,
            name,
            inputType,
            disabled,
            collapsed,
            className,
            promotedOptions,
            labelColor,
            lineColor,
            options,
            placeholder,
            inert,
            theme
        } = this.props;

        const error = this.props.error || (this.props.max && _.size(this.state.value) > this.props.max)
        return (
        <TextInputWrapper
            className={className}
            {...theme}
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
                label={label}
                {...theme}
                options={options}>
            <InputBoxItem
                type={this.getInputType(inputType)}
                onFocus={inert ? _.noop : this.focused}
                onBlur={this.blurred}
                id={name}
                name={name}
                disabled={disabled || inert}
                inert={inert}
                error={error}
                value={this.getValue()}
                ref={(input) => { this.textInputEl = ReactDOM.findDOMNode(input); }}
                onChange={this.onChange}
                placeholder={this.state.focused ? placeholder : ''}
                {...theme}
                className="pb-test__text-input" />
            { this.props.label &&
                <TextBoxLabel
                    isFocused={this.state.focused}
                    labelColor={this.props.labelColor || labelColor}
                    open={hasValue(this.getValue())}
                    htmlFor={name}
                    {...theme}
                    error={error}>{label}
                </TextBoxLabel>
            }
            </TextBox>
            {this.state.focused && this.props.max && <Chars error={error}>{`${_.size(this.state.value)} / ${this.props.max}`}</Chars>}
            {options && <Caret onClick={this.toggleOptionsList} open={this.state.optionsListVisible} className={'pb-caret'} />}
            {this.renderHelperText()}
            {this.renderRequiredText()}
            {options && <SelectOptions
                onOptionUpdate={this.onDropDownSelect}
                promotedOptions={promotedOptions || this.getPromotedOptions() }
                options={options}
                optionsCount={options.length}
                visible={this.state.optionsListVisible}
                width={this.props.selectOptionsWidth}
                optionsRef={(ref) => {
                    this.optionsRef = ref;
                }}
            />}
        </TextInputWrapper>)
    }
}


TextInput.defaultProps = {
    label: '',
    theme: defaultTheme
};

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    error: PropTypes.any,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func,
    collapsed: PropTypes.bool,
    inert: PropTypes.bool,
    promotedOptions: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
        disabled: PropTypes.bool
    })),
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
        disabled: PropTypes.bool
    })),
    placeholder: PropTypes.string,
    max: PropTypes.number
};
