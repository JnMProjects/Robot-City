import { Meta } from "@storybook/react"
import {
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelForm,
  FloatingPanelHeader,
  FloatingPanelLabel,
  FloatingPanelRoot,
  FloatingPanelSubmitButton,
  FloatingPanelTextarea,
  FloatingPanelTrigger,
} from "@layout/FloatingPanel"
import { DefaultText } from "@/components/presets/className"
import { cn } from "@/components/twm"

const meta: Meta = {
  title: "Components/Layout/FloatingPanel",
  tags: ["autodocs"],
  component: FloatingPanelRoot,
}


export default meta

export function FloatingPanelExample1() {
  const handleSubmit = (note: string) => {
    console.log('Submitted note:', note)
  }
  return (
    <div className="p-8">
      <h1 className={cn(DefaultText,"mb-4 text-2xl font-bold")}>FloatingPanel</h1>
      <FloatingPanelRoot>
        <FloatingPanelTrigger title="Submit a Note">Open</FloatingPanelTrigger>
        <FloatingPanelContent>
          <FloatingPanelForm onSubmit={handleSubmit}>
            <FloatingPanelLabel htmlFor="note-input">Text:</FloatingPanelLabel>
            <FloatingPanelTextarea id="note-input" />
            <FloatingPanelFooter>
              <FloatingPanelCloseButton />
              <FloatingPanelSubmitButton />
            </FloatingPanelFooter>
          </FloatingPanelForm>
        </FloatingPanelContent>
      </FloatingPanelRoot>
    </div>
  )
}
import * as Toggle from "@ui/Toggle"
import { Tooltip } from "@layout/Tooltip"
import React from "react"
import { Toaster } from "@/components/ui/Toast"
import { toast } from "sonner"

function FloatingPanelExample2Pre() {
  const handleSubmit = (note: string) => {
    console.log('Submitted Review:', note, 'Rating: ', value)
    toast.info('Submitted Review: ' + note + ' Rating: ' + value)
  }
  const [value, setValue] = React.useState('3')
  return (
    <>
    <Toaster />
    <FloatingPanelRoot>
      <FloatingPanelTrigger title="Review?">❤</FloatingPanelTrigger>
      <FloatingPanelContent>
        <FloatingPanelForm onSubmit={handleSubmit}>
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

export function FloatingPanelExample2() {
  return (
    <div className="p-8">
      <FloatingPanelExample2Pre />
    </div>
  )
}