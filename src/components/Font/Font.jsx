import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  customFont: {
    fontFamily: 'Outfit, sans-serif',
  },
}));

function CustomFontComponent({children}) {
  const classes = useStyles();

  return (
    <Typography className={classes.customFont}>
      {children}
    </Typography>
  );
}

export default CustomFontComponent;
