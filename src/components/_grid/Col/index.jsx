import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Col extends React.Component {
  render() {
    const props = this.props;

    return(
      <div  className={classNames(
        'col',
        props.elastic && 'col--elastic', 
        props.xs && `xs-${props.xs}`,
        props.sm && `sm-${props.sm}`,
        props.md && `md-${props.md}`,
        props.lg && `lg-${props.lg}`,

        // Pull
        props.xsPull && `xs-pull-${props.xsPull}`,
        props.smPull && `sm-pull-${props.smPull}`,
        props.mdPull && `md-pull-${props.mdPull}`,
        props.lgPull && `lg-pull-${props.lgPull}`,

        // Push
        props.xsPush && `xs-push-${props.xsPush}`,
        props.smPush && `sm-push-${props.smPush}`,
        props.mdPush && `md-push-${props.mdPush}`,
        props.lgPush && `lg-push-${props.lgPush}`,

        // Offset
        props.xsOffset && `xs-offset-${props.xsOffset}`,
        props.smOffset && `sm-offset-${props.smOffset}`,
        props.mdOffset && `md-offset-${props.mdOffset}`,
        props.lgOffset && `lg-offset-${props.lgOffset}`,
        
        props.className
      )}>
        {props.children}
      </div>
    )
  }
}

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Col.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  elastic  : PropTypes.bool,
  xs       : PropTypes.oneOf(sizes),
  sm       : PropTypes.oneOf(sizes),
  md       : PropTypes.oneOf(sizes),
  lg       : PropTypes.oneOf(sizes),

  xsPull  : PropTypes.oneOf(sizes),
  smPull  : PropTypes.oneOf(sizes),
  mdPull  : PropTypes.oneOf(sizes),
  lgPull  : PropTypes.oneOf(sizes),

  xsPush  : PropTypes.oneOf(sizes),
  smPush  : PropTypes.oneOf(sizes),
  mdPush  : PropTypes.oneOf(sizes),
  lgPush  : PropTypes.oneOf(sizes),

  xsOffset: PropTypes.oneOf(sizes),
  smOffset: PropTypes.oneOf(sizes),
  mdOffset: PropTypes.oneOf(sizes),
  lgOffset: PropTypes.oneOf(sizes)
};
Col.defaultProps = {
  elastic: false
};

module.exports = Col;
