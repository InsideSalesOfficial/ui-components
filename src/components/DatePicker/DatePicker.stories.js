import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import CalendarIcon from '../icons/CalendarIcon';
import { colors } from '../styles/colors';
import moment from 'moment';

import Example from './example';

import DatePicker from './';

const ExampleWrapper = styled.div`
height: 120px
`;

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
    description: 'The DatePicker with weekends blocked.',
    render: () => <DatePicker
    label={'Date'}
    maxEndDate={moment().startOf('day').add(1, 'year')}
    blockWeekends
    />
  },
  {
    title: 'Week Highlighted With Custom Input Icon',
    description: 'The DatePicker with selected week highlighted and weekends blocked with a custom input icon.',
    render: () => <DatePicker
    customInputIcon={<CalendarIcon size={{ width: 18, height: 20 }} fill={colors.black40}/>}
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
                  {examples.map((example, idx) => (
                    <Example title={example.title} description={example.description} key={idx}>
                      <ExampleWrapper>
                        {example.render()}
                      </ExampleWrapper>
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

  