import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Footer', () => {
  it('matches the snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
