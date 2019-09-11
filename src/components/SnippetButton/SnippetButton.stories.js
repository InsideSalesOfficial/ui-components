import { storiesOf } from '@storybook/react';
import React from 'react';
import SnippetButton from './SnippetButton';

storiesOf('Components', module)
  .addWithChapters(
    'Snippet Button',
    {
      info: `
      Usage

      ~~~
      import React from 'react';
      import { SnippetButton } from 'insidesales-components';
      ~~~
    `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Snippet Button',
              sectionFn: () => (
                <div style={{
                  background: 'white',
                  padding: '20px'
                }}>
                  <SnippetButton
                    snippets={
                      {
                        '-LnJ6gp_WkdhMjNEIpOP': {
                          id: '-LnJ6gp_WkdhMjNEIpOP',
                          name: 'Snippet A',
                          content: 'My snippet a',
                          hotKeys: {},
                          teams: [],
                          created: '2019-08-27T17:28:04Z',
                          createdBy: ''
                        },
                        '-LnJ6gp_WkdhMjNEIpOQ': {
                          id: '-LnJ6gp_WkdhMjNEIpOP',
                          name: 'Snippet B',
                          content: 'My snippet b',
                          hotKeys: {},
                          teams: [],
                          created: '2019-08-27T17:28:04Z',
                          createdBy: ''
                        }
                      }
                    }
                    onSnippetClick={() => { }}
                  />
                </div>
              )
            }
          ]
        }
      ]
    })
