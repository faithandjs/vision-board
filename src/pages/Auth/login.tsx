import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../components';
import { useAuthCtx } from '../../context/AuthCtx';

export default function Login() {
  const { login, submitting } = useAuthCtx();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          login(values);
        }}>
        <Form>
          <Input
            label='Email'
            name='email'
            type='email'
            placeholder='Enter your email address'
            id='email'
            required
            disabled={submitting}
          />
          <Input
            label='Password'
            name='password'
            id='password'
            type='password'
            required
            placeholder='Enter your password'
            disabled={submitting}
          />
          <button type='submit'>go</button>
        </Form>
      </Formik>
    </div>
  );
}

