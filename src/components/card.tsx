import React, { useState } from 'react';
import { TbCircleCheck, TbCircleDashed } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';

import { useToggleCtx } from '../context/ToggleCtx';
import { test } from '../data';

export default function Card({
  image,
  details,
  title,
  id,
  active,
  setActive,
  setFieldValue,
}: cardProps) {
  const { states } = useToggleCtx();
  const { flip_all, vision_board } = states;

  const getChild = (props: any[]) => {
    const object: { [key: string]: any[] } = { [props[0]]: props.slice(1) };
    const key = Object.keys(object)[0];
    const dets = object[key][0];

    const str = key.split(/\d+/)[0];
    switch (str) {
      case 'p':
        return <p className='pb-3'>{dets}</p>;
      case 'list':
        return (
          <div className='pb-3'>
            {dets.title && <p className='font-bold text-lg'>{dets.title}</p>}
            <ul className='list-[circle] '>
              {dets.list.map((item: string, key: number) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>
          </div>
        );
      case 'check':
        return (
          <div className='pb-3'>
            {dets.title && <p className='font-bold text-lg'>{dets.title}</p>}
            <ul className='list-none !ml-0'>
              {dets.list.map(
                (
                  item: {
                    value: string;
                    checked: boolean;
                  },
                  index: number
                ) => {
                  const { checked, value } = item;
                  const name = `data[${id}].details.${key}.list[${index}].checked`;
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
                          name={name}
                          id={value}
                          value={value}
                          onChange={(e) => {
                            const { checked } = e.target;
                            setFieldValue(name, checked);
                          }}
                          checked={checked}
                          className='absolute inset-0 opacity-0 hover:cursor-pointer'
                        />{' '}
                      </span>
                      <label htmlFor={value} className='capitalize pl-2'>
                        {value}
                      </label>
                    </li>
                  );
                }
              )}
            </ul>{' '}
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      className={
        'flip-card m-5 lg:m-7 hover:cursor-pointer ' +
        ((active === id || flip_all) && !vision_board ? ' active ' : ' ')
      }>
      <div className='child relative'>
        <div
          className='front relative  md:w-[300px] md:h-[500px] sm:w-[200px] sm:h-[333px] w-[300px] h-[500px]  rounded-lg  overflow-hidden flex items-center justify-center '
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
              style={{ height: 'calc(100% - 100px)' }}>
              <div className=' h-full font-alexander text-base r'>
                {Object.entries(details).map((item, key) => {
                  return <div key={key}>{getChild(item)}</div>;
                })}
              </div>
            </div>
          </div>
          {/* TURN LOWER PART INTO A RED BAR THAT IS A CLICKABLE BUTTON TE HE HE */}
          <IoClose
            size={20}
            className=' absolute bottom-2 right-3 block  hover:scale-125 transition-[transform] duration-200  z-[1] text-[#d0312d] '
            onClick={() => {
              !flip_all && setActive((p) => (p === id ? -1 : id));
            }}
          />{' '}
        </div>
      </div>
    </div>
  );
}

