import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SalesForm() {
  const [formData, setFormData] = useState({
    automobile: "",
    sales_person: "",
    customer: "",
    price: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
        setFormData({
          ...formData,
          [inputName]: value,
        });
      }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const saleRecordUrl = 'http://localhost:8090/api/sales/create/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify({
        automobile: formData.automobile,
        sales_person: formData.sales_person,
        customer: formData.customer,
        price: formData.price,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    console.log(fetchConfig)
    console.log("This is the form data", formData)
    const response = await fetch(saleRecordUrl, fetchConfig)
    console.log(response)
    if (response.ok) {
      setFormData({
        automobile: "",
        sales_person: "",
        customer: "",
        price: "",
      })
    }
  };


  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Sale Record</h1>
          <form onSubmit={handleSubmit} id="create-sale-record-form">
            <div className="form-floating mb-3">
              <input value={formData.automobile} onChange={handleFormChange} placeholder="Automobile ID" required type="number" name="automobile" id="automobile" className="form-control" />
              <label htmlFor="automobile">Automobile ID</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.sales_person} onChange={handleFormChange} placeholder="Sales Person ID" required type="number" name="sales_person" id="sales_person" className="form-control" />
              <label htmlFor="sales_person">Sales Person ID</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.customer} onChange={handleFormChange} placeholder="Customer ID" required type="number" name="customer" id="customer" className="form-control" />
              <label htmlFor="customer">Customer ID</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.price} onChange={handleFormChange} placeholder="Price" required type="number" step="0.01" name="price" id="price" className="form-control" />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
        <Link to="/sales/" className="link">Back to Sales Records</Link>
      </div>
    </div>
  );
}

export default SalesForm;
