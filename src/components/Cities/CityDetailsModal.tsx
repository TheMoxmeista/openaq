import React from 'react';
import {createUseStyles} from 'react-jss';

import { City } from 'types/cities';
import { AirQuality } from 'types/airQualities';

import useCity from 'hooks/useCity';

const useStyles = createUseStyles({
  background: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5
  },
  modalRoot: {
    minHeight: 300,
    maxHeight: 500,
    width: 300,
    overflow: 'auto',
    padding: 15,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white'
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

type CityProps = City & {
  closeFunc(): void
}

const CityModal = ({ name, country, closeFunc }: CityProps) => {
  const classes = useStyles();
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
    <>
      <div className={classes.background} aria-hidden="true" />
      <div className={classes.modalRoot} role="dialog" aria-modal="true">
        <button className={classes.closeBtn} onClick={closeFunc}>Close</button>
        <h2>City Air Quality</h2>
        {getContent(loading, error, cityData)}
      </div>
    </>
  );
};

export default CityModal;
