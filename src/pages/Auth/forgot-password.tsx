import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Modal, Loader } from '@mantine/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../../data/firebase';
import { Input } from '../../components';
import { useAuthCtx } from '../../context/AuthCtx';
import { loginVal } from './validation';
import { useNavigate } from 'react-router-dom';

export default function ForgortPwd() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [submitting, setIsSubmitting] = useState(false);
  const [opened, setOpened] = useState(true);
  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
        title='Forgot Password'
        centered
        styles={{
          title: {
            fontWeight: 500,
            fontSize: '1.3rem',
          },
        }}>
        {/* <div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginVal}
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
              />
              <Input
                label='Password'
                name='password'
                id='password'
                type='password'
                required
                placeholder='Enter your password'
                boxClass='mb-4'
              />
              <div className='pb-5 flex w-full justify-between text-sm italic child-hover:cursor-pointer child-hover:text-main child:transition-all duration-200'>
                <button onClick={() => navigate('auth/signup')}>sign up</button>
                <button>forgot password?</button>
              </div>
              <div className='flex w-full justify-end'>
                <button
                  type='submit'
                  disabled={submitting}
                  className={
                    'bg-main text-white px-6 py-2 rounded-md border border-transparent hover:border-main hover:bg-transparent hover:text-main transition-all duration-200 ' +
                    (submitting
                      ? 'hover:cursor-not-allowed'
                      : 'hover:cursor-pointer')
                  }>
                  {submitting ? <Loader /> : '  Go!'}
                </button>
              </div>
            </Form>
          </Formik>
        </div> */}
      </Modal>
    </div>
  );
}

