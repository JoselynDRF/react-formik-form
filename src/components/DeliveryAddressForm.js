/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ErrorMessage, Field } from 'formik';

export default () => (
  <>
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
  </>
);
