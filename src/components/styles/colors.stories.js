import React from 'react';
import { storiesOf, action } from '@storybook/react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { colors } from './colors';


const media = {
  large: (...args) => css`
    @media (min-width: 960px) {
      ${ css(...args) }
    }
  `
}

const ExampleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  ${ media.large`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  ` }
`;

const ColorWrapper = styled.div`
  width: 150px;
  height: 100px;
`;

const invertColor = (color) => {
  let r, g ,b, a;
  if (color.indexOf('#') === 0) {
    color = color.slice(1);
    // convert 3-digit hex to 6-digits.
    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (color.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    r = parseInt(color.slice(0, 2), 16),
    g = parseInt(color.slice(2, 4), 16),
    b = parseInt(color.slice(4, 6), 16);
    a = 1;
  } else {
    var parts = color.substring(color.indexOf("(")).split(",");
    r = parseInt(_.trim(parts[0].substring(1)), 10);
    g = parseInt(_.trim(parts[1]), 10);
    b = parseInt(_.trim(parts[2]), 10);
    a = parseFloat(_.trim(parts[3]), 10);
  }


  return a < 0.5 || Math.max(r,g,b) > 186
      ? 'black'
      : 'white';

}

const icons = _.map(colors, (color, key) => {
  return (
  <ColorWrapper onClick={action(key)} key={key} style={{backgroundColor: color, color: invertColor(color)}}>
    {key}
  </ColorWrapper>
)}
);

storiesOf('Base', module)
.addWithChapters(
  'Colors',
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
