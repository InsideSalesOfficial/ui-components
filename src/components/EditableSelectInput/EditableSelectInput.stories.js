import React from 'react';
import {
  storiesOf,
  // action
} from '@storybook/react';

// import {
//   lineSelectInputTheme,
//   transparentSelectInputTheme
// } from './SelectInputThemes';

import EditableSelectInput from './';

const darkExample = {
  height: '220px',
  backgroundColor: '#2a434a',
  padding: '16px'
}

// const lightExample = {
//   height: '220px',
//   backgroundColor: '#2a434a',
//   padding: '16px'
// }

// const promotedOptions = [
//   { value: '101', label: 'Promoted Option 1', disabled: true },
//   { value: '102', label: 'Promoted Option 2' },
// ];

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
  { value: '11', label: 'A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string' },
];

storiesOf('Form', module)
.addWithChapters(
  'EditableSelectInput',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import {EditableSelectInput} from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default Theme',
            sectionFn: () => (
              <div style={darkExample}>
                <EditableSelectInput
                  options={genericOptions}
                />
              </div>
            )
          },
        ]
      }
    ]
  }
);
