import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MultiStepForm from './components/MultiStepForm';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 600,
    margin: theme.spacing(4, 'auto'),
    padding: theme.spacing(4),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Paper className={classes.form} elevation={2}>
      <Typography variant="h4" align="center"> Checkout </Typography>
      <MultiStepForm />
    </Paper>
  );
};
