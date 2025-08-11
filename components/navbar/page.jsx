'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '#/store/actions/ui';
import classes from './nav.module.css';


export default function Navbar() {
  const { themes } = useSelector((selector) => selector.ui);
  const dispatch = useDispatch();

  const options = Object.keys(themes.options);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved && saved in themes.options) {
      dispatch(setTheme(saved));
    } else {
      dispatch(setTheme(options[0]));
    }
  }, []);

  const changeTheme = ({ target }) => {
    dispatch(setTheme(target.value));
  };

  return (
    <nav className={classes.navigation}>
      <div className='container-page flex justify-between items-center'>
        {/* Logo / Brand */}
        <Link href='/' className='flex items-center gap-2 font-heading text-xl text-primary'>
          <span>English School</span>
        </Link>

        {/* Navigation Links */}
        <ul className='menu menu-horizontal gap-2 hidden md:flex'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/courses'>Courses</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>

        {/* Theme Switcher */}
        <select
          className='select select-sm select-bordered ml-4'
          value={themes.selection}
          onChange={changeTheme}
        >
          {options.map((t) => (
            <option key={t} value={t}>
              {t.replace('--th-', '').replace('-', ' ')}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
