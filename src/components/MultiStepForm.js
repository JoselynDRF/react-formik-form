import React from 'react';
import * as Yup from 'yup';
import ContactDetailsForm from './ContactDetailsForm';
import DeliveryAddressForm from './DeliveryAddressForm';
import FormStepper from './FormStepper';
import OrderSummary from './OrderSummary';
import PaymentDetailsForm from './PaymentDetailsForm';

export default () => (
  <FormStepper
    initialValues={{
      firstName: '',
      lastName: '',
      address: '',
      additionalInfo: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      useAddressForPayment: false,
      arrivingType: '',
      phoneNumber: '',
      email: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cardDigits: '',
      rememberCardDetails: false,
    }}
    onSubmit={(values) => {
      const timeOut = setTimeout(() => {
        console.log(values);
        clearTimeout(timeOut);
      }, 1000);
    }}
  >
    <DeliveryAddressForm
      label="Delivery Address"
      validationSchema={Yup.object({
        firstName: Yup.string().required('required'),
        lastName: Yup.string().required('required'),
      })}
    />

    <ContactDetailsForm
      label="Contact Details"
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('required'),
      })}
    />

    <PaymentDetailsForm label="Payment Details" />
    <OrderSummary label="Order Summary" />
  </FormStepper>
);
