import React from 'react';
import './_style.scss';

import {
  Panel, Loading,
  Container, Row, Col

} from 'export';


class FormStep_03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : true
    };
  }

  componentDidMount(){
    setTimeout(this.isUserValid.bind(this), 3000);
  }

  isUserValid() {
    // Emulate delay response from server
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <Container>

        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={2} md={4} smOffset={4}>
            <Panel theme='sec' className='panelThanks'>
              {this.state.isLoading ?
                <Loading /> :
                <h1>Thank You</h1>
              }
            </Panel>
          </Col>
        </Row>

      </Container>
    )
  }
}

module.exports = FormStep_03;
