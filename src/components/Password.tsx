import React, { useEffect, useState } from 'react';

export default function Password({
  modal,
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) {
  const [value, setValue] = useState('');

  const handleClick = (value: string) => {
    setModal(false);
    // setting(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {modal ? (
        <div className='absolute h-screen inset-0 w-full flex justify-center items-center password text-gray-700'>
          <div className='rounded-lg p-6 bg-white  w-80 '>
            <h5>Do you know the password</h5>
            <form
              className='pt-4'
              onSubmit={(e) => {
                e.preventDefault();
                handleClick(value);
              }}>
              <input
                type='password'
                name='passowrd'
                id='password'
                className='border-b-2 w-full py-2 outline-0 rounded-none'
                placeholder='Enter password'
                onChange={(e) => {
                  const { value } = e.target;
                  setValue(value);
                }}
              />
              <div className='child:px-4 child:py-2 w-full flex justify-end mt-5 child:border child:rounded-md'>
                <button
                  className='text-gray-700 mr-2'
                  type='button'
                  onClick={() => handleClick('')}>
                  No
                </button>
                <button className='text-green-600' type='submit'>
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

