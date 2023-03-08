import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const TechnicianForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        employee_number: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/service_rest/technicians/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify({
                name: formData.name,
                employee_number: formData.employee_number
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFormData({
                name: "",
                employee_number: ""
            })
        }
    }

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new technician</h1>
                    <form onSubmit={handleSubmit} id="Create-Technician-Form">
                        <div className="form-floating mb-3">
                            <input value={formData.name} onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.employee_number} onChange={handleFormChange} placeholder="Employee number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                            <label htmlFor="employee_number">Employee number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
                <Link to="/services/technicians" className="link">Back to technicians</Link>
            </div>
        </div>
    )
}

export default TechnicianForm;
