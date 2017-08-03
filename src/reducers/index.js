import { ADD_REMINDER,DELETE_REMINDER } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const remove = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced remidners', reminders);
  return reminders;
}

const reminders = (state= [], action) => {
  let reminders = null;
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      console.log('reminders are ',reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = remove(state, action.id);
      return reminders;
    default:
    return state;
  }
}

export default reminders;