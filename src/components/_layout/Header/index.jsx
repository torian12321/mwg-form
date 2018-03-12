import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Img        from '../../Img';
import ImgSrc     from './assets/logo_white.png';
import './_style.scss';

class Header extends React.Component {
  render(){
    return(
      <header className={classNames(
        'header',
        this.props.sticky && 'header--sticky',
        this.props.className
      )}>
        <nav className='header__nav'>
          <Img src={ImgSrc} className='header__logo' />
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  sticky   : PropTypes.bool
};
Header.defaultProps = {
  sticky: true
};

module.exports = Header;
