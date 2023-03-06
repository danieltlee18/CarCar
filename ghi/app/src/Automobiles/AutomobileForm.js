import React, { useState, useEffect } from 'react';

const AutomobileForm = () => {
    const [formData, setFormData] = useState({
        color: "",
        year: "",
        vin: "",
        model_id: "",
    })

    const [models, setModels] = useState([])
    const [model, setModel] = useState([])
    const fetchData = async () => {
        const modelUrl = 'http://localhost:8100/api/models/';
        const response = await fetch(modelUrl);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
            console.log(data)
        }
    }
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleModelChange = (e) => {
        setModel(e.target.value);
        setFormData({
          ...formData,
          model_id: e.target.value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.model_id)
        console.log(formData)
        const url = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
        };
        const resp = await fetch(url, fetchConfig);
        if (resp.ok) {
            const data = await resp.json()
            console.log(data)
            setFormData({
                color: "",
                year: "",
                vin: "",
                model_id: "",
            });
            setModel("");
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Automobile</h1>
                    <form id="create-shoe-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input required value={formData.color} className="form-control" name="color" id="color" type="text" onChange={handleFormChange} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required value={formData.year} className="form-control" name="year" id="year" type="text" onChange={handleFormChange} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required value={formData.vin} className="form-control" name="vin" id="vin" type="text" onChange={handleFormChange} />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className='mb-3'>
                            <select required value={model} className="form-select" onChange={handleModelChange}>
                                <option value="">Choose a Model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default AutomobileForm;
