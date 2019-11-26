import React from "react";
import styled from "styled-components";
import { storiesOf, action } from "@storybook/react";

import FilterBar from "./";

import {
  renderThemeIfPresentOrDefault,
  wrapComponentWithContainerAndTheme,
  colors
} from "../styles";

const genericOptions = [
  { value: "1", label: "Neural Score (by Person)" },
  { value: "2", label: "Last Name" },
  { value: "3", label: "Play and Step" },
  { value: "4", label: "Step Number" },
  { value: "5", label: "Most Recent Interactions" },
  { value: "6", label: "Account Name" }
];

const promotedOptions = [
  { value: "7", label: "Custom Sort 1" },
  { value: "8", label: "Custom Sort 2" }
];

const darkExample = ({ width = 440 } = {}) => ({
  height: "200px",
  width: `${width}px`,
  padding: "0"
});

const Wrapper = styled.div`
  background-color: ${renderThemeIfPresentOrDefault({
    key: "primary01",
    defaultValue: colors.darkBlueB
  })};
`;

class FilterBarWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: "2",
      searchValue: ""
    };
  }
  render() {
    return (
      <FilterBar
        sortOptions={genericOptions}
        promotedSortOptions={promotedOptions}
        selectedSortOption={this.state.sortValue}
        sortLabel={"Sort By"}
        onSearchComplete={this.props.onSearchComplete}
        onSortOptionChange={value => {
          this.setState({ sortValue: value });
        }}
        onClickFilter={action("on clicked filter")}
        onSearchClear={action("on search clear")}
        onSearchChange={value => {
          this.setState({ searchValue: value });
        }}
        hideFilter={this.props.hideFilter}
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
            import {FilterBar} from 'insidesales-components';
            ~~~
            `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Filter Bar",
            subtitle: "",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper style={darkExample()}>
                  <FilterBarWrapper
                    onSearchComplete={action("You have searched")}
                  />
                </Wrapper>
              )
          },
          {
            title: "Example: Filter Button Hidden",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper style={darkExample()}>
                  <FilterBarWrapper hideFilter={true} />
                </Wrapper>
              )
          },
          {
            title: "Example: Wide Bar",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <Wrapper style={darkExample({ width: 660 })}>
                  <FilterBarWrapper wide />
                </Wrapper>
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default FilterBar", renderChapterWithTheme({}))
  .addWithChapters(
    "FilterBar w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
