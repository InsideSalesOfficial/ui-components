import React from 'react';
import {
  storiesOf,
} from '@storybook/react';

import Modal from './Modal';

storiesOf('Components', module)
  .addWithChapters(
    'Modal',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {Modal} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Basic Modal',
              sectionFn: () => (
                <div style={{height: '400px'}}>
                    <Modal
                    center
                    onStoryBook
                    ><h3>Anything can go here!</h3><p>Hello World</p></Modal>
                </div>
              )
            },
          ]
        }
      ]
    }
  );