import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Modal, Loader } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../data/firebase';
import { Input } from '../../components';
import { loginVal } from './validation';

export default function Login() {
  const navigate = useNavigate();
  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const [opened, setOpened] = useState(true);

  const login = ({ email, password }: authProp) => {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      // const e = error;
      console.log(error);
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
          navigate('/');
        }}
        title='Login'
        centered
        styles={{
          title: {
            fontWeight: 500,
            fontSize: '1.3rem',
          },
        }}>
        {/* className='bg-white dark:bg-[]' */}
        <div>
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
              <div className='pb-10 flex w-full justify-between text-sm italic child-hover:cursor-pointer child-hover:text-main child:transition-all duration-200'>
                <Link to='/auth/signup'>
                  <span>sign up</span>
                </Link>
                <Link to='/auth/forgot-password'>
                  <span> forgot password?</span>
                </Link>
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
        </div>
      </Modal>
    </div>
  );
}

