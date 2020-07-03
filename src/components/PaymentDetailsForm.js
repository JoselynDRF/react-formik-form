import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

export default () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Field
        id="cardName"
        name="cardName"
        label="Name on card"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="cardNumber"
        name="cardNumber"
        label="Card number"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="expiryDate"
        name="expiryDate"
        label="Expiry date"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="cardDigits"
        name="cardDigits"
        label="CVV - Last three digits"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="rememberCardDetails" value="yes" />}
        label="Remember credit card details for next time"
      />
    </Grid>
  </Grid>
);
