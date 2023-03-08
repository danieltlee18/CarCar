import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (<>
       <h1>Automobiles</h1>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/automobiles/create"><button className='btn btn-primary'>Create an automobile!</button></Link></div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile => {
                    return (
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>)
}

export default AutomobileList;
