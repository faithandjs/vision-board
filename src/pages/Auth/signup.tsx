import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Modal, Loader } from '@mantine/core';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../data/firebase';
import { Input } from '../../components';
import { signupVal } from './validation';
import { notif } from '../../utils/functions';

export default function Signup() {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [submitting, setIsSubmitting] = useState(false);
  const [opened, setOpened] = useState(true);

  const signup = ({ email, password, displayName }: authProp) => {
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName,
        })
          .then((res) => {
            console.log(res);
            notif('Successfully Signed up', 'success');
            navigate('/');
          })
          .catch((error) => {
            notif('Sign up unsuccessful ', 'error');
            console.log('name err', error);
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  const close = () => {
    setOpened(false);
    navigate('/');
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
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
                displayName: '',
                email: '',
                password: '',
                confirm_password: '',
              }}
              validationSchema={signupVal}
              onSubmit={(values) => {
                signup(values);
                // close();
              }}>
              <Form>
                <Input
                  label='Name'
                  name='displayName'
                  type='text'
                  placeholder='Enter your name'
                  id='name'
                  required
                />
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
                      'bg-main h-9 w-28 text-white px-6 py-2 rounded-md border border-transparent   transition-all duration-200 ' +
                      (submitting
                        ? 'hover:cursor-not-allowed'
                        : 'hover:cursor-pointer hover:border-main hover:text-main hover:bg-transparent ')
                    }>
                    {submitting ? (
                      <Loader
                        color='dark'
                        variant='dots'
                        className='flex auto w-full'
                      />
                    ) : (
                      'Sign up!'
                    )}
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

