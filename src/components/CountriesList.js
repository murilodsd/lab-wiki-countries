import { Link } from 'react-router-dom';

function CountriesList({allCountries}) {

  return (
    <div className="list-group">
      {allCountries.map(function (country) {
        return (
          <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
            <div className="list-group-item list-group-item-action d-flex flex-column align-items-center">
              <img
                alt=""
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              {country.name.official}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
