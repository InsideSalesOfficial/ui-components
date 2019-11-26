import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextInputBox from './TextInputBox';
import TextInputBoxThemes, { darkTheme } from './TextInputBoxThemes';

import {
  colors,
  wrapComponentWithContainerAndTheme,
} from '../styles';


function renderChaptersWithTheme(theme = {}) {
  return {
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
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="Label"
                name="a"
                onChange={action('value')}
              />
            )
          },
          {
            title: 'Example: disabled text input empty',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
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
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="Label"
                name="c"
                error="hello world"
                onChange={action('value')}
              />
            )
          },
          {
            title: 'Example: text input with required',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="Label"
                name="d"
                onChange={action('value')}
                required
              />
            )
          },
          {
            title: 'Example: text input empty no label',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label=""
                inputType="number"
                name="e"
                onChange={action('value')}
              />
            )
          },
          {
            title: 'Example: disabled text input, no label',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label=""
                value="hello world"
                name="f"
                onChange={action('value')}
                disabled
              />
            )
          },
          {
            title: 'Example: dark theme',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value="I am dark"
                onChange={action('value')}
                theme={darkTheme}
              />
            )
          },
          {
            title: 'Example: Stateless',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value="I am stateless"
                onChange={action('value')}
                stateless
              />
            )
          },
          {
            title: 'Example: Inert',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value="I cannot be changed"
                name="inert"
                onChange={action('value')}
                inert={true}
              />
            )
          },
          {
            title: 'Example: Stateless no value',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value=""
                onChange={action('value')}
                stateless
              />
            )
          },
          {
            title: 'Example: boolean value, true',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value={true}
                onChange={action('value')}
              />
            )
          },
          {
            title: 'Example: boolean value, false',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value={false}
                onChange={action('value')}
                stateless
              />
            )
          },
          {
            title: 'Example: helper',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="This is a test"
                value={false}
                onChange={action('value')}
                stateless
                helper="Help me Obi-Wan Kenobi"
              />
            )
          },
          {
            title: 'Example: dark theme with error',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <div style={{
                background: colors.black40,
                padding: '15px',
              }}>
                <TextInputBox
                  label="This is a test"
                  theme={TextInputBoxThemes.darkTheme}
                  value="error"
                  onChange={action('value')}
                  error
                />
              </div>
            )
          },
          {
            title: 'Example: text input with options',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <div style={{ width: '140px' }}>
                <TextInputBox
                  label="Country"
                  onChange={action('value')}
                  selectOptionsWidth={400}
                  options={[
                    {
                      label: '+1 (US)',
                      value: '+1'
                    },
                    {
                      label: '+44 (UK)',
                      value: '+44'
                    },
                    {
                      label: '+35 (AB)',
                      value: '+35'
                    },
                    {
                      label: '+45 (CD)',
                      value: '+45'
                    },
                    {
                      label: '+46 (EF)',
                      value: '+46'
                    },
                    {
                      label: '+47 (GH)',
                      value: '+47'
                    },
                    {
                      label: '+48 (IJ)',
                      value: '+48'
                    },
                    {
                      label: '+49 (KL)',
                      value: '+49'
                    },
                    {
                      label: '+50 (MN)',
                      value: '+50'
                    },
                    {
                      label: '+60 (OP)',
                      value: '+60'
                    },
                    {
                      label: '+70 (QR)',
                      value: '+70'
                    },
                    {
                      label: '+80 (ST)',
                      value: '+80'
                    },
                    {
                      label: '+90 (UV)',
                      value: '+90'
                    },
                    {
                      label: '+91 (WX)',
                      value: '+91'
                    },
                    {
                      label: '+92 (YZ)',
                      value: '+92'
                    },
                    {
                      label: '+93 (NO)',
                      value: '+93'
                    },
                    {
                      label: '+64 (WI)',
                      value: '+64'
                    },
                    {
                      label: '+86 (KN)',
                      value: '+86'
                    },
                    {
                      label: '+777 (OW)',
                      value: '+777'
                    },
                    {
                      label: '+56 (MY)',
                      value: '+56'
                    },
                    {
                      label: '+12 (AB)',
                      value: '+12'
                    },
                  ]}
                />
              </div>
            )
          },
          {
            title: 'Example: text input with placeholder',
            sectionFn: () => wrapComponentWithContainerAndTheme(theme, 
              <TextInputBox
                label="Placeholder"
                onChange={action('value')}
                placeholder="what a beautiful placeholder"
              />
            )
          },
        ]
      }
    ]
  }
}

storiesOf('Form', module)
  .addWithChapters(
    'TextInputBox',
    renderChaptersWithTheme()
  )
  .addWithChapters(
    'TextInputBox w/ blueYellowTheme',
    renderChaptersWithTheme(colors.blueYellowTheme)
  );
