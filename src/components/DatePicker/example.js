// A simple dexample wrapper for use in stories only. Not intended for use as
// an app component

// TODO: Create another decorator for being able to display the markup of each example

import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { fontSizes, fontFamilies, fontWeights } from '../styles/typography';

const BaseExample = styled.div`
fontFamily: ${fontFamilies.roboto}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif,
marginBottom: 25px,
padding: 10px,
position: relative,
WebkitFontSmoothing: antialiased
`;

const DescriptionExample = styled.p`
color: ${colors.grayD},
fontWeight: ${fontWeights.light},
marginTop: 10px
`;

const TitleExample = styled.h2`
color: ${colors.grayE},
fontWeight: ${fontWeights.regular},
fontSize: ${fontSizes.large},
margin: 0
`;

const ComponentWrapperExample = styled.div`
width: 440px,
boxSizing: border-box,
padding: 0 10px
`;

const WrapperExample = styled.div`
border: 1px solid ${colors.white60},
padding: 0px 20px 20px 20px,
display: flex,
flex: 0 0 100%,
flexDirection: column
`;

const ExampleText = styled.p`
display: inline-flex,
flex: 0 0 100%,
flexDirection: column,
fontSize: ${fontSizes.xSmall},
fontWeight: ${fontWeights.bold},
textTransform: uppercase
`;

export const Example = ({
  children,
  title,
  description
}) => {
  return (
    // The example div gets class isdc-ext-wrap because our component styles are all wrapped in this prefix to work
    // with the existing extension syles.
    <BaseExample className="isdc-ext-wrap">
      <TitleExample>{ title }</TitleExample>
      <DescriptionExample>{ description }</DescriptionExample>
      <WrapperExample>
        <ExampleText>Example</ExampleText>
        <ComponentWrapperExample>
          { children }
        </ComponentWrapperExample>
      </WrapperExample>
    </BaseExample>
  );
};

export default Example;
