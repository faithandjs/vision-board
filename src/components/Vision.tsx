import React, { useState } from 'react';
import { useToggleCtx } from '../context/ToggleCtx';

export default function Vision({
  // title,
  image,
  details,
  title,
  id,
  bonus,
  active,
  setActive,
}: visionProps) {
  const { states } = useToggleCtx();
  const { flip_all, vision_board } = states;

  useState();
  return (
    <div
      className={
        'flip-card m-5 lg:m-7 hover:cursor-pointer ' +
        ((active === id || flip_all) && !vision_board ? ' active ' : ' ')
      }
      onClick={() => {
        !flip_all && setActive((p) => (p === id ? -1 : id));
        // states.flip_all && setting({ flip_all: false });
      }}>
      <div className='child relative'>
        <div className='front relative  md:w-[300px] md:h-[500px] sm:w-[200px] sm:h-[333px] w-[300px] h-[500px]  rounded-lg  overflow-hidden flex items-center justify-center '>
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
              className='py-4 px-4 overflow-y-scroll  h-full details'
              style={{ height: 'calc(100% - 100px)' }}>
              <div className=' h-full font-alexander text-base r'>
                <div>
                  {details}
                  {bonus && (
                    <p className='py-2'>
                      <span className='font-bold'>Bonus:</span>
                      {bonus}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

