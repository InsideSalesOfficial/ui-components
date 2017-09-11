import React from 'react';
import { storiesOf, action } from '@storybook/react';

import ToggleSlider from './';

class ToggleSliderWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }
  render() {
    return <ToggleSlider checked={this.state.checked} toggle={() => {
      this.props.toggle();
      this.setState({ checked: !this.state.checked })
    }
    } />
  }
}


storiesOf('Forms', module)
  .addWithChapters(
  'ToggleSlider',
  {
    info: `
            Usage

            ~~~
            import React from 'react';
            import ToggleSlider from 'ui-components/ToggleSlider';
            ~~~
            `,
    chapters: [
      {
        sections: [
          {
            title: 'Example: Toggled On',
            subtitle: 'A slider toggled on',
            sectionFn: () => (
              <ToggleSlider
                toggle={action('toggle slider clicked')}
                checked={true} />
            )
          },
          {
            title: 'Example: Toggled Off',
            subtitle: 'A slider toggled off',
            sectionFn: () => (
              <ToggleSlider
                toggle={action('toggle slider clicked')}
                checked={false} />
            )
          },
          {
            title: 'Example: Wrapped in another component',
            subtitle: 'A toggle slider wrapped by another component that updates the checked prop on toggle',
            sectionFn: () => (
              <ToggleSliderWrapper toggle={action("toggled")} />
            )
          }
        ]
      }
    ]
  }
  );