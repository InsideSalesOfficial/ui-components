// A simple description section for use in stories only. Not intended for use as
// an app component

import React from 'react';
import PbTheme from './theme';
const { fontFamilies, fontSizes, fontWeights } = PbTheme;

const style = {
  base: {
    fontFamily: `${fontFamilies.roboto}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`,
    marginBottom: '25px',
    padding: '10px'
  },
  title: {
    fontSize: `${fontSizes.xLarge}`,
    fontWeight: `${fontWeights.regular}`,
    margin: 0
  },
  description: {
    fontWeight: `${fontWeights.light}`
  }
};

export const ComponentDescription = ({
  title,
  description
}) => (
  <div style={style.base}>
    <h1 style={style.title}>{ title }</h1>
    <p style={style.description}>{ description }</p>
  </div>
);

export default ComponentDescription;
