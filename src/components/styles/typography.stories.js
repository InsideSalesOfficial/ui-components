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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${ media.large`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  ` }
`;

const TypographyWrapper = styled.div`
  width: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
  height: auto;
  ${props => props.extraStyle};
`;

const icons = _.map(typography, (type, key) => {
  return (
  <TypographyWrapper onClick={action(key)} key={key} extraStyle={type}>
    {`${key}: `}
    {type}
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
