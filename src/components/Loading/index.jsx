import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Loading extends React.PureComponent {
  render() {
    return <div className={classNames(
      'loading',
      this.props.type && `loading--${this.props.type}`,
      this.props.size && `loading--${this.props.size}`
    )}/>;
  }
};

Loading.propTypes = {
  type: PropTypes.oneOf(['spinner', 'pulse']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};
Loading.defaultProps = {
  type: 'spinner'
};

module.exports = Loading;
