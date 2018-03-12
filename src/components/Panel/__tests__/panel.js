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

    it('Should render danger a title on header', () => {
      expect(renderer.create(
        <Panel title='danger'>Lorem Ipsum</Panel>
      )).toMatchSnapshot();
    });

  });
});
