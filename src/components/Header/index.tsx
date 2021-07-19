import React from 'react';
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'lightblue'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      Open AQ - Check yo' city!
    </header>
  );
};

export default Header;
