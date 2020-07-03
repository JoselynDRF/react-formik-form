/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

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

const FormStep = ({ children }) => children;

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
    <FormStep
      label="Delivery Address"
      validationSchema={Yup.object({
        // firstName: Yup.string().required("required"),
        // lastName: Yup.string().required("required")
      })}
    >
      <div>
        <label htmlFor="firstName"> First Name </label>
        <Field
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <ErrorMessage name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName"> Last Name </label>
        <Field
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <ErrorMessage name="lastName" />
      </div>
      <div> Address </div>
      <div> Additional Information </div>
      <div> City </div>
      <div> State/Province/Region </div>
      <div> Zip / Postal code </div>
      <div> Country </div>
      <div> Arriving type: Standard - Express </div>
      <div> Use this address for payment details </div>
    </FormStep>
    <FormStep
      label="Contact Details"
      validationSchema={Yup.object({
        // email: Yup.string()
        //   .email("Invalid email address")
        //   .required("required")
      })}
    >
      <div> Phone Number </div>
      <div>
        <label htmlFor="email"> Email </label>
        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
      </div>
    </FormStep>
    <FormStep
      label="Payment Details"
    >
      <div> Name on card </div>
      <div> Card number </div>
      <div> Expiry date </div>
      <div> CVV - Last three digits </div>
      <div> Remember credit card details for next time </div>
    </FormStep>
    <FormStep label="Order Summary">
      <span> Order Summary </span>
    </FormStep>
  </FormStepper>
);
