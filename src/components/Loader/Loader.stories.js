import React from "react";
import { storiesOf } from "@storybook/react";

import Loader from "./";

import { wrapComponentWithContainerAndTheme, colors } from "../styles";

const darkExample = {
  height: "40px",
  backgroundColor: "#2a434a",
  padding: "16px"
};

function renderChapterWithTheme(theme) {
  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Loader } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Default",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Loader />)
          },
          {
            title: "Medium",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Loader medium />)
          },
          {
            title: "Small",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <Loader small />)
          },
          {
            title: "White",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={
                    theme.primary01
                      ? { backgroundColor: theme.brand01, padding: "16px" }
                      : darkExample
                  }
                >
                  <Loader white />
                </div>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Base", module)
  .addWithChapters("Default Loader", renderChapterWithTheme({}))
  .addWithChapters(
    "Loader w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
