import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";


const employeesDataFromLocalStorage = JSON.parse(localStorage.getItem("employees"));


function EmployeeBtn() {
  const [employees, setEmployees] = useState(employeesDataFromLocalStorage);
  
  useEffect = ()=>{
    localStorage.setItem("employees", JSON.stringify(employeesDataFromLocalStorage))
  }
  <>
  <Button variant="dark">Add User</Button>
  </>;
}
export default EmployeeBtn;
