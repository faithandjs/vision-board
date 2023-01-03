import React, { useRef } from 'react';
import { useToggleCtx } from '../context/ToggleCtx';

export default function Toggle({
  position,
  label,
  name = label.replaceAll(' ', '_'),
  checked,
  className = '',
  disabled = false,
}: toggle) {
  const { setting } = useToggleCtx();
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div
      className={' flex items-center transition-all duration-700 ' + className}>
      <div className='toggle' onClick={() => inputEl.current?.click()}>
        <input
          type='checkbox'
          id={name}
          ref={inputEl}
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            const { checked } = e.target;
            setting({ [name]: checked });
          }}
        />
        <label htmlFor='toggle' className='toggleWrapper'>
          <div className='toggle'></div>
        </label>
      </div>
    </div>
  );
}

