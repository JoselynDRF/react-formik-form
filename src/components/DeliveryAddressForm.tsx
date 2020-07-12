import React from 'react';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { CheckboxWithLabel, Select, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const DeliveryAddressForm = (): JSX.Element => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Field
        type="text"
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
        type="text"
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
        type="text"
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
        type="text"
        id="additionalInfo"
        name="additionalInfo"
        label="Additional Information"
        component={TextField}
        disabled={false}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <FormControl required fullWidth>
        <InputLabel htmlFor="country"> Country </InputLabel>
        <Field
          id="country"
          name="country"
          component={Select}
        >
          <MenuItem value="US"> USA </MenuItem>
          <MenuItem value="PT"> Portugal </MenuItem>
          <MenuItem value="ES"> España </MenuItem>
        </Field>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        type="text"
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
        type="text"
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
        type="text"
        id="postalCode"
        name="postalCode"
        label="Zip / Postal code"
        component={TextField}
        disabled={false}
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        type="checkbox"
        id="saveAddress"
        name="saveAddress"
        Label={{ label: 'Use this address for payment details' }}
        component={CheckboxWithLabel}
        disabled={false}
      />
    </Grid>
  </Grid>
);

DeliveryAddressForm.title = 'Delivery Address';

DeliveryAddressForm.initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  additionalInfo: '',
  country: '',
  city: '',
  state: '',
  postalCode: '',
  saveAddress: false,
};

DeliveryAddressForm.validationSchema = Yup.object({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  address: Yup.string().required('required'),
  country: Yup.string().required('required'),
  city: Yup.string().required('required'),
  postalCode: Yup.string().required('required'),
});

export default DeliveryAddressForm;
