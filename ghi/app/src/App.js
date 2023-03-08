import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import ManufacturerList from './Manufacturers/ManufacturerList';
import ManufacturerForm from './Manufacturers/ManufacturerForm';
import VehicleList from './Vehicles/VehicleList';
import VehicleForm from './Vehicles/VehicleForm';
import AutomobileList from './Automobiles/AutomobileList';
import AutomobileForm from './Automobiles/AutomobileForm';
import TechnicianForm from './Services/Technicians/TechnicianForm';
import TechnicianList from './Services/Technicians/TechnicianList';
import AppointmentList from './Services/Appointments/AppointmentList';
import AppointmentRecords from './Services/Appointments/AppointmentRecords';
import CustomerForm from './Sales/Customer/CustomerForm';
import CustomerList from './Sales/Customer/CustomerList';
import EmployeeList from './Sales/Employee/EmployeeList';
import EmployeeForm from './Sales/Employee/EmployeeForm';
import SalesList from './Sales/SalesRecords/SalesList';
import SalesForm from './Sales/SalesRecords/SalesForm';
import SalesPersonHistory from './Sales/SalesRecords/SalesPersonHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} />
          <Route path="vehicles" element={<VehicleList />} />
          <Route path="vehicles/create" element={<VehicleForm />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="automobiles/create" element={<AutomobileForm />} />

          <Route path="services/technicians" element={<TechnicianList />} />
          <Route path="services/technicians/create" element={<TechnicianForm />} />

          <Route path="services/appointments" element={<AppointmentList />} />
          <Route path="services/appointments/records" element={<AppointmentRecords />} />
          <Route path="customers/" element={<CustomerList />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="employees/" element={<EmployeeList />} />
          <Route path="employees/create/" element={<EmployeeForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/create/" element={<SalesForm />} />
          <Route path="sales/history/" element={<SalesPersonHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
