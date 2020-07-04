/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { Form, Formik } from 'formik';
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

export default ({ children, initialValues, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = React.Children.toArray(children);
  const currentStep = steps[activeStep];
  const [snapshot, setSnapshot] = useState(initialValues);
  const [showSuccess, setShowSuccess] = useState(false);
  const classes = useStyles();

  const isLastStep = () => activeStep === steps.length - 1;

  const handleNext = (values) => {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (values) => {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    if (isLastStep()) {
      await onSubmit(values);
      console.log(values);
      setShowSuccess(true);
    } else handleNext(values);
  };

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={currentStep.props.validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <>
          {showSuccess && <SuccessDialog values={snapshot} />}

          <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
            {steps.map(({ props }) => (
              <Step key={props.label}>
                <StepLabel>{props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Form>
            {currentStep}

            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={() => handleBack(values)} className={classes.button}>
                  Back
                </Button>
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
