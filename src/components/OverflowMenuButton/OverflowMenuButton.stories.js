import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import OverflowMenuButton from "./OverflowMenuButton";

import {
  regularScheduledEmailTheme,
  neuralSendEmailTheme,
  neuralScheduledEmailTheme
} from "./OverflowMenuButtonThemes";

import NeuralIcon from "../icons/NeuralIcon";
import ClockIcon from "../icons/ClockIcon";
import {
  wrapComponentWithContainerAndTheme,
  renderThemeIfPresentOrDefault,
  typography,
  colors
} from "../styles";

const EmailSendButtonText = styled.div`
  ${typography.body2};
`;

const NeuralSendWrapper = styled.div`
  display: flex;
  ${props => (props.scheduled ? "cursor: default;" : "")}
`;

const NeuralSendButtonText = styled.div`
  padding-left: 9px;
  ${typography.body2};
`;

const Wrapper = styled.div`
  background: ${renderThemeIfPresentOrDefault({
    key: "primary01",
    defaultvalue: "black"
  })};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const StyledClockIcon = styled(ClockIcon)`
  fill: ${renderThemeIfPresentOrDefault({
    key: "primary01",
    defaultValue: colors.white
  })};
`;

const options = [
  {
    content: <div>option1</div>,
    disabled: true
  },
  {
    content: <div>option2</div>,
    onClick: action("on option2 click")
  },
  {
    content: <div>option3</div>
  }
];

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import { OverflowMenuButton } from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Manual Email Send Button",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                  />
                </Wrapper>
              )
          },
          {
            title: "Manual Email Send Button (Disabled)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                    disabled
                  />
                </Wrapper>
              )
          },
          {
            title: "Manual Email Send Button (Loading)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    content={<EmailSendButtonText>SEND</EmailSendButtonText>}
                    loading
                  />
                </Wrapper>
              )
          },
          {
            title: "Regular Email Scheduled Button",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={false}
                    openDirection={"up"}
                    options={options}
                    theme={regularScheduledEmailTheme}
                    content={
                      <NeuralSendWrapper scheduled>
                        <StyledClockIcon />
                        <NeuralSendButtonText>
                          SENDING AT 12:45 PM PST
                        </NeuralSendButtonText>
                      </NeuralSendWrapper>
                    }
                  />
                </Wrapper>
              )
          },
          {
            title: "Neural Email Send Button",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={
                      <NeuralSendWrapper>
                        <NeuralIcon useCurrentColor />
                        <NeuralSendButtonText>
                          SEND AT 12:45 PM PST
                        </NeuralSendButtonText>
                      </NeuralSendWrapper>
                    }
                  />
                </Wrapper>
              )
          },
          {
            title: "Neural Email Send Button (Disabled)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={
                      <NeuralSendWrapper>
                        <NeuralIcon fillOpacity={0.4} useCurrentColor />
                        <NeuralSendButtonText>
                          SEND AT 12:45 PM PST
                        </NeuralSendButtonText>
                      </NeuralSendWrapper>
                    }
                    disabled
                  />
                </Wrapper>
              )
          },
          {
            title: "Neural Email Send Button (Loading)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={true}
                    openDirection={"up"}
                    options={options}
                    theme={neuralSendEmailTheme}
                    content={
                      <NeuralSendWrapper>
                        <NeuralIcon useCurrentColor />
                        <NeuralSendButtonText>
                          SEND AT 12:45 PM PST
                        </NeuralSendButtonText>
                      </NeuralSendWrapper>
                    }
                    loading
                  />
                </Wrapper>
              )
          },
          {
            title: "Neural Email Scheduled Send Button",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <OverflowMenuButton
                    shouldHover={false}
                    openDirection={"up"}
                    options={options}
                    theme={neuralScheduledEmailTheme}
                    content={
                      <NeuralSendWrapper scheduled>
                        <NeuralIcon useCurrentColor />
                        <NeuralSendButtonText>
                          SENDING AT 12:45 PM PST
                        </NeuralSendButtonText>
                      </NeuralSendWrapper>
                    }
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
  .addWithChapters("Default OverflowMenuButton", renderChapterWithTheme({}))
  .addWithChapters(
    "OverflowMenuButton w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
