import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, action } from '@storybook/react';

import ToggleSlider from './';

import { colors } from '../styles/colors.js';
import { generateFlexedThemeBackground } from '../styles/index.js';

class ToggleSliderWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      disabled: props.disabled
    };
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={generateFlexedThemeBackground(this.props, { height: '30px' })}>
          <ToggleSlider checked={this.state.checked} disabled={this.state.disabled} toggle={() => {
                this.props.toggle();
                this.setState({ checked: !this.state.checked})
          }} />
        </div>
      </ThemeProvider>
    )
  }
}

function renderChapterWithTheme(theme = {}) {
  return {
    info: `
            Usage

            ~~~
            import React from 'react';
            import {ToggleSlider} from 'insidesales-components';
            ~~~
            `,
    chapters: [
      {
        sections: [
          {
            title: 'Example: Toggled On',
            subtitle: 'A slider toggled on',
            sectionFn: () => (
                <ToggleSliderWrapper
                  theme={theme}
                  toggle={action('toggle slider clicked')}
                  checked={true} />
            )
          },
          {
            title: 'Example: Toggled Off',
            subtitle: 'A slider toggled off',
            sectionFn: () => (
                <ToggleSliderWrapper
                  theme={theme}
                  toggle={action('toggle slider clicked')}
                  checked={false} />
            )
          },
          {
            title: 'Example: Disabled Toggle',
            subtitle: 'A toggle slider that cannot be toggled.',
            sectionFn: () => (
                <ToggleSliderWrapper toggle={action("toggled")}
                  theme={theme}
                checked={false}
                disabled={true} />
            )
          },
          {
            title: 'Example: Disabled on Toggle',
            subtitle: 'A toggle slider that cannot be toggled.',
            sectionFn: () => (
                <ToggleSliderWrapper toggle={action("toggled")}
                  theme={theme}
                checked={true}
                disabled={true} />
            )
          }
        ]
      }
    ]
  };
}


storiesOf('Form', module)
  .addWithChapters(
    'Default ToggleSlider',
    renderChapterWithTheme({})
  ).addWithChapters(
    'ToggleSlider w/ BlueYellow',
    renderChapterWithTheme(colors.blueYellowTheme)
  );
