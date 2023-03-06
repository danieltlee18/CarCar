import React, { useEffect, useState } from 'react';


function VehiclesAdd() {
    const [manufacturers, setManufacturers] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: '',
    })

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:8100/api/models/';

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
                name: '',
                picture_url: '',
                manufacturer_id: '',
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
            <h1>Create a vehicle model</h1>
            <form onSubmit={handleSubmit} id="create-vehicle-form">

              <div className="form-floating mb-3">
                <input value={formData.name} onChange={handleFormChange} placeholder="name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input value={formData.picture_url} onChange={handleFormChange} placeholder="Picture URL"  type="text" name="picture_url" id="picture_url" className="form-control"/>
                <label htmlFor="picture">Picture URL</label>
              </div>

              <div className="mb-3">
              <select onChange={handleFormChange} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                  <option value="">Choose a manufacture </option>
                  {manufacturers.map(manufacturer => {
                  return (
                  <option key={manufacturer.id} value={manufacturer.id}> {manufacturer.name} </option>
                  );
                })}
                </select>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>

          </div>
        </div>
      </div>
    );



}
export default VehiclesAdd;


// https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg/560px-2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg
// Fiesta

// "name": "Accord",
// "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/560px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg",
// "manufacturer_id": 2
