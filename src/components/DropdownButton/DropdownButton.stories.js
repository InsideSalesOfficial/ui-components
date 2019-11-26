import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownButton from './DropdownButton';
import Icons from '../icons';
import { wrapComponentWithContainerAndTheme, colors } from "../styles";

const SFIcon = Icons.ColoredSalesforceIcon;

const buttonAction = (selectedOption) => {
  alert(`Clicked ${selectedOption.label}!`)
};

const dropdownOptions = [
  { value: '1', label: 'Option 1', },
  { value: '2', label: 'Option 2', }
];

function renderChapterWithTheme(theme) {
  return {
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
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
              />
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <DropdownButton
                disabled
                options={dropdownOptions}
                onClick={buttonAction}
              />
            )
          },
          {
            title: 'Danger',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <DropdownButton
                danger
                options={dropdownOptions}
                onClick={buttonAction}
              />
            )
          },
          {
            title: 'Gray',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
                theme={{gray: true}}
              />
            )
          },
          {
            title: 'With Icon',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <DropdownButton
                options={dropdownOptions}
                onClick={buttonAction}
                icon={ <SFIcon size={{ width: 24, height: 16.45 }} />}
              />
            )
          },
          {
            title: 'Gray with Icon',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
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
  };
}

storiesOf('Base', module)
  .addWithChapters("Default DropdownButton", renderChapterWithTheme({}))
  .addWithChapters(
    "DropdownButton w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
