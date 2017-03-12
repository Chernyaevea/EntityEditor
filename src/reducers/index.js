import { FETCH_DEPARTMENT, FETCH_EMPLOYEE } from '../actions/index';

const INITIAL_STATE = { departments: null, employees: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return {...state, employees: action.payload.data};
    case FETCH_DEPARTMENT:
      return {...state, departments: action.payload.data};
    default:
      return state;
  }
}
