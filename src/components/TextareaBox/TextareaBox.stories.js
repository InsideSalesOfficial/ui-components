import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextareaBox from './TextareaBox';

import {
  wrapComponentWithContainerAndTheme,
  colors,
} from "../styles";

function renderChapterWithTheme(theme) {
  return {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {TextareaBox} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: textarea default empty',
              sectionFn: () => wrapComponentWithContainerAndTheme(theme,
                <TextareaBox
                  label="Label"
                  name="first"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: textarea with existing text',
              sectionFn: () => wrapComponentWithContainerAndTheme(theme,
                <TextareaBox
                  label="Label"
                  name="firstz"
                  onChange={action('value')}
                  value="This text was hardcoded into stories. The structure of this component follows how a `TextareaBox` should look."
                />
              )
            },
            {
              title: 'Example: textarea with error text',
              sectionFn: () => wrapComponentWithContainerAndTheme(theme,
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  error="Errors will override helper text."
                  name="third"
                  onChange={action('value')}
                  value="This text was hardcoded into stories."
                />
              )
            },
            {
              title: 'Example: textarea disabled',
              sectionFn: () => wrapComponentWithContainerAndTheme(theme,
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="fourth"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: textarea disabled with text',
              sectionFn: () => wrapComponentWithContainerAndTheme(theme,
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="fifth"
                  value="this is some example text"
                  onChange={action('value')}/>
              )
            },
          ]
        }
      ]
    };
}

storiesOf('Form', module)
  .addWithChapters("Default TextareaBox", renderChapterWithTheme({}))
  .addWithChapters(
    "TextareaBox w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
