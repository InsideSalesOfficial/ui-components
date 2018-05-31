import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from './';
import { colors } from '../styles/colors';

const ButtonWrapper = styled.div`
  display: flex;
`;

const LightWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 64px;
  box-sizing: border-box;
  text-align: center;
`;

const DarkWrapper = styled(LightWrapper)`
  background-color: ${colors.darkBlue};
`;

storiesOf('Base', module)
.addWithChapters(
  'Button',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Button } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Raised',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button'/>
                  <Button label='Danger' danger/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button'/>
                  <Button label='Danger' danger/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Raised Disabled',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button' disabled/>
                  <Button label='Danger' disabled danger/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button' onDarkBg disabled/>
                  <Button label='Danger' onDarkBg disabled danger/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Flat',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button' flat/>
                  <Button label='Alternate' flatAlt/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button' onDarkBg flat/>
                  <Button label='Alternate' onDarkBg flatAlt/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Flat Disabled',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button' flat disabled/>
                  <Button label='Alternate' flatAlt disabled/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button' onDarkBg flat disabled/>
                  <Button label='Alternate' onDarkBg flatAlt disabled/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Outline',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button' outline/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button' onDarkBg outline/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Outline Disabled',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ButtonWrapper>
                <LightWrapper>
                  <Button label='Button' outline disabled/>
                </LightWrapper>
                <DarkWrapper>
                  <Button label='Button' onDarkBg outline disabled/>
                </DarkWrapper>
              </ButtonWrapper>
            )
          },
          {
            title: 'Neuralytics',
            sectionFn: () => (
              <Button label='Button' neuralytics/>
            )
          },
          {
            title: 'Loading',
            sectionFn: () => (
              <Button label='Button' loading/>
            )
          },
        ]
      }
    ]
  }
);

