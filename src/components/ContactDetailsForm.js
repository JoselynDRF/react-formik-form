import React from 'react';
import { ErrorMessage, Field } from 'formik';

export default () => (
  <>
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
  </>
);
