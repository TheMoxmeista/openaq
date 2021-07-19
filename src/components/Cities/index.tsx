import React from 'react';
import {createUseStyles} from 'react-jss';

import { City as CityType, Cities as CitiesType } from 'types/cities';

const useStyles = createUseStyles({
  root: {
    width: 'calc(100% - 10px)',
    maxWidth: 800,
    margin: '5px auto',
    display: 'grid',
    gridTemplateColumns: '100%',
    rowGap: 10,
    fontSize: 20,
    backgroundColor: 'white',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '50% 50%',
      columnGap: 10
    }
  }
});

type CitiesProps = {
  loading: boolean,
  cities: CitiesType
}

const Cities = ({ cities }: CitiesProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cities.map((city: CityType) => (
        <button key={city.name} className={classes.root} onClick={() => {}}>
          {city.name}, {city.country}
        </button>
      ))}
    </div>
  );
};

export default Cities;
