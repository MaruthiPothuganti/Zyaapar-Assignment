import { useState } from "react";
import store from "./store";
import {
  deleteEmployeeAction,
  updateEmployeeAction,
  createEmployeeAction
} from "./actions";

import "./styles.css";
import { EmployeeCard } from "./EmployeeCard";

export default function App() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const { dispatch, getState } = store;

  const getEmployees = () => {
    setData(getState().employees);
    console.log(getState());
  };

  const addEmployee = () => {
    dispatch(createEmployeeAction(userInput));
    setData(getState().employees);
  };

  const deleteEmployee = (emp) => {
    dispatch(deleteEmployeeAction(emp));
    setData(getState().employees);
  };

  const updateEmployee = (emp) => {
    dispatch(updateEmployeeAction(emp));
    setData(getState().employees);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />{" "}
      <button onClick={addEmployee}>ADD</button>
      <hr />
      <div>
        Employees List: <button onClick={getEmployees}>Get List</button>
        <ul>
          {data.map((emp) => (
            <EmployeeCard
              key={emp.id}
              emp={emp}
              deleteEmployee={deleteEmployee}
              updateEmployee={updateEmployee}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// React.Js: - Use Crud API
// -Create Employee - done
// -Employee Update -done
// -Employee Delete - done
// -Employee List - done
// const update whenever there is a change (subscribed to store)
