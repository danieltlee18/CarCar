import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
            console.log(data)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>
        <h1>Manufacturers</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/manufacturers/create"><button className='btn btn-primary'>Create a manufacturer!</button></Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}

export default ManufacturerList;
