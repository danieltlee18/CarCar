import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/employee/all/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setEmployees(data)
            console.log(data)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>
        <h1>Employees</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/employees/create/"><button className='btn btn-primary btn-sm'>Create a Employee!</button></Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Unique ID</th>
                    <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => {
                    return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.employee_id}</td>
                            <td>{employee.id}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}

export default EmployeeList;
