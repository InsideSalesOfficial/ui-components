import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownButton from './DropdownButton';


storiesOf('Base', module)
.addWithChapters(
  'DropdownButton',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { DropdownButton } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => (
              <DropdownButton label="Dropdown Button" />
            )
          },
          //{
            //title: 'Loading',
            //sectionFn: () => (
              //<DropdownButton label='Button' loading/>
            //)
          //},
          //{
            //title: 'Disabled',
            //sectionFn: () => (
              //<DropdownButton label='Button' disabled/>
            //)
          //},
          //{
            //title: 'Danger',
            //sectionFn: () => (
              //<DropdownButton label='Button' danger/>
            //)
          //},
          //{
            //title: 'Neuralytics',
            //sectionFn: () => (
              //<DropdownButton label='Button' neuralytics/>
            //)
          //},
        ]
      }
    ]
  }
);

