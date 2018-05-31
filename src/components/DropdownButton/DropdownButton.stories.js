import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownButton from './DropdownButton';
import Icons from '../icons';

const SFIcon = Icons.ColoredSalesforceIcon;

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
          {
            title: 'Gray',
            sectionFn: () => (
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
                theme={{gray: true}}
              />
            )
          },
          {
            title: 'With Icon',
            sectionFn: () => (
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
                icon={ <SFIcon size={{ width: 24, height: 16.45 }} />}
              />
            )
          },
          {
            title: 'Gray with Icon',
            sectionFn: () => (
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
                theme={{gray: true}}
                icon={ <SFIcon size={{ width: 24, height: 16.45 }} />}
              />
            )
          },
        ]
      }
    ]
  }
);

