import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function CustomerForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone_number: "",
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
        const customersUrl = 'http://localhost:8090/api/customer/create/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify({
                name: formData.name,
                address: formData.address,
                phone_number: formData.phone_number,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(customersUrl, fetchConfig)
        if (response.ok) {
            setFormData({
                name: "",
                address: "",
                phone_number: "",
            })
        }
    };
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add customer</h1>
              <form onSubmit={handleSubmit} id="create-hat-form">
                <div className="form-floating mb-3">
                  <input value={formData.name} onChange={handleFormChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={formData.address} onChange={handleFormChange} placeholder="address" required type="text" name="address" id="address" className="form-control" />
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={formData.phone_number} onChange={handleFormChange} placeholder="phone number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                  <label htmlFor="phone_number">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
            <Link to="/customers/" className="link">Back to customers</Link>

          </div>
        </div>

      );
    }
    export default CustomerForm;
