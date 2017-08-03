import { ADD_REMINDER,DELETE_REMINDER } from '../constants';
import {read_cookie,bake_cookie} from 'sfcookies';

const reminder = (action) => {
  let {text, duetime} = action;
  return {
    id: Math.random(),
    text,
    duetime
  }
}

const remove = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced remidners', reminders);
  return reminders;
}

const reminders = (state= [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      bake_cookie('reminders', reminders);
      console.log('reminders are ',reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = remove(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    default:
    return state;
  }
}

export default reminders;