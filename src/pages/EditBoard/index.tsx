import React, { useState } from 'react';
import { Loader } from '@mantine/core';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { FormInput, Menu } from '../../components';
import { Add, Minus } from 'iconsax-react';
import { useAuthCtx } from '../../context/AuthCtx';
import { database } from '../../data/firebase';

export default function Edit() {
  const { board } = useAuthCtx();
  const navigate = useNavigate();
  const { currentUser } = useAuthCtx();
  const [submitting, setIsSubmitting] = useState(false);

  return (
    <div className='p-4 pt-5 '>
      <Formik
        initialValues={board}
        // validationSchema={loginVal}
        onSubmit={(values) => {
          console.log(values);
          // set(ref(database, 'users/' + currentUser?.uid), values)
          //   .then((res) => console.log('res', res))
          //   .catch((e) => console.log(e));
        }}>
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <div className='flex items-center'>
                <div
                  className={
                    'z-20 relative  transition-[transform] duration-700 py-4  flex w-full flex-col items-center text-center heads'
                  }>
                  <FormInput
                    name='title'
                    type='text'
                    label='Title'
                    placeholder=' '
                    id='title'
                    boxClass='w-72 '
                  />
                  <FormInput
                    name='theme'
                    type='text'
                    label='theme'
                    placeholder=' '
                    id='theme'
                    boxClass='w-80'
                  />
                </div>
                <Menu />
              </div>
              <div className='overflow-y-auto  flex justify-evenly child:shrink-0 flex-wrap  '>
                {values.data.map((item, key) => {
                  const base = `data[${key}]`;
                  const img = values.data[key].image.src;
                  // console.log(item.p);
                  return (
                    <div className='edit-card m-5 lg:m-7 border-gray-500 border  sm:w-[300px] sm:h-[500px]  md:w-[400px] md:h-[600px]  rounded-lg  overflow-hidden'>
                      <div className='relative w-full flex justify-end py-2'>
                        <FormInput
                          name={`${base}.title`}
                          type='text'
                          placeholder='title'
                          id={'title' + key}
                          // label='title'
                          required
                          inline
                          boxClass='!m-0'
                          class=' text-xl text-center  '
                          // style='dashes'
                        />

                        {/* <div className='relative child:absolute w-8 h-full flex items-center mr-3 child:transition-all child:duration-200 text-whte hover:cursor-pointer'>
                          <Add size='32' />
                          <Minus size='32' />
                        </div> */}
                      </div>
                      <div className='h-full pb-[70px] overflow-y-auto'>
                        {/* IMAGE */}
                        <div className=' flex w-full py-4'>
                          <div className='w-24 h-24 shrink-0'>
                            <img
                              src={values.data[key].image.src}
                              alt=''
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <div className='child:m-0 w-full'>
                            <FormInput
                              name={`data[${key}].image.src`}
                              type='text'
                              placeholder='image source'
                              id={'image.src' + key}
                              required
                              // label='Image source'
                              // boxClass='m-0'
                              inline
                            />
                            <FormInput
                              name={`data[${key}].image.alt`}
                              type='text'
                              placeholder='image alt'
                              id={'image.alt' + key}
                              required
                              // label='ALT text'
                              // boxClass='m-0'
                              inline
                            />
                          </div>
                        </div>
                        {/* <div className=''> */}
                        {/* PARAGRAPH */}
                        <div className='py-6'>
                          <h4 className='text-center font-extrabold pb-6 uppercase'>
                            Paragraph
                          </h4>
                          <FormInput
                            name={`${base}.p`}
                            type='text'
                            placeholder=' '
                            id={'paragraph of card ' + key + 1}
                            label='Text'
                            boxClass='pt-5'
                            inline
                          />
                        </div>
                        {/* LIST */}
                        <div className='py-6 '>
                          <h4 className='text-center font-extrabold pb-6'>
                            LIST
                          </h4>
                          <div>
                            <FormInput
                              name={`${base}.list.title`}
                              type='text'
                              label='Title'
                              placeholder=' '
                              id={`title of list of card ${key + 1}`}
                              // required
                            />

                            <div>
                              <div className='text-center'>
                                <button
                                  className='font-light bg-main rounded-lg px-4 py-2 my-4'
                                  type='button'>
                                  add to list
                                </button>
                              </div>
                              {item.list?.list.map((item, id) => {
                                return (
                                  <FormInput
                                    name={`${base}.list.list[${id}]`}
                                    type='text'
                                    placeholder='list item'
                                    id={`item ${id + 1} of list of card ${
                                      key + 1
                                    }`}
                                    num={id + 1}
                                    // required
                                  />
                                );
                              })}
                              {/* <FormInput
                                name={`${base}.list.list[${
                                  item.list?.list.length
                                    ? item.list?.list.length
                                    : 0
                                }]`}
                                type='text'
                                placeholder='list item'
                                id={`item ${
                                  item.list?.list.length
                                    ? item.list?.list.length + 1
                                    : 1
                                } of list of card ${key + 1}`}
                                // required
                              /> */}
                            </div>
                          </div>
                        </div>
                        {/* CHECK */}
                        <div className='py-6 '>
                          <h4 className='text-center font-extrabold pb-6'>
                            CHECKBOX
                          </h4>
                          <div>
                            <FormInput
                              name={`${base}.check.title`}
                              type='text'
                              label='Title'
                              placeholder=' '
                              id={`title of checkbox list of card ${key + 1}`}
                              // required
                            />

                            <div>
                              <div className='text-center'>
                                <button
                                  className='font-light bg-main rounded-lg px-4 py-2 my-4'
                                  type='button'>
                                  add to list
                                </button>
                              </div>
                              {item.check?.list.map((item, id) => {
                                return (
                                  <FormInput
                                    name={`${base}.check.list[${id}].value`}
                                    type='text'
                                    placeholder='checkbox item'
                                    id={`item ${
                                      id + 1
                                    } of checkbox list of card ${key + 1}`}
                                    num={id + 1}
                                    // required
                                  />
                                  // <label htmlFor=''>
                                  //   <div className='relative w-full'>
                                  //     <input
                                  //       className={
                                  //         'block w-full py-2 border text-[#1d1d1d] bg-gray-50  text-base rounded-lg px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-pink appearance-none '
                                  //       }
                                  //       name={`${base}.check.list[${id}]`}
                                  //       type='text'
                                  //       placeholder='list item'
                                  //       id={`item ${
                                  //         id + 1
                                  //       } of checkbox list of card ${key + 1}`}
                                  //       // value={item.value}
                                  //       // onChange={(e) => {
                                  //       //   const obj = {
                                  //       //     ...values.data[key].check?.list,
                                  //       //     [e.target.value.trim()]: false,
                                  //       //   };
                                  //       //   console.log(obj);
                                  //       //   setFieldValue(
                                  //       //     `${base}.check.list`,
                                  //       //     obj
                                  //       //   );
                                  //       // }}
                                  //       // required
                                  //     />
                                  //   </div>
                                  // </label>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
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
    // </Modal>
  );
}

