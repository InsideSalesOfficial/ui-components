import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import AccordionList from './';

import { colors, typography } from '../styles'

const StyledAccordionList = styled(AccordionList)`
  color: ${colors.black90};

  .accordion__item {
    border-bottom: 1px solid ${colors.barLightGray};
    cursor: pointer;

    &:last-child {
      border-bottom: unset;
    }
  }
`;
const ItemDisplay = styled.div`
 ${typography.body2};

  background: ${(props) => {
    if (props.active) return colors.greenLighter;
    return colors.white;
  }};
  padding: 16px;
`;
const ItemContent = styled.div`
  ${typography.body1};

  background: ${(props) => {
    if (props.active) return colors.greenLighter;
    return colors.white;
  }};
  padding: 16px;
`;

class AccordionExample extends React.Component {
  state = {
    expandedItem: 0
  };

  generateListItems = (active) => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      items.push({
        active,
        canOpen: true,
        renderDisplay: () => <ItemDisplay active={active === i}>Item {i + 1} Display</ItemDisplay>,
        renderContent: () => <ItemContent active={active === i}>I am the content</ItemContent>
      });
    }

    return items;
  }

  render() {
    return (
      <StyledAccordionList
        onItemExpanded={(active) => {
          console.log('##', active)
          this.setState({ expandedItem: active })
        }}
        expandedItem={this.state.expandedItem}
        canCollapse={this.props.canCollapse}
        listItems={this.generateListItems(this.state.expandedItem)}
      />
    )
  }
}

storiesOf('Lists', module)
  .addWithChapters(
    'AccordionList',
    {
      info: `
      Usage

      ~~~
      import React from 'react';
      import { AccordionList } from 'insidesales-components';

      const SomeComponent = () => (
        <AccordionList
          onItemExpanded={(active) => { console.log('Active Item: ', active) }}
          expandedItem={0}
          canCollapse={true}
          listItems={[{
            canOpen: true,
            renderDisplay: () => <div>Display Content</div>
            renderContent: () => <div>Content area that shows/hides</div>
          }]}
        />
      )

      export default SomeComponent;
      ~~~
    `,
      chapters: [
        {
          sections: [
            {
              title: 'Default',
              sectionFn: () => {
                return <AccordionExample />
              }
            },
            {
              title: 'Example: Can Collapse',
              sectionFn: () => {
                return <AccordionExample canCollapse />
              }
            }
          ]
        }
      ]
    }
  );

