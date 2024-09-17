import { Meta, StoryObj } from "@storybook/react";
import { Custom, SpringNumbers } from "@ui/SpringNumbers";

const meta: Meta = {
    title: "Components/UI/SpringNumbers",
    component: Custom,
    argTypes: {
        value: {
            name: "Value",
            defaultValue: 100,
            description: "The value to display",
            control: {
                type: "number",
            },
        },
        mass: {
            name: "Mass",
            defaultValue: 1.3,
            description: "The mass of the spring",
            control: {
                type: "number",
            },
        },
        stiffness: {
            name: "Stiffness",
            defaultValue: 50,
            description: "The stiffness of the spring",
            control: {
                type: "number",
            },
        },
        damping: {
            name: "Damping",
            defaultValue: 15,
            description: "The damping of the spring",
            control: {
                type: "number",
            },
        },
        precision: {
            name: "Precision",
            defaultValue: 0,
            description: "The precision of the value",
            control: {
                type: "number",
            },
        }
    }
}

export default meta;

export const Preset = () => {
    return (
        <SpringNumbers value={100} />
    )
};

type Story = StoryObj<typeof Custom>;

export const Default: Story = {
    args: {
        value: 100,
        mass: 1.3,
        stiffness: 50,
        damping: 15,
        precision: 0,
    },
};