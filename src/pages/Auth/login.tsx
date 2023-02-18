import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

import { Form, Formik } from 'formik';
import { Input } from '../../components';
import { useAuthCtx } from '../../context/AuthCtx';

export default function Login() {
  const { login, submitting } = useAuthCtx();
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Login'
        centered
        styles={{
          title: {
            fontWeight: 500,
            fontSize: '1.3rem',
          },
        }}
        className='bg-white dark:bg-[#5e7583]'>
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
              <div className='flex w-full justify-end'>
                <button
                  type='submit'
                  className='bg-pink text-white px-6 py-2 rounded-md border border-transparent hover:border-pink hover:bg-transparent hover:text-pink transition-all duration-200 '>
                  Go!
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
}

