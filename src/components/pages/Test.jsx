import { Country, State, City } from 'country-state-city';
import { useEffect, useState } from 'react';

const Test = () => {
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);

  const getCountries = async () => {
    try {
      const allCountries = await Country.getAllCountries();
      setCountries(allCountries);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return countries.map((c) => (
    <h2 key={c.isoCode}>
      {c.name}{' '}
      <span>
        {state.map((s, i) => (
          <span key={'s' + i}>{s.name}</span>
        ))}
      </span>
    </h2>
  ));
};

export default Test;
