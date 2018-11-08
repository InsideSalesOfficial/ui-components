import React from 'react';
import {
  storiesOf, action,
} from '@storybook/react';

import OverflowMenuButton from './OverflowMenuButton';
import styled from 'styled-components';
import { colors, typography } from '../styles';
import NeuralIcon from '../icons/NeuralIcon';
import ClockIcon from '../icons/ClockIcon';
import { regularScheduledEmailTheme, neuralSendEmailTheme, neuralScheduledEmailTheme } from './OverflowMenuButtonThemes';

const EmailSendButtonText = styled.div`
  color: ${colors.white};
  ${typography.body2};
`;

const NeuralSendWrapper = styled.div`
  display: flex;
`;

const NeuralSendButtonText = styled.div`
  padding-left: 9px;
  color: ${colors.white};
  ${typography.body2};
`;

const options = [
  {
    content: <div>option1</div>,
    disabled: true
  },
  {
    content: <div>option2</div>,
    onClick: action('on option2 click')
  },
  {
    content: <div>option3</div>,
  }
]

storiesOf('Components', module)
  .addWithChapters(
    'OverflowMenuButton',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import { OverflowMenuButton } from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Manual Email Send Button',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                  />
                </div>
              )
            },
            {
              title: 'Manual Email Send Button (Disabled)',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                    disabled
                  />
                </div>
              )
            },
            {
              title: 'Manual Email Send Button (Loading)',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                    loading
                  />
                </div>
              )
            },
            {
              title: 'Regular Email Scheduled Button',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={regularScheduledEmailTheme}
                    content={<NeuralSendWrapper><ClockIcon fill={colors.white}/><NeuralSendButtonText>SENDING AT 12:45 PM PST</NeuralSendButtonText></NeuralSendWrapper>}
                  />
                </div>
              )
            },
            {
              title: 'Neural Email Send Button',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={<NeuralSendWrapper><NeuralIcon /><NeuralSendButtonText>SEND AT 12:45 PM PST</NeuralSendButtonText></NeuralSendWrapper>}
                  />
                </div>
              )
            },
            {
              title: 'Neural Email Send Button (Disabled)',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={<NeuralSendWrapper><NeuralIcon fillOpacity={0.4}/><NeuralSendButtonText>SEND AT 12:45 PM PST</NeuralSendButtonText></NeuralSendWrapper>}
                    disabled
                  />
                </div>
              )
            },
            {
              title: 'Neural Email Send Button (Loading)',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={<NeuralSendWrapper><NeuralIcon /><NeuralSendButtonText>SEND AT 12:45 PM PST</NeuralSendButtonText></NeuralSendWrapper>}
                    loading
                  />
                </div>
              )
            },
            {
              title: 'Neural Email Scheduled Send Button',
              sectionFn: () => (
                <div style={{background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={neuralScheduledEmailTheme}
                    content={<NeuralSendWrapper><NeuralIcon /><NeuralSendButtonText>SENDING AT 12:45 PM PST</NeuralSendButtonText></NeuralSendWrapper>}
                  />
                </div>
              )
            }
          ]
        }
      ]
    }
  );