import React, { useEffect, useRef, useState } from 'react';
import { useToggleCtx } from '../context/ToggleCtx';

export default function Vision({
  title,
  image,
  details,
  previewText,
  id,
  bonus,
}: visionProps) {
  const { states, setting } = useToggleCtx();
  const [active, setActive] = useState(-1);

  const colorsPallettePallette = [
    ['#ccdbfd', ' #edf2fb'],
    [' #ffb3c6', '#ffe5ec'],
    [' #eaf2d7 ', '#fff'],
    ['#f2ded7', '#f8f3ef'],
  ];
  const color = useRef(Math.floor(Math.random() * 4));

  return (
    <div
      className={
        'flip-card m-5 hover:cursor-pointer ' +
        (active === id ? ' active ' : ' ') +
        (states.flip_all ? ' active ' : ' ')
      }
      onClick={() => {
        setActive((p) => (p === id ? -1 : id));
        // states.flip_all && setting({ flip_all: false });
      }}>
      <div className='child relative'>
        <div className='front relative  w-[300px] h-[500px] rounded-lg  overflow-hidden flex items-center justify-center '>
          <img
            src={image.src}
            alt={image.alt}
            className='absolute inset-0 w-full h-full object-cover object-bottom brightness-[.65] z-10'
          />
          <div className='backdrop-blur-[2px] bg-lightWhite w-[65%] max-h-[40%] text-[#ffffff] p-3 z-20'>
            <h3 className='font-bold text-base  font-visionhead  capitalize'>
              {' '}
              {title}
            </h3>
            <p className='py-3  font-preview'>{previewText}</p>
          </div>
        </div>
        <div
          className='back w-full h-full shadow-md absolute inset-0 z-[-1] '
          style={{
            background: `linear-gradient(120deg, ${
              colorsPallettePallette[color.current][1]
            } 0%, ${colorsPallettePallette[color.current][0]} 100%)`,
          }}>
          <div className='relative h-full '>
            <div className='border-b  backdrop-blur-2xl font-details '>
              <h3 className='font-bold text-xl  py-4 px-2 text-center '>
                {title}
              </h3>
            </div>
            <div
              className='py-4 px-4 overflow-y-scroll  h-full'
              style={{ height: 'calc(100% - 100px)' }}>
              <div className=' h-full font-details text-base r'>
                <div>
                  <p className=' px-6 pt-2 pb-3  font-semibold'>
                    "{previewText}"
                  </p>
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

