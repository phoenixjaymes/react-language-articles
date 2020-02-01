import React from 'react';
import { create } from 'react-test-renderer';
import AnswerBox from '../components/AnswerBox';

describe('AnswerBox', () => {
  it('shows expected text', () => {
    const component = create(<AnswerBox answerClass="answer-correct" answerText="Your answer is correct" answer="der" />);
    const instance = component.root;

    const instanceProps = instance.props;
    expect(instanceProps.answerClass).toBe('answer-correct');

    const paragraphs = instance.findAllByType('p');
    expect(paragraphs[0].children[0]).toBe('Your answer is correct');

    expect(paragraphs[1].children[0]).toBe('der');
  });
});
