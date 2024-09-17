import { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "@/components/ui/ColourPicker";

const meta: Meta = {
    title: "Components/UI/ColourPicker",
    tags: ['autodocs'],
};

export default meta;

export const ColourPicker = () => {
    return <ColorPicker color="#000000" onChange={console.log} />
}