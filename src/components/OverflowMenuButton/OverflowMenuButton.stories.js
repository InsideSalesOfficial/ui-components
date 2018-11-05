import React from 'react';
import {
  storiesOf, action,
} from '@storybook/react';

import OverflowMenuButton from './OverflowMenuButton';
import styled from 'styled-components';
import { colors, typography } from '../styles';
import NeuralIcon from '../icons/NeuralIcon';
import { neuralSendTheme } from './OverflowMenuButtonThemes';

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
                <div style={{display: 'flex', justifyContent: 'center'}}>
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
              title: 'Neural Email Send Button',
              sectionFn: () => (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={'up'}
                    options={options}
                    theme={neuralSendTheme}
                    content={<NeuralSendWrapper><NeuralIcon /><NeuralSendButtonText>SEND AT 12:45 PM</NeuralSendButtonText></NeuralSendWrapper>}
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
                    theme={neuralSendTheme}
                    content={<NeuralSendWrapper><NeuralIcon fillOpacity={0.4}/><NeuralSendButtonText>SEND AT 12:45 PM</NeuralSendButtonText></NeuralSendWrapper>}
                    disabled
                  />
                </div>
              )
            }
          ]
        }
      ]
    }
  );