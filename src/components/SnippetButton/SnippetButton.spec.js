import React from 'react';
import { shallow } from 'enzyme';

import SnippetButton from './SnippetButton';
import { Icons } from '../index';

const snippets = {
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
};

describe('Snippet Button', () => {
    let component;
    beforeEach(() => {
        component = shallow(<SnippetButton snippets={snippets} onSnippetClick={() => { }} />);
    });

    it('renders snippet button', () => {
        expect(component.find(Icons.FormatQuote).length).toEqual(1);
    });
})