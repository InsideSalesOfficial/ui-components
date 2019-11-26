import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf, action } from "@storybook/react";
import { lightRadioListTheme } from "./RadioListThemes";

import RadioListComponent from "./index.js";

import { colors } from "../styles/colors.js";
import { generateFlexedThemeBackground } from "../styles/index.js";

let value = 3;
let name = "test-radio";

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { padding: "16px 16px" }
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
      import { RadioList } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Standard Radio List",
            subtitle:
              "A Radio List with Numeric Values and an Initial Value of 3",
            sectionFn: () => {
              const radios = [
                {
                  value: 1,
                  id: "radio-1",
                  label: "radio 1"
                },
                {
                  value: 2,
                  id: "radio-2",
                  label: "radio 2"
                },
                {
                  value: 3,
                  id: "radio-3",
                  label: "radio 3"
                }
              ];

              return wrapComponentWithContainerAndTheme(
                theme,
                <RadioListComponent
                  radios={radios}
                  value={value}
                  onChange={action("onChange")}
                  name={name}
                />
              );
            }
          },
          {
            title: "Example: Light Themed Radio List",
            subtitle:
              "A Radio List with Numeric Values and an Initial Value of 3",
            sectionFn: () => {
              const radios = [
                {
                  value: 1,
                  id: "radio-1",
                  label: <p style={{ display: "inline-block" }}>radio 1</p>
                },
                {
                  value: 2,
                  id: "radio-2",
                  label: <p style={{ display: "inline-block" }}>radio 2</p>
                },
                {
                  value: 3,
                  id: "radio-3",
                  label: <p style={{ display: "inline-block" }}>radio 3</p>
                }
              ];

              return wrapComponentWithContainerAndTheme(
                theme,
                <RadioListComponent
                  radios={radios}
                  value={value}
                  theme={lightRadioListTheme}
                  onChange={action("onChange")}
                  name={name}
                />
              );
            }
          },
          {
            title: "Wrapped In a Stateful Component",
            sectionFn: () => {
              const radios2 = [
                {
                  value: 1,
                  id: "radio-2-1",
                  label: "radio 1"
                },
                {
                  value: 2,
                  id: "radio-2-2",
                  label: "radio 2"
                },
                {
                  value: 3,
                  id: "radio-2-3",
                  label: "radio 3"
                }
              ];

              class Wrapper extends React.Component {
                constructor() {
                  super();

                  this.state = {
                    value: 1
                  };
                }

                render() {
                  return wrapComponentWithContainerAndTheme(
                    theme,
                    <div>
                      <RadioListComponent
                        radios={radios2}
                        value={this.state.value}
                        onChange={val => {
                          this.setState({ value: val });
                        }}
                        name={name}
                      />

                      <div>Current Value: {this.state.value}</div>
                    </div>
                  );
                }
              }

              return <Wrapper />;
            }
          },
          {
            title: "Example: Two line label",
            subtitle:
              "A Radio List with Numeric Values and an Initial Value of 3",
            sectionFn: () => {
              const radios = [
                {
                  value: 0,
                  id: "radio-0",
                  label: "Unassigned"
                },
                {
                  value: 1,
                  id: "radio-1",
                  label: {
                    super: "label 1",
                    main: "801-545-5656"
                  }
                },
                {
                  value: 2,
                  id: "radio-2",
                  label: {
                    super: "label 2",
                    main: "801-545-5657"
                  }
                },
                {
                  value: 3,
                  id: "radio-3",
                  label: {
                    super: "label 3",
                    main: "801-545-5658"
                  }
                }
              ];

              return wrapComponentWithContainerAndTheme(
                theme,
                <RadioListComponent
                  radios={radios}
                  value={value}
                  onChange={action("onChange")}
                  name={name}
                />
              );
            }
          },
          {
            title: "Example: Wrapping text",
            subtitle: "A Radio List with long text that wraps",
            sectionFn: () => {
              return wrapComponentWithContainerAndTheme(
                theme,
                <div style={{ width: "150px" }}>
                  <RadioListComponent
                    radios={[
                      {
                        value: 3,
                        id: "abc123",
                        label: "Hello World This Text is Long"
                      }
                    ]}
                  />
                </div>
              );
            }
          }
        ]
      }
    ]
  };
}

storiesOf("Form", module)
  .addWithChapters("Default RadioList", renderChapterWithTheme({}))
  .addWithChapters(
    "RadioList w/ BlueYellow",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
