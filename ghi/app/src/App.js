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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
