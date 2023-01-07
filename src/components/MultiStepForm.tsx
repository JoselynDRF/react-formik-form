import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import {
  Form, Formik, FormikProps, FormikValues,
} from 'formik';
import ContactDetailsForm from './ContactDetailsForm';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import PaymentDetailsForm from './PaymentDetailsForm';
import SuccessDialog from './SuccessDialog';

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default (): JSX.Element => {
  const classes = useStyles();
  const steps = [DeliveryAddressForm, ContactDetailsForm, PaymentDetailsForm, OrderSummary];
  const [activeStep, setActiveStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const CurrentStep = steps[activeStep];
  const { validationSchema } = CurrentStep;

  const initialValues = steps.reduce((values, { initialValues: initValues }) => ({
    ...values,
    ...initValues,
  }), {});

  const isLastStep = () => activeStep === steps.length - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitForm = async (values: FormikValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values); // eslint-disable-line
    setShowSuccess(true);
  };

  const handleSubmit = async (values: FormikValues) => (isLastStep()
    ? submitForm(values)
    : handleNext());

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }: FormikProps<FormikValues>) => (
        <>
          {showSuccess && <SuccessDialog values={values} />}

          <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
            {steps.map(({ title }) => (
              <Step key={title}>
                <StepLabel>{title}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Form>
            <CurrentStep values={values} />

            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}> Back </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {isLastStep() ? 'Place Order' : 'Next'}
              </Button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};
