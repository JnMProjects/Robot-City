/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Avatar } from '@ui/Avatar';
import { ThemeToggleButton } from '@components/Theme';
import WelcomeUser from '@pre/functions/welcomeUser';
import { DefaultText, DefaultWrapper } from '@/components/presets/className';

export default function Home() {
  WelcomeUser()
  return (
    <main className={DefaultWrapper} >
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex py-2'><h1>Hello, This Website is Currently under Construction!</h1></div>
        <div className='flex flex-row'>
          <p className={DefaultText}>By</p>
          <Avatar username="jackatdjl" placeholder={false} size={120} />
        </div>
        <div className='flex items-center justify-center'>
          <img src='/brand/LogoOnBluev0.1.svg' />
        </div>
      </section>
      <section className='absolute bottom-1 left-2'>
        <ThemeToggleButton />
      </section>
    </main>
  )
}