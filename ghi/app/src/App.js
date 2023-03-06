import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturerList from './Manufacturers/ManufacturerList';
import Nav from './Nav';
import ManufacturerForm from './Manufacturers/ManufacturerForm';
import AutomobileList from './Automobiles/AutomobileList';
import AutomobileForm from './Automobiles/AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} />
          <Route path="automobiles/" element={<AutomobileList />} />
          <Route path="automobiles/create" element={<AutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
