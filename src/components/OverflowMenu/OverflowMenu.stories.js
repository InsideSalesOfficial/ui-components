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
                  { action: action('click option'), label: 'Option 2' },
                  { action: action('click option'), label: 'Option 3' }
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
                  { action: action('click option'), label: 'This is some really, length text for demo' },
                  { action: action('click option'), label: 'Some short text' }
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

                const icon = <AttachmentIcon fill={colors.white80} size={{ width: 50, height: 50 }} />;

                return <DarkBackground><OverflowMenu options={options} icon={icon} /></DarkBackground>
              }
            },
            {
              title: 'Example: keep menu open',
              sectionFn: () => {
                const options = [
                  { action: action('click option'), label: 'Option 1' },
                  { action: action('click option'), label: 'Option 2', isHighlighted: true }
                ];

                return <DarkBackground><OverflowMenu options={options} stayOpen={true} /></DarkBackground>
              }
            },
            {
              title: 'Example: second menu option disabled',
              sectionFn: () => {
                const options = [
                  { action: action('click option'), label: 'Option 1' },
                  { action: action('click option'), label: 'Option 2', isDisabled: true }
                ];

                return <DarkBackground><OverflowMenu options={options}/></DarkBackground>
              }
            },
            {
              title: 'Example: medium menu size',
              sectionFn: () => {
                const options = [
                  { action: action('click option'), label: 'Medium' },
                  { action: action('click option'), label: 'Option 2' },
                ];

                return  <DarkBackground><OverflowMenu options={options} medium/></DarkBackground>
              }
            },
            {
              title: 'Example: large menu size',
              sectionFn: () => {
                const options = [
                  { action: action('click option'), label: 'Large' },
                  { action: action('click option'), label: 'Option 2' },
                ];

                return  <DarkBackground><OverflowMenu options={options} large/></DarkBackground>
              }
            },
          ]
        }
      ]
    }
  );

