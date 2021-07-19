import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

import { City as CityType } from 'types/cities';

const useStyles = createUseStyles({
  root: {
    display: 'block',
    width: '100%',
    border: '1px solid',
    borderRadius: 8,
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px 0',
    '&:active': {
      boxShadow: '0 0 0 0'
    }
  }
});

const City = ({ name, country } : CityType) => {
  const classes = useStyles();
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <button className={classes.root} onClick={() => setOpenModal(!openModal)}>
        {name}, {country}
      </button>
      {openModal ? <div>MODAL OPEN</div> : null}
    </>
  );
};

export default City;