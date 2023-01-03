import React, { useEffect, useState } from 'react';

import Vision from '../../components/Vision';
import Toggle from '../../components/Toggle';
import { details, details2 } from '../../data';

import '../../styles/global.scss';
import '../../styles/theme.scss';

import { useToggleCtx } from '../../context/ToggleCtx';
import { useUserCtx } from '../../context/UserCtx';
import Password from '../../components/Password';

export default function Home() {
  const ls_password = process.env.REACT_APP_PASSWORD;
  const setPassword = localStorage.getItem('vision-board-auth-seen')
    ? JSON.parse(localStorage.getItem('vision-board-auth-seen')!)
    : false;
  const { states } = useToggleCtx();
  const authstates = useUserCtx();
  const [active, setActive] = useState(-1);
  const [me, setMe] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(!setPassword);

  const { password } = authstates;
  const { vision_board } = states;

  const holder = me ? details : details2;
  const { data, theme } = holder;

  useEffect(() => {
    if (vision_board) {
      window.scrollTo(0, 0);
      document.body.classList.add('vision-body');
    } else {
      document.body.classList.remove('vision-body');
    }
  }, [vision_board]);

  useEffect(() => {
    console.log(ls_password, password, me, authstates);
    setMe(ls_password === password);
  }, [password]);

  return (
    <>
      {!modal ? (
        <div
          className={
            'md:px-6 py-10  ' +
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
            <h1 className={'font-deraga font-thin  text-5xl '}>My 2023</h1>
            <p className={'font-alexander font-medium text-xl pb-4  '}>
              {theme}
            </p>
          </div>
          {/* cards */}
          {data && (
            <div className='cards flex justify-center child:shrink-0 flex-wrap  transition-all duration-700'>
              {data.map((item: any, key: number) => {
                return (
                  <Vision
                    {...{ ...item, active, setActive }}
                    key={key}
                    id={key}
                  />
                );
              })}
            </div>
          )}

          {/* grid */}
          {data && (
            <div className='grid transition-all duration-700 absolute inset-0 w-full h-screen  brightness-75'>
              {data.map((item: any, key: number) => {
                return (
                  <div
                    className={`grid-item${key + 1}`}
                    style={{ backgroundImage: `url(${item.image.src})` }}></div>
                );
              })}
            </div>
          )}
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
      ) : (
        <></>
      )}
      <Password {...{ modal, setModal }} />
    </>
  );
}

