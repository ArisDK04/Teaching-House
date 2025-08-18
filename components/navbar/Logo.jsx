'use client';

import Link from 'next/link';

import THLogo from '#/public/th-logo.svg';
import classes from './logo.module.css';

export default function Logo() {
  const th = 'Teaching House';

  return (
    <Link href='/' className={classes.link}>
      <div className='avatar'>
        <THLogo className={classes.logo} aria-label={th} />
      </div>
      <span>{th}</span>
    </Link>
  );
}