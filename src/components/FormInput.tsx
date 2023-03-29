import React, { useState } from 'react';
import { useField } from 'formik';
import { InfoCircle } from 'iconsax-react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import { useThemeCtx } from '../context/themeCtx';

export default function FormInput(props: TextInputInterface) {
  const [field, meta] = useField(props);
  const { theme } = useThemeCtx();
  return (
    <div className={'relative mb-7 w-full form-Input ' + props.boxClass}>
      <div className='relative w-full '>
        {/* <span> */}
        {props.num && (
          <span className='pr-2 absolute bottom-[.56rem]'>{props.num}.</span>
        )}
        <input
          type={props.type}
          id={props.id}
          className={
            'block w-full py-2 text-base px-3  outline-none border-b border-dashed focus:border-main appearance-none bg-transparent ' +
            props.class +
            (props.num ? ' pl-4' : '')
          }
          placeholder={props.placeholder}
          {...field}
          disabled={props.disabled}
        />
        {/* </span> */}

        {props.label ? (
          <label
            htmlFor={props.id}
            className=' absolute bottom-[11px] w-full pl-3 text-start text-sm '>
            {props.label}
          </label>
        ) : (
          <></>
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
}

