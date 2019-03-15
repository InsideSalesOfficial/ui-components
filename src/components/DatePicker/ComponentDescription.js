// A simple description section for use in stories only. Not intended for use as
// an app component

import React from 'react';

const style = {
  base: {
    color: '#383838',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    marginBottom: '25px',
    padding: '10px'
  },
  title: {
    fontSize: '30px',
    fontWeight: 400,
    margin: 0
  },
  description: {
    color: '#8a8a8a',
    fontWeight: 300
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
