import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import OverflowMenu from "./";
import {
  renderThemeIfPresentOrDefault,
  wrapComponentWithContainerAndTheme,
  colors
} from "../styles";
import AttachmentIcon from "../icons/AttachmentIcon";

const DarkBackground = styled.div`
  padding: 10px;
  height: 150px;
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
      import { OverflowMenu } from 'insidesales-components';

      const options = [
        { action: action('click option'), label: 'Option 1' },
        { action: action('click option'), label: 'Option 2' }
      ];

      <OverflowMenu options={options} />

      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Default",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                { action: action("click option"), label: "Option 2" },
                { action: action("click option"), label: "Option 3" }
              ];
              return wrapComponentWithContainerAndTheme(
                theme,
                <DarkBackground>
                  <OverflowMenu options={options} />
                </DarkBackground>
              );
            }
          },
          {
            title: "Example: openUp",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                { action: action("click option"), label: "Option 2" }
              ];
              return wrapComponentWithContainerAndTheme(
                theme,
                <DarkBackground>
                  <OverflowMenu options={options} openUp />
                </DarkBackground>
              );
            }
          },
          {
            title: "Example: openRight",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                { action: action("click option"), label: "Option 2" }
              ];
              const LeftDarkBackground = styled(DarkBackground)`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `;
              return wrapComponentWithContainerAndTheme(
                theme,
                <LeftDarkBackground>
                  <OverflowMenu options={options} openRight />
                </LeftDarkBackground>
              );
            }
          },
          {
            title: "Example: openRight and openUp",
            sectionFn: () => {
              const options = [
                {
                  action: action("click option"),
                  label: "This is some really, length text for demo"
                },
                { action: action("click option"), label: "Some short text" }
              ];
              const LeftDarkBackground = styled(DarkBackground)`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `;

              return wrapComponentWithContainerAndTheme(
                theme,
                <LeftDarkBackground>
                  <OverflowMenu options={options} openRight openUp />
                </LeftDarkBackground>
              );
            }
          },
          {
            title: "Example: custom icon",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                { action: action("click option"), label: "Option 2" }
              ];

              const icon = (
                <AttachmentIcon
                  fill={colors.white80}
                  size={{ width: 50, height: 50 }}
                />
              );

              return wrapComponentWithContainerAndTheme(
                theme,
                <DarkBackground>
                  <OverflowMenu options={options} icon={icon} />
                </DarkBackground>
              );
            }
          },
          {
            title: "Example: keep menu open",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                {
                  action: action("click option"),
                  label: "Option 2",
                  isHighlighted: true
                }
              ];

              return wrapComponentWithContainerAndTheme(
                theme,
                <DarkBackground>
                  <OverflowMenu options={options} stayOpen={true} />
                </DarkBackground>
              );
            }
          },
          {
            title: "Example: second menu option disabled",
            sectionFn: () => {
              const options = [
                { action: action("click option"), label: "Option 1" },
                {
                  action: action("click option"),
                  label: "Option 2",
                  isDisabled: true
                }
              ];

              return wrapComponentWithContainerAndTheme(
                theme,
                <DarkBackground>
                  <OverflowMenu options={options} />
                </DarkBackground>
              );
            }
          }
        ]
      }
    ]
  };
}

storiesOf("Menus", module)
  .addWithChapters("Default OverflowMenu", renderChapterWithTheme({}))
  .addWithChapters(
    "OverflowMenu w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
