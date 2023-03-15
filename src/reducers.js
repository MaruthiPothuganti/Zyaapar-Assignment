import { v4 as uuid } from "uuid";

import {
  CREATEEMPLOYEE,
  GETEMPLOYEES,
  UPDATEEMPLOYEE,
  DELETEEMPLOYEE
} from "./actionTypes";

const initialEmployeeState = {
  employees: [
    { id: uuid(), name: "joe" },
    { id: uuid(), name: "john" }
  ]
};

const employeeDataReducer = (state = initialEmployeeState, action) => {
  switch (action.type) {
    case GETEMPLOYEES:
      return state;

    case CREATEEMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, { id: uuid(), name: action.payload }]
      };

    case UPDATEEMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees.map((item) => {
            if (item.id === action.payload.id) {
              return {
                id: item.id,
                name: action.payload.name
              };
            }
            return item;
          })
        ]
      };
    case DELETEEMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees.filter((item) => item.id !== action.payload.id)
        ]
      };

    default:
      return state;
  }
};

export default employeeDataReducer;
