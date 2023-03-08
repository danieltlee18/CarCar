import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);

    const [formData, setFormData] = useState({
        vin: '',
        owner: '',
        time: '',
        reason: '',
        technician: '',
    })

    const fetchData = async () => {
        const url = 'http://localhost:8080/service_rest/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:8080/service_rest/appointments/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setFormData({
                vin: '',
                owner: '',
                time: '',
                reason: '',
                technician:'',
            });
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    return (
        <div className="row">

        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Schedule a new appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">

              <div className="form-floating mb-3">
                <input value={formData.vin} onChange={handleFormChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
              </div>

              <div className="form-floating mb-3">
                <input value={formData.owner} onChange={handleFormChange} placeholder="Customer name"  type="text" name="owner" id="owner" className="form-control"/>
                <label htmlFor="owner">Customer name</label>
              </div>

              <div className="form-floating mb-3">
                <input value={formData.time} onChange={handleFormChange} placeholder="Date/time"  type="datetime-local" name="time" id="time" className="form-control"/>
                <label htmlFor="time">Date/time</label>
              </div>

              <div className="form-floating mb-3">
                <textarea value={formData.reason} onChange={handleFormChange} placeholder="Reason"  name="reason" id="reason" rows="3" className="form-control"/>
                <label htmlFor="reason">Reason for appointment</label>
              </div>

              <div className="mb-3">
              <select onChange={handleFormChange} required name="technician" id="technician" className="form-select">
                  <option value=''>Choose a technician </option>
                  {technicians.map(technician => {
                  return (
                  <option key={technician.employee_number} value={technician.employee_number}> {technician.name} </option>
                  );
                })}
                </select>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>

          </div>
          <Link to="/services/appointments" className="link">Back to appointments</Link>
        </div>
      </div>
    );



}

export default AppointmentForm;
