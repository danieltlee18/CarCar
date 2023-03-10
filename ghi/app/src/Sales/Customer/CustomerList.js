import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/customer/all/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>
        <h1>Customers</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/customers/create/"><button className='btn btn-primary btn-sm'>Add customer!</button></Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Customer ID</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => {
                    return (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.id}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}

export default CustomerList;
