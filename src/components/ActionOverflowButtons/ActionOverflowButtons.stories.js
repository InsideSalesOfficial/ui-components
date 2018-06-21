import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import ActionOverflowButtons from './ActionOverflowButtons';
import { colors } from '../styles';


const dropDownItems = [
  {
    icon: 'EditFilledIcon',
    text: 'Edit',
    onClick: action('clicked'),
    className: 'nickelodeon-guts'
  },
  {
    icon: 'GroupAddIcon',
    text: 'Add Group',
    onClick: action('clicked')
  },
  {
    icon: 'HomeIcon',
    text: 'Home',
    onClick: action('clicked')
  },
  {
    icon: 'PlayIcon',
    text: 'I would not try to read this entire line, it is too long',
    onClick: action('clicked')
  },
];

const dropDownItems2 = [
  {
    icon: 'EditFilledIcon',
    text: 'Edit'
  },
  {
    icon: 'GroupAddIcon',
    text: 'Add Group'
  },
];

const dropDownItems8 = [
  {
    icon: 'EditFilledIcon',
    text: 'Edit'
  },
  {
    icon: 'GroupAddIcon',
    text: 'Add Group'
  },
  {
    icon: 'HomeIcon',
    text: 'Home'
  },
  {
    icon: 'PlayIcon',
    text: 'I would'
  },
  {
    icon: 'EditFilledIcon',
    text: 'Edit'
  },
  {
    icon: 'GroupAddIcon',
    text: 'Add Group'
  },
  {
    icon: 'HomeIcon',
    text: 'Home'
  },
  {
    icon: 'PlayIcon',
    text: 'I would'
  },
];

storiesOf('Components', module)
  .addWithChapters(
    'ActionOverflowButtons',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {ActionOverflowButtons} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Toggle with 4 items',
              sectionFn: () => (
                <div style={{padding: '16px', paddingBottom: '300px', backgroundColor: colors.greenBackground}}>
                  <ActionOverflowButtons
                    className="main-class"
                    overflowItems={dropDownItems}
                  />
                </div>
              )
            },
            {
              title: 'Example: Toggle with 2 items',
              sectionFn: () => (
                <div style={{padding: '16px', paddingBottom: '300px', backgroundColor: colors.greenBackground}}>
                  <ActionOverflowButtons
                    overflowItems={dropDownItems2}
                  />
                </div>
              )
            },
            {
              title: 'Example: Toggle with 8 items (for demo purposes; never use more than 6 items)',
              sectionFn: () => (
                <div style={{padding: '16px', paddingBottom: '500px', backgroundColor: colors.greenBackground}}>
                  <ActionOverflowButtons
                    actionButtonIcon="CogIcon"
                    overflowItems={dropDownItems8}
                  />
                </div>
              )
            },
            {
              title: 'Example: Toggle with 4 items; Labels on left',
              sectionFn: () => (
                <div style={{padding: '16px', paddingBottom: '300px', paddingLeft: '300px', backgroundColor: colors.greenBackground}}>
                  <ActionOverflowButtons
                    labelsPosition="left"
                    overflowItems={dropDownItems}
                  />
                </div>
              )
            },
            {
              title: 'Example: Toggle with 4 items; Labels on left; Open up',
              sectionFn: () => (
                <div style={{padding: '16px', paddingTop: '300px', paddingLeft: '300px', backgroundColor: colors.greenBackground}}>
                  <ActionOverflowButtons
                    labelsPosition="left"
                    openDirection="up"
                    overflowItems={dropDownItems}
                  />
                </div>
              )
            },
          ]
        }
      ]
    }
  );