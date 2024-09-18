import { Meta } from "@storybook/react"
import {
  ScaleUpCloseButton,
  ScaleUpContent,
  ScaleUpFooter,
  ScaleUpForm,
  ScaleUpHeader,
  ScaleUpLabel,
  ScaleUpRoot,
  ScaleUpSubmitButton,
  ScaleUpTextarea,
  ScaleUpTrigger,
} from "@layout/ScaleUp"
import { DefaultText } from "@/components/presets/className"
import { cn } from "@/components/twm"

const meta: Meta = {
  title: "Components/Layout/ScaleUp",
  tags: ["autodocs"],
  component: ScaleUpRoot,
}


export default meta

export function ScaleUpExample1() {
  const handleSubmit = (note: string) => {
    console.log('Submitted note:', note)
  }
  return (
    <div className="p-8">
      <h1 className={cn(DefaultText,"mb-4 text-2xl font-bold")}>ScaleUp</h1>
      <ScaleUpRoot>
        <ScaleUpTrigger>Open</ScaleUpTrigger>
        <ScaleUpContent header="Submit a Note">
          <ScaleUpForm onSubmit={handleSubmit}>
            <ScaleUpLabel>Text:</ScaleUpLabel>
            <ScaleUpTextarea/>
            <ScaleUpFooter>
              <ScaleUpCloseButton />
              <ScaleUpSubmitButton />
            </ScaleUpFooter>
          </ScaleUpForm>
        </ScaleUpContent>
      </ScaleUpRoot>
    </div>
  )
}
import * as Toggle from "@ui/Toggle"
import { Tooltip } from "@layout/Tooltip"
import React from "react"
import { Toaster } from "@/components/ui/Toast"
import { toast } from "sonner"

function ScaleUpExample2Pre() {
  const handleSubmit = (note: string) => {
    console.log('Submitted Review:', note, 'Rating: ', value)
    toast.info('Submitted Review: ' + note + ' Rating: ' + value)
  }
  const [value, setValue] = React.useState('3')
  return (
    <>
    <Toaster />
    <ScaleUpRoot>
      <ScaleUpTrigger>❤</ScaleUpTrigger>
      <ScaleUpContent header="Review?">
        <ScaleUpForm onSubmit={handleSubmit}>
          <Toggle.Group 
            type="single" 
            value={value} 
            onValueChange={(value: React.SetStateAction<string>) => {
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
              <ScaleUpTextarea/>
            }
          >
            Do you want to Tell us more?
          </Tooltip>
          <ScaleUpFooter>
            <ScaleUpCloseButton />
            <ScaleUpSubmitButton />
          </ScaleUpFooter>
        </ScaleUpForm>
      </ScaleUpContent>
  </ScaleUpRoot>
  </>
  )
}

export function ScaleUpExample2() {
  return <ScaleUpExample2Pre />
}