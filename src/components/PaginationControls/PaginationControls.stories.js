import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import PaginationControls from "./PaginationControls";
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
  padding: 10px;
`;

class StatefulWrapper extends React.Component {
  constructor() {
    super();
    this.state = { page: 1 };
  }
  render = () => {
    console.log(this.state.page);
    return (
      <PaginationControls
        currentPage={this.state.page}
        totalPages={100}
        advanceAPage={e => {
          this.setState({ page: this.state.page + 1 });
          action("advanceAPage")(e);
        }}
        goBackAPage={e => {
          this.setState({ page: this.state.page - 1 });
          action("goBackAPage")(e);
        }}
        isRequestPageValid={e => {
          action("isRequestPageValid")(e);
          return true;
        }}
        requestPage={page => {
          this.setState({ page });
          action("requestPage")(page);
        }}
      />
    );
  };
}

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {PaginationControls} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Basic PaginationControls",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <StatefulWrapper />
                </Wrapper>
              )
          },
          {
            title: "PaginationControls with one page",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper>
                  <PaginationControls
                    currentPage={1}
                    totalPages={1}
                    advanceAPage={action("advanceAPage")}
                    goBackAPage={action("goBackAPage")}
                    isRequestPageValid={action("isRequestPageValid")}
                    requestPage={action("requestPage")}
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
  .addWithChapters("Default PaginationControls", renderChapterWithTheme({}))
  .addWithChapters(
    "PaginationControls w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
