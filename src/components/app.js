import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, delReminder } from '../actions';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        text: '',
        duetime: ''
      }
  }

  addReminder(){
    this.props.addReminder(this.state.text);
  }

  delReminder(id){
    this.props.delReminder(id);
  }

  renderReminders(){
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
          {
            reminders.map(reminder => {
                return (
                  <li key={reminder.id} className="list-group-item">
                    <div className="reminder-element"> 
                      {reminder.text}
                    </div>
                    <button className="reminder-element x-sign"
                    onClick={() => this.delReminder(reminder.id)}
                    >
                    &#x2715;</button>
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
          onChange={event => this.setState({text:event.target.value})}
          placeholder="I have to ..."/>
          <input className="form-control reminder-main-input" type="datetime-local" name="reminder-time" 
          onChange={event => this.setState({duetime:event.target.value})}
          placeholder="Due Time"/>
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

export default connect(mapStateToProps, { addReminder, delReminder })(App);