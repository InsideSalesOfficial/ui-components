import React from "react";
import { storiesOf } from "@storybook/react";
import styled, { ThemeProvider } from "styled-components";

import Button from "./";

import {
  ifThemeIsPresentUse,
  generateFlexedThemeBackground
} from "../styles/index.js";
import { colors } from "../styles/colors";

const ButtonWrapper = styled.div`
  display: flex;
`;

const LightWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 64px;
  box-sizing: border-box;
  text-align: center;
`;

const DarkWrapper = styled(LightWrapper)`
  background-color: ${colors.darkBlue};
  ${ifThemeIsPresentUse({ value: "display: none;" })}
`;

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
      import { Button } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Raised",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" />
                    <Button label="Danger" danger />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" />
                    <Button label="Danger" danger />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Raised Disabled",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" disabled />
                    <Button label="Danger" disabled danger />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" onDarkBg disabled />
                    <Button label="Danger" onDarkBg disabled danger />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Flat",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" flat />
                    <Button label="Alternate" flatAlt />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" onDarkBg flat />
                    <Button label="Alternate" onDarkBg flatAlt />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Flat Disabled",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" flat disabled />
                    <Button label="Alternate" flatAlt disabled />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" onDarkBg flat disabled />
                    <Button label="Alternate" onDarkBg flatAlt disabled />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Outline",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" outline />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" onDarkBg outline />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Outline Disabled",
            options: {
              showSource: false
            },
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ButtonWrapper>
                  <LightWrapper>
                    <Button label="Button" outline disabled />
                  </LightWrapper>
                  <DarkWrapper>
                    <Button label="Button" onDarkBg outline disabled />
                  </DarkWrapper>
                </ButtonWrapper>
              )
          },
          {
            title: "Neuralytics",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Button label="Button" neuralytics />
              )
          },
          {
            title: "Loading",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Button label="Button" loading />
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Base", module)
  .addWithChapters("Default Button", renderChapterWithTheme({}))
  .addWithChapters(
    "Button w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
