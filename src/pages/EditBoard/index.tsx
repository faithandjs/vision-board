import React, { useState } from 'react';
import { Loader, Modal } from '@mantine/core';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components';
export const initialBoard = {
  theme: '',
  data: [
    {
      title: '',
      image: {
        src: '',
        alt: '',
      },
      details: {
        p1: '',
        list1: { list: [], title: '' },
        check1: {
          list: [
            {
              value: '',
              checked: false,
            },
          ],
          title: '',
        },
      },
    },
  ],
};
export default function Edit() {
  const navigate = useNavigate();
  const [submitting, setIsSubmitting] = useState(false);

  const [opened, setOpened] = useState(true);

  const getFields = (props: any[], arrayId: number) => {
    const object: { [key: string]: any[] } = { [props[0]]: props.slice(1) };
    const key = Object.keys(object)[0];
    // const dets = object[key][0];
    console.log(arrayId);
    const str = key.split(/\d+/)[0];
    const base = `data[${arrayId}].details.`;
    switch (str) {
      case 'p':
        return (
          <Input
            name={`${base}${key}`}
            type='text'
            placeholder='paragraph'
            id={arrayId + '_' + key}
            required
          />
        );
      case 'list':
        return (
          <div className=''>
            <Input
              name={`${base}${key}.title`}
              type='text'
              placeholder='list title'
              id={arrayId + '_' + key}
              required
            />
            <ul>
              <Input
                name={`${base}${key}.list[0]`}
                type='text'
                placeholder='list item'
                id={arrayId + '_' + key}
                required
              />
            </ul>
          </div>
        );
      case 'check':
        return (
          <div className=''>
            <Input
              name={`${base}${key}.title`}
              type='text'
              placeholder='checkbox list title'
              id={arrayId + '_' + key}
              required
            />
            <ul>
              <Input
                name={`${base}${key}.list[0].value`}
                type='text'
                placeholder='checkbox item'
                id={arrayId + '_' + key}
                required
              />
            </ul>
          </div>
        );

      default:
        return <></>;
    }
  };
  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
        navigate('/');
      }}
      title='Edit Board'
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
          initialValues={initialBoard}
          // validationSchema={loginVal}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ values }) => {
            console.log(values);
            return (
              <Form>
                <Input
                  name='theme'
                  type='text'
                  placeholder='theme'
                  id='theme'
                  required
                />
                {values.data.map((item, key) => {
                  return (
                    <div>
                      <Input
                        name={`data[${key}].title`}
                        type='text'
                        placeholder='title'
                        id={'title' + key}
                        required
                      />
                      <div>
                        <Input
                          name={`data[${key}].image.src`}
                          type='text'
                          placeholder='image source'
                          id={'image.src' + key}
                          required
                        />
                        <Input
                          name={`data[${key}].image.alt`}
                          type='text'
                          placeholder='image alt'
                          id={'image.alt' + key}
                          required
                        />
                      </div>
                      <div>
                        {Object.entries(item.details).map((item, index) => {
                          return <div key={index}>{getFields(item, key)}</div>;
                        })}
                      </div>
                    </div>
                  );
                })}

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
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
}

