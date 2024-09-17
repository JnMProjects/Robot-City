import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@ui/Label";

const meta: Meta = {
    title: "Components/UI/Label",
    component: Label,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Label>;

export const Preset: Story = {
    args: {
        children: "Label",
    },
}
