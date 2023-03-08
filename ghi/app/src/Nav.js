import { NavLink } from 'react-router-dom';

function Nav() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">

  <div className="container">
  <div className="row align-items-start">

  <div className="col">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button></div>

      </div>


    <div className="col">
    <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Inventory
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
          <NavLink className="nav-link" to="/manufacturers/create">Add Manufacturer</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="nav-link" to="/vehicles">Vehicles</NavLink>
          <NavLink className="nav-link" to="/vehicles/create">Add Vehicle</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
          <NavLink className="nav-link" to="/automobiles/create">Add Automobile</NavLink>
        </div>
      </div>
      </div>

    <div className="col">
    <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Services
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">


          <NavLink className="nav-link" to="/services/appointments">Current appointments</NavLink>
          <NavLink className="nav-link" to="/services/appointments/create">Add appointment</NavLink>
          <NavLink className="nav-link" to="/services/appointments/records">Appointment records</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="nav-link" to="/services/technicians">Technicians</NavLink>
          <NavLink className="nav-link" to="/services/technicians/create">Add technician</NavLink>
        </div>
    </div>
    </div>

    <div className="col">
    <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sales
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <NavLink className="nav-link" to="/sales/create/">Record sale</NavLink>
          <NavLink className="nav-link" to="/sales">Sales history</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="nav-link" to="employees/create/">Add employee</NavLink>
          <NavLink className="nav-link" to="/customers/create">Add customer</NavLink>
          <NavLink className="nav-link" to="/sales/history">Employee history</NavLink>
        </div>
    </div>
    </div>

  </div>
  </div>
  </nav>
  )
}

export default Nav;
