import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes flickerAnimation': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 }
  },
  fakeCity: {
    animation: '$flickerAnimation 2s infinite ease-in-out',
    borderRadius: 8,
    margin: 5,
    height: 60,
    backgroundColor: 'grey'
  }
});

const Cities = () => {
  const classes = useStyles();
  const fakeCities = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <>
      {fakeCities.map((fakeCity: number) => (
        <div key={fakeCity} className={classes.fakeCity} />
      ))}
    </>
  );
};

export default Cities;
