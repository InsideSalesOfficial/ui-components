import React from 'react';
import { storiesOf, action } from '@storybook/react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { typography } from './typography';


const media = {
  large: (...args) => css`
    @media (min-width: 960px) {
      ${ css(...args) }
    }
  `
}

const ExampleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const TypographyWrapper = styled.div`
  margin: 20px;
  ${props => props.extraStyle};
`;

const icons = _.map(typography, (type, key) => {
  return (
  <TypographyWrapper onClick={action(key)} key={key} extraStyle={type}>
    {`${key}`}
  </TypographyWrapper>
)}
);

storiesOf('Base', module)
.addWithChapters(
  'Typography',
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
