import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf, action } from "@storybook/react";

import MessageDialog from "./MessageDialog";

import { colors } from "../styles/colors.js";
import { generateFlexedThemeBackground } from "../styles/index.js";

function wrapComponentWithContainerAndTheme(theme, Component) {
  const storyContainerStyle = generateFlexedThemeBackground(
    { theme },
    { width: "100%", color: theme.white ? "white" : "inherit" }
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
        import {MessageDialog} from 'insidesales-components';
        ~~~
      `,
    chapters: [
      {
        sections: [
          {
            title: "Basic Modal",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <MessageDialog
                  dialogTitle={"Account Details Needed"}
                  bodyElement={
                    <div>
                      Your email settings must be complete before you can send
                      email messages from Playbooks extension.
                    </div>
                  }
                  secondaryActionText="Cancel"
                  onSecondaryActionClick={action("onSecondaryActionClick")}
                  primaryActionText="Save"
                  onPrimaryActionClick={action("onPrimaryActionClick")}
                  center
                  onStoryBook
                />
              )
          },
          {
            title: "Basic Modal w/ danger",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <MessageDialog
                  dialogTitle={"Email Deletion"}
                  bodyElement={
                    <div>Your email will be removed from the account.</div>
                  }
                  secondaryActionText="Cancel"
                  onSecondaryActionClick={action("onSecondaryActionClick")}
                  primaryActionText="Delete"
                  onPrimaryActionClick={action("onPrimaryActionClick")}
                  primaryActionDanger
                  center
                  onStoryBook
                />
              )
          },
          {
            title: "Modal with no actions",
            sectionFn: () =>
              wrapComponentWithContainerAndTheme(
                theme,
                <MessageDialog
                  dialogTitle="Syncing from Salesforce"
                  bodyElement={
                    <p>
                      Syncing information from Salesforce may take a few
                      seconds...
                    </p>
                  }
                  center
                  onStoryBook
                />
              )
          }
        ]
      }
    ]
  };
}

storiesOf("Components", module)
  .addWithChapters("Default MessageDialog", renderChapterWithTheme({}))
  .addWithChapters(
    "MessageDialog w/ BlueYellowTheme",
    renderChapterWithTheme(colors.blueYellowTheme)
  );
