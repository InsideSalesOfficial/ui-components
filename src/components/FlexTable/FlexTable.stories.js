import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';
import styled from 'styled-components';

import FlexTable, * as FT from './FlexTable';
import { colors } from '../styles';

const ExampleWrapper = styled.div`
  background-color: ${colors.darkBlue};
  padding: 32px 64px;
`;


storiesOf('Components', module)
  .addWithChapters(
    'FlexTable',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {FlexTable} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Toggle with 4 items',
              sectionFn: () => (
                <ExampleWrapper>
                  <FlexTable>
                    <FT.TR>
                      <FT.TH>
                        Header Content 1
                      </FT.TH>
                      <FT.TH onClick={action('clicked')} center priority={2}>
                        Header Content
                      </FT.TH>
                      <FT.TH center icon="PhoneFilledIcon" fixed="22">
                        Header Content 2
                      </FT.TH>
                      <FT.TH onClick={action('clicked')} center icon="ClockIconFilled" fixed="22">
                        Header Content 2
                      </FT.TH>
                      <FT.TH center icon="EyeIcon" fixed="22">
                        Header Content 2
                      </FT.TH>
                      <FT.TH right>
                        Header Content 3
                      </FT.TH>
                    </FT.TR>
                    <FT.TR>
                      <FT.TD onClick={action('clicked')}>
                        body content
                      </FT.TD>
                      <FT.TD center priority={2}>
                        Header Content
                      </FT.TD>
                      <FT.TD center fixed="22">
                        2
                      </FT.TD>
                      <FT.TD center fixed="22">
                        25
                      </FT.TD>
                      <FT.TD center fixed="22">
                        5
                      </FT.TD>
                      <FT.TD right>
                        Header Content 3
                      </FT.TD>
                    </FT.TR>
                    <FT.TR>
                      <FT.TD>
                        body content with a lot of content to overflow
                      </FT.TD>
                      <FT.TD center priority={2}>
                        body Content 2 this also has a lot of text to fill up the space
                      </FT.TD>
                      <FT.TD center fixed="22">
                        83
                      </FT.TD>
                      <FT.TD center fixed="22">
                        6
                      </FT.TD>
                      <FT.TD center fixed="22">
                        18
                      </FT.TD>
                      <FT.TD right>
                        body Content with more content
                      </FT.TD>
                    </FT.TR>
                  </FlexTable>
                </ExampleWrapper>
              )
            },
          ]
        }
      ]
    }
  );