import { Meta } from "@storybook/react";
import * as Inputs from "@ui/Inputs"

const meta: Meta = {
    title: "Components/UI/Inputs",
}


export default meta;

export const Textarea = () => {
    return <Inputs.Textarea placeholder="Textarea Placeholder" />
}

export const Input = () => {
    return <Inputs.Default placeholder="Input Placeholder"/>
}

export const PasswordInput = () => {
    return <Inputs.Password placeholder="PasswordInput Placeholder"/>
}

export const OneTimePasswordInput = () => {
    return (
        <form>
            <Inputs.OTPWrapper maxLength={6} >
                <Inputs.OTPGroup>
                    <Inputs.OTPSlot index={1} />
                    <Inputs.OTPSlot index={2} />
                    <Inputs.OTPSlot index={3} />
                </Inputs.OTPGroup>
                <Inputs.OTPSeperator />
                <Inputs.OTPGroup>
                    <Inputs.OTPSlot index={4} />
                    <Inputs.OTPSlot index={5} />
                    <Inputs.OTPSlot index={6} />
                </Inputs.OTPGroup>
            </Inputs.OTPWrapper>
        </form>
    )
}

export const OTPUsedAsPinInput = () => {
    return (
        <form>
            <Inputs.OTPWrapper maxLength={8} >
                <Inputs.OTPGroup>
                    <Inputs.OTPSlot index={1} />
                    <Inputs.OTPSlot index={2} />
                    <Inputs.OTPSlot index={3} />
                    <Inputs.OTPSlot index={4} />
                    <Inputs.OTPSlot index={5} />
                    <Inputs.OTPSlot index={6} />
                    <Inputs.OTPSlot index={7} />
                    <Inputs.OTPSlot index={8} />
                </Inputs.OTPGroup>
            </Inputs.OTPWrapper>
        </form>
    )
}