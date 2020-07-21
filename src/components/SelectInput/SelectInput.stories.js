import React from "react";
import { storiesOf, action } from "@storybook/react";
import styled, { ThemeProvider } from "styled-components";
import _ from "lodash";

import {
  renderThemeIfPresentOrDefault,
  generateFlexedThemeBackground,
  colors,
  typography
} from "../styles";
import Icons from "../icons";

import {
  lineSelectInputTheme,
  transparentSelectInputTheme
} from "./SelectInputThemes";
import SelectInput from "./";

const promotedOptions = [
  { value: "101", label: "Promoted Option 1", disabled: true },
  { value: "102", label: "Promoted Option 2" }
];

const genericOptions = [
  { value: "1", label: "Option One" },
  { value: "2", label: "Option Two" },
  { value: "3", label: "Option Three" },
  { value: "4", label: "Option Four" },
  { value: "5", label: "Option Five" },
  { value: "6", label: "Option Six" },
  { value: "7", label: "Option Seven" },
  { value: "8", label: "Option Eight" },
  { value: "9", label: "Option Nine" },
  { value: "10", label: "Option Ten" },
  {
    value: "11",
    label:
      "A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string"
  }
];

const selectedOptions = ["1", "2"];

const AddButton = styled.div`
  ${typography.body2};
  color: ${renderThemeIfPresentOrDefault({
    key: "brand01",
    defaultValue: colors.green
  })};
  padding-left: 32px;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }
`;

function wrapComponentWithContainerAndTheme(theme, Component, wrapperStyling) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { padding: "16px 16px" }
  );
  return (
    <ThemeProvider theme={theme}>
      <div style={{ ...storyContainerStyle, ...wrapperStyling }}>
        {Component}
      </div>
    </ThemeProvider>
  );
}

storiesOf("Form", module)
  .addWithChapters("Default SelectInput", renderChapterWithTheme({}))
  .addWithChapters(
    "SelectInput w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );

function renderChapterWithTheme(theme) {
  const darkExample = {
    height: "220px",
    backgroundColor: theme.primary01 || "#2a434a",
    padding: "16px"
  };

  const lightExample = {
    height: "220px",
    backgroundColor: theme.primary01 || "#2a434a",
    padding: "16px"
  };

  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import {SelectInput} from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "Default Theme",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />,
                darkExample
              )
          },
          {
            subtitle: "Header Label",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  headerLabel="Custom Label"
                  options={genericOptions}
                />,
                darkExample
              )
          },
          {
            subtitle: "Custom Label",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  defaultLabel="Custom Label"
                  options={genericOptions}
                />,
                darkExample
              )
          },
          {
            subtitle: "Disabled",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  isDisabled
                  onChange={action("Option Selected")}
                  defaultLabel="Custom Default"
                />,
                darkExample
              )
          },
          {
            title: "Line Select Input Theme",
            subtitle: "Generally used in modals (lineSelectInputTheme)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  onChange={action("Option Selected")}
                  defaultLabel="Custom Selected Option Name"
                  theme={lineSelectInputTheme}
                />,
                lightExample
              )
          },
          {
            title: "Transparent Select Input Theme",
            subtitle:
              "Used as filter on People page (transparentSelectInputTheme)",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  onChange={action("Option Selected")}
                  defaultLabel="Custom Default"
                  theme={transparentSelectInputTheme}
                />,
                darkExample
              )
          },
          {
            subtitle: "Disabled Transparent Select Input Theme",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  onChange={action("Option Selected")}
                  defaultLabel="Custom Default"
                  isDisabled
                  theme={transparentSelectInputTheme}
                />,
                darkExample
              )
          },
          {
            title: "Additional state for options",
            subtitle: "Promoted Items",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action("Option Selected")}
                  defaultLabel={""}
                  promotedOptions={promotedOptions}
                />,
                lightExample
              )
          },
          {
            title: "Searchable Options",
            subtitle: "Places a search input at the top of the options list.",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action("Option Selected")}
                  defaultLabel={""}
                  searchable
                />,
                lightExample
              )
          },
          {
            title: "Searchable div Options",
            subtitle: "Searchable list of divs",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={_.map(genericOptions, opt => ({
                    value: opt.value,
                    label: <div>{opt.label}</div>,
                    searchText: opt.label
                  }))}
                  theme={lineSelectInputTheme}
                  onChange={action("Option Selected")}
                  defaultLabel={""}
                  searchable
                />,
                lightExample
              )
          },
          {
            title: "Add Button Select List",
            subtitle: `Shows the select input as an Add button instead of the select input styling. The defaultLabel prop will determing the button text.
                      This is convenient for when you need a select list to choose options from to add to another list.`,
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action("Option Selected")}
                  defaultLabel={"ADD"}
                  addButtonList
                  searchable
                />,
                {}
              )
          },
          {
            title: "Multi Select",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  value={selectedOptions}
                  multiSelect
                />,
                darkExample
              )
          },
          {
            title: "Multi Select None Selected",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  value={[]}
                  multiSelect
                />,
                darkExample
              )
          },
          {
            title: "Multi Select/Bottom Action Area",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  value={selectedOptions}
                  multiSelect
                  selectOptionsWidth={250}
                  bottomActionArea={
                    <AddButton>
                      <Icons.AddCircleIcon
                        fill={colors.green}
                        size={{ width: 24, height: 24 }}
                      />{" "}
                      {"Add Tag"}
                    </AddButton>
                  }
                />,
                darkExample
              )
          },
          {
            title: "Custom Dropdown Width",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  value={selectedOptions}
                  selectOptionsWidth={600}
                  multiSelect
                />,
                { ...darkExample, width: "400px" }
              )
          },
          {
            title: "Dropdown Max Height",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <SelectInput
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  value={selectedOptions}
                  maxHeight={"600px"}
                  multiSelect
                />,
                darkExample
              )
          }
        ]
      }
    ]
  };
}
