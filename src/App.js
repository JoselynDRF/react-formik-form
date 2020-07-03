import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MultiStepForm from './components/MultiStepForm';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Paper className={classes.form} elevation={2}>
      <MultiStepForm />
    </Paper>
  );
};
