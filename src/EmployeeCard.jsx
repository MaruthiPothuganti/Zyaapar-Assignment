import { useState } from "react";

export const EmployeeCard = ({ emp, deleteEmployee, updateEmployee }) => {
  const [updatedData, setUpdatedData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const updateData = (emp) => {
    updateEmployee({
      id: emp.id,
      name: updatedData
    });
    setIsEdit(!isEdit);
  };

  return (
    <li key={emp.id}>
      {isEdit ? (
        <div className="employeeCard">
          <input
            type="text"
            defaultValue={emp.name}
            onChange={(e) => setUpdatedData(e.target.value)}
          />
          <button onClick={() => updateData(emp)}>Save Changes</button>
        </div>
      ) : (
        <div className="employeeCard">
          <p>{emp.name}</p>
          <button onClick={() => setIsEdit(!isEdit)}>edit</button>
          <button onClick={() => deleteEmployee(emp)}>delete</button>
        </div>
      )}
    </li>
  );
};
