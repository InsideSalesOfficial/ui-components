import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import StepChain from './StepChain';

storiesOf('Components', module)
  .addWithChapters(
    'StepChain',
    {
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
                <StepChain
                  stepLabels={['Name', 'Connect', 'Record']}
                  currentStep={1}
                />
              )
            },
            {
              title: 'Example: Chain on step 2',
              sectionFn: () => (
                <StepChain
                  stepLabels={['Name', 'Connect', 'Record']}
                  currentStep={2}
                />
              )
            },
            {
              title: 'Example: Chain on step 3',
              sectionFn: () => (
                <StepChain
                  stepLabels={['Name', 'Connect', 'Record']}
                  currentStep={3}
                />
              )
            },
          ]
        }
      ]
    }
  );