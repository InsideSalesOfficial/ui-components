import React from 'react';
import { storiesOf, action } from '@storybook/react';

import SortableList from './';


storiesOf('Lists', module)
.addWithChapters(
  'SortableList',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { SortableList } from 'insidesales-components';

      const listItems = [{
        label: 'Item 1',
        value: 'item1',
        id: 'item-1'
      }, {
        label: 'Item 2',
        value: 'item2',
        id: 'item-2'
      }];

      <SortableList items={listItems} onItemsChanged={(items) => { console.log(items)}} />;
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => {
              const listItems = [{
                label: 'Item 1',
                value: 'item1',
                id: 'item-1'
              }, {
                label: 'Item 2',
                value: 'item2',
                id: 'item-2'
              }, {
                label: 'Item 3',
                value: 'item3',
                id: 'item-3'
              }, {
                label: 'Item 4',
                value: 'item4',
                id: 'item-4'
              }];

              return <SortableList items={listItems} onItemsChanged={action('New Items')} />;
            }
          }
        ]
      }
    ]
  }
);

