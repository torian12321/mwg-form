import React    from 'react';
import renderer from 'react-test-renderer';
import Button   from '../index';

describe('component', () => {
  describe('<Button />', () => {
    
    it('should render correctly', () => {
      const clickHander = jest.fn();
      const button = renderer.create(
        <Button onClick={clickHander} />
      ).toJSON();
      expect(button).toMatchSnapshot();

      // Click callback
      button.props.onClick();
      expect(clickHander).toBeCalled();
      expect(button.props.className).toEqual('btn');
      expect(button.children).toContain('Submit');
    });

    it('should have disabled', () => {
      const clickHander = jest.fn();
      const button = renderer.create(
        <Button disabled onClick={clickHander} />
      ).toJSON();

      button.props.onClick();
      expect(clickHander).toBeCalled();
      expect(button).toMatchSnapshot();
    });
    
  });
});
