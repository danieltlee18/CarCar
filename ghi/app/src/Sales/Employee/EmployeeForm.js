import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function EmployeeForm() {
    const [formData, setFormData] = useState({
        name: "",
        employee_id: "",
    })

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const employeeUrl = 'http://localhost:8090/api/employee/create/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify({
                name: formData.name,
                employee_id: formData.employee_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(employeeUrl, fetchConfig)
        
        if (response.ok) {
            setFormData({
                name: "",
                employee_id: "",
            })
        }
    };
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new Employee</h1>
              <form onSubmit={handleSubmit} id="create-hat-form">
                <div className="form-floating mb-3">
                  <input value={formData.name} onChange={handleFormChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={formData.employee_id} onChange={handleFormChange} placeholder="employee_id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                  <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
            <Link to="/employees/" className="link">Back to Employee</Link>

          </div>
        </div>

      );
    }
    export default EmployeeForm;
