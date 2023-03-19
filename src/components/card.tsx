import React, { useEffect, useState } from 'react';
import { TbCircleCheck, TbCircleDashed } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { ref, update } from 'firebase/database';

import { useToggleCtx } from '../context/ToggleCtx';
import { database } from '../data/firebase';
import { useAuthCtx } from '../context/AuthCtx';

export default function Card({
  image,
  check,
  list,
  p,
  title,
  id,
  active,
  setActive,
  setFieldValue,
  values,
}: cardProps) {
  const { states } = useToggleCtx();
  const { currentUser } = useAuthCtx();
  const { flip_all, vision_board } = states;

  return (
    <div
      className={
        'flip-card m-5 lg:m-7 h-max ' +
        ((active === id || flip_all) && !vision_board ? ' active ' : ' ')
      }>
      <div className='child relative'>
        <div
          className='front  hover:cursor-pointer relative  md:w-[300px] md:h-[500px] sm:w-[200px] sm:h-[333px] w-[300px] h-[500px]  rounded-lg  overflow-hidden flex items-center justify-center '
          onClick={() => {
            !flip_all && setActive((p) => (p === id ? -1 : id));
          }}>
          <img
            src={image.src}
            alt={image.alt}
            className='absolute inset-0 w-full h-full object-cover object-bottom brightness-[.65] z-10 rounded-lg'
          />
          <div className='backdrop-blur-[4px] bg-lightWhite w-[65%] max-h-[55%] text-[#ffffff] p-3 z-20'>
            <h3 className=' text-base  font-playfair capitalize'>{title}</h3>
          </div>
        </div>

        <div className='back w-full h-full shadow-md absolute inset-0 z-[-1] '>
          <div className='relative h-full rounded-lg '>
            <div className='border-b border-gray-400 backdrop-blur-2xl font-alexander '>
              <h3 className='font-medium text-xl  py-4 px-2 text-center font-playfair uppercase'>
                {title}
              </h3>
            </div>
            <div
              className='py-4 px-4 overflow-y-auto  h-full details'
              style={{ height: 'calc(100% - 90px)' }}>
              <div className=' h-full font-alexander text-base'>
                {p ? <p className='pb-3'>{p}</p> : <></>}
                {list ? (
                  <div className='pb-3'>
                    {list.title && (
                      <p className='font-bold text-lg'>{list.title}</p>
                    )}
                    <ul className='list-[circle] '>
                      {list.list.map((item: string, key: number) => {
                        return <li key={key}>{item}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                {check ? (
                  <div className='pb-3'>
                    {check.title && (
                      <p className='font-bold text-lg'>{check.title}</p>
                    )}
                    <ul className='list-none !ml-0'>
                      {check.list.map((item, index) => {
                        const { checked, value } = item;
                        const name = `data[${id}].check.list[${index}]`;
                        return (
                          <li className='flex items-center' key={index}>
                            <span className={'relative block w-4 h-4  '}>
                              <span className='child:absolute block w-4 h-4'>
                                <TbCircleCheck
                                  color=' #00A300'
                                  className={`transition-all duration-700  ${
                                    checked ? 'opacity-100' : 'opacity-0 '
                                  }`}
                                />
                                <TbCircleDashed
                                  className={`transition-all duration-700  ${
                                    checked ? 'opacity-0 ' : 'opacity-100'
                                  }`}
                                />
                              </span>
                              <input
                                type='checkbox'
                                name={name + '.value'}
                                id={value}
                                value={value}
                                onChange={(e) => {
                                  const { checked } = e.target;
                                  setFieldValue(`${name}.checked`, checked);
                                  if (!currentUser) return;
                                  const updates: any = {};
                                  updates[
                                    'users/' +
                                      currentUser?.uid +
                                      '/data/' +
                                      id +
                                      '/check/list/' +
                                      index +
                                      '/checked'
                                  ] = checked;
                                  return update(ref(database), updates);
                                }}
                                checked={checked}
                                className='absolute inset-0 opacity-0 hover:cursor-pointer'
                              />
                            </span>
                            <label htmlFor={value} className='capitalize pl-2'>
                              {value}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <button
            type='submit'
            className={
              ' hover:cursor-pointer absolute left-0 right-0 bottom-0  h-8 flex justify-center items-center  z-[1] text-white transition-all duration-200 delay-200 ' +
              (flip_all ? 'bg-gray-400 ' : 'bg-[#d0312d]')
            }
            onClick={() => {
              !flip_all && setActive((p) => (p === id ? -1 : id));
            }}>
            <IoClose
              size={24}
              // className='hover:scale-125 transition-[transform] duration-20'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

