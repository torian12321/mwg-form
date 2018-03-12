import React from 'react';
import './_style.scss';

import {
  Button, Panel,
  Container, Row, Col

} from 'export';

const FormStep_01 = props =>(
  <Container>

    <Row>
      <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
        <Panel className='panelWellcome'>
          <h2>Wellcome</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minima veniam soluta dolorum est quibusdam animi maxime odit? Alias debitis in numquam commodi iste et modi maxime soluta vero similique.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minima veniam soluta dolorum est quibusdam animi maxime odit? Alias debitis in numquam commodi iste et modi maxime soluta vero similique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minima veniam soluta dolorum est quibusdam animi maxime odit? Alias debitis in numquam commodi iste et modi maxime soluta vero similique.</p>

          <div className='panel__btnArea'>
            <Button color='sec' className='right'>Next</Button>
          </div>
        </Panel>
      </Col>
    </Row>

  </Container>
);

module.exports = FormStep_01;
