import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Loading extends React.PureComponent {
  render() {
    return <div className={classNames(
      'loading',
      this.props.size && `loading--${this.props.size}`
    )}/>;
  }
};

Loading.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};

module.exports = Loading;
