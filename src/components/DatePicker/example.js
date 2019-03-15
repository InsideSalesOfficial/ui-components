// A simple dexample wrapper for use in stories only. Not intended for use as
// an app component

// TODO: Create another decorator for being able to display the markup of each example

import React from 'react';

import PbTheme from './theme';

const { fontFamilies } = PbTheme;

const style = {
  base: {
    fontFamily: `${fontFamilies.roboto}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`,
    marginBottom: '25px',
    padding: '10px',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased'
  },
  exampleWrapper: {
    border: '1px solid #E6ECF0',
    padding: '0px 20px 20px 20px',
    display: 'flex',
    flex: '0 0 100%',
    flexDirection: 'column'
  },
  exampleText: {
    color: '#b0c1cb',
    display: 'inline-flex',
    flex: '0 0 100%',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  title: {
    color: '#383838',
    fontWeight: 400,
    fontSize: '22px',
    margin: 0
  },
  description: {
    color: '#656565',
    fontWeight: 300,
    marginTop: '10px'
  },
  componentWrapper: {
    width: '100%',
    boxSizing: 'border-box'
  }
};

export const Example = ({
  children,
  title,
  dark,
  darkerBg,
  description
}) => {
  if (dark) {
    style.exampleWrapper.background = '#2a434a';
    style.exampleText.color = '#ffffff';
  } else if (darkerBg) {
    style.exampleWrapper.background = '#1D2E33';
    style.exampleText.color = '#ffffff';
  } else {
    style.exampleWrapper.backgroundColor = 'transparent';
    style.exampleText.color = '#b0c1cb';
  }
  if (children.props.w440) {
    style.componentWrapper.width = '440px';
    style.componentWrapper.padding = '0 10px';
  } else {
    style.componentWrapper.width = '100%';
    style.componentWrapper.padding = '0';
  }
  return (
    // The example div gets class isdc-ext-wrap because our component styles are all wrapped in this prefix to work
    // with the existing extension syles.
    <div style={style.base} className="isdc-ext-wrap">
      <h2 style={style.title}>{ title }</h2>
      <p style={style.description}>{ description }</p>
      <div style={style.exampleWrapper}>
        <p style={style.exampleText}>Example</p>
        <div style={style.componentWrapper}>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Example;
