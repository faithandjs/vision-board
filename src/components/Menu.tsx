import React, { useRef, useState } from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { Menu } from '@mantine/core';
import {
  Setting2,
  Profile,
  Edit2,
  LogoutCurve,
  HambergerMenu,
  LoginCurve,
} from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

import { useThemeCtx } from '../context/themeCtx';
import { useToggleCtx } from '../context/ToggleCtx';
import { useAuthCtx } from '../context/AuthCtx';
import { test } from '../data/data';

export default function MenuView() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser, setBoard } = useAuthCtx();
  const { setTheme, theme } = useThemeCtx();
  const { states, setting } = useToggleCtx();

  const [opened, setOpened] = useState(true);
  const VB_toggle = useRef<HTMLInputElement>(null);

  const redirect = (path: string) => {
    if (currentUser) {
      navigate(`/${path}`);
    } else {
      //toast login first
      navigate('/auth/login');
    }
  };

  return (
    <div className='pr-10 pb-6'>
      {/* <span
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
      </span> */}

      {/* ======= */}
      <Menu
        shadow='md'
        width={150}
        // transition='slide-up'
        transitionProps={{ transition: 'slide-up', duration: 150 }}
        position='bottom'
        styles={{
          dropdown: {
            // backgroundColor: theme === 'dark' ? '#5e7583' : 'white',
            border: 0,
          },
          item: {
            // color: theme === 'dark' ? 'white' : '#1d1d1d',
            '&:last-child': {
              // color: currentUser ? 'red' : 'pink',
            },
          },
        }}>
        <Menu.Target>
          <div className='hover:cursor-pointer'>
            <HambergerMenu size='32' className='' />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={<Edit2 size='12' variant='Outline' />}
            onClick={() => {
              redirect('edit-board');
            }}>
            Edit Board
          </Menu.Item>

          <Menu.Item
            icon={<Setting2 size='12' variant='Outline' />}
            onClick={() => {
              redirect('settings');
            }}>
            Settings
          </Menu.Item>
          <Menu.Item
            color={currentUser ? 'red' : 'pink'}
            icon={
              currentUser ? (
                <LogoutCurve size='12' variant='Outline' />
              ) : (
                <LoginCurve size='12' variant='Outline' />
              )
            }
            onClick={() => {
              if (currentUser) {
                signOut(auth)
                  .then(() => {
                    navigate('/');
                    setBoard(test);
                  })
                  .catch((error) => {
                    console.log('sign out failed', error);
                  });
              } else {
                navigate('/auth/login');
              }
            }}>
            {currentUser ? 'Logout' : 'Login/Sign up'}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

