import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function EmployeeBtn({ data }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: ' ',
    email: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user')) || {};
    setFormData(storedData);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    // Perform additional logic, such as sending a request to the server to log the user in
  };



  const customersColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "fullName",
      headerName: "Full name",
      type: "string",
      width: 178,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 110,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 178,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
  ];

  const customersRows = [
    ...data?.map(
      (obj, i) =>
        (obj = {
          id: i,
          fullName: obj.fullName,
          phone: `${obj.country.MobilePrefix}-${obj.phone}`,
          email: obj.email,
          newUser: obj.name,
        })
    ),
  ];
  return (
    <div className="employees pb-5 mb-5">
      <h6>Employees table</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="fullName"
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="phone"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="email"
        />
        <button type="submit">Login</button>
      </form>

      <Paper style={{ height: "50vh", marginTop: "1rem" }}>
        <DataGrid
          rows={customersRows}
          columns={customersColumns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </div>
  );
}
