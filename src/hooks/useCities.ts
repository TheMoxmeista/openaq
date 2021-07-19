import { useState, useEffect } from 'react';

import { Cities } from 'types/cities';

async function getCities() {
  let data = await fetch('https://api.openaq.org/v1/cities?country=GB').then((resp) => resp.json());

  return data;
}

export default function useCities(): [boolean, string, Cities] {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCities()
      .then((response) => setCities(response.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    cities,
  ];
}
