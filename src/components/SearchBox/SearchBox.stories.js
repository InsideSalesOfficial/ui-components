import { action, storiesOf } from '@storybook/react';
import React from 'react';
import SearchBox from './SearchBox';
import { SearchBoxThemes } from '../index';

storiesOf('Form', module)
.addWithChapters(
  'SearchBox',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { SearchBox, SearchBoxThemes } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Example: Empty SearchBox',
            sectionFn: () => (
                <div style={{
                    background: 'black',
                    padding: '20px'
                }}>
                <SearchBox
                    placeholder={'Search'}
                    searchText={''}
                    enabled={true}
                    onSearch={action('onSearch')}
                    clearSearch={action('clearSearch')}
                    iconSize={20}
                />
              </div>
            )
          },
          {
            title: 'Example: SearchBox with value',
            sectionFn: () => (
                <div style={{
                    background: 'black',
                    padding: '20px'
                }}>
                <SearchBox
                    placeholder={'Search'}
                    searchText={'Hello world'}
                    enabled={true}
                    onSearch={action('onSearch')}
                    clearSearch={action('clearSearch')}
                    iconSize={20}
                />
              </div>
            )
          },
          {
            title: 'Example: SearchBox with theme',
            sectionFn: () => (
                <div style={{
                    background: 'white',
                    padding: '20px'
                }}>
                <SearchBox
                    placeholder={'Search'}
                    searchText={''}
                    enabled={true}
                    theme={SearchBoxThemes.lightTheme}
                    onSearch={action('onSearch')}
                    clearSearch={action('clearSearch')}
                    iconSize={20}
                />
              </div>
            )
          }
        ]
    }
]
  })