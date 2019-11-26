import { action, storiesOf } from "@storybook/react";
import React from "react";

import SearchBox from "./SearchBox";
import * as SearchBoxThemes from "./SearchBoxThemes.js";

import { wrapComponentWithContainerAndTheme, colors } from "../styles";

function renderChapterWithTheme(theme) {
  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { SearchBox, SearchBoxThemes } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Empty SearchBox",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={{
                    background: "black",
                    padding: "20px"
                  }}
                >
                  <SearchBox
                    placeholder={"Search"}
                    searchText={""}
                    enabled={true}
                    onSearch={action("onSearch")}
                    iconSize={20}
                  />
                </div>
              )
          },
          {
            title: "Example: SearchBox with value",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={{
                    background: "black",
                    padding: "20px"
                  }}
                >
                  <SearchBox
                    placeholder={"Search"}
                    searchText={"Hello world"}
                    enabled={true}
                    onSearch={action("onSearch")}
                    iconSize={20}
                  />
                </div>
              )
          },
          {
            title: "Example: SearchBox with theme",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={{
                    background: "white",
                    padding: "20px"
                  }}
                >
                  <SearchBox
                    placeholder={"Search"}
                    searchText={""}
                    enabled={true}
                    theme={SearchBoxThemes.lightTheme}
                    onSearch={action("onSearch")}
                    iconSize={20}
                  />
                </div>
              )
          },
          {
            title: "Example: SearchBox with dark theme",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <div
                  style={{
                    background: "white",
                    padding: "20px"
                  }}
                >
                  <SearchBox
                    placeholder={"Search"}
                    searchText={""}
                    enabled={true}
                    theme={SearchBoxThemes.darkTheme}
                    onSearch={action("onSearch")}
                    iconSize={20}
                  />
                </div>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Form", module)
  .addWithChapters("Default SearchBox", renderChapterWithTheme({}))
  .addWithChapters(
    "SearchBox w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
