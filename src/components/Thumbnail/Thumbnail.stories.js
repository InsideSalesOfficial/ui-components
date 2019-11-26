import styled from "styled-components";
import React from "react";
import { storiesOf } from "@storybook/react";

import Thumbnail from "./Thumbnail";

import { wrapComponentWithContainerAndTheme, colors } from "../styles";

const Parent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
`;

const GrandParent = styled.div`
  background: gray;
  height: 400px;
`;

const Title = styled.h3`
  width: 300px;
`;

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {TextInput} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Example: centered thumbnail from top",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      dialogXCenter
                      dialogTopOuter
                      arrowXCenter
                      arrowBottom
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: right inner aligned thumbnail from bottom",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      dialogRightInner
                      dialogBottomOuter
                      arrowX={"calc(100% - 17px)"}
                      arrowTop
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: left inner aligned thumbnail from bottom",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      dialogLeftInner
                      dialogBottomOuter
                      arrowX={"5px"}
                      arrowTop
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: y centered thumbnail left outer aligned",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      arrowRight
                      arrowYCenter
                      dialogYCenter
                      dialogLeftOuter
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: y centered thumbnail right outer aligned",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      arrowLeft
                      arrowYCenter
                      dialogYCenter
                      dialogRightOuter
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: left aligned bottom inner",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      arrowRight
                      arrowY={"7px"}
                      dialogTopInner
                      dialogLeftOuter
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          },
          {
            title: "Example: right aligned top inner",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <GrandParent>
                  <Parent>
                    <Thumbnail
                      arrowLeft
                      arrowY={"calc(100% - 17px)"}
                      dialogBottomInner
                      dialogRightOuter
                      padding={"2px 20px"}
                    >
                      <Title>Hello World</Title>
                    </Thumbnail>
                  </Parent>
                </GrandParent>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default Thumbnail", renderChapterWithTheme({}))
  .addWithChapters(
    "Thumbnail w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
