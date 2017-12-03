import React from 'react';
import { storiesOf, action } from '@storybook/react';
import styled from 'styled-components';
import _ from 'lodash';

import { colors } from '../styles/colors';

import Icons from './';

const ExampleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  padding: 10px;
  margin: 5px;
  background-color: ${colors.greenBackground};
`;

const icons = _.map(_.omit(Icons, 'TaskIcons'), (icon, key) => (
  <IconWrapper onClick={action(key)}>
    {React.createElement(icon, { fill: colors.white, size: { width: '50', height: '50' } })}
  </IconWrapper>
));

storiesOf('Base', module)
.addWithChapters(
  'Icons',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Icons } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => (
              <ExampleWrapper>
                {icons}
              </ExampleWrapper>
            )
          }
        ]
      }
    ]
  }
);
