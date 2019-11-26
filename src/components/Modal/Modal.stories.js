import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";

import Modal from "./Modal";

import { colors } from "../styles/colors.js";
import { generateFlexedThemeBackground } from "../styles/index.js";

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { width: "100%", color: theme.white ? "white" : "inherit" }
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
          import {Modal} from 'insidesales-components';
          ~~~
        `,
    chapters: [
      {
        sections: [
          {
            title: "Basic Modal",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div style={{ height: "400px" }}>
                  <Modal center onStoryBook>
                    <h3>Anything can go here!</h3>
                    <p>Hello World</p>
                  </Modal>
                </div>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default Modal", renderChapterWithTheme({}))
  .addWithChapters(
    "Modal w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
