import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Row extends React.Component {
  render() {
    return (
      <div  className={classNames('grid-row', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(require('../Col')),
  ]).isRequired
};

module.exports = Row;
