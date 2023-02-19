import React, { useState } from 'react';
import { useField } from 'formik';
import { InfoCircle } from 'iconsax-react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import { useThemeCtx } from '../context/themeCtx';

const Input = (props: TextInputInterface) => {
  const [field, meta] = useField(props);
  const { theme } = useThemeCtx();
  const [type, setType] = useState(props.type);
  const togglePasswordVisibility = () =>
    type === 'password' ? setType('text') : setType('password');
  // text-[#54565b]
  return (
    <div className={'relative mb-7 w-full ' + props.boxClass}>
      {props.label && (
        <label
          htmlFor={props.name || props.id}
          className='block mb-5 text-sm tracking-wide   capitalize'>
          {props.label}
          {props.required && <span className='text-red-400'>*</span>}
        </label>
      )}
      <div className='relative'>
        <input
          type={type}
          id={props.id}
          className={
            'block w-full py-2 border text-[#1d1d1d] bg-gray-50  text-base rounded-lg px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-pink appearance-none ' +
            props.class
          }
          placeholder={props.placeholder}
          {...field}
          disabled={props.disabled}
        />
        {props.type === 'password' && (
          <AiOutlineEyeInvisible
            size={18}
            className='cursor-pointer text-2xl text-gray-400 absolute right-3 top-[50%] translate-y-[-50%] active:drop-shadow-md'
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      {meta.error && meta.touched && (
        <div
          className={
            'flex items-center text-xs  space-x-1 pt-1 ' +
            (theme === 'light' ? 'text-[#d12c14]' : 'text-[#ff8164]')
          }>
          <span>
            <InfoCircle
              size='12'
              // color={theme === 'light' ? '#d12c14' : '#ff6242'}
              variant='Outline'
            />
          </span>
          <span>{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;

