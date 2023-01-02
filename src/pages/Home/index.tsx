import React, { useEffect } from 'react';

import Vision from '../../components/Vision';
import Toggle from '../../components/Toggle';
import { data } from '../../data';

import '../../styles/global.scss';
import '../../styles/theme.scss';

import { useToggleCtx } from '../../context/ToggleCtx';

export default function Home() {
  const { states } = useToggleCtx();
  const { vision_board, flip_all } = states;

  useEffect(() => {
    if (vision_board) {
      document.body.classList.add('vision-body');
    } else {
      document.body.classList.remove('vision-body');
    }
  }, [states]);

  return (
    <div
      className={
        'md:p-10  ' +
        (states.vision_board
          ? 'vision-board '
          : 'not-vision-board border-8 border-[#2f2f2f] border-double ')
      }>
      <div
        className={
          'z-20 relative  transition-all duration-700 py-4  flex w-full flex-col text-center ' +
          (states.vision_board
            ? 'text-white   absolute inset-0 translate-y-[40vh]'
            : '  delay-150 ')
        }>
        <h1 className={'font-header font-thin  text-5xl '}>My 2023</h1>
        <p className={'font-Alexander font-medium text-xl pb-4  '}>
          pretty intellectual with a big bunda
        </p>
      </div>
      {/* cards */}
      <div className='cards flex justify-center child:shrink-0 flex-wrap  transition-all duration-700'>
        {data.map((item, key) => {
          return <Vision {...item} key={key} id={key} />;
        })}
      </div>

      {/* grid */}
      <div className='grid transition-all duration-700 absolute inset-0 w-full h-screen  brightness-75'>
        {data.map((item, key) => {
          return (
            <div
              className={`grid-item${key + 1}`}
              style={{ backgroundImage: `url(${item.image.src})` }}></div>
          );
        })}
      </div>
      <div className='fixed bottom-0 left-0 w-full flex justify-between px-5 pb-4 z-20'>
        <Toggle
          label='vision board'
          position='bottom'
          checked={states.vision_board}
        />
        <Toggle
          label='flip all'
          position='top'
          checked={states.flip_all}
          disabled={states.vision_board}
          className={states.vision_board ? 'opacity-0' : 'opacity-100'}
        />
      </div>
    </div>
  );
}

