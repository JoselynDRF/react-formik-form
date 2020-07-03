/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core';

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

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={currentStep.props.validationSchema}
      onSubmit={(values, bag) => (isLastStep() ? onSubmit(values, bag) : handleNext(values))}
    >
      {(formik) => (
        <Form>
          <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
            {steps.map(({ props }) => (
              <Step key={props.label}>
                <StepLabel>{props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentStep}

          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={() => handleBack(formik.values)} className={classes.button}>
                Back
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {isLastStep() ? 'Finish' : 'Next'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
