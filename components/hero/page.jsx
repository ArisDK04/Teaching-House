'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='section bg-base-100'>
      <div className='container-page grid items-center gap-10 md:grid-cols-2'>
        {/* Copy */}
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='chip'>Speak with confidence</span>
            <span className='chip'>IELTS · TOEFL · Business</span>
          </div>

          <h1
            className='text-4xl md:text-5xl font-extrabold leading-tight text-base-content'
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Master English. Unlock the world.
          </h1>

          <p className='text-base md:text-lg text-base-content/80 prose-max'>
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

          {/* Social proof / stats */}
          <ul className='mt-4 grid grid-cols-3 gap-4 text-center'>
            <li className='p-4 rounded-xl shadow-soft bg-base-100 border border-base-300'>
              <div className='text-2xl font-bold text-primary'>10k+</div>
              <div className='text-xs opacity-70'>Lessons taught</div>
            </li>
            <li className='p-4 rounded-xl shadow-soft bg-base-100 border border-base-300'>
              <div className='text-2xl font-bold text-primary'>98%</div>
              <div className='text-xs opacity-70'>Exam success</div>
            </li>
            <li className='p-4 rounded-xl shadow-soft bg-base-100 border border-base-300'>
              <div className='text-2xl font-bold text-primary'>4.9★</div>
              <div className='text-xs opacity-70'>Student rating</div>
            </li>
          </ul>
        </div>

        {/* Visual */}
        <div className='relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-soft border border-base-300'>
          {/* Replace with your own image */}
          <Image
            src='https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop'
            alt='Students learning English together'
            fill
            className='object-cover'
            priority
          />
          {/* Floating badge */}
          <div className='absolute bottom-4 left-4 bg-base-100/90 backdrop-blur rounded-2xl px-4 py-2 border border-base-300 shadow-soft'>
            <span className='text-sm'>
              Next class: <strong className='text-primary'>Monday 6pm</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
