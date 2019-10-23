import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import MiniInput from "./MiniInput";

import {
  renderThemeIfPresentOrDefault,
  wrapComponentWithContainerAndTheme,
  colors
} from "../styles";

const Wrapper = styled.div`
  background-color: ${renderThemeIfPresentOrDefault({
    key: "primary01",
    defaultValue: "black"
  })};
  padding: 20px;
`;

class StateFullWrapper extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  render() {
    return (
      <MiniInput
        onChange={value => {
          this.setState({ value });
          this.props.onChange(value);
        }}
        value={this.state.value}
        onEnter={this.props.onEnter}
        type={"number"}
      />
    );
  }
}

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {MiniInput} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Basic MiniInput",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <StateFullWrapper
                    onEnter={action("onEnter")}
                    onChange={action("onChange")}
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
  .addWithChapters("Default MiniInput", renderChapterWithTheme({}))
  .addWithChapters(
    "MiniInput w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
