import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextInput from './TextInput';

storiesOf('Form', module)
  .addWithChapters(
    'TextInput',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {TextInput} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: text input default empty',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  name="first"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                />
              )
            },
            {
              title: 'Example: text input with existing text',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  name="second"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                  value="This text was hardcoded into stories. The structure of this component follows how a `TextInput` should look."
                />
              )
            },
            {
              title: 'Example: text input with helper text',
              sectionFn: () => (
                <TextInput
                  label="Labely"
                  helper="Helper text."
                  error=""
                  name="third"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                />
              )
            },
            {
              title: 'Example: text input with required',
              sectionFn: () => (
                <TextInput
                  label="Labely"
                  required
                  error=""
                  name="fourth"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                />
              )
            },
            {
              title: 'Example: text input with error text',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  helper="Helper text."
                  error="Errors will override helper text."
                  name="fifth"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                  value="This text was hardcoded into stories."
                />
              )
            },
            {
              title: 'Example: text input disabled',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="sixth"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                />
              )
            },
            {
              title: 'Example: text input disabled with text',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="seventh"
                  value="this is some example text"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}/>
              )
            },
            {
              title: 'Example: text input closed without value',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  helper="Helper text."
                  name="eighth"
                  collapsed />
              )
            },
            {
              title: 'Example: text input closed without value and has an error',
              sectionFn: () => (
                <TextInput
                  label="Label"
                  helper="Helper text."
                  error={"This field is required."}
                  name="ninth"
                  collapsed />
              )
            },
            {
              title: 'Example: text input search',
              sectionFn: () => (
                <TextInput
                  placeholder="Search"
                  name="tenth"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                  search
                />
              )
            },
            {
              title: 'Example: text input with options',
              sectionFn: () => (
                <TextInput
                  label="Search"
                  name="eleventh"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                  options={[
                    {
                      label: 'Foo',
                      value: 'Foo'
                    },
                    {
                      label: 'Bar',
                      value: 'Bar'
                    },
                    {
                      label: 'Baz',
                      value: 'Baz'
                    }
                  ]}
                />
              )
            },
            {
              title: 'Example: small text input with options and low padding',
              sectionFn: () => (
                <div style={{width: '90px'}}>
                  <TextInput
                    label="Country"
                    name="Country"
                    lowPadding={true}
                    selectOptionsWidth={400}
                    onSelectionStartChange={action('selectionStart')}
                    onChange={action('value')}
                    onFocus={action('onFocus')}
                    options={[
                      {
                        label: '+1 (US)',
                        value: '+1'
                      },
                      {
                        label: '+44 (UK)',
                        value: '+44'
                      },
                      {
                        label: '+35 (AB)',
                        value: '+35'
                      },
                      {
                        label: '+45 (CD)',
                        value: '+45'
                      },
                      {
                        label: '+46 (EF)',
                        value: '+46'
                      },
                      {
                        label: '+47 (GH)',
                        value: '+47'
                      },
                      {
                        label: '+48 (IJ)',
                        value: '+48'
                      },
                      {
                        label: '+49 (KL)',
                        value: '+49'
                      },
                      {
                        label: '+50 (MN)',
                        value: '+50'
                      },
                      {
                        label: '+60 (OP)',
                        value: '+60'
                      },
                      {
                        label: '+70 (QR)',
                        value: '+70'
                      },
                      {
                        label: '+80 (ST)',
                        value: '+80'
                      },
                      {
                        label: '+90 (UV)',
                        value: '+90'
                      },
                      {
                        label: '+91 (WX)',
                        value: '+91'
                      },
                      {
                        label: '+92 (YZ)',
                        value: '+92'
                      },
                      {
                        label: '+93 (NO)',
                        value: '+93'
                      },
                      {
                        label: '+64 (WI)',
                        value: '+64'
                      },
                      {
                        label: '+86 (KN)',
                        value: '+86'
                      },
                      {
                        label: '+777 (OW)',
                        value: '+777'
                      },
                      {
                        label: '+56 (MY)',
                        value: '+56'
                      },
                      {
                        label: '+12 (AB)',
                        value: '+12'
                      },
                    ]}
                  />
                </div>
              )
            },
            {
              title: 'Example: use inputType to change to password input',
              sectionFn: () => (
                <TextInput
                  label="Password"
                  name="password"
                  inputType="password"
                />
              )
            },
            {
              title: 'Example: stateless text input based on props',
              sectionFn: () => {

                class StatefulWrapper extends React.Component {
                  constructor() {
                    super();
                    this.state = {
                      value: ''
                    }
                  }
                  render = () => {
                    return <TextInput
                      label="Label"
                      name="first"
                      stateless
                      value={this.state.value}
                      onSelectionStartChange={action('selectionStart')}
                      onChange={(value) => {
                        this.setState({
                          value
                        })
                        return action('value')(value);
                      }}
                      onFocus={action('onFocus')}
                    />
                  }
                }

                return (<div>
                  Stateless: <TextInput
                  label="Label"
                  name="first"
                  stateless
                  value="value"
                  onSelectionStartChange={action('selectionStart')}
                  onChange={action('value')}
                  onFocus={action('onFocus')}
                /> <br />
                  Wrapped In Stateful Component: <StatefulWrapper />

                </div>)
              }
            },
          ]
        }
      ]
    }
  );
