import React from 'react';
import { storiesOf, action } from '@storybook/react';

import { colors } from '../styles'

import FilterBar from './';

const genericOptions = [
  { value: '1', label: 'Neural Score (by Person)' },
  { value: '2', label: 'Last Name' },
  { value: '3', label: 'Play and Step' },
  { value: '4', label: 'Step Number' },
  { value: '5', label: 'Most Recent Interactions' },
  { value: '6', label: 'Account Name' }
];

const darkExample = {
  height: '200px',
  width: '440px',
  padding: '0',
  backgroundColor: colors.darkBlueB
}


class FilterBarWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: '2',
      searchValue: ''
    };
  }
  render() {
    return(
    <FilterBar
      sortOptions={genericOptions}
      selectedSortOption={this.state.sortValue}
      sortLabel={'Sort By'}
      onSortOptionChange={(value) => {
        this.setState({ sortValue: value})
      }}
      onClickFilter={action('on clicked filter')}
      onSearchChange={
        (value) => {
          this.setState({ searchValue: value})
        }
      }
      hideFilter={this.props.hideFilter}/>
  )}
}

storiesOf('Components', module)
  .addWithChapters(
  'FilterBar',
  {
    info: `
            Usage

            ~~~
            import React from 'react';
            import {FilterBar} from 'insidesales-components';
            ~~~
            `,
    chapters: [
      {
        sections: [
          {
            title: 'Example: Filter Bar',
            subtitle: '',
            sectionFn: () => (
              <div style={darkExample}>
                <FilterBarWrapper/>
              </div>
            )
          },
          {
            title: 'Example: Filter Button Hidden',
            sectionFn: () => (
              <div style={darkExample}>
                <FilterBarWrapper
                hideFilter={true}/>
              </div>
            )
          },
        ]
      }
    ]
  }
  );