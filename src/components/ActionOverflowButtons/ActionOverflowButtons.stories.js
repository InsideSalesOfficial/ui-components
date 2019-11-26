import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import ActionOverflowButtons from "./ActionOverflowButtons";

import {
  colors,
  wrapComponentWithContainerAndTheme,
  renderThemeIfPresentOrDefault
} from "../styles/index.js";

const dropDownItems = [
  {
    icon: "EditFilledIcon",
    text: "Edit",
    onClick: action("clicked"),
    className: "nickelodeon-guts"
  },
  {
    icon: "GroupAddIcon",
    text: "Add Group",
    onClick: action("clicked")
  },
  {
    icon: "HomeIcon",
    text: "Home",
    onClick: action("clicked")
  },
  {
    icon: "PlayIcon",
    text: "I would not try to read this entire line, it is too long",
    onClick: action("clicked")
  }
];

const dropDownItems2 = [
  {
    icon: "EditFilledIcon",
    text: "Edit"
  },
  {
    icon: "GroupAddIcon",
    text: "Add Group"
  }
];

const dropDownItems8 = [
  {
    icon: "EditFilledIcon",
    text: "Edit"
  },
  {
    icon: "GroupAddIcon",
    text: "Add Group"
  },
  {
    icon: "HomeIcon",
    text: "Home"
  },
  {
    icon: "PlayIcon",
    text: "I would"
  },
  {
    icon: "EditFilledIcon",
    text: "Edit"
  },
  {
    icon: "GroupAddIcon",
    text: "Add Group"
  },
  {
    icon: "HomeIcon",
    text: "Home"
  },
  {
    icon: "PlayIcon",
    text: "I would"
  }
];

const Wrapper = styled.div`
  background-color: ${renderThemeIfPresentOrDefault({ key: "primary01", defaultValue: colors.greenBackground})};
`;

const defaultStyleOverride = {
  padding: "16px",
  paddingBottom: "300px"
};

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {ActionOverflowButtons} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Toggle with 4 items",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper style={defaultStyleOverride}>
                  <ActionOverflowButtons
                    className="main-class"
                    overflowItems={dropDownItems}
                  />
                </Wrapper>
              )
          },
          {
            title: "Example: Toggle with 2 items",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper style={defaultStyleOverride}>
                  <ActionOverflowButtons overflowItems={dropDownItems2} />
                </Wrapper>
              )
          },
          {
            title:
              "Example: Toggle with 8 items (for demo purposes; never use more than 6 items)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper
                  style={{
                    ...defaultStyleOverride,
                    paddingBottom: "500px"
                  }}
                >
                  <ActionOverflowButtons
                    actionButtonIcon="CogIcon"
                    overflowItems={dropDownItems8}
                  />
                </Wrapper>
              )
          },
          {
            title: "Example: Toggle with 4 items; Labels on left",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper
                  style={{
                    ...defaultStyleOverride,
                    paddingLeft: "300px"
                  }}
                >
                  <ActionOverflowButtons
                    labelsPosition="left"
                    overflowItems={dropDownItems}
                  />
                </Wrapper>
              )
          },
          {
            title: "Example: Toggle with 4 items; Labels on left; Open up",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper
                  style={{
                    ...defaultStyleOverride,
                    paddingLeft: "300px",
                    paddingTop: "300px"
                  }}
                >
                  <ActionOverflowButtons
                    labelsPosition="left"
                    openDirection="up"
                    overflowItems={dropDownItems}
                  />
                </Wrapper>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default ActionOverflowButtons", renderChapterWithTheme({}))
  .addWithChapters(
    "ActionOverflowButtons w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
