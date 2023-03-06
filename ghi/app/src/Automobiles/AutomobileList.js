import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setAutomobiles(data.autos)
            console.log(data.autos)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <Link to="/automobiles/create"><button className='btn btn-primary'>Create a automobile!</button></Link>
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