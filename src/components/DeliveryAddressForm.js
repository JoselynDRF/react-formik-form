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
        id="firstName"
        name="firstName"
        label="First name"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="lastName"
        name="lastName"
        label="Last name"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        id="address"
        name="address"
        label="Address"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        id="additionalInfo"
        name="additionalInfo"
        label="Additional Information"
        component={TextField}
        disabled={false}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="city"
        name="city"
        label="City"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="state"
        name="state"
        label="State/Province/Region"
        component={TextField}
        disabled={false}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="postalCode"
        name="postalCode"
        label="Zip / Postal code"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="country"
        name="country"
        label="Country"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
        label="Use this address for payment details"
      />
    </Grid>
  </Grid>
);
