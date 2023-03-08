import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TechnicianList() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/service_rest/technicians/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>
        <h1>Technicians</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/services/technicians/create"><button className='btn btn-primary btn-sm'>Create a technician!</button></Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th key="name">Name</th>
                    <th key="employee_number">Employee number</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(technician => {
                    return (
                        <tr key={technician.employee_number}>
                            <td>{technician.name}</td>
                            <td>{technician.employee_number}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}

export default TechnicianList;
