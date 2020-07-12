import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import purpleColor from '@material-ui/core/colors/purple';
import MultiStepForm from './components/MultiStepForm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purpleColor[500],
    },
  },
});

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: 600,
    margin: theme.spacing(4, 'auto'),
    padding: theme.spacing(4),
  },
}));

export default (): JSX.Element => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.form} elevation={2}>
        <Typography variant="h4" align="center"> Checkout </Typography>
        <MultiStepForm />
      </Paper>
    </ThemeProvider>
  );
};
