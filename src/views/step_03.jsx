import React from 'react';
import './_style.scss';

import {
  Button, Panel,
  Container, Row, Col

} from 'export';

const FormStep_03 = props =>(
  <Container>

    <Row>
      <Col xs={8} xsOffset={2} sm={6} smOffset={2} md={4} smOffset={4}>
        <Panel theme='sec' className='panel--thanks'>
          <h1>Thank You</h1>
        </Panel>
      </Col>
    </Row>

  </Container>
);

module.exports = FormStep_03;