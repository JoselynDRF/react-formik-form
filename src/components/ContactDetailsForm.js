import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox,
} from '@material-ui/core';

export default () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Field
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        id="email"
        name="email"
        label="Email"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Arriving type </FormLabel>
        <RadioGroup row aria-label="Arriving type" name="arrivingType" defaultValue="standard">
          <FormControlLabel value="standard" control={<Radio color="primary" />} label="Standard shipping" />
          <FormControlLabel value="express" control={<Radio color="primary" />} label="Express shipping" />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Also want product updates with our newsletter? </FormLabel>
        <FormControlLabel
          value="yes"
          control={<Checkbox color="primary" />}
          label="I want to keep me informed of products and services relevant to me"
        />
      </FormControl>
    </Grid>
  </Grid>
);
