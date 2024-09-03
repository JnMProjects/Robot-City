"use client"

import { Popup } from '@layout/.';
import * as Card from '@layout/Card';
import { Button } from '@ui/index';
import { toast } from 'sonner';
import * as feather from 'react-feather';
import { ThemeToggleButton } from '@components/Theme';
import WelcomeUser from '@pre/functions/welcomeUser';
import { DefaultWrapper } from '@/components/presets/className';

export default function Home() {
  WelcomeUser()
  return (
    <main className={DefaultWrapper} >
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
        <Popup trigger="Press Me">
          <Card.Wrapper>
            <Card.Content className='items-center justify-center'>
              <Button variant='secondary' onClick={() => {
                toast('Toasted! 🍞');
              }}>
                <feather.Code />
                <span>Toast</span>
              </Button>
            </Card.Content>
          </Card.Wrapper>
        </Popup>
      </section>
      <section className='absolute bottom-1 left-2'>
        <ThemeToggleButton />
      </section>
    </main>
  )
}