import React from 'react';
import { storiesOf } from '@storybook/react';

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
              }];
              return <SortableList items={listItems} />;
            }
          }
        ]
      }
    ]
  }
);

