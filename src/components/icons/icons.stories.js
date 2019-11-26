import React from "react";
import { storiesOf, action } from "@storybook/react";
import styled, { css } from "styled-components";
import _ from "lodash";

import {
  renderThemeIfPresentOrDefault,
  wrapComponentWithContainerAndTheme,
  colors
} from "../styles";

import Icons from "./";

const media = {
  large: (...args) => css`
    @media (min-width: 960px) {
      ${css(...args)}
    }
  `
};

const ExampleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${media.large`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

const IconWrapper = styled.div`
  padding: 10px;
  margin: 5px;
  color: white;
  text-align: center;
  background-color: ${renderThemeIfPresentOrDefault({
    key: "primary01",
    defaultValue: colors.greenBackground
  })};
`;

function renderChapterWithTheme(theme) {
  return {
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
            title: "Default",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ExampleWrapper>{icons}</ExampleWrapper>
              )
          }
        ]
      }
    ]
  };
}

const icons = _.sortBy(
  _.map(_.omit(Icons, "TaskIcons"), (icon, key) => (
    <IconWrapper onClick={action(key)} key={key}>
      {React.createElement(icon, {
        fill: colors.white,
        size: { width: "24", height: "24" }
      })}
      <div>{key}</div>
    </IconWrapper>
  )),
  "key"
);

storiesOf("Base", module)
  .addWithChapters("Default Icons", renderChapterWithTheme({}))
  .addWithChapters(
    "Icons w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
