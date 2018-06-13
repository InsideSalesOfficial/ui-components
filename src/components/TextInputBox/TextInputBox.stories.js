import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextInputBox from './TextInputBox';
import { darkTheme } from './TextInputBoxThemes';


storiesOf('Form', module)
  .addWithChapters(
    'TextInputBox',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {TextInput} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: text input empty',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="a"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: disabled text input empty',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="b"
                  disabled
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: text input with error',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="c"
                  error="hello world"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: text input empty no label',
              sectionFn: () => (
                <TextInputBox
                  label=""
                  inputType="number"
                  name="d"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: disabled text input, no label',
              sectionFn: () => (
                <TextInputBox
                  label=""
                  value="hello world"
                  name="e"
                  onChange={action('value')}
                  disabled
                />
              )
            },
            {
              title: 'Example: dark theme',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value="I am dark"
                  onChange={action('value')}
                  theme={darkTheme}
                />
              )
            },
          ]
        }
      ]
    }
  );
