import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Panel extends React.Component {
  render() {
    return(
      <div className={classNames(
        'panel',
        this.props.className,
        this.props.theme && `panel--${this.props.theme}`,
      )}>
        {this.props.children}
      </div>
    )
  }
}

Panel.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string,
  theme    : PropTypes.oneOf(['main', 'sec', 'white'])
};

module.exports = Panel;
