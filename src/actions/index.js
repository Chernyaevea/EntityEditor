import axios from 'axios';

export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';

const URL = 'http://localhost:3000';

export function fetchDepartment() {
  const req = axios.get(`${URL}/department`);

  return {
    type: FETCH_DEPARTMENT,
    payload: req
  };
}

export function fetchEmployee() {
  const req = axios.get(`${URL}/employee`,{headers: {'Content-Type': 'application/json'}});

  return {
    type: FETCH_EMPLOYEE,
    payload: req
  };
}
