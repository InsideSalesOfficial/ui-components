import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@storybook/react';

import OverflowMenu from './';
import { colors } from '../styles';
import icons from '../icons';
import AttachmentIcon from '../icons/AttachmentIcon';

const DarkBackground = styled.div`
  padding: 10px;
  height: 150px;
  background-color: ${colors.greenBackground};
`;

storiesOf('Menus', module)
.addWithChapters(
  'OverflowMenu',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { OverflowMenu } from 'insidesales-components';

      const options = [
        { action: action('click option'), label: 'Option 1' },
        { action: action('click option'), label: 'Option 2' }
      ];

      <OverflowMenu options={options} />

      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => {
              const options = [
                { action: action('click option'), label: 'Option 1' },
                { action: action('click option'), label: 'Option 2' }
              ];

              return  <DarkBackground><OverflowMenu options={options} /></DarkBackground>
            }
          },
          {
            title: 'Example: openUp',
            sectionFn: () => {
              const options = [
                { action: action('click option'), label: 'Option 1' },
                { action: action('click option'), label: 'Option 2' }
              ];

              return  <DarkBackground><OverflowMenu options={options} openUp /></DarkBackground>
            }
          },
          {
            title: 'Example: openRight',
            sectionFn: () => {
              const options = [
                { action: action('click option'), label: 'Option 1' },
                { action: action('click option'), label: 'Option 2' }
              ];
              const LeftDarkBackground = styled(DarkBackground)`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `;

              return  <LeftDarkBackground><OverflowMenu options={options} openRight /></LeftDarkBackground>
            }
          },
          {
            title: 'Example: openRight and openUp',
            sectionFn: () => {
              const options = [
                { action: action('click option'), label: 'Option 1' },
                { action: action('click option'), label: 'Option 2' }
              ];
              const LeftDarkBackground = styled(DarkBackground)`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `;

              return  <LeftDarkBackground><OverflowMenu options={options} openRight openUp /></LeftDarkBackground>
            }
          },
          {
            title: 'Example: custom icon',
            sectionFn: () => {
              const options = [
                { action: action('click option'), label: 'Option 1' },
                { action: action('click option'), label: 'Option 2' }
              ];

              const icon = <AttachmentIcon fill={colors.white80} size={{ width: 24, height: 24 }} />;

              return  <DarkBackground><OverflowMenu options={options} icon={icon} /></DarkBackground>
            }
          }
        ]
      }
    ]
  }
);

