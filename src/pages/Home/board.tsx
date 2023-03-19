import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Form, Formik } from 'formik';

import Toggle from '../../components/Toggle';
import { Menu } from '../../components';

import '../../styles/global.scss';
import '../../styles/grid.scss';
import '../../styles/theme.scss';
import '../../styles/vision-board.scss';

import { useToggleCtx } from '../../context/ToggleCtx';
import { useAuthCtx } from '../../context/AuthCtx';
import Card from '../../components/card';

export default function Board() {
  const { states } = useToggleCtx();
  const { board } = useAuthCtx();
  const [active, setActive] = useState(-1);
  const { vision_board } = states;
  // console.log(board.data);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (vision_board) {
      document.body.classList.add('vision-body');
    } else {
      document.body.classList.remove('vision-body');
    }
  }, [vision_board]);

  return (
    <>
      <div
        className={
          'md:px-6 py-10  ' +
          (states.vision_board
            ? 'vision-board '
            : 'not-vision-board border-8 border-[#2f2f2f] border-double ')
        }>
        <div className='flex items-center'>
          <div
            className={
              'z-20 relative  transition-[transform] duration-700 py-4  flex w-full flex-col text-center ' +
              (states.vision_board
                ? 'text-white   absolute inset-0 translate-y-[40vh]'
                : '  delay-150 ')
            }>
            <h1 className={'font-deraga font-thin  text-5xl '}>
              {board.title}
            </h1>
            <p className={'font-alexander font-medium text-xl pb-4  '}>
              {board.theme}
            </p>
          </div>
          <Menu />
        </div>

        {/* cards */}
        <Formik
          initialValues={{ data: board.data }}
          onSubmit={() => {}}
          enableReinitialize>
          {({ values, setFieldValue, handleChange }) => {
            return (
              <Form>
                <div className='cards flex justify-center child:shrink-0 flex-wrap  transition-[transform] duration-700'>
                  {values.data.map((item, key) => {
                    // console.log(item);
                    return item ? (
                      <Card
                        {...{
                          active,
                          setActive,
                          ...item,
                          setFieldValue,
                          handleChange,
                          values,
                        }}
                        key={key}
                        id={key}
                      />
                    ) : (
                      <></>
                    );
                  })}
                </div>
              </Form>
            );
          }}
        </Formik>
        {/* grid */}
        <div
          className={
            'grid transition-[transform] duration-700 absolute inset-0 w-full h-screen  brightness-75 grid-' +
            board.data.length
          }>
          {board.data.map((item: any, key: number) => {
            return item ? (
              <div
                key={key}
                className={`grid-item${key + 1}`}
                style={{ backgroundImage: `url(${item.image.src})` }}></div>
            ) : (
              <></>
            );
          })}
        </div>

        <Outlet />
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
    </>
  );
}

