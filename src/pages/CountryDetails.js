import { Link, useParams } from 'react-router-dom';

function CountryDetails({ allCountries }) {
  const { id } = useParams();

  const countrySelected = allCountries.find(function (country) {
    return country.alpha3Code == id;
  });

  const borderCountries = countrySelected.borders.map(function (border) {
    return allCountries.find(function (country) {
      return country.alpha3Code == border;
    });
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <img src={`https://flagpedia.net/data/flags/icon/256x192/${countrySelected.alpha2Code.toLowerCase()}.png`} alt ="" />
      <h1>{countrySelected.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countrySelected.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {countrySelected.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {borderCountries.map(function(country){
                return (
                    <li>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </li>
                )
              })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
