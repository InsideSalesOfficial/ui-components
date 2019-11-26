import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";

import ButtonBar from "./";

import { ButtonBarThemes } from "../index";
import { colors, darkBlue } from "../styles/colors";
import { generateFlexedThemeBackground } from "../styles/index.js";

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { width: "100%", padding: "16px 0" }
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
      import { ButtonBar } from 'insidesales-components';
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
                <ButtonBar
                  primaryActionText="Continue"
                  secondaryActionText="Skip"
                  onSecondaryActionClick={() => {}}
                />
              )
          },
          {
            title: "DarkBarTheme",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={{
                    background: darkBlue.darkBlue,
                    padding: "15px"
                  }}
                >
                  <ButtonBar
                    primaryActionText="Continue"
                    secondaryActionText="Skip"
                    onSecondaryActionClick={() => {}}
                    theme={ButtonBarThemes.darkBarTheme}
                  />
                </div>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default ButtonBar", renderChapterWithTheme({}))
  .addWithChapters(
    "ButtonBar w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
