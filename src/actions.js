import {
  CREATEEMPLOYEE,
  UPDATEEMPLOYEE,
  GETEMPLOYEES,
  DELETEEMPLOYEE
} from "./actionTypes";

export const getEmployeesAction = (payload) => {
  return {
    type: GETEMPLOYEES,
    payload
  };
};

export const createEmployeeAction = (payload) => {
  return {
    type: CREATEEMPLOYEE,
    payload
  };
};

export const updateEmployeeAction = (payload) => {
  return {
    type: UPDATEEMPLOYEE,
    payload
  };
};

export const deleteEmployeeAction = (payload) => {
  return {
    type: DELETEEMPLOYEE,
    payload
  };
};
