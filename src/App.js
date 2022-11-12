import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './pages/CountryDetails';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import countries from './countries.json'

function App() {
  const [allCountries, setAllCoutries] = useState(countries);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className='col-5'>
          <CountriesList allCountries={allCountries}/>
          </div>

          <div className='col-7'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<CountryDetails allCountries={allCountries}/>} />
            <Route path="*" element={<ErrorPage />} />;
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
