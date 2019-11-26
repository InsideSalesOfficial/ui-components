import React from "react";
import moment from "moment";
import styled from "styled-components";
import { action, storiesOf } from "@storybook/react";

import RangeSlider from "./RangeSlider";

import { colors, wrapComponentWithContainerAndTheme } from "../styles";
import { fontSizes } from "../styles";

const Hour = styled.span`
  font-size: ${fontSizes.small};
  margin-right: 4px;
`;

const Meridian = styled.small`
  font-size: ${fontSizes.xxSmall};
`;

function formatLabel(value) {
  return (
    <div>
      <Hour>
        {moment()
          .startOf("day")
          .add(value, "hours")
          .format("h")}
      </Hour>
      <Meridian>
        {moment()
          .startOf("day")
          .add(value, "hours")
          .format("A")}
      </Meridian>
    </div>
  );
}

function renderChapterWithTheme(theme) {
  return {
    info: `
        Usage

        ~~~
        import React from 'react';
        import {RangeSlider} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Example: Single Range",
            subtitle: "A range slider with one value",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <RangeSlider
                  label="Pick a number"
                  minValue={0}
                  maxValue={100}
                  onRangeUpdate={action("rangeValues")}
                />,
                { height: "100px" }
              )
          },
          {
            title: "Example: Double Range",
            subtitle: "A range slider with a min and max value option",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <RangeSlider
                  label="Pick a number"
                  initialValue={{
                    min: 25,
                    max: 50
                  }}
                  minValue={0}
                  maxValue={100}
                  onRangeUpdate={action("rangeValues")}
                />,
                { height: "100px" }
              )
          },
          {
            title: "Example: Date Range",
            subtitle:
              "You can easily create a date range by formatting the labels.",
            info: `
                RangeSlider has a formatLabel prop which accepts a function where you can access the handle labels to format them

                ~~~
                const formatLabel = value => (
                  <div>
                    <Hour>{moment().startOf('day').add(value, 'hours').format('h')}</Hour>
                    <Meridian>{moment().startOf('day').add(value, 'hours').format('A')}</Meridian>
                  </div>
                );
                ~~~
              `,
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <RangeSlider
                  label="time is between"
                  formatLabel={formatLabel}
                  initialValue={{
                    min: 8,
                    max: 17
                  }}
                  minValue={0}
                  maxValue={24}
                  onRangeUpdate={action("rangeValues")}
                />,
                { height: "100px" }
              )
          },
          {
            title: "Example: Custom Value Step",
            subtitle: "A range slider a step value of 10",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <RangeSlider
                  minValue={0}
                  maxValue={100}
                  onRangeUpdate={action("rangeValues")}
                  step={10}
                />,
                { height: "100px" }
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Form", module)
  .addWithChapters("Default RangeSlider", renderChapterWithTheme({}))
  .addWithChapters(
    "RangeSlider w/ BlueYellow Theme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
