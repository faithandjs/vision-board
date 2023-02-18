import React, { useRef } from 'react';
import { RiUserSmileFill } from 'react-icons/ri';
import { CgCardSpades } from 'react-icons/cg';
import { HiOutlineViewBoards } from 'react-icons/hi';
import {
  MdDashboard,
  MdFlipCameraAndroid,
  MdOutlineFlip,
} from 'react-icons/md';
import { FaChessBoard } from 'react-icons/fa';
import { useThemeCtx } from '../context/themeCtx';
import { useToggleCtx } from '../context/ToggleCtx';
import { Sun1, Menu, Moon } from 'iconsax-react';

export default function MenuView() {
  const { setTheme, theme } = useThemeCtx();
  const { states, setting } = useToggleCtx();
  const VB_toggle = useRef<HTMLInputElement>(null);
  return (
    <div className='fixed right-3 bottom-[10vh] bg-gray-600 menu'>
      <div>
        <Menu size='32' color='#FF8A65' variant='Bulk' />
      </div>
      <span
        onClick={() => VB_toggle.current?.click()}
        className='hover:cursor-pointer relative'>
        <span>
          <input
            type='checkbox'
            className='w-full h-full absolute inset-0 opacity-0'
            id={'vision_board'}
            ref={VB_toggle}
            checked={states.vision_board}
            onClick={() => {
              // console.log(e.target.checked);
              // const { checked } = e.target;
              setting({ ['vision_board']: !states.vision_board });
            }}
          />
          {states.vision_board ? <MdDashboard /> : <FaChessBoard />}
        </span>
      </span>
      <span
        className='hover:cursor-pointer'
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }>
        {theme === 'dark' ? (
          <Sun1 size='24' color='#ffff00' variant='Bold' />
        ) : (
          <Moon size='24' color='#d9e3f0' variant='Bold' />
        )}
      </span>
      {/* <Bubble size='24' color='#37d67a' variant='Bold' /> */}
    </div>
  );
}

// RiUserSmileFill; //user
// CgCardSpades;
// HiOutlineViewBoards;
// MdDashboard; //cards
// FaChessBoard; //board
// MdFlipCameraAndroid; //flip

