import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';


class App extends Component {
  constructor(props){
    super(props);
      text: ''
  }

  addReminder(){
    this.props.addReminder(this.state.text);
  }

  renderReminders(){
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
          {
            reminders.map((reminder) => {
                return (
                  <li className="list-group-item">
                    <div>
                      {reminder.text}
                    </div>
                  </li>
                )
              }
            )
          }
      </ul>
    )
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="main-div">
          <label htmlFor="reminder-request">Type your Reminder</label>
          <input className="form-control reminder-main-input" type="text" name="reminder-request" 
          onChange={event => this.setState({text:event.target.value})}/>
        </div>
        <button className="btn btn-success add-reminder-btn"
        onClick={() => this.addReminder()}>
        Add Reminder</button>
        {this.renderReminders()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);