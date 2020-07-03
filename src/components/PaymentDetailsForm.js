import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';

export default () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Field
        type="text"
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
        type="text"
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
        type="text"
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
        type="text"
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
      <Field
        type="checkbox"
        id="rememberCardDetails"
        name="rememberCardDetails"
        Label={{ label: 'Remember credit card details for next time' }}
        component={CheckboxWithLabel}
        disabled={false}
      />
    </Grid>
  </Grid>
);
