import { Meta } from "@storybook/react";
import * as Inputs from "@/components/ui/Sliders"
import { JSX, RefAttributes } from "react";
import { SliderProps } from "@radix-ui/react-slider";

const def: Meta = {
    title: "Components/UI/Sliders",
    component: Inputs.Default,
}

const gauge: Meta = {
    title: "Components/UI/Sliders",
    component: Inputs.Gauge,
    argTypes: {
        max: {
            name: "Maximum Value - BOOTH",
            control: {
                type: "number"
            }
        },
        disabled: {
            name: "Disabled - BOOTH",
            control: {
                type: "boolean"
            }
        },
        min: {
            name: "Minimum Value - GAUGE",
            control: {
                type: "number"
            }
        },
        value: {
            name: "Current Value - GAUGE",
            control: {
                type: "number"
            }
        },
        defaultValue: {
            name: "Default Value - SLIDER",
        },
        step: {
            name: "Step - SLIDER",
            control: {
                type: "number"
            }
        },
    }
}


export default gauge;

export const Default = () => {
    return <Inputs.Default defaultValue={[50]} max={100} step={1}/>
}

export const GaugeCircle = (args: JSX.IntrinsicAttributes & { max?: number; min?: number; value?: number; className?: string; }) => {
    return <Inputs.Gauge {...args}/>
}
GaugeCircle.args = {
    max: 100,
    min: 0,
    value: 50
}