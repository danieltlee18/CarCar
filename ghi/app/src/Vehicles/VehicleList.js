import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function VehicleList() {
  const [vehicles, setVehicles] = useState([])


  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/models/');
    if (response.ok)  {
      const data = await response.json();
      setVehicles(data.models)

    };
  };

useEffect(()=>{
  getData()
}, [])


  // const handleDelete = async (e) => {
  //   const url = `http://localhost:8100/api/models/${e.target.id}/`

  //   const fetchConfigs = {
  //       method: "Delete",
  //       headers: {
  //           "Content-Type": "application/json"
  //       }
  //   }

  //   not sure these are needed //const response = await fetch(url, fetchConfigs)
  //   not sure these are needed // const data = await response.json()

  //   setShoes(shoes.filter(shoe => String(shoe.pk) !== e.target.id))
  //   };



  return (
    <>
    <h1>Vehicles</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
     <Link to="/vehicles/create"><button className='btn btn-primary'>Create a vehicle model!</button></Link></div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map(vehicle => {
          let alter_text=`${vehicle.manufacturer.name}, ${vehicle.name}`
          return (
            <tr key={vehicle.id}>
              <td>{ vehicle.name }</td>
              <td>{vehicle.manufacturer.name}</td>
              <td><img src={vehicle.picture_url} alt={alter_text} width="200"/></td></tr>
          );
        })}
      </tbody>
    </table>
    </>
  );

  };

export default VehicleList;
