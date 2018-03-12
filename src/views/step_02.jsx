import React      from 'react';
import PropTypes  from 'prop-types';
import './_style.scss';

import {
  Button, Panel,
  Input,
  Container, Row, Col

} from 'export';

class FormStep_02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name       : { isValid: true, value  : '', state: '' },
      surname    : { isValid: true, value  : '', state: '' },
      birthday   : { isValid: true, value  : '', state: '' },
      nacionality: { isValid: true, value  : '', state: '' },
      email      : { isValid: true, value  : '', state: '' },
      ocupation  : { isValid: true, value  : '', state: '' },
      validForm  : true // Should start on false, is true for testing porpouse
    };
  }

  _isEmpty(str) {
      return (!str || 0 === str.length);
  }
  _isEmail(str) {
    // TODO: add email validation
    return true;
}
  _inputSetState(isValid){
    return isValid ? 'success' : 'error';
  }

  validateName(inputVal) {
    const validField = !this._isEmpty(inputVal);
    this.setState({
      name: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }
  validateSurname(inputVal) {
    const validField = !this._isEmpty(inputVal);
    this.setState({
      surname: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }
  validateBirthday(inputVal) {
    const validField = !this._isEmpty(inputVal);
    this.setState({
      birthday: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }
  validateNacionality(inputVal) {
    const validField = !this._isEmpty(inputVal);
    this.setState({
      nacionality: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }
  validateEmail(inputVal) {
    const validField = !this._isEmpty(inputVal) && this._isEmail;
    this.setState({
      email: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }
  validateOcupation(inputVal) {
    const validField = !this._isEmpty(inputVal);
    this.setState({
      ocupation: {
        value  : inputVal,
        isValid: validField,
        state  : this._inputSetState(validField)
      }
    });
    this.validateForm();
  }

  validateForm(){
    // Enable/Disable button
    const isValid =
      name.isValid        &&
      surname.isValid     &&
      birthday.isValid    &&
      nacionality.isValid &&
      mail.isValid        &&
      ocupation.isValid;

      // this.setState({ validForm: isValid });
      this.setState({ validForm: true });         // For testing, returns alway true
  }
  render() {

    let st = this.state;

    return (
      <Container className='containerForm'>

        <Row>
          <Col xs={12}>
            <Panel theme='sec'>

              <Row>
                <Col xs={12} md={6}>
                  <Input value={st.name.value} label='First Name' placeholder='John' state={st.name.state} info='Invalid name' onChange={this.validateName.bind(this)} />
                </Col>
                <Col xs={12} md={6}>
                  <Input value={st.surname.value} label='Surname' placeholder='Smith' state={st.surname.state} info='Invalid surname' onChange={this.validateSurname.bind(this)} />
                </Col>
                <Col xs={12} md={6}>
                  <Input value={st.birthday.value} label='Date of birth' placeholder='01/01/1980' state={st.birthday.state} info='Invalid Birthday' onChange={this.validateBirthday.bind(this)} />
                </Col>
                <Col xs={12} md={6}>
                  <Input value={st.nacionality.value} label='Naionality' placeholder='Irish' state={st.nacionality.state} info='Invalid Nacionality' onChange={this.validateNacionality.bind(this)}/>
                </Col>
                <Col xs={12} md={6} state>
                  <Input value={st.email.value} label='Email Address' placeholder='hello@info.com' state={st.email.state} info='Invalid Email' onChange={this.validateEmail.bind(this)} />
                </Col>
                <Col xs={12} md={6}>
                  <Input value={st.ocupation.value} label='Ocupation' placeholder='Front End Developer' state={st.ocupation.state} info='Invalid Ocupation' onChange={this.validateOcupation.bind(this)} />
                </Col>
              </Row>

              <div className='panel__btnArea'>
                <Button className='right' onClick={this.props.onSubmit} disabled={!st.validForm}>Submit</Button>
              </div>
            </Panel>
          </Col>
        </Row>

      </Container>
    )
  }
};

FormStep_02.propTypes = {
  onSubmit: PropTypes.func
};

module.exports = FormStep_02;
