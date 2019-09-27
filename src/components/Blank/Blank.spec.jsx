import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Blank from './Blank';

configure({ adapter: new Adapter() });

describe('Blank', () => {
  it('should be defined', () => {
    expect(Blank).toBeDefined();
  });

  it('should render correctly', () => {
    const dom = shallow(<Blank />);
    expect(dom).toMatchSnapshot();
  });

  // it('should update hooks', () => {
  //   wrapper.simulate('click');
  // });
});
