import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="reminder-request">Type your Reminder</label>
          <input className="form-control" type="text" name="reminder-request" />
        </div>
        <button className="btn btn-success">Add Reminder</button>
      </div>
    );
  }
}
