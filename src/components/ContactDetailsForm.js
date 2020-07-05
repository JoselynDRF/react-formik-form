import React from 'react';
import {
  FormControl, FormControlLabel, FormLabel, Radio,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { CheckboxWithLabel, RadioGroup, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const ContactDetailsForm = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Field
        type="text"
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
        type="email"
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
        <Field row component={RadioGroup} name="arrivingType">
          <FormControlLabel value="standard" control={<Radio color="primary" />} label="Standard shipping" />
          <FormControlLabel value="express" control={<Radio color="primary" />} label="Express shipping" />
        </Field>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Also want product updates with our newsletter? </FormLabel>
        <Field
          type="checkbox"
          id="allowNewsletter"
          name="allowNewsletter"
          Label={{ label: 'I want to keep me informed of products and services relevant to me' }}
          component={CheckboxWithLabel}
          disabled={false}
        />
      </FormControl>
    </Grid>
  </Grid>
);

ContactDetailsForm.title = 'Contact Details';

ContactDetailsForm.initialValues = {
  phoneNumber: '',
  email: '',
  arrivingType: 'standard',
  allowNewsletter: false,
};

ContactDetailsForm.validationSchema = Yup.object({
  phoneNumber: Yup.string().required('required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('required'),
});

export default ContactDetailsForm;
