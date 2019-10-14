import React from 'react';
import { storiesOf, action } from '@storybook/react';
import styled from 'styled-components';
import _ from 'lodash';

import { colors, white, black, gray, darkBlue, red, orange, blue, tron, green } from './colors';
import { typography } from './typography';
import { boxShadows } from './boxShadows';

const allColors = {green, tron, blue, orange, red, darkBlue, gray, black, white};

const ExampleWrapper = styled.div`
  background-color: ${props => props.light ? colors.white : colors.darkBlue};
  padding: 32px 64px;
`;

const ColorRow = styled.div`
  margin-bottom: 32px;
`;

const ColorName = styled.h3`
  display: block;
  color: ${colors.white};
  text-transform: capitalize;
  ${typography.subhead2}
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  ${(props) => { if (props.darkBlue) {
    return 'grid-template: repeat(2, 1fr) / repeat(6, 1fr); grid-auto-flow: column';
  }}};
`;

const ColorSwatch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 64px;
  border-radius: 2px;
  box-shadow: ${boxShadows.lvl2};
  background-color: ${(props) => {
    return props.bgColor;
  }};
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${boxShadows.lvl5};
  }
`;

const SwatchName = styled.div`
  margin: 4px 8px;
  color: ${props => invertColor(props.swatchColor)};
  ${typography.body1}
`;

const getRGBAValues = (color) => {
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

    r = parseInt(color.slice(0, 2), 16);
    g = parseInt(color.slice(2, 4), 16);
    b = parseInt(color.slice(4, 6), 16);
    a = 1;
  } else {
    var parts = color.substring(color.indexOf("(")).split(",");
    r = parseInt(_.trim(parts[0].substring(1)), 10);
    g = parseInt(_.trim(parts[1]), 10);
    b = parseInt(_.trim(parts[2]), 10);
    a = parseFloat(_.trim(parts[3]), 10);
  }

  return {r, g, b, a};
}

const invertColor = (color) => {
  const c = getRGBAValues(color);

  return c.a > 0.3 && c.r + c.g + c.b > 686
      ? colors.black60
      : colors.white60;
}

const displayColorSwatches = (colorDetails) => {
  return _.map(colorDetails, (colorItem, key) => {
    return (
      <ColorSwatch key={key} bgColor={colorItem} onClick={action(colorItem)}>
        <SwatchName swatchColor={colorItem}>
          {key}
        </SwatchName>
      </ColorSwatch>
    );
  });
};

const generateColorSwatches = (colors) => _.map(colors, (colorDetails, key) => {
  return (
    <ColorRow key={key}>
      <ColorName>
        {key}
      </ColorName>
      <Colors darkBlue={key === 'darkBlue'}>
        {displayColorSwatches(colorDetails)}
      </Colors>
    </ColorRow>
  )
});

const oldPlaybooksColors = generateColorSwatches(allColors);
const hotPinkPalette = generateColorSwatches({ hotPink: colors.hotPinkTheme });
const blueYellowPalette = generateColorSwatches({ blueYellow: colors.blueYellowTheme });


storiesOf('Base', module)
.addWithChapters(
  'Non Themed Colors',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { colors } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Original Color Palette',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ExampleWrapper>
                {oldPlaybooksColors}
              </ExampleWrapper>
            )
          }
        ]
      }
    ]
  }
).addWithChapters(
  'Hot Pink Palette',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { hotPinkTheme } from 'insidesales-components';
      ~~~

      Description:

      There are base colors and transparencies for a subset of said base colors.

      The transparencies are 10, 40, 60, and 90 percent respectively.
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Hot Pink Palette',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ExampleWrapper light>
                {hotPinkPalette}
              </ExampleWrapper>
            )
          }
        ]
      }
    ]
  }
).addWithChapters(
  'Blue Yellow Palette',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { blueYellowPalette } from 'insidesales-components';
      ~~~

      Description:

      There are base colors and transparencies for a subset of said base colors.
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Blue Yellow Palette',
            options: {
              showSource: false
            },
            sectionFn: () => (
              <ExampleWrapper light>
                {blueYellowPalette}
              </ExampleWrapper>
            )
          }
        ]
      }
    ]
  }
);
