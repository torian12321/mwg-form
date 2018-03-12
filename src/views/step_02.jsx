import React from 'react';
import './_style.scss';

import {
  Button, Panel,
  Input,
  Container, Row, Col

} from 'export';

const FormStep_02 = props =>(
  <Container>

    <Row>
      <Col xs={12}>
        <Panel theme='sec'>
        
          <Row>
            <Col xs={12} md={6}>
              <Input label='First Name' placeholder='John' state='success'/>
            </Col>
            <Col xs={12} md={6}>
              <Input label='Surname' placeholder='Smith' />
            </Col>
            <Col xs={12} md={6}>
              <Input label='Date of birth' placeholder='01/01/1980' />
            </Col>
            <Col xs={12} md={6}>
              <Input label='Naionality' placeholder='Irish' />
            </Col>
            <Col xs={12} md={6} state>
              <Input label='Email Address' placeholder='hello@info.com' state='error' info='Specific Error Feedback Text: located where the input is'/>
            </Col>
            <Col xs={12} md={6}>
              <Input label='Ocupation' placeholder='Front End Developer' />
            </Col>
          </Row>
          
          <div className='panel__btnArea'>
            <Button className='right'>Submit</Button>
          </div>     
        </Panel>
      </Col>
    </Row>

  </Container>
);


module.exports = FormStep_02;