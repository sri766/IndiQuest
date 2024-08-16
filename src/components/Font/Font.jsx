import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  customFont: {
    fontFamily: 'Outfit, sans-serif',
  },
}));

function Font({children}) {
  const classes = useStyles();

  return (
    <div className={classes.customFont}>
      {children}
    </div>
  );
}

export default Font;
