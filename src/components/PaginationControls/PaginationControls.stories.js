import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';

import PaginationControls from './PaginationControls';

storiesOf('Components', module)
  .addWithChapters(
    'PaginationControls',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {PaginationControls} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Basic PaginationControls',
              sectionFn: () => {
                    const StatefulWrapper = class extends React.Component {
                        constructor() {
                            super();
                            this.state = {page: 1}
                        }
                        render = () => {
                        console.log(this.state.page)
                        return (<PaginationControls
                            currentPage={this.state.page}
                            totalPages={100}
                            advanceAPage={(e) => {
                                this.setState({page: this.state.page + 1})
                                action('advanceAPage')(e);
                            }}
                            goBackAPage={(e) => {
                                this.setState({page: this.state.page - 1})
                                action('goBackAPage')(e)
                            }}
                            isRequestPageValid={(e) => {
                                action('isRequestPageValid')(e)
                                return true;
                            }}
                            requestPage={(page) => {
                                this.setState({page})
                                action('requestPage')(page)
                            }}
                        />)}
                    }
                    return (
                    <div style={{background: 'black', padding: '10px'}}>
                        <StatefulWrapper/>
                    </div>
                )
                }
            },
            {
              title: 'PaginationControls with one page',
              sectionFn: () => {
                    return (
                        <div style={{background: 'black', padding: '10px'}}>
                            <PaginationControls
                            currentPage={1}
                            totalPages={1}
                            advanceAPage={action('advanceAPage')}
                            goBackAPage={action('goBackAPage')}
                            isRequestPageValid={action('isRequestPageValid')}
                            requestPage={action('requestPage')} />
                        </div>
                )
                }
            },
        ]}
      ]
    }
  );
