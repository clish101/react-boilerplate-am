import DashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';
import React from 'react';

test('Should show the dashboard page of the expenses', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
