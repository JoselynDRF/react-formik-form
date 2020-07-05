import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const PaymentDetailsForm = () => (
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

PaymentDetailsForm.title = 'Payment Details';

PaymentDetailsForm.initialValues = {
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cardDigits: '',
  rememberCardDetails: false,
};

PaymentDetailsForm.validationSchema = Yup.object({
  cardName: Yup.string().required('required'),
  cardNumber: Yup.string().required('required'),
  expiryDate: Yup.string().required('required'),
  cardDigits: Yup.string().required('required'),
});

export default PaymentDetailsForm;
