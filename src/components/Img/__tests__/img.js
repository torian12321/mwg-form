import React    from 'react';
import renderer from 'react-test-renderer';
import Img      from '../index';

describe('component', () => {
  describe('<Img />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Img src='img.png' />
      )).toMatchSnapshot();
    });

    it('should render with alt text', () => {
      expect(renderer.create(
        <Img src='img.png' alt='image description' />
      )).toMatchSnapshot();
    });

  });
});