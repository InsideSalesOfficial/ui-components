import React from 'react';
import { storiesOf, action } from '@storybook/react';
import SelectInputKeyboard from './SelectInputKeyboard';
import SelectInputLabelBox from '../SelectInputLabelBox';
import Button from '../Button';
import styled from 'styled-components';

import { renderThemeIfPresentOrDefault, wrapComponentWithContainerAndTheme, colors, typography } from '../styles';

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  padding-bottom: 6px;
`;

const StyledButton = styled(Button)`
  height: 24px;
  padding: 0 4px;
  span {
    font-size: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-top: 6px;
  padding-bottom: 6px;
  button {
    margin-right: 4px;
  }
`;

const OptionLabel = styled.div`
  ${typography.caption};
  color: ${renderThemeIfPresentOrDefault({
    key: 'white60',
    defaultValue: colors.black60,
  })};
`;

const OptionValue = styled.div`
  ${typography.subhead1};
  color: ${renderThemeIfPresentOrDefault({
    key: 'white90',
    defaultValue: colors.black90,
  })};
`;

const promotedOption = [
  { value: 'p1', label: 'Promoted Option 1' },
  { value: 'p2', label: 'Promoted Option 2' },
  { value: 'p3', label: 'Promoted Option 3' },
];

const genericOptions = [
  { value: '1', label: 'Option One' },
  { value: '2', label: 'Option Two' },
  { value: '3', label: 'Option Three' },
  { value: '4', label: 'Option Four' },
  { value: '5', label: 'Option Five' },
  { value: '6', label: 'Option Six' },
  { value: '7', label: 'Option Seven' },
  { value: '8', label: 'Option Eight' },
  { value: '9', label: 'Option Nine' },
  { value: '10', label: 'Option Ten' },
  {
    value: '11',
    label:
      'A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string',
  },
  { value: 12, label: `I'm a number` },
  {
    value: '13',
    label: (
      <OptionWrapper>
        <OptionLabel>HTML Label</OptionLabel>
        <OptionValue>option 13</OptionValue>
      </OptionWrapper>
    ),
    optionLabel: 'option 13 label',
    optionValue: 'option 13',
  },
  { value: true, label: 'True' },
  { value: false, label: 'False' },
];

class WrapperComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  toggle = (param) => {
    this.setState((prevState) => ({
      [param]: !prevState[param],
    }));
  };

  toggleValue = (param, value) => {
    this.setState((prevState) => ({
      [param]: prevState[param] === value ? null : value,
    }));
  };

  handleSelectInputChange = (value) => {
    action('Option Selected')(value);
    this.setState({ value });
  };

  render = () => (
    <div>
      <ButtonWrapper>
        <StyledButton flat label="Clear Value" onClick={() => this.setState({ value: '' })} />
        <StyledButton flat={!this.state.error} label="error" onClick={() => this.toggle('error')} />
        <StyledButton flat={!this.state.isDisabled} label="isDisabled" onClick={() => this.toggle('isDisabled')} />
        <StyledButton flat={!this.state.required} label="required" onClick={() => this.toggle('required')} />
        <StyledButton flat={!this.state.searchable} label="searchable" onClick={() => this.toggle('searchable')} />
        <StyledButton flat={!this.state.multiSelect} label="multiSelect" onClick={() => this.toggle('multiSelect')} />
        <StyledButton
          flat={!this.state.optionsWidth}
          label="optionsWidth"
          onClick={() => this.toggleValue('optionsWidth', '240')}
        />
        <StyledButton
          flat={!this.state.promotedOptions}
          label="promotedOptions"
          onClick={() => this.toggleValue('promotedOptions', promotedOption)}
        />
      </ButtonWrapper>
      {this.props.old ? (
        <SelectInputLabelBox {...this.props} {...this.state} onChange={this.handleSelectInputChange} />
      ) : (
        <SelectInputKeyboard {...this.props} {...this.state} onChange={this.handleSelectInputChange} />
      )}
    </div>
  );
}

function renderChapterWithTheme(theme) {
  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import {Select} from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'New Select',
            options: {
              showSource: false,
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div>
                  <WrapperComponent label="Input Label" options={genericOptions} />
                </div>,
              ),
          }
        ],
      },
    ],
  };
}

storiesOf('Form', module)
  .addWithChapters('Default SelectInputKeyboard', renderChapterWithTheme({}))
  .addWithChapters('SelectInputKeyboard w/ BlueYellow Theme', renderChapterWithTheme(colors.blueYellowTheme));
