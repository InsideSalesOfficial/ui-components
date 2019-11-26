import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Example from './Example';
import Props from './Props';

const ComponentPageContainer = styled.div`
  background: #FFF;
  margin-left: 260px;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
`;

const ComponentPageWrapper = styled.div`
  margin: 0 8.333325%;
  padding: 30px 0;
`;

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <ComponentPageContainer>
      <ComponentPageWrapper>
        <h2>{name}</h2>
        <p>{description}</p>

        <h3>Example{examples && examples.length > 1 && "s"}</h3>
        {
          examples && examples.length > 0 ?
          examples.map( example => <Example key={example.code} example={example} componentName={name} /> ) :
          "No examples exist."
        }

        <h3>Props</h3>
        {
          props ?
          <Props props={props} /> :
          "This component accepts no props."
        }
      </ComponentPageWrapper>
    </ComponentPageContainer>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
