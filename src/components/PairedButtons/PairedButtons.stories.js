import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import PairedButtons from './';

import {colors, ifThemeIsPresentUse} from '../styles';
import { generateFlexedThemeBackground } from '../styles';

const demoOptions = [
  { label: 'Option 1', value: 'Option_1' },
  { label: 'Option 2', value: 'Option_2' }
];

const ButtonWrapper = styled.div`
  display: flex;
`;

const LightWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 64px;
  box-sizing: border-box;
  text-align: center;
`;

const DarkWrapper = styled(LightWrapper)`
  background-color: ${colors.darkBlue};
  ${ifThemeIsPresentUse({ value: "display: none;" })}
`;

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { width: "100%", padding: "16px 0" }
  );
  return (
    <ThemeProvider theme={theme}>
      <div style={storyContainerStyle}>{Component}</div>
    </ThemeProvider>
  );
}

class PairedButtonsWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || demoOptions[0].value,
    };
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={generateFlexedThemeBackground(this.props, { height: '30px', width: '500px' })}>
          <PairedButtons
            options={demoOptions}
            selected={this.state.selected}
            onChange={newSelection => {
              this.setState({ selected: newSelection })}
            }
            {...this.props}/>
        </div>
      </ThemeProvider>
    )
  }
}

function renderChapterWithTheme(theme = {}) {
  return {
    info: `
            Usage

            ~~~
            import React from 'react';
            import {PairedButtons} from 'insidesales-components';
            ~~~
            `,
    chapters: [
      {
        sections: [
          {
            title: 'Example: 2 options',
            options: {
              showSource: false
            },
            subtitle: 'A paired set with 2 buttons',
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <PairedButtonsWrapper
                      theme={theme} />
                  </LightWrapper>
                  <DarkWrapper>
                    <PairedButtonsWrapper
                      theme={theme} onDarkBg />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: 'Example: 2 options disabled',
            options: {
              showSource: false
            },
            subtitle: 'A paired set with 2 buttons that is disabled',
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <PairedButtonsWrapper
                      theme={theme} disabled />
                  </LightWrapper>
                  <DarkWrapper>
                    <PairedButtonsWrapper
                      theme={theme} onDarkBg disabled/>
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: 'Example: 3 options',
            options: {
              showSource: false
            },
            subtitle: 'A paired group with 3 buttons',
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <PairedButtonsWrapper
                      theme={theme}
                      options={[
                        ...demoOptions,
                        { label: 'Option 3', value: 'Option_3' },
                      ]}/>
                  </LightWrapper>
                  <DarkWrapper>
                    <PairedButtonsWrapper
                      theme={theme} onDarkBg
                      options={[
                        ...demoOptions,
                        { label: 'Option 3', value: 'Option_3' },
                      ]}/>
                  </DarkWrapper>
                </ButtonWrapper>
              )
          }
        ]
      }
    ]
  };
}


storiesOf('Base', module)
  .addWithChapters(
    'Default PairedButtons',
    renderChapterWithTheme({})
  ).addWithChapters(
    'PairedButtons w/ BlueYellow',
    renderChapterWithTheme(colors.blueYellowTheme)
  );
