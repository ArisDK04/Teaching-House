'use client';

import Image from 'next/image';
import Link from 'next/link';

import classes from './hero.module.css';

classes.info = [
  'container-page',
  'grid',
  'items-center',
  'gap-10',
  'md:grid-cols-2'
].join(' ');

export default function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.info}>
        {/* Copy */}
        <div className='space-y-6'>
          <div className={classes.tags}>
            <span className='chip'>Speak with confidence</span>
            <span className='chip'>IELTS · TOEFL · Business</span>
          </div>

          <h1 className={classes.title}>
            Master English. Unlock the world.
          </h1>

          <p className={classes.text}>
            Courses for all levels, live conversation clubs, and personalized
            feedback from certified teachers—online or in-person.
          </p>

          <div className='flex flex-col sm:flex-row gap-3'>
            <Link href='/trial' className='btn btn-primary btn-cta'>
              Book a free trial
            </Link>
            <Link href='/level-test' className='btn btn-outline'>
              Take a 2-minute level test
            </Link>
          </div>

          <ul className={classes.proof}>
            <li className={classes.item}>
              <div className={classes.itemtop}>10k+</div>
              <div className={classes.itembot}>Lessons taught</div>
            </li>
            <li className={classes.item}>
              <div className={classes.itemtop}>98%</div>
              <div className={classes.itembot}>Exam success</div>
            </li>
            <li className={classes.item}>
              <div className={classes.itemtop}>4.9★</div>
              <div className={classes.itembot}>Student rating</div>
            </li>
          </ul>
        </div>

        {/* Visual */}
        <div className={classes.image}>
          {/* Replace with your own image */}
          <Image
            src='/hero.png'
            alt='Students learning English together'
            fill
            className='object-cover'
            priority
          />
          {/* Floating badge */}
          <div className={classes.badge}>
            <span className='text-sm'>
              Book now: <strong className='text-primary'>From 1pm to 9pm</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
