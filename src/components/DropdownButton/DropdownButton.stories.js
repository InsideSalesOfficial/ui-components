import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownButton from './DropdownButton';

const buttonAction = (selectedOption) => {
  alert(`Clicked ${selectedOption.label}!`)
};

const dropdownOptions = [
  { value: 0, label: 'Option 1', },
  { value: 1, label: 'Option 2', }
];

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
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
              />
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

