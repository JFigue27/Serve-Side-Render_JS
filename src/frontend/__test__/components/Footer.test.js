import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('should Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('should Footer haves tree anchores', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  test('should Footer Snapshot', () => {
    const footer = create(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});
