import React from 'react';
import './_style.scss';
import FormStep_01 from './step_01';
import FormStep_02 from './step_02';
import FormStep_03 from './step_03';
import {
  Header
} from 'export';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep : 2
    };
  }

  render() {
    return (
      <div className='formPage'>
        <Header />

        { this.state.formStep == 1 && <FormStep_01 /> }
        { this.state.formStep == 2 && <FormStep_02 /> }
        { this.state.formStep == 3 && <FormStep_03 /> }

      </div>
    )
  }
}

module.exports = Form;
