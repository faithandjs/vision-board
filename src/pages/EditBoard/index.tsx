import React, { useState } from 'react';
import { Loader, Modal } from '@mantine/core';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components';
import { Add, Minus } from 'iconsax-react';
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
        list1: { list: ['abc1'], title: '' },
        p2: '',
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
        modal: {
          width: '90vh',
          height: '85vh',
        },
      }}>
      <div className='p-4 pt-5'>
        <Formik
          initialValues={initialBoard}
          // validationSchema={loginVal}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ values, setFieldValue }) => {
            const getFields = (props: any[], arrayId: number) => {
              const object: { [key: string]: any[] } = {
                [props[0]]: props.slice(1),
              };
              const key = Object.keys(object)[0];
              const str = key.split(/\d+/)[0];
              const base = `data[${arrayId}].details.`;
              switch (str) {
                case 'p':
                  return (
                    <div className='flex w-full items-center mb-7'>
                      <label
                        htmlFor={arrayId + '_' + key}
                        className='whitespace-nowrap pr-2'>
                        paragraph {key.charAt(key.length - 1)}
                      </label>
                      <textarea
                        onChange={(e) =>
                          setFieldValue(`${base}${key}`, e.target.value)
                        }
                        name={`${base}${key}`}
                        id={arrayId + '_' + key}
                        required
                        className={
                          'block resize-none w-full py-2 border text-[#1d1d1d] bg-gray-50  text-base rounded-lg px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-pink appearance-none '
                        }
                      />
                    </div>
                  );
                case 'list':
                  return (
                    <div className='flex items-start'>
                      <h4>List</h4>
                      <div>
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
                        </ul>{' '}
                      </div>
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
              <Form>
                <div className='overflow-y-auto h-[65vh]'>
                  <Input
                    name='theme'
                    type='text'
                    placeholder='theme'
                    id='theme'
                    label='theme'
                    required
                    inline
                  />

                  {values.data.map((item, key) => {
                    return (
                      <div className='bg-gray-00 '>
                        <div className='relative w-full h-12 bg-gray-s00 flex justify-end'>
                          <input
                            name={`data[${key}].title`}
                            type='text'
                            placeholder='title'
                            id={'title' + key}
                            className='absolute inset-0 bg-transparent  px-3  text-base outline-none  mr-10'
                            required
                            onChange={(e) =>
                              setFieldValue(
                                `data[${key}].title`,
                                e.target.value
                              )
                            }
                          />
                          <div className='relative child:absolute w-8 h-full flex items-center mr-3 child:transition-all child:duration-200 text-whte hover:cursor-pointer'>
                            <Add size='32' />
                            <Minus size='32' />
                          </div>
                        </div>

                        <div className='flex justify-between px-2 pt-2 '>
                          <Input
                            name={`data[${key}].image.src`}
                            type='text'
                            // placeholder='image source'
                            id={'image.src' + key}
                            required
                            label='Image source'
                            boxClass='mr-2'
                            inline
                          />

                          <Input
                            name={`data[${key}].image.alt`}
                            type='text'
                            // placeholder='image alt'
                            id={'image.alt' + key}
                            required
                            label='ALT text'
                            boxClass='ml-2'
                            inline
                          />
                        </div>
                        <div className='px-2'>
                          {Object.entries(item.details).map((item, index) => {
                            return (
                              <div key={index}>{getFields(item, key)}</div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
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
                    {submitting ? <Loader /> : 'Go!'}
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

