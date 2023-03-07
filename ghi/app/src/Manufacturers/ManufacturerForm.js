import React, { useState } from 'react';

const ManufacturerForm = () => {
    const [formData, setFormData] = useState({
        name: "",
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify({
                name: formData.name
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        console.log(fetchConfig)

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFormData({
                name: "",
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
                    <h1>Create a new manufacturer</h1>
                    <form onSubmit={handleSubmit} id="Create-Manufacturer-Form">
                        <div className="form-floating mb-3">
                            <input value={formData.name} onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerForm;
