import React from 'react';
import { ThemeProvider } from 'styled-components';

export * from './boxShadows';
export * from './colors';
export * from './scrollbars';
export * from './typography';

export function generateFlexedThemeBackground(props, otherStyles) {
  return { background: props.theme.primary01, ...otherStyles };
};

export function wrapComponentWithContainerAndTheme(theme, Component, wrapperStyling) {
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
