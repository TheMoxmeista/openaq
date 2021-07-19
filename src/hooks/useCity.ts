import { useState, useEffect } from 'react';

import { AirQuality, AirQualityParameter } from 'types/airQualities';

async function getCityData(city: string, country: string) {
  let data = await fetch(`https://api.openaq.org/v1/measurements?country=${country}&city=${city}`).then((resp) => resp.json());
  let parameters = await fetch('https://api.openaq.org/v1/parameters').then((resp) => resp.json());

  return { data, parameters };
}

export default function useCity(city: string, country = 'GB'): [boolean, string, AirQuality[]] {
  const [cityData, setCityData] = useState<AirQuality[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCityData(city, country)
      .then((response) => {
        let cityAirValues: AirQuality[] = [];

        // extract all the values and params
        let { data, parameters } = response;
        data = data.results;
        let params = parameters.results.map((result: AirQualityParameter) => ({
          name: result.name,
          preferredUnit: result.preferredUnit
        }));

        // create array of average values as locations for same value are present across city
        params.forEach((param: AirQualityParameter) => {
          let values: number[] = [];
          data.forEach((item: { parameter: string, city: string, value: number }) => {
            if (item.parameter === param.name && item.city === city) {
              values.push(item.value);
            }
          });
          let average = values.reduce((a,b) => a + b, 0) / values.length;
          if (!Number.isNaN(average)) {
            cityAirValues.push({
              name: param.name,
              averageValue: average,
              unit: param.preferredUnit
            });
          }
        })

        setCityData(cityAirValues);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    cityData,
  ];
}
