/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';

export default ({ children, initialValues, onSubmit }) => {
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