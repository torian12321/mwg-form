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
      name       : { isValid: false, value  : '' },
      surname    : { isValid: false, value  : '' },
      birthday   : { isValid: false, value  : '' },
      nacionality: { isValid: false, value  : '' },
      mail       : { isValid: false, value  : '' },
      ocupation  : { isValid: false, value  : '' },
      validForm  : true // Should start on false, is true for testing porpouse
    };
  }

  validateName(inputVal) {
    // TODO: do some kind of validation
    const name = {
      value  : inputVal,
      isValid: true
    }
    this.setState({ name });
    this.validateForm();
  }

  // TODO: repeat 'validateName' for rest of fields, applying differen validation criteria
  // ....
  // ....

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

  return (
    <Container className='containerForm'>

      <Row>
        <Col xs={12}>
          <Panel theme='sec'>

            <Row>
              <Col xs={12} md={6}>
                <Input value={this.state.name.value} onChange={this.validateName.bind(this)} label='First Name' placeholder='John' state='success'/>
              </Col>
              <Col xs={12} md={6}>
                <Input value={this.state.surname.value} label='Surname' placeholder='Smith' />
              </Col>
              <Col xs={12} md={6}>
                <Input value={this.state.name.birthday} label='Date of birth' placeholder='01/01/1980' />
              </Col>
              <Col xs={12} md={6}>
                <Input value={this.state.name.naionality} label='Naionality' placeholder='Irish' />
              </Col>
              <Col xs={12} md={6} state>
                <Input value={this.state.name.email} label='Email Address' placeholder='hello@info.com' state='error' info='Specific Error Feedback Text: located where the input is'/>
              </Col>
              <Col xs={12} md={6}>
                <Input value={this.state.name.ocupation} label='Ocupation' placeholder='Front End Developer' />
              </Col>
            </Row>

            <div className='panel__btnArea'>
              <Button className='right' onClick={this.props.onSubmit} disabled={!this.state.validForm}>Submit</Button>
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
