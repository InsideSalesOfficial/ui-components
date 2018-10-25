import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';

import MessageDialog from './MessageDialog';

storiesOf('Components', module)
  .addWithChapters(
    'MessageDialog',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {MessageDialog} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Basic Modal',
              sectionFn: () => (
                <MessageDialog
                  dialogTitle={'Account Details Needed'}
                  bodyElement={
                    <div>
                      Your email settings must be complete before you can
                      send email messages from Playbooks extension.
                    </div>
                  }
                  secondaryActionText='Cancel'
                  onSecondaryActionClick={action('onSecondaryActionClick')}
                  primaryActionText='Save'
                  onPrimaryActionClick={action('onPrimaryActionClick')}
                  center
                  onStoryBook
                />
              )
            },
            {
              title: 'Modal with no actions',
              sectionFn: () => (
                <MessageDialog
                  dialogTitle="Syncing from Salesforce"
                  bodyElement={
                    <p>
                      Syncing information from Salesforce may take a few seconds...
                    </p>
                  }
                  center
                  onStoryBook
                />
              )
            }
          ]
        }
      ]
    }
  );
