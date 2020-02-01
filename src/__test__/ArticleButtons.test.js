import React from 'react';
// import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import ArticleButtons from '../components/ArticleButtons';

describe('ArticleButtons', () => {
  it('matches the snapshot', () => {
    const component = create(<ArticleButtons />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
