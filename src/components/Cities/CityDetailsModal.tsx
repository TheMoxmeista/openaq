import React from 'react';

import { City } from 'types/cities';
import { AirQuality } from 'types/airQualities';

import useCity from 'hooks/useCity';
import Modal from 'components/ui/Modal';

type CityProps = City & {
  closeFunc(): void
}

const CityModal = ({ name, country, closeFunc }: CityProps) => {
  const [loading, error, cityData] = useCity(name, country);

  const getContent = (loading: boolean, error: string, cityData: AirQuality[]) => {
    if (error) {
      return <div>{error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return cityData.map((item: AirQuality) => (
      <div key={`${item.name}${item.unit}`}>{item.name}: {item.averageValue}{item.unit}</div>
    ))
  }

  return (
    <Modal closeFunc={closeFunc}>
      <>
        <h2>City Air Quality</h2>
        {getContent(loading, error, cityData)}
      </>
    </Modal>
  );
};

export default CityModal;
