/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Avatar } from '@ui/Avatar';
import { ThemeToggleButton } from '@components/Theme';
import WelcomeUser from '@pre/functions/welcomeUser';
import { DefaultText, DefaultWrapper } from '@/components/presets/className';
import { Feather } from 'react-feather';
import { FloatingPanelRoot, FloatingPanelTrigger, FloatingPanelContent, FloatingPanelForm, FloatingPanelLabel, FloatingPanelTextarea, FloatingPanelFooter, FloatingPanelCloseButton, FloatingPanelSubmitButton } from '@/components/layout/FloatingPanel';
import { Icon } from '@/components/ui';
import { ScaleUpCloseButton, ScaleUpContent, ScaleUpFooter, ScaleUpForm, ScaleUpRoot, ScaleUpSubmitButton, ScaleUpTextarea, ScaleUpTrigger } from '@/components/layout/ScaleUp';
import { Tooltip } from '@/components/layout';
import * as Toggle from '@/components/ui/Toggle';
import React from 'react';
import { toast, Toaster } from 'sonner';

export default function Home() {
  WelcomeUser()
  const handleSubmit = (note: string) => {
    console.log('Submitted note:', note)
  }
  return (
    <main className={DefaultWrapper} >
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex py-2'><h1>Hello, This Website is Currently under Construction!</h1></div>
        <div className='flex flex-row'>
          <p className={DefaultText}>By</p>
          <p className={DefaultText}>Jack@DJL</p>
        </div>
        <div className='flex items-center justify-center'>
          <FloatingPanelExample2Pre />
        </div>
      </section>
      <section className='absolute bottom-1 left-2'>
        <ThemeToggleButton />
      </section>
    </main>
  )
}

function FloatingPanelExample2Pre() {
  const handleSubmit = (note: string) => {
    console.log('Submitted Review:', note, 'Rating: ', value)
    toast.info('Submitted Review: ' + note + ' Rating: ' + value)
  }
  const [value, setValue] = React.useState('3')
  return (
    <>
    <FloatingPanelRoot>
      <FloatingPanelTrigger title="Review?">❤</FloatingPanelTrigger>
      <FloatingPanelContent>
        <FloatingPanelForm onSubmit={handleSubmit}>
          <Toggle.Group 
            type="single" 
            value={value} 
            onValueChange={(value) => {
              if (value) setValue(value);
            }}>
            <Toggle.Item value="5">❤</Toggle.Item>
            <Toggle.Item value="4">👍</Toggle.Item>
            <Toggle.Item value="3">😐</Toggle.Item>
            <Toggle.Item value="2">👎</Toggle.Item>
            <Toggle.Item value="1">💔</Toggle.Item>
          </Toggle.Group>
          <Tooltip
            align="center"
            side="bottom"
            tips={
              <FloatingPanelTextarea id="more-input"/>
            }
          >
            Do you want to Tell us more?
          </Tooltip>
          <FloatingPanelFooter>
            <FloatingPanelCloseButton />
            <FloatingPanelSubmitButton />
          </FloatingPanelFooter>
        </FloatingPanelForm>
      </FloatingPanelContent>
  </FloatingPanelRoot>
  </>
  )
}