import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import ComponentDescription from './ComponentDescription';
import Example from './example';

import DatePicker from './';

const examples = [
  {
    title: 'Default DatePicker',
    description: 'The default DatePicker component with a max end date of 30 days.',
    render: () => <DatePicker
    label={'Date'}
    maxEndDate={moment().startOf('day').add(30, 'day')}
    />
  },
  {
    title: 'Custom Max Date - 1 year',
    description: 'The DatePicker with a max end date of 1 year.',
    render: () => <DatePicker
    label={'Date'}
    maxEndDate={moment().startOf('day').add(1, 'year')}
    />
  },
  {
    title: 'Weekends Blocked',
    description: 'The DatePicker with weekends blocked',
    render: () => <DatePicker
    label={'Date'}
    maxEndDate={moment().startOf('day').add(1, 'year')}
    blockWeekends
    />
  },
  {
    title: 'Week Highlighted',
    description: 'The DatePicker with selected week highlighted and weekends blocked',
    render: () => <DatePicker
    label={'Date'} 
    maxEndDate={moment().startOf('day').add(1, 'year')} 
    blockWeekends 
    highlightWeek
    />
  }
];

storiesOf('Components', module)
  .addWithChapters(
    'DatePicker',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {DatePicker} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <div>
                  <ComponentDescription/>
                  {examples.map((example, idx) => (
                    <Example title={example.title} description={example.description} key={idx}>
                      <div style={{ height: '50px' }}>
                        {example.render()}
                      </div>
                    </Example>
                  ))}
                </div>
              )
            }
          ]
        }
      ]
    }
  );

  