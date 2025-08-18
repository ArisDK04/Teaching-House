'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '#/store/actions/ui';
import classes from './nav.module.css';

import Logo from './Logo';

export default function Navbar() {
  const { themes } = useSelector((selector) => selector.ui);
  const dispatch = useDispatch();

  const options = Object.keys(themes.options);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved && saved in themes.options) {
      dispatch(setTheme(saved));
    } else {
      dispatch(setTheme(options[2]));
    }
  }, []);

  const changeTheme = ({ target }) => {
    dispatch(setTheme(target.value));
  };

  return (
    <nav className={classes.navigation}>
      <div className={classes.container}>
        <Logo />

        <ul className={classes.links}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/courses'>Courses</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>

        {/* <select
          value={themes.selection}
          className={'select select-ghost'}
          onChange={changeTheme}
        >
          {options.map((theme) => (
            <option
              key={theme}
              value={theme}
            >
              {themes.options[theme]}
            </option>
          ))}
        </select> */}
      </div>
    </nav>
  );
}
