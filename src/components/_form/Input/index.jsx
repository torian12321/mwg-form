import React 	  from 'react';
import PropTypes  from 'prop-types';
import uniqid     from 'uniqid';
import classNames from 'classnames';
import './_style.scss';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : this.props.value,
      filled: false
    };

    this.handleChange  = this.handleChange.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut= this.handleFocusOut.bind(this);
  }
	componentDidMount() {
		this.focus();
	}
	componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange(e) {
    let v = e.target.value;

    this.setState({
      value : v,
      filled: !this.isEmpty(v)
    });
    this.props.onChange(v);
  }
  handleFocusIn(e) {this.props.onFocusIn(e.target.value);}
  handleFocusOut(e){this.props.onFocusOut(e.target.value);}

	isEmpty(str) {
		return (!str || 0 === str.length);
	}
	focus(){
		if (this.props.focus){
			this.input.focus();
		}
	}


	render(){
    const id = this.props.id || uniqid('input_');

		return(
			<div
				id = {id}
        className = {this.props.className}
        className= {classNames(
          'input',
          this.props.state  && `input--${this.props.state}`,
          this.state.filled && `input--filled`,
          this.props.className
        )}
			>
      {this.props.label &&
        <label className='input__label' htmlFor={id}>
          {this.props.label}
        </label>
      }

				<input
					id           = {id}
					type         = {this.props.type}
					className    = 'input__field'
					ref          = {(r) => { this.input = r; }}
					maxLength    = {this.props.maxlength}
					onChange     = {this.handleChange}
          defaultValue = {this.props.value}
          placeholder  = {this.props.placeholder}
					disabled     = {this.props.disabled}
				/>
        <div className ='input__icon' />
        <span className='input__info'>
          {this.props.state === ('error') &&
            this.props.info
          }
        </span>

			</div>
		);
	}
}

Input.propTypes = {
  id         : PropTypes.string,
  disabled   : PropTypes.bool,
  value      : PropTypes.string,
  className  : PropTypes.string,
  maxlength  : PropTypes.number,
  type       : PropTypes.string,
  placeholder: PropTypes.string,
  state      : PropTypes.oneOf(['success', 'warning', 'error']),
  focus      : PropTypes.bool,
  onChange   : PropTypes.func,
  onFocusIn  : PropTypes.func,
  onFocusOut : PropTypes.func
};
Input.defaultProps = {
  type       : 'text',
  placeholder: 'Insert text...',
  disabled   : false,
  focus      : false,
  onChange   : () => null,
  onFocusIn  : () => null,
  onFocusOut : () => null
};

module.exports = Input;
