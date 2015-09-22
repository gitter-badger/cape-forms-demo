import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

import EditableField from './EditableField'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.interval = setInterval(() => this.tick(), 2000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {color, increment} = this.props
    const {counter} = this.state

    return (
      <h1 style={{ color: color }}>
        Counter ({increment}): {counter}
      </h1>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: 'kai@kaicurry.com',
        date: null
      }
    };
  }

  handleInput(name, value) {
    console.log(name, value);
    const newSt = {form: this.state.form}
    newSt.form[name] = value;
    this.setState(newSt);
  }

  render() {
    const {form} = this.state;
    const txt = JSON.stringify(form);

    return (
      <div className="section">
        <Counter increment={3} color={NICE} />
        <Counter increment={2} color={SUPER_NICE} />
        <div className="row">
          <div className="col-md-6">
            <div>{txt}</div>
            <EditableField
              type="email"
              onSubmit={(value) => this.handleInput('email', value)}
              defaultValue={form.email}
              required={true}
            />
            <EditableField
              type="dateTime"
              onSubmit={(value) => this.handleInput('date', value)}
              defaultValue={form.date}
            />

          </div>
        </div>
      </div>
    );
  }
}
