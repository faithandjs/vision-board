import React, { useEffect, useState } from 'react';

export default function Password({
  setMe,
  me,
  modal,
  setModal,
}: {
  setMe: React.Dispatch<React.SetStateAction<boolean>>;
  me: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) {
  const [yes, setyes] = useState(false);
  const password = process.env.REACT_APP_PASSWORD;
  useEffect(() => {
    localStorage.setItem('my-vision-board?', JSON.stringify(me));
  }, [me]);

  return (
    <>
      {' '}
      {modal ? (
        <div className='absolute h-screen inset-0 w-full flex justify-center items-center password text-gray-700'>
          <div className='rounded-lg p-6 bg-white  w-80 '>
            <h5>Do you know the password</h5>
            <form
              className='pt-4'
              onSubmit={(e) => {
                e.preventDefault();
                if (yes) setMe(true);
                else setMe(false);

                setModal(false);
              }}>
              <input
                type='password'
                name='passowrd'
                id='password'
                className='border-b-2 w-full py-2 outline-0 border-0'
                placeholder='Enter password'
                onChange={(e) => {
                  const { value } = e.target;
                  console.log(value, password, yes, value === password);
                  if (value === password) setyes(true);
                  else setyes(false);
                }}
              />
              <div className='child:px-4 child:py-2 w-full flex justify-end mt-5 child:border child:rounded-md'>
                <button
                  className='text-gray-700 mr-2'
                  type='button'
                  onClick={() => {
                    setModal(false);
                    setMe(false);
                  }}>
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

