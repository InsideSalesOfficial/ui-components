import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';

import MiniInput from './MiniInput';

class StateFullWrapper extends React.Component {
    constructor() {
        super();
        this.state = {value: ''}
    }

    render() {
        return <MiniInput
            onChange={(value) => {
                this.setState({value})
                this.props.onChange(value)
            }}
            value={this.state.value}
            onEnter={this.props.onEnter}
            type={'number'}
        />
    }
}

storiesOf('Components', module)
  .addWithChapters(
    'MiniInput',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {MiniInput} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Basic MiniInput',
              sectionFn: () => (
                <div style={{
                    background: 'black',
                    padding: '20px'
                }}>
                <StateFullWrapper
                    onEnter={action('onEnter')}
                    onChange={action('onChange')} />
                </div>
              )
            },
        ]}
      ]
    }
  );
