import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Footer extends React.Component {
  render(){
    return(
      <footer className={classNames('footer', this.props.className)}>
        {this.props.children}
      </footer>
    );
  }
}

Footer.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string
};

module.exports = Footer;
