import React from 'react';
// import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import CheckAnswers from '../components/CheckAnswers';

describe('CheckAnswers', () => {
  it('shows expected text, check', () => {
    const component = create(<CheckAnswers buttonLabel="check" />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.children[0]).toBe('check');
  });

  it('shows expected text, next', () => {
    const component = create(<CheckAnswers buttonLabel="next" />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.props.children).toBe('next');
  });

  it('shows expected text, finish', () => {
    const component = create(<CheckAnswers buttonLabel="finish" />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.children[0]).toBe('finish');
  });
});
