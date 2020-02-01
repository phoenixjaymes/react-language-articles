import React from 'react';
import { create } from 'react-test-renderer';
import WordBox from '../components/WordBox';

describe('WordBox', () => {
  it('shows expected text', () => {
    const component = create(<WordBox currentEnglish="Dog" selectedArticle="der" currentWord="Hund" />);
    const instance = component.root;
    const heading = instance.findByType('p');
    expect(heading.children[0]).toBe('Dog');

    const spans = instance.findAllByType('span');
    expect(spans[0].children[0]).toBe('der');

    expect(spans[1].children[0]).toBe('Hund');
  });
});
