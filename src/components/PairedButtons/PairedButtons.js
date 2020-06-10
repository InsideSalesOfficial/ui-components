import React from 'react';
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types';

import {
	colors,
	fontFamilies,
	fontSizes,
	fontWeights,
	renderThemeKeyOrDefaultValue,
} from '../styles';

const ALIGN_RIGHT = 'align_right';
const ALIGN_LEFT = 'align_left';

const getButtonWidth = props =>
	props.buttonWidth ? props.buttonWidth : '156px';

const ButtonsContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 8px;
  width: ${props => `calc(${getButtonWidth(props)} * 2 - 8)`};
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: ${props => {
		if (props.disabled || props.fade || props.loading) {
			return 'default';
		}
		return 'pointer';
	}};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${getButtonWidth};
  border: 1px solid ${props => {
		if (props.disabled) {
			return renderThemeKeyOrDefaultValue({
				props,
				key: 'brand03',
				defaultValue: colors.green40,
			});
		}
		return renderThemeKeyOrDefaultValue({
			props,
			key: 'brand01',
			defaultValue: colors.green,
		});
	}};
  border-radius: ${props =>
		props.align === ALIGN_LEFT
			? '4px 0 0 4px'
			: props.align === ALIGN_RIGHT
			? '0 4px 4px 0'
			: '0 0 0 0'};
  background-color: ${props => {
		if (props.active) {
			if (props.disabled || props.fade) {
				return renderThemeKeyOrDefaultValue({
					props,
					key: 'brand03',
					defaultValue: colors.green10,
				});
			}
			return renderThemeKeyOrDefaultValue({
				props,
				key: 'brand01',
				defaultValue: colors.green,
			});
		}
	
		return `transparent`;
	}};
	
	&:disabled {
		color: ${(props) => {
			if ((!props.active && !props.onDarkBg)) {
				return renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.black40});
			}
			return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.black40});
		}};
  }
	
  color: ${props => {
		if ((!props.active && !props.onDarkBg)) {
			return renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: colors.black90});
		}
		return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white90});
  }};
  ${props => (props.left ? `left: 0;` : 'right: 0;')}
`;

const ButtonLabel = styled.label`
  font-family: ${fontFamilies.roboto};
  font-size: ${fontSizes.xSmall};
  font-weight: ${fontWeights.bold};
  line-height: 24px;
  text-transform: uppercase;
  cursor: ${props => {
		if (props.disabled || props.fade || props.loading) {
			return 'default';
		}
		return 'pointer';
	}};
  white-space: nowrap;
  max-width: ${props => `calc(${getButtonWidth(props)} - 16px)`};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PairedButtons = withTheme(props => {
	const { options, buttonWidth } = props;

	const onClickToggle = optionValue => {
		if (optionValue === props.selectedOptionValue) return;
		this.props.onToggle(optionValue);
	};

	const renderButton = (option, index) => {
			const isActive = option.value === props.selectedOptionValue;
			const align =
				index === 0
					? ALIGN_LEFT
					: index === options.length - 1
					? ALIGN_RIGHT
					: '';
			return [
				<Button
					active={isActive}
					left
					onClick={() => onClickToggle(option.value)}
					buttonWidth={buttonWidth}
					key={option.value + '1'}
					align={align}
					{...this.props}
				>
					<ButtonLabel buttonWidth={buttonWidth} {...this.props}>
						{option.label}
					</ButtonLabel>
				</Button>,
			];
		};

	if (options.length < 2 || options.length > 3) return null;
	return (
		<ButtonsContainer buttonWidth={buttonWidth} count={options.length}>
			{options.map(renderButton)}
		</ButtonsContainer>
	);
});

PairedButtons.defaultProps = {};

PairedButtons.propTypes = {
	onToggle: PropTypes.func.isRequired,
	buttonWidth: PropTypes.string,
	selectedOptionValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.bool,
	]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.string,
				PropTypes.bool,
			]).isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default PairedButtons;
