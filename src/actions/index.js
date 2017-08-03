import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action operated', action);
    return action;
}

export const delReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('action delete operated', action);
    return action;
}