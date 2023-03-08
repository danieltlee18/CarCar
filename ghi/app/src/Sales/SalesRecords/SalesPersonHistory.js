import React, { useEffect, useState } from 'react'

function SalesPersonHistory() {
  const [sales, setSales] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

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

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value)
  }

  const filteredSales = sales.filter(sale => {
    const employeeName = sale.sales_person.name.toLowerCase();
    const filter = filterTerm.toLowerCase();

    return employeeName.includes(filter);
  });

  return (
    <>
      <h1>Employee History</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <input onChange={handleFilterChange} placeholder="Filter by employee name" />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{sale.sales_person.name}</td>
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

export default SalesPersonHistory;
