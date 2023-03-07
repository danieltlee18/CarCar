import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SalesList() {
    const [sales, setSales] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setSales(data)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>
        <h1>Sales</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/sales/create/"><button className='btn btn-primary'>Create a Employee!</button></Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Employee ID</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => {
                    return (
                        <tr key={sale.id}>
                            <td>{sale.sales_person.name}</td>
                            <td>{sale.sales_person.employee_id}</td>
                            <td>{sale.customer.name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}

export default SalesList;
