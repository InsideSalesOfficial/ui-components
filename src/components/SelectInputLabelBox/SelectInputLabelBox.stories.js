import React from "react";
import _ from "lodash";
import { storiesOf, action } from "@storybook/react";
import SelectInputLabelBox from "./SelectInputLabelBox";
import styled from "styled-components";

import {
  renderThemeIfPresentOrDefault,
  wrapComponentWithContainerAndTheme,
  colors,
  typography
} from "../styles";
import { SelectInputLabelBoxThemes } from "../index";

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  padding-bottom: 6px;
`;

const OptionLabel = styled.div`
  ${typography.caption};
  color: ${colors.black60};
`;

const OptionValue = styled.div`
  ${typography.subhead1};
  color: ${colors.black90};
`;

class WrapperComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  render = () => (
    <SelectInputLabelBox
      {...this.props}
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  );
}

class MultiselectWrapperComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: []
    };
  }
  render = () => (
    <SelectInputLabelBox
      {...this.props}
      value={this.state.value}
      onChange={value => {
        this.setState({ value });
      }}
      multiSelect
    />
  );
}

class WrapperEmailThreadComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      label: "",
      value: "Send as a reply to",
      isPlaceHolder: true
    };
  }

  onOptionChange = value => {
    if (value === "p1") {
      this.setState({
        label: "",
        value: "Send as a reply to",
        isPlaceHolder: true
      });
      return;
    }

    const selectedOption = _.find(htmlOptions, o => o.value === value);
    this.setState({
      label: `Send as a reply to ${selectedOption.optionLabel}`,
      value: selectedOption.optionValue,
      isPlaceHolder: false
    });
  };

  render = () => (
    <SelectInputLabelBox
      {...this.props}
      label={this.state.label}
      value={this.state.value}
      isPlaceHolder={this.state.isPlaceHolder}
      onChange={this.onOptionChange}
    />
  );
}

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
  },
  { value: 12, label: `I'm a number` }
];

const optionsToPromote = [{ value: "p1", label: "Clear Selection" }];

const htmlOptions = [
  {
    value: "1",
    optionLabel: "option one label",
    optionValue: "option one",
    label: (
      <OptionWrapper>
        <OptionLabel>option one label</OptionLabel>
        <OptionValue>option one</OptionValue>
      </OptionWrapper>
    )
  },
  {
    value: "2",
    optionLabel: "option two label",
    optionValue: "option two",
    label: (
      <OptionWrapper>
        <OptionLabel>option two label</OptionLabel>
        <OptionValue>option two</OptionValue>
      </OptionWrapper>
    )
  }
];

const selectedOptions = ["1", "2"];

function renderChapterWithTheme(theme) {
  return {
    info: `
      Usage

      ~~~
      import React from 'react';
      import {SelectInputLabelBox} from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: "SelectInputLabelBox",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with Stateful wrapper",
            sectionFn: () => (
              <div>
                <WrapperComponent
                  label="Hello World!"
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with custom options width",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  optionsWidth="240"
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with Stateful wrapper and required",
            sectionFn: () => (
              <div>
                <WrapperComponent
                  label="Hello World!"
                  required
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with Stateful wrapper and multiselect",
            sectionFn: () => (
              <div>
                <MultiselectWrapperComponent
                  label="multiselect"
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with custom options width",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  optionsWidth="240"
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "Disabled SelectInputLabelBox",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  isDisabled={true}
                  label="Hello World!"
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "Disabled SelectInputLabelBox with value",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  isDisabled={true}
                  label="Hello World!"
                  value={12}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title:
              "SelectInputLabelBoxTransparent with value and promotedOption",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello world"
                  options={htmlOptions}
                  promotedOptions={optionsToPromote}
                  theme={
                    SelectInputLabelBoxThemes.lineSelectInputBoxTransparentTheme
                  }
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with darkTheme",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  theme={SelectInputLabelBoxThemes.darkTheme}
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBoxTransparent with searchable dropdown",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  options={genericOptions}
                  searchable
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with multiselect",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  value={selectedOptions}
                  options={genericOptions}
                  multiSelect
                />
              </div>
            )
          },
          {
            title: "SelectInputLabel with multiselect and no selected values",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  value={[]}
                  options={genericOptions}
                  multiSelect
                />
              </div>
            )
          },
          {
            title: "SelectInputLabel with boolean value",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  value={true}
                  options={[
                    { value: true, label: "true" },
                    { value: false, label: "false" }
                  ]}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabel with boolean value",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  value={false}
                  options={[
                    { value: true, label: "true" },
                    { value: false, label: "false" }
                  ]}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabel with no selected values",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  onChange={action("Option Selected")}
                  value={""}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with darkTheme with value",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label="Hello World!"
                  theme={SelectInputLabelBoxThemes.darkTheme}
                  value="Hi world"
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          },
          {
            title: "SelectInputLabelBox with error",
            sectionFn: () => (
              <div>
                <SelectInputLabelBox
                  label={"error"}
                  value="NO!"
                  error
                  onChange={action("Option Selected")}
                  options={genericOptions}
                />
              </div>
            )
          }
        ]
      }
    ]
  };
}

storiesOf("Form", module)
  .addWithChapters("Default SelectInputLabelBox", renderChapterWithTheme({}))
  .addWithChapters(
    "SelectInputLabelBox w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
