import React from 'react';
import { storiesOf, action } from '@storybook/react';

import InteractiveElement from './';

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
      import { InteractiveElement } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme,
              <InteractiveElement onClick={action('clicked')}>
                I can be clicked
              </InteractiveElement>
            )
          }
        ]
      }
    ]
  };
}

storiesOf('Base', module)
  .addWithChapters("Default InteractiveElement", renderChapterWithTheme({}))
  .addWithChapters(
    "InteractiveElement w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
