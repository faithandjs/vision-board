import React from 'react';

interface CheckboxProp {
  label: string;
  name?: string;
}

export default function Checkbox({
  label,
  name = label.replaceAll(' ', '_'),
}: CheckboxProp) {
  return (
    <label htmlFor={name} className='block py-1'>
      <span>
        <input type='checkbox' name={name} id={name} className='mr-2' />
      </span>
      {label}
    </label>
  );
}

