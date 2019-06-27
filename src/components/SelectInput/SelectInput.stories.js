import React from 'react';
import { storiesOf, action } from '@storybook/react';
import styled from 'styled-components';

import { colors, typography } from '../styles';
import Icons from '../icons';

import {
  lineSelectInputTheme,
  transparentSelectInputTheme
} from './SelectInputThemes';
import SelectInput from './';

const darkExample = {
  height: '220px',
  backgroundColor: '#2a434a',
  padding: '16px'
}

const lightExample = {
  height: '220px',
  backgroundColor: '#2a434a',
  padding: '16px'
}

const promotedOptions = [
  { value: '101', label: 'Promoted Option 1', disabled: true },
  { value: '102', label: 'Promoted Option 2' },
];

const genericOptions = [
  { value: '1', label: 'Option One' },
  { value: '2', label: 'Option Two' },
  { value: '3', label: 'Option Three' },
  { value: '4', label: 'Option Four' },
  { value: '5', label: 'Option Five' },
  { value: '6', label: 'Option Six' },
  { value: '7', label: 'Option Seven' },
  { value: '8', label: 'Option Eight' },
  { value: '9', label: 'Option Nine' },
  { value: '10', label: 'Option Ten' },
  { value: '11', label: 'A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string A really long string' },
];

const selectedOptions = [
  '1',
  '2',
]

const AddButton = styled.div`
  ${typography.body2};
  color: ${colors.green};
  padding-left: 32px;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }
`;

storiesOf('Form', module)
.addWithChapters(
  'SelectInput',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import {SelectInput} from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default Theme',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  onChange={action('Option Selected')}
                  options={genericOptions} />
              </div>
            )
          },
          {
            subtitle: 'Header Label',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  onChange={action('Option Selected')}
                  headerLabel="Custom Label"
                  options={genericOptions} />
              </div>
            )
          },
          {
            subtitle: 'Custom Label',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  onChange={action('Option Selected')}
                  defaultLabel="Custom Label"
                  options={genericOptions} />
              </div>
            )
          },
          {
            subtitle: 'Disabled',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  options={genericOptions}
                  isDisabled
                  onChange={action('Option Selected')}
                  defaultLabel="Custom Default"
                  />
              </div>
            )
          },
          {
            title: 'Line Select Input Theme',
            subtitle: 'Generally used in modals (lineSelectInputTheme)',
            sectionFn: () => (
              <div style={lightExample}>
                <SelectInput
                  options={genericOptions}
                  onChange={action('Option Selected')}
                  defaultLabel="Custom Selected Option Name"
                  theme={lineSelectInputTheme}/>
              </div>
            )
          },
          {
            title: 'Transparent Select Input Theme',
            subtitle: 'Used as filter on People page (transparentSelectInputTheme)',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  options={genericOptions}
                  onChange={action('Option Selected')}
                  defaultLabel="Custom Default"
                  theme={transparentSelectInputTheme}/>
              </div>
            )
          },
          {
            subtitle: 'Disabled Transparent Select Input Theme',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  options={genericOptions}
                  onChange={action('Option Selected')}
                  defaultLabel="Custom Default"
                  isDisabled
                  theme={transparentSelectInputTheme}/>
              </div>
            )
          },
          {
            title: 'Additional state for options',
            subtitle: 'Promoted Items',
            sectionFn: () => (
              <div style={lightExample}>
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action('Option Selected')}
                  defaultLabel={''}
                  promotedOptions={promotedOptions}
                  />
              </div>
            )
          },
          {
            title: 'Searchable Options',
            subtitle: 'Places a search input at the top of the options list.',
            sectionFn: () => (
              <div style={lightExample}>
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action('Option Selected')}
                  defaultLabel={''}
                  searchable
                  />
              </div>
            )
          },
          {
            title: 'Add Button Select List',
            subtitle: `Shows the select input as an Add button instead of the select input styling. The defaultLabel prop will determing the button text.
                      This is convenient for when you need a select list to choose options from to add to another list.`,
            sectionFn: () => (
              <div>
                <SelectInput
                  options={genericOptions}
                  theme={lineSelectInputTheme}
                  onChange={action('Option Selected')}
                  defaultLabel={'ADD'}
                  addButtonList
                  searchable
                  />
              </div>
            )
          },
          {
            title: 'Multi Select',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  onChange={action('Option Selected')}
                  options={genericOptions}
                  value={selectedOptions}
                  multiSelect />
              </div>
            )
          },
          {
            title: 'Multi Select/Bottom Action Area',
            sectionFn: () => (
              <div style={darkExample}>
                <SelectInput
                  onChange={action('Option Selected')}
                  options={genericOptions}
                  value={selectedOptions}
                  multiSelect
                  selectOptionsWidth={250}
                  bottomActionArea={(<AddButton><Icons.AddCircleIcon fill={colors.green} size={{width: 24, height: 24}} /> {'Add Tag'}</AddButton>)}/>
              </div>
            )
          },
          {
            title: 'Custom Dropdown Width',
            sectionFn: () => (
              <div style={{...darkExample, width: '400px'}}>
                <SelectInput
                  onChange={action('Option Selected')}
                  options={genericOptions}
                  value={selectedOptions}
                  selectOptionsWidth={600}
                  multiSelect />
              </div>
            )
          },
          {
            title: 'Dropdown Max Height',
            sectionFn: () => (
              <div style={{...darkExample}}>
                <SelectInput
                  onChange={action('Option Selected')}
                  options={genericOptions}
                  value={selectedOptions}
                  maxHeight={'600px'}
                  multiSelect />
              </div>
            )
          },
        ]
      }
    ]
  }
);

