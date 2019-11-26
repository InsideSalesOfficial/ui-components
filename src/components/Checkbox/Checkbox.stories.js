import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";

import Checkbox from "./";

import { colors } from "../styles/colors.js";
import { generateFlexedThemeBackground } from "../styles/index.js";

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { height: "30px", paddingLeft: "16px" }
  );
  return (
    <ThemeProvider theme={theme}>
      <div style={storyContainerStyle}>{Component}</div>
    </ThemeProvider>
  );
}

function renderChapterWithTheme(theme) {
  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Checkbox } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Default",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Checkbox />)
          },
          {
            title: "With label",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Checkbox label={"Some Checkbox"} />
              )
          },
          {
            title: "Checked",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Checkbox checked />)
          },
          {
            title: "Disabled",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Checkbox disabled />)
          },
          {
            title: "Checked Disabled",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Checkbox checked disabled />
              )
          },
          {
            title: "Checked Green Disabled",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Checkbox checked greenDisabled />
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Form", module)
  .addWithChapters("Default Checkbox", renderChapterWithTheme({}))
  .addWithChapters(
    "Checkbox w/ BlueYellow",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
