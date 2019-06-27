import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import Checkbox from './';

storiesOf('Form', module)
.addWithChapters(
  'Checkbox',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Checkbox } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => (
              <Checkbox/>
            )
          },
          {
            title: 'With label',
            sectionFn: () => (
              <Checkbox
                label={'Some Checkbox'}
              />
            )
          }
        ]
      }
    ]
  }
);
