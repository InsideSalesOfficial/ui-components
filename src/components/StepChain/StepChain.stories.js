import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  storiesOf
} from '@storybook/react';

import StepChain from './StepChain';

import { colors } from '../styles/colors.js';
import { generateFlexedThemeBackground } from '../styles/index.js';

const ThemeComponent = (props) => (
  <ThemeProvider theme={props.theme}>
    <div style={generateFlexedThemeBackground(props, { width: '90%', height: '100px', padding: '0 8px' })}>
      {props.children}
    </div>
  </ThemeProvider>
);

function renderChapterWithTheme(theme) {
  return {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {StepChain} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Chain on step 1',
              sectionFn: () => (
                <ThemeComponent theme={theme}>
                  <StepChain
                    stepLabels={['Name', 'Connect', 'Record']}
                    currentStep={1}
                  />
                </ThemeComponent>
              )
            },
            {
              title: 'Example: Chain on step 2',
              sectionFn: () => (
                <ThemeComponent theme={theme}>
                  <StepChain
                    stepLabels={['Name', 'Connect', 'Record']}
                    currentStep={2}
                  />
                </ThemeComponent>
              )
            },
            {
              title: 'Example: Chain on step 3',
              sectionFn: () => (
                <ThemeComponent theme={theme}>
                  <StepChain
                    stepLabels={['Name', 'Connect', 'Record']}
                    currentStep={3}
                  />
                </ThemeComponent>
              )
            },
          ]
        }
      ]
    };
}

storiesOf('Components', module)
  .addWithChapters(
    'Default StepChain',
    renderChapterWithTheme({})
  )
  .addWithChapters(
    'StepChain w/ BlueYellowTheme',
    renderChapterWithTheme(colors.blueYellowTheme)
  );
