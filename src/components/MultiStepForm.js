/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import DeliveryAddressForm from './DeliveryAddressForm';
import ContactDetailsForm from './ContactDetailsForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import OrderSummary from './OrderSummary';

const FormStepper = ({ children, initialValues, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = React.Children.toArray(children);
  const currentStep = steps[activeStep];
  const [snapshot, setSnapshot] = useState(initialValues);

  const isLastStep = () => activeStep === steps.length - 1;

  const handleNext = (values) => {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (values) => {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={currentStep.props.validationSchema}
      onSubmit={(values, bag) => (isLastStep() ? onSubmit(values, bag) : handleNext(values))}
    >
      {(formik) => (
        <Form>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(({ props }) => (
              <Step key={props.label}>
                <StepLabel>{props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentStep}

          <Button onClick={() => handleBack(formik.values)} disabled={activeStep === 0}>
            Back
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {isLastStep() ? 'Finish' : 'Next'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

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
