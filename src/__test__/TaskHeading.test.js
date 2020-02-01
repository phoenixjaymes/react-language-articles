import React from 'react';
// import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import TaskHeading from '../components/TaskHeading';

describe('TaskHeading', () => {
  it('shows expected text for de, definite', () => {
    const component = create(<TaskHeading lang="de" articleType="definite" />);
    const instance = component.root;
    const heading = instance.findByType('h1');
    expect(heading.children[0]).toBe('German Definite Articles');
  });

  it('shows expected text for nl, definite', () => {
    const component = create(<TaskHeading lang="nl" articleType="definite" />);
    const instance = component.root;
    const heading = instance.findByType('h1');
    expect(heading.children[0]).toBe('Dutch Definite Articles');
  });
});
