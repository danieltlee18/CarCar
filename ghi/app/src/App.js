import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehiclesList from './VehiclesList';
import VehiclesAdd from './VehiclesAdd';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicles" element={<VehiclesList />} />
          <Route path="vehicles/add" element={<VehiclesAdd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
