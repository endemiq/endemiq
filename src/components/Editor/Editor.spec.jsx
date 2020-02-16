import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Editor from './Editor';

configure({ adapter: new Adapter() });

describe('Editor', () => {
  it('should be defined', () => {
    expect(Editor).toBeDefined();
  });

  it('should render correctly', () => {
    const dom = shallow(<Editor />);
    expect(dom).toMatchSnapshot();
  });

  // it('should update hooks', () => {
  //   wrapper.simulate('click');
  // });
});
