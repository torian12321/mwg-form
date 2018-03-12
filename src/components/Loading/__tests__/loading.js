import React    from 'react';
import renderer from 'react-test-renderer';
import Loading  from '../index';

describe('component', () => {
  describe('<Loading />', () => {

    test('should render correctly', () => {
      expect(renderer.create(
        <Loading />
      )).toMatchSnapshot();
    });

    test('should render small size', () => {
      expect(renderer.create(
        <Loading size='sm' />
      )).toMatchSnapshot();
    });

    test('should render pulse type', () => {
      expect(renderer.create(
        <Loading type='pulse' />
      )).toMatchSnapshot();
    });

  });
});