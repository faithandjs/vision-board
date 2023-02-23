import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Modal, Loader } from '@mantine/core';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../data/firebase';
import { Input } from '../../components';
import { signupVal } from './validation';

export default function Signup() {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [submitting, setIsSubmitting] = useState(false);
  const [opened, setOpened] = useState(true);

  const signup = ({ email, password }: authProp) => {
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
          navigate('/');
        }}
        title='Sign up'
        centered
        styles={{
          title: {
            fontWeight: 500,
            fontSize: '1.3rem',
          },
        }}>
        <div>
          <div>
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirm_password: '',
              }}
              validationSchema={signupVal}
              onSubmit={(values) => {
                signup(values);
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
                />
                <Input
                  label='Confirm Password'
                  name='confirm_password'
                  id='confirm_password'
                  type='password'
                  required
                  boxClass='mb-4'
                  placeholder='Confirm password'
                />
                <div className='pb-10 flex w-full justify-between text-sm italic child-hover:cursor-pointer child-hover:text-main child:transition-all duration-200'>
                  <Link to='/auth/login'>
                    <span>login</span>
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
                    {submitting ? <Loader /> : 'Sign up!'}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          {/* <div>
            sign up with
            <button
              className=''
              onClick={() => {
                // signInWithPopup(auth, googleProvider)
                //   .then((result) => {
                //     const credential =
                //       GoogleAuthProvider.credentialFromResult(result);
                //     const token = credential!.accessToken;
                //     const user = result.user;
                //     console.log(result);
                //   })
                //   .catch((error) => {
                //     console.log(error);
                //   });

                signInWithRedirect(auth, googleProvider);
              }}>
              google
            </button>
          </div> */}
        </div>
      </Modal>
    </>
  );
}

