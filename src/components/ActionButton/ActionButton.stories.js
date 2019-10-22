import React from "react";
import { storiesOf, action } from "@storybook/react";

import ActionButton from "./ActionButton";

import { wrapComponentWithContainerAndTheme, colors } from "../styles";

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {ActionButton} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Plain button, no toggle",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ActionButton icon="AddIcon" onClick={action("clicked")} />
              )
          },
          {
            title: "Example: Plain button with toggle",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(theme, <ActionButtonWrapper />)
          },
          {
            title: "Example: Alternate icon with toggle",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ActionButtonWrapper icon="GroupAddIcon" />
              )
          },
          {
            title: "Example: Disabled",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <ActionButton icon="AddIcon" toggle disabled />
              )
          }
        ]
      }
    ]
  };
}

// wrapper just for toggle state handling in storybook
class ActionButtonWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      togState: false
    };
  }
  toggle = () => {
    this.setState({
      togState: !this.state.togState
    });
  };
  render() {
    return (
      <ActionButton
        icon={this.props.icon}
        onClick={this.toggle}
        toggled={this.state.togState}
      />
    );
  }
}

storiesOf("Base", module)
  .addWithChapters("Default ActionButton", renderChapterWithTheme({}))
  .addWithChapters(
    "ActionButton w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
