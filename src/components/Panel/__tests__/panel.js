import React    from 'react';
import renderer from 'react-test-renderer';
import Panel    from '../index';

describe('component', () => {
  describe('<Panel />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Panel>Lorem Ipsum</Panel>
      )).toMatchSnapshot();
    });

    it('Should render a secondary theme', () => {
      expect(renderer.create(
        <Panel theme='sec'>Lorem Ipsum</Panel>
      )).toMatchSnapshot();
    });

  });
});
