import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from '../Button';

const ALIGN_RIGHT = 'align_right';
const ALIGN_LEFT = 'align_left';

const ButtonsContainer = styled.div`  
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns};
  position: relative;
  width: 100%;
`;

const StyledButton = styled(Button)`
  border-radius: ${props =>
    props.align === ALIGN_LEFT
      ? '4px 0 0 4px'
      : props.align === ALIGN_RIGHT
      ? '0 4px 4px 0'
      : '0 0 0 0'};
  ${props => props.align === ALIGN_RIGHT ? '' : 'border-right: none'}
`;

function onChangeCheck ({onChange, selected}) {
  return function onChangeCheckHandler(option) {
    return function onClick () {
      if (option.value === selected) return;
      onChange(option.value);
    }
  }
}

function renderButton ({onChange, selected, options, id, disabled, onDarkBg}) {
  return function renderButtonHandler (option, index) {
    const align =
      index === 0
        ? ALIGN_LEFT
        : index === options.length - 1
        ? ALIGN_RIGHT
        : '';
    return [
      <StyledButton
        onClick={onChangeCheck({onChange, selected})(option, index)}
        key={option.value}
        align={align}
        id={id + option.value + '_button'}
        disabled={disabled}
        label={option.label}
        onDarkBg={onDarkBg }
        outline={option.value !== selected}
      />,
    ];
  }
}

export function PairedButtons (props) {
  const { options, selected, onChange, id, disabled, onDarkBg} = props;

  return (
    <ButtonsContainer gridTemplateColumns={'1fr '.repeat(options.length).trim()}>
      {options.map(renderButton({options, selected, onChange, id, disabled, onDarkBg }))}
    </ButtonsContainer>
  );
}

PairedButtons.defaultProps = {};

PairedButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onDarkBg: PropTypes.bool,
};

export default PairedButtons;
